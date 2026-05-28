import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

const FALLBACK = 'https://github.com/pedrotonidandel/abyss-releases/releases/latest'

interface ReleaseUrls {
  windows: string
  mac: string
  linux: string
  version: string | null
  loading: boolean
}

const ReleaseContext = createContext<ReleaseUrls>({
  windows: FALLBACK,
  mac: FALLBACK,
  linux: FALLBACK,
  version: null,
  loading: true,
})

interface Asset {
  name: string
  browser_download_url: string
}

interface GithubRelease {
  tag_name: string
  assets: Asset[]
}

export function ReleaseProvider({ children }: { children: ReactNode }) {
  const [urls, setUrls] = useState<ReleaseUrls>({
    windows: FALLBACK,
    mac:     FALLBACK,
    linux:   FALLBACK,
    version: null,
    loading: true,
  })

  useEffect(() => {
    fetch('https://api.github.com/repos/pedrotonidandel/abyss-releases/releases/latest', {
      headers: { Accept: 'application/vnd.github+json' },
    })
      .then((r) => r.json() as Promise<GithubRelease>)
      .then((data) => {
        const assets: Asset[] = data.assets ?? []
        const find = (ext: string) =>
          assets.find((a) => a.name.toLowerCase().endsWith(ext))?.browser_download_url ?? FALLBACK

        setUrls({
          windows: find('.exe'),
          mac:     find('.dmg'),
          linux:   find('.appimage'),
          version: data.tag_name?.replace(/^v/, '') ?? null,
          loading: false,
        })
      })
      .catch(() => {
        setUrls((prev) => ({ ...prev, loading: false }))
      })
  }, [])

  return <ReleaseContext.Provider value={urls}>{children}</ReleaseContext.Provider>
}

export function useRelease() {
  return useContext(ReleaseContext)
}

/** Returns the best download URL for the current visitor's OS. */
export function usePlatformUrl(): { url: string; label: string; ext: string } {
  const { windows, mac, linux } = useRelease()
  const ua = typeof navigator !== 'undefined' ? navigator.userAgent : ''
  if (ua.includes('Mac'))     return { url: mac,     label: 'macOS',   ext: '.dmg' }
  if (ua.includes('Linux') && !ua.includes('Android'))
                               return { url: linux,   label: 'Linux',   ext: '.AppImage' }
  return                              { url: windows, label: 'Windows', ext: '.exe' }
}
