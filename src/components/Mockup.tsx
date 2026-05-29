export function Mockup() {
  return (
    <section style={{ padding: '80px 24px', maxWidth: '1100px', margin: '0 auto' }}>
      {/* Section header */}
      <div style={{ textAlign: 'center', marginBottom: '56px' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '7px',
          padding: '5px 14px',
          background: 'rgba(212,184,72,0.08)',
          border: '1px solid rgba(212,184,72,0.2)',
          borderRadius: '100px',
          fontSize: '12px', color: 'var(--yellow)', fontWeight: '600',
          marginBottom: '20px',
          textTransform: 'uppercase', letterSpacing: '0.5px',
        }}>
          ✦ Interface
        </div>
        <h2 style={{
          fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '800',
          color: 'var(--text)', margin: '0 0 14px', letterSpacing: '-1px',
        }}>
          Veja na prática
        </h2>
        <p style={{ fontSize: '16px', color: 'var(--muted)', maxWidth: '420px', margin: '0 auto', lineHeight: '1.6' }}>
          Cada detalhe pensado para uma experiência limpa e agradável.
        </p>
      </div>

      {/* Two-column layout */}
      <div style={{
        display: 'flex', gap: '32px', alignItems: 'flex-start',
        flexWrap: 'wrap',
      }}>
        {/* Left label + screenshot */}
        <div style={{ flex: 1, minWidth: '280px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            marginBottom: '16px',
          }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--yellow)' }} />
            <span style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: '500', letterSpacing: '0.2px' }}>
              Página de detalhes
            </span>
          </div>

          <div style={{
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid var(--divider)',
            boxShadow: '0 0 60px rgba(212,184,72,0.05), 0 32px 80px rgba(0,0,0,0.55)',
            transition: 'box-shadow 0.3s ease, transform 0.3s ease',
          }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLDivElement
              el.style.boxShadow = '0 0 80px rgba(212,184,72,0.10), 0 40px 100px rgba(0,0,0,0.65)'
              el.style.transform = 'translateY(-3px)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLDivElement
              el.style.boxShadow = '0 0 60px rgba(212,184,72,0.05), 0 32px 80px rgba(0,0,0,0.55)'
              el.style.transform = 'translateY(0)'
            }}
          >
            <img
              src="/screenshots/detail.png"
              alt="Abyss — Página de detalhes"
              style={{ width: '100%', display: 'block' }}
            />
          </div>
        </div>

        {/* Right: callout card */}
        <div style={{
          width: '300px', flexShrink: 0,
          display: 'flex', flexDirection: 'column', gap: '16px',
          paddingTop: '40px',
        }}>
          {[
            { title: 'Informações ricas', desc: 'Sinopse, elenco, avaliações e muito mais em uma tela só.' },
            { title: 'Download direto', desc: 'Baixe com um clique, direto da página de detalhes.' },
            { title: 'Avalie e comente', desc: 'Deixe sua opinião e veja o que a comunidade achou.' },
          ].map(item => (
            <div key={item.title} style={{
              padding: '20px',
              background: 'var(--panel)',
              border: '1px solid var(--divider)',
              borderRadius: '14px',
            }}>
              <h4 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text)', margin: '0 0 6px' }}>
                {item.title}
              </h4>
              <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0, lineHeight: '1.6' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
