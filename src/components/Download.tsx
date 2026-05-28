import { useRelease } from '../context/ReleaseContext'

const platforms: { label: string; ext: string; key: 'windows' | 'mac' | 'linux'; icon: React.ReactNode }[] = [
  {
    label: 'Windows',
    ext: '.exe',
    key: 'windows',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
      </svg>
    ),
  },
  {
    label: 'macOS',
    ext: '.dmg',
    key: 'mac' as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
    ),
  },
  {
    label: 'Linux',
    ext: '.AppImage',
    key: 'linux' as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.581 19.049c-.55-.446-.336-1.431-.907-1.917.553-3.365-.997-6.331-2.845-8.232C15.322 7.51 13.933 7 12.6 7c-.788 0-1.438.212-1.951.375-.603.19-.994.3-1.451.14-.33-.11-.558-.29-.743-.459a5.937 5.937 0 00-.336-.278C7.36 6.191 6.47 6 5.631 6c-1.08 0-2.437.39-3.518 1.772C.965 9.42.589 11.44.803 12.857c.221 1.421.737 2.367 1.265 3.148.525.769.956 1.362 1.276 1.822.297.48.411.847.411.965 0 .421-.167.7-.167 1.118 0 .399.175.724.575.724.375 0 .605-.3.605-.875v-.225c.063-.5.421-.773.836-.773.375 0 .7.25.7.75 0 .498-.325.874-.325 1.374 0 .576.4.876.776.876.55 0 .75-.45.75-.95v-.25c.113-.574.399-.724.8-.724.551 0 .851.424.851.999 0 .45-.225.724-.225 1.174 0 .476.3.701.65.701.525 0 .7-.575.85-1.025.175-.45.075-.975.35-1.4.25-.4.748-.525 1.148-.525.675 0 1.297.35 1.297.975 0 .25-.15.5-.15.75s.15.5.55.5c.338 0 .675-.237.875-.512l.1-.163c.3-.525.375-1.25.375-2.025 0-.775-.375-1.6-.375-2.5 0-.9.35-1.55.925-1.675h.025c.575.125.925.775.925 1.675 0 .9-.375 1.725-.375 2.5 0 .775.075 1.5.375 2.025l.1.163c.2.275.537.512.875.512.4 0 .55-.25.55-.5s-.15-.5-.15-.75c0-.625.622-.975 1.297-.975.4 0 .898.125 1.148.525.275.425.175.95.35 1.4.15.45.325 1.025.85 1.025.35 0 .65-.225.65-.701 0-.45-.225-.724-.225-1.174 0-.575.3-.999.851-.999.401 0 .687.15.8.724v.25c0 .5.2.95.75.95.376 0 .776-.3.776-.876 0-.5-.325-.876-.325-1.374 0-.5.325-.75.7-.75.415 0 .773.273.836.773v.225c0 .575.23.875.605.875.4 0 .575-.325.575-.724 0-.418-.167-.697-.167-1.118 0-.118.114-.485.411-.965.32-.46.751-1.053 1.276-1.822.528-.781 1.044-1.727 1.265-3.148.214-1.417-.162-3.437-1.31-5.085z" />
      </svg>
    ),
  },
]

export function Download({ id }: { id?: string }) {
  const release = useRelease()

  return (
    <section id={id} style={{ padding: '80px 24px', position: 'relative' }}>
      <div style={{
        maxWidth: '720px',
        margin: '0 auto',
        background: '#0d0d0d',
        border: '1px solid #1a1a1a',
        borderRadius: '24px',
        padding: '60px 40px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 0 80px rgba(0,180,255,0.08), 0 0 160px rgba(85,68,255,0.04)',
      }}>
        {/* Glow orb */}
        <div style={{
          position: 'absolute',
          top: '-60px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '400px',
          height: '200px',
          background: 'radial-gradient(ellipse, rgba(0,180,255,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-40px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '300px',
          height: '150px',
          background: 'radial-gradient(ellipse, rgba(85,68,255,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '7px',
            padding: '5px 14px',
            background: 'rgba(0,180,255,0.08)',
            border: '1px solid rgba(0,180,255,0.18)',
            borderRadius: '100px',
            fontSize: '12px',
            color: '#00b4ff',
            fontWeight: '600',
            marginBottom: '24px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}>
            Download
          </div>

          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: '800',
            color: '#e8e8e8',
            margin: '0 0 14px',
            letterSpacing: '-1px',
          }}>
            Pronto para começar?
          </h2>

          <p style={{
            fontSize: '16px',
            color: '#666',
            margin: '0 0 44px',
            lineHeight: '1.6',
          }}>
            Disponível para Windows, macOS e Linux. Grátis.
            {release.version && (
              <span style={{ marginLeft: 8, fontSize: 13, color: '#444', fontFamily: 'monospace' }}>
                v{release.version}
              </span>
            )}
          </p>

          {/* Download buttons */}
          <div style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '32px',
          }}>
            {platforms.map(({ label, ext, key, icon }) => (
              <a
                key={label}
                href={release[key]}
                style={{
                  display: 'inline-flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '18px 28px',
                  background: '#111',
                  border: '1px solid #1e1e1e',
                  borderRadius: '14px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  minWidth: '130px',
                  color: '#e8e8e8',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.borderColor = 'rgba(0,180,255,0.35)'
                  el.style.background = 'rgba(0,180,255,0.06)'
                  el.style.transform = 'translateY(-3px)'
                  el.style.boxShadow = '0 12px 40px rgba(0,0,0,0.4)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.borderColor = '#1e1e1e'
                  el.style.background = '#111'
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = 'none'
                }}
              >
                <div style={{ color: '#00b4ff' }}>{icon}</div>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: '700', marginBottom: '2px' }}>{label}</div>
                  <div style={{ fontSize: '12px', color: '#444', fontFamily: 'monospace' }}>{ext}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Note */}
          <p style={{
            fontSize: '13px',
            color: '#3a3a3a',
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            flexWrap: 'wrap',
          }}>
            <span>Código aberto</span>
            <span style={{ color: '#222' }}>·</span>
            <span>Sem assinatura</span>
            <span style={{ color: '#222' }}>·</span>
            <span>Sem rastreamento</span>
          </p>
        </div>
      </div>
    </section>
  )
}
