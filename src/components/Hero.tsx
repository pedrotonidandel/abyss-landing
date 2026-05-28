import { Download, Github } from 'lucide-react'
import { usePlatformUrl } from '../context/ReleaseContext'

const cardColors = [
  'linear-gradient(135deg, #1a3a5c 0%, #0077b6 100%)',
  'linear-gradient(135deg, #3a1a5c 0%, #7b2d8b 100%)',
  'linear-gradient(135deg, #5c3a1a 0%, #c77a2a 100%)',
  'linear-gradient(135deg, #1a5c3a 0%, #2d8b5c 100%)',
  'linear-gradient(135deg, #5c1a1a 0%, #c0392b 100%)',
  'linear-gradient(135deg, #1a4a5c 0%, #16699e 100%)',
]

const cardTitles = ['Inception', 'Dune', 'Interstellar', 'The Bear', 'Oppenheimer', 'Dark']

function AppMockup() {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      maxWidth: '860px',
      margin: '0 auto',
      height: '520px',
      overflow: 'hidden',
      borderRadius: '14px',
    }}>
      {/* Faded edges */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, transparent 60%, #080808 100%)',
        zIndex: 10,
        pointerEvents: 'none',
        borderRadius: '14px',
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to right, #080808 0%, transparent 8%, transparent 92%, #080808 100%)',
        zIndex: 10,
        pointerEvents: 'none',
        borderRadius: '14px',
      }} />

      {/* Mock app window */}
      <div style={{
        background: '#0d0d0d',
        border: '1px solid #1e1e1e',
        borderRadius: '14px',
        overflow: 'hidden',
        display: 'flex',
        height: '100%',
        boxShadow: '0 0 80px rgba(0,180,255,0.08), 0 40px 120px rgba(0,0,0,0.8)',
      }}>
        {/* Title bar */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '36px',
          background: '#080808',
          borderBottom: '1px solid #1a1a1a',
          display: 'flex',
          alignItems: 'center',
          padding: '0 14px',
          gap: '7px',
          zIndex: 5,
        }}>
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840' }} />
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: 180, height: 22, background: '#111', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '11px', color: '#444' }}>Abyss</span>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div style={{
          width: '190px',
          minWidth: '190px',
          background: '#0a0a0a',
          borderRight: '1px solid #141414',
          display: 'flex',
          flexDirection: 'column',
          padding: '52px 0 16px',
          gap: '2px',
        }}>
          {/* Logo in sidebar */}
          <div style={{ padding: '0 16px 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: 26, height: 26, borderRadius: '50%', border: '2px solid #00b4ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#00b4ff' }} />
            </div>
            <span style={{ fontSize: '13px', fontWeight: '700', color: '#e8e8e8' }}>Abyss</span>
          </div>

          {/* Nav items */}
          {[
            { label: 'Início', color: '#00b4ff', active: true },
            { label: 'Filmes', color: '#5544ff', active: false },
            { label: 'Séries', color: '#5544ff', active: false },
            { label: 'Anime', color: '#ff4466', active: false },
            { label: 'Livros', color: '#44bb77', active: false },
            { label: 'Downloads', color: '#ffaa00', active: false },
            { label: 'Amigos', color: '#aa44ff', active: false },
          ].map((item) => (
            <div key={item.label} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 16px',
              borderRadius: '8px',
              margin: '0 8px',
              background: item.active ? 'rgba(0,180,255,0.08)' : 'transparent',
              borderLeft: item.active ? '2px solid #00b4ff' : '2px solid transparent',
            }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: item.color, opacity: item.active ? 1 : 0.5 }} />
              <span style={{ fontSize: '12px', color: item.active ? '#e8e8e8' : '#555', fontWeight: item.active ? '600' : '400' }}>
                {item.label}
              </span>
            </div>
          ))}

          <div style={{ flex: 1 }} />

          {/* User at bottom */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', margin: '0 8px', borderTop: '1px solid #141414', paddingTop: '12px' }}>
            <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'linear-gradient(135deg, #00b4ff, #5544ff)' }} />
            <div>
              <div style={{ width: 60, height: 8, background: '#222', borderRadius: '4px', marginBottom: '4px' }} />
              <div style={{ width: 40, height: 6, background: '#1a1a1a', borderRadius: '4px' }} />
            </div>
          </div>
        </div>

        {/* Main content */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', paddingTop: '36px', overflow: 'hidden' }}>
          {/* Search bar + header */}
          <div style={{ padding: '16px 20px', borderBottom: '1px solid #141414', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              flex: 1,
              height: '32px',
              background: '#111',
              border: '1px solid #1a1a1a',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              padding: '0 12px',
              gap: '8px',
            }}>
              <div style={{ width: 12, height: 12, borderRadius: '50%', border: '1.5px solid #333' }} />
              <div style={{ width: 100, height: 8, background: '#1e1e1e', borderRadius: '4px' }} />
            </div>
            <div style={{ width: 28, height: 28, borderRadius: '8px', background: '#111', border: '1px solid #1a1a1a' }} />
            <div style={{ width: 28, height: 28, borderRadius: '8px', background: '#111', border: '1px solid #1a1a1a' }} />
          </div>

          {/* Section title */}
          <div style={{ padding: '16px 20px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ width: 100, height: 10, background: '#222', borderRadius: '5px' }} />
            <div style={{ width: 50, height: 8, background: '#1a1a1a', borderRadius: '4px' }} />
          </div>

          {/* Movie grid */}
          <div style={{ padding: '0 20px', display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '10px' }}>
            {cardColors.map((color, i) => (
              <div key={i} style={{
                borderRadius: '8px',
                overflow: 'hidden',
                background: '#111',
                border: '1px solid #1a1a1a',
              }}>
                <div style={{
                  height: '100px',
                  background: color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <div style={{ width: 24, height: 30, background: 'rgba(255,255,255,0.1)', borderRadius: '3px' }} />
                </div>
                <div style={{ padding: '7px 7px 8px' }}>
                  <div style={{ fontSize: '10px', fontWeight: '600', color: '#999', marginBottom: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {cardTitles[i]}
                  </div>
                  <div style={{ width: '60%', height: 5, background: '#1e1e1e', borderRadius: '3px' }} />
                </div>
              </div>
            ))}
          </div>

          {/* Second row section */}
          <div style={{ padding: '14px 20px 10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '4px' }}>
            <div style={{ width: 80, height: 10, background: '#222', borderRadius: '5px' }} />
            <div style={{ width: 40, height: 8, background: '#1a1a1a', borderRadius: '4px' }} />
          </div>

          {/* Second row - horizontal list */}
          <div style={{ padding: '0 20px', display: 'flex', gap: '10px' }}>
            {['linear-gradient(135deg, #1a2a5c, #3355aa)', 'linear-gradient(135deg, #2a1a3c, #5533aa)', 'linear-gradient(135deg, #1a3c2a, #33aa66)', 'linear-gradient(135deg, #3c2a1a, #aa6633)'].map((color, i) => (
              <div key={i} style={{
                width: '90px',
                minWidth: '90px',
                borderRadius: '8px',
                overflow: 'hidden',
                background: '#111',
                border: '1px solid #1a1a1a',
              }}>
                <div style={{ height: '56px', background: color }} />
                <div style={{ padding: '5px 6px 6px' }}>
                  <div style={{ width: '70%', height: 5, background: '#1e1e1e', borderRadius: '3px' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  const platform = usePlatformUrl()

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '120px 24px 80px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background radial glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '800px',
        height: '600px',
        background: 'radial-gradient(ellipse at center, rgba(0,180,255,0.06) 0%, rgba(85,68,255,0.04) 40%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '30%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(85,68,255,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Pill tag */}
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '7px',
        padding: '6px 16px',
        background: 'rgba(0,180,255,0.08)',
        border: '1px solid rgba(0,180,255,0.2)',
        borderRadius: '100px',
        fontSize: '13px',
        color: '#00b4ff',
        fontWeight: '500',
        marginBottom: '28px',
      }}>
        <span>✦</span>
        <span>Seu hub de entretenimento</span>
      </div>

      {/* H1 */}
      <h1 style={{
        fontSize: 'clamp(36px, 6vw, 72px)',
        fontWeight: '800',
        textAlign: 'center',
        lineHeight: '1.1',
        letterSpacing: '-2px',
        marginBottom: '24px',
        maxWidth: '820px',
        background: 'linear-gradient(135deg, #e8e8e8 0%, #00b4ff 50%, #5544ff 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}>
        Tudo que você assiste, lê e joga — em um só lugar
      </h1>

      {/* Subtext */}
      <p style={{
        fontSize: 'clamp(15px, 2vw, 18px)',
        color: '#777',
        textAlign: 'center',
        maxWidth: '520px',
        lineHeight: '1.7',
        marginBottom: '40px',
      }}>
        Catálogo pessoal, downloads via torrent, sistema social e muito mais.
        Tudo offline, tudo seu.
      </p>

      {/* CTA Buttons */}
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '40px' }}>
        <a
          href={platform.url}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '9px',
            padding: '13px 28px',
            background: '#00b4ff',
            color: '#080808',
            borderRadius: '12px',
            fontWeight: '700',
            fontSize: '15px',
            textDecoration: 'none',
            transition: 'all 0.2s ease',
            boxShadow: '0 0 0 rgba(0,180,255,0)',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.background = '#22c4ff'
            el.style.boxShadow = '0 0 32px rgba(0,180,255,0.4)'
            el.style.transform = 'translateY(-1px)'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.background = '#00b4ff'
            el.style.boxShadow = '0 0 0 rgba(0,180,255,0)'
            el.style.transform = 'translateY(0)'
          }}
        >
          <Download size={16} />
          Baixar para {platform.label}
        </a>

        <a
          href="https://github.com/pedrotonidandel/abyss-releases"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '9px',
            padding: '13px 28px',
            background: 'transparent',
            color: '#e8e8e8',
            border: '1px solid #2a2a2a',
            borderRadius: '12px',
            fontWeight: '600',
            fontSize: '15px',
            textDecoration: 'none',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.borderColor = '#404040'
            el.style.background = 'rgba(255,255,255,0.04)'
            el.style.transform = 'translateY(-1px)'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.borderColor = '#2a2a2a'
            el.style.background = 'transparent'
            el.style.transform = 'translateY(0)'
          }}
        >
          <Github size={16} />
          Ver no GitHub
        </a>
      </div>

      {/* Platform row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '64px' }}>
        {[
          { icon: '⊞', label: 'Windows' },
          { icon: '', label: 'macOS' },
          { icon: '🐧', label: 'Linux' },
        ].map(({ icon, label }) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '14px', opacity: 0.5 }}>{icon}</span>
            <span style={{ fontSize: '13px', color: '#555', fontWeight: '500' }}>{label}</span>
          </div>
        ))}
      </div>

      {/* App mockup */}
      <AppMockup />
    </section>
  )
}
