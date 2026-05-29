import { Film, Download, Users, Star, Bell } from 'lucide-react'

/* ── Bento card base ───────────────────────────────────────────── */
function BentoCard({
  children,
  style = {},
  accentColor = 'rgba(0,180,255,0.35)',
}: {
  children: React.ReactNode
  style?: React.CSSProperties
  accentColor?: string
}) {
  return (
    <div
      style={{
        background: 'var(--panel)',
        border: '1px solid var(--divider)',
        borderRadius: '20px',
        padding: '28px',
        transition: 'all 0.25s ease',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
        ...style,
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderColor = accentColor
        el.style.transform = 'translateY(-2px)'
        el.style.boxShadow = `0 12px 40px rgba(0,0,0,0.35), 0 0 0 1px ${accentColor}`
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderColor = 'var(--divider)'
        el.style.transform = 'translateY(0)'
        el.style.boxShadow = 'none'
      }}
    >
      {children}
    </div>
  )
}

function IconBox({ icon, color, bg }: { icon: React.ReactNode; color: string; bg: string }) {
  return (
    <div style={{
      width: '40px', height: '40px', borderRadius: '12px',
      background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center',
      color, marginBottom: '16px',
    }}>
      {icon}
    </div>
  )
}

const categoryChips = [
  { label: 'Filmes',  color: '#a78bfa', bg: 'rgba(167,139,250,0.12)' },
  { label: 'Séries',  color: '#f87171', bg: 'rgba(248,113,113,0.12)' },
  { label: 'Animes',  color: '#f472b6', bg: 'rgba(244,114,182,0.12)' },
  { label: 'Livros',  color: '#60a5fa', bg: 'rgba(96,165,250,0.12)'  },
  { label: 'Jogos',   color: '#34d399', bg: 'rgba(52,211,153,0.12)'  },
]

export function Features() {
  return (
    <section id="recursos" style={{ maxWidth: '1100px', margin: '0 auto', padding: '100px 24px 80px' }}>
      {/* Section header */}
      <div style={{ textAlign: 'center', marginBottom: '56px' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '7px',
          padding: '5px 14px',
          background: 'rgba(0,180,255,0.07)',
          border: '1px solid rgba(0,180,255,0.18)',
          borderRadius: '100px',
          fontSize: '12px', color: 'var(--accent)', fontWeight: '600',
          marginBottom: '20px',
          textTransform: 'uppercase', letterSpacing: '0.5px',
        }}>
          ✦ Funcionalidades
        </div>
        <h2 style={{
          fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '800',
          color: 'var(--text)', margin: '0', letterSpacing: '-1px',
        }}>
          Tudo que você precisa
        </h2>
      </div>

      {/* Bento grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'auto auto',
        gap: '14px',
      }}>

        {/* Row 1 — Card 1: Catálogo (span 2) */}
        <BentoCard
          style={{ gridColumn: 'span 2', minHeight: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          accentColor='rgba(167,139,250,0.4)'
        >
          {/* Chips */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {categoryChips.map(chip => (
              <span key={chip.label} style={{
                padding: '5px 14px',
                borderRadius: '100px',
                fontSize: '13px', fontWeight: '600',
                color: chip.color, background: chip.bg,
                border: `1px solid ${chip.color}30`,
              }}>
                {chip.label}
              </span>
            ))}
          </div>
          {/* Title block */}
          <div>
            <IconBox icon={<Film size={18} />} color='var(--accent)' bg='rgba(0,180,255,0.1)' />
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text)', margin: '0 0 6px', letterSpacing: '-0.3px' }}>
              Catálogo Completo
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--muted)', margin: 0, lineHeight: '1.6' }}>
              Filmes, séries, animes, livros e jogos em uma interface unificada.
            </p>
          </div>
        </BentoCard>

        {/* Row 1 — Card 2: Torrent (span 1) */}
        <BentoCard accentColor='rgba(212,184,72,0.4)'>
          <IconBox icon={<Download size={18} />} color='var(--yellow)' bg='rgba(212,184,72,0.1)' />
          {/* Fake download row */}
          <div style={{
            background: 'var(--panel-2)', borderRadius: '10px', padding: '12px 14px',
            marginBottom: '16px', border: '1px solid var(--divider)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--yellow)', flexShrink: 0 }} />
              <span style={{ fontSize: '12px', color: 'var(--text)', fontWeight: '500', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                Interstellar.2014.mkv
              </span>
              <span style={{ fontSize: '11px', color: 'var(--yellow)', fontFamily: 'monospace' }}>2.4 MB/s</span>
            </div>
            <div style={{ height: '4px', borderRadius: '4px', background: 'var(--chip)' }}>
              <div style={{ width: '73%', height: '100%', borderRadius: '4px', background: 'var(--yellow)' }} />
            </div>
            <div style={{ marginTop: '5px', fontSize: '11px', color: 'var(--muted)', textAlign: 'right' }}>73%</div>
          </div>
          <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text)', margin: '0 0 6px', letterSpacing: '-0.2px' }}>
            Download via Torrent
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0, lineHeight: '1.6' }}>
            Baixe diretamente com controle de velocidade e retomada automática.
          </p>
        </BentoCard>

        {/* Row 2 — Card 3: Social (span 1) */}
        <BentoCard accentColor='rgba(0,180,255,0.35)'>
          <IconBox icon={<Users size={18} />} color='var(--accent)' bg='rgba(0,180,255,0.1)' />
          {/* Avatar stack */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '16px' }}>
            {['#a78bfa', '#f87171', '#34d399'].map((color, i) => (
              <div key={i} style={{
                width: '32px', height: '32px', borderRadius: '50%',
                background: color, border: '2px solid var(--panel)',
                marginLeft: i > 0 ? '-8px' : 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '13px', fontWeight: '700', color: '#0d111a',
              }}>
                {String.fromCharCode(65 + i)}
              </div>
            ))}
            <span style={{ fontSize: '13px', color: 'var(--muted)', marginLeft: '10px' }}>3 amigos online</span>
          </div>
          <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text)', margin: '0 0 6px', letterSpacing: '-0.2px' }}>
            Sistema Social
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0, lineHeight: '1.6' }}>
            Adicione amigos e veja o que estão assistindo.
          </p>
        </BentoCard>

        {/* Row 2 — Card 4: Avaliações (span 1) */}
        <BentoCard accentColor='rgba(212,184,72,0.4)'>
          <IconBox icon={<Star size={18} />} color='var(--yellow)' bg='rgba(212,184,72,0.1)' />
          {/* Stars */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '3px', marginBottom: '8px' }}>
            {[1,2,3,4,5].map(n => (
              <svg key={n} width="16" height="16" viewBox="0 0 24 24" fill={n <= 4 ? 'var(--yellow)' : 'var(--chip)'}>
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
            <span style={{ fontSize: '13px', color: 'var(--muted)', marginLeft: '8px' }}>4.8 · 2.1k avaliações</span>
          </div>
          <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text)', margin: '0 0 6px', letterSpacing: '-0.2px' }}>
            Avaliações
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0, lineHeight: '1.6' }}>
            Avalie títulos e veja o que a comunidade achou.
          </p>
        </BentoCard>

        {/* Row 2 — Card 5: Novidades (span 1) */}
        <BentoCard accentColor='rgba(0,180,255,0.35)'>
          <IconBox icon={<Bell size={18} />} color='var(--accent)' bg='rgba(0,180,255,0.1)' />
          {/* Fake release notification */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '8px 14px',
            background: 'var(--panel-2)', borderRadius: '10px',
            border: '1px solid var(--divider)', marginBottom: '16px',
          }}>
            <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--yellow)', flexShrink: 0 }} />
            <span style={{ fontSize: '13px', color: 'var(--text)', fontWeight: '600' }}>v1.8.7</span>
            <span style={{ fontSize: '12px', color: 'var(--muted)' }}>· Hoje</span>
          </div>
          <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text)', margin: '0 0 6px', letterSpacing: '-0.2px' }}>
            Novidades
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0, lineHeight: '1.6' }}>
            Changelog integrado e notificações de atualização.
          </p>
        </BentoCard>

      </div>
    </section>
  )
}
