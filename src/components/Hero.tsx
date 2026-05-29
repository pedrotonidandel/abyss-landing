import { Globe, Download } from 'lucide-react'
import { usePlatformUrl, useRelease } from '../context/ReleaseContext'

export function Hero() {
  const platform = usePlatformUrl()
  const release = useRelease()

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '120px 24px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background blobs */}
      <div style={{
        position: 'absolute',
        top: '10%', left: '50%',
        transform: 'translateX(-50%)',
        width: '900px', height: '600px',
        background: 'radial-gradient(ellipse at center, rgba(0,180,255,0.07) 0%, rgba(0,180,255,0.02) 40%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        top: '5%', right: '10%',
        width: '700px', height: '500px',
        background: 'radial-gradient(ellipse at center, rgba(212,184,72,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%', left: '5%',
        width: '600px', height: '400px',
        background: 'radial-gradient(ellipse at center, rgba(80,0,255,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Version badge */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: '7px',
        padding: '6px 16px',
        background: 'rgba(0,180,255,0.08)',
        border: '1px solid rgba(0,180,255,0.22)',
        borderRadius: '100px',
        fontSize: '13px', color: 'var(--accent)', fontWeight: '500',
        marginBottom: '32px',
        animation: 'pulse-ring 2.5s ease-out infinite',
      }}>
        <span>✦</span>
        <span>v{release.version ?? '…'} disponível</span>
      </div>

      {/* H1 */}
      <h1 style={{
        fontSize: 'clamp(48px, 8vw, 96px)',
        fontWeight: '900',
        textAlign: 'center',
        lineHeight: '1.05',
        letterSpacing: '-3px',
        marginBottom: '24px',
        maxWidth: '860px',
        color: 'var(--text)',
      }}>
        Seu hub de{' '}
        <br />
        <span style={{
          background: 'linear-gradient(135deg, var(--text) 0%, var(--accent) 55%, var(--yellow) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          entretenimento
        </span>
      </h1>

      {/* Subtext */}
      <p style={{
        fontSize: '17px',
        color: 'var(--muted)',
        textAlign: 'center',
        maxWidth: '480px',
        lineHeight: '1.7',
        marginBottom: '44px',
      }}>
        Catálogo pessoal, downloads via torrent, sistema social e muito mais.
        Tudo offline, tudo seu.
      </p>

      {/* CTA row */}
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '28px' }}>
        <a
          href="http://app.abyss.grupoquote.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '9px',
            padding: '14px 28px',
            background: 'var(--accent)', color: '#0d111a',
            borderRadius: '12px', fontWeight: '700', fontSize: '15px',
            textDecoration: 'none', transition: 'all 0.2s ease',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.background = '#22c4ff'
            el.style.boxShadow = '0 0 32px rgba(0,180,255,0.4)'
            el.style.transform = 'translateY(-1px)'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.background = 'var(--accent)'
            el.style.boxShadow = 'none'
            el.style.transform = 'translateY(0)'
          }}
        >
          <Globe size={16} />
          Acessar versão web
        </a>

        <a
          href={platform.url}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '9px',
            padding: '14px 28px',
            background: 'transparent', color: 'var(--text)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '12px', fontWeight: '600', fontSize: '15px',
            textDecoration: 'none', transition: 'all 0.2s ease',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.borderColor = 'rgba(255,255,255,0.22)'
            el.style.background = 'rgba(255,255,255,0.04)'
            el.style.transform = 'translateY(-1px)'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.borderColor = 'rgba(255,255,255,0.12)'
            el.style.background = 'transparent'
            el.style.transform = 'translateY(0)'
          }}
        >
          <Download size={16} />
          Baixar para {platform.label}
        </a>
      </div>

      {/* Platform row */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '20px',
        marginBottom: '64px', opacity: 0.6,
      }}>
        {[
          { icon: '⊞', label: 'Windows' },
          { icon: '', label: 'macOS' },
          { icon: '🐧', label: 'Linux' },
        ].map(({ icon, label }, i) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            {i > 0 && <span style={{ color: 'var(--muted)', marginRight: '15px', opacity: 0.4 }}>·</span>}
            <span style={{ fontSize: '13px', opacity: 0.5 }}>{icon}</span>
            <span style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: '500' }}>{label}</span>
          </div>
        ))}
      </div>

      {/* App screenshot */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '960px',
        margin: '0 auto',
      }}>
        <div style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          height: '35%',
          background: 'linear-gradient(to bottom, transparent, var(--bg))',
          zIndex: 10,
          pointerEvents: 'none',
          borderRadius: '0 0 14px 14px',
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, var(--bg) 0%, transparent 5%, transparent 95%, var(--bg) 100%)',
          zIndex: 10,
          pointerEvents: 'none',
        }} />
        <div style={{
          borderRadius: '14px',
          overflow: 'hidden',
          border: '1px solid var(--divider)',
          boxShadow: '0 0 80px rgba(0,180,255,0.08), 0 40px 120px rgba(0,0,0,0.7)',
        }}>
          <img
            src="/screenshots/home.png"
            alt="Abyss — Interface principal"
            style={{ width: '100%', display: 'block' }}
          />
        </div>
      </div>
    </section>
  )
}
