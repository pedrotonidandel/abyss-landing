import { Download, Layers, Smile } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: <Download size={20} />,
    title: 'Baixe o app',
    description: 'Instale em Windows, macOS ou Linux. Sem dependências extras, sem configuração complicada.',
    gradientColors: '0,180,255',
  },
  {
    number: '02',
    icon: <Layers size={20} />,
    title: 'Adicione seus addons',
    description: 'Importe catálogos de conteúdo em JSON. Filmes, séries, animes e livros com um clique.',
    gradientColors: '212,184,72',
  },
  {
    number: '03',
    icon: <Smile size={20} />,
    title: 'Aproveite',
    description: 'Gerencie sua biblioteca, baixe o que quiser e compartilhe com seus amigos.',
    gradientColors: '0,180,255',
  },
]

export function HowItWorks() {
  return (
    <section style={{
      padding: '80px 24px',
      position: 'relative',
      overflow: 'hidden',
      background: 'rgba(255,255,255,0.02)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '7px',
            padding: '5px 14px',
            background: 'rgba(0,180,255,0.06)',
            border: '1px solid rgba(0,180,255,0.15)',
            borderRadius: '100px',
            fontSize: '12px', color: 'var(--accent)', fontWeight: '600',
            marginBottom: '20px',
            textTransform: 'uppercase', letterSpacing: '0.5px',
          }}>
            Como funciona
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '800',
            color: 'var(--text)', margin: '0', letterSpacing: '-1px',
          }}>
            Três passos para começar
          </h2>
        </div>

        {/* Steps row */}
        <div style={{
          display: 'flex',
          gap: '0',
          alignItems: 'flex-start',
          position: 'relative',
        }}>
          {/* Dashed connector line */}
          <div style={{
            position: 'absolute',
            top: '28px',
            left: 'calc(16.66% + 20px)',
            right: 'calc(16.66% + 20px)',
            height: '1px',
            borderTop: '1px dashed var(--divider)',
            pointerEvents: 'none',
            zIndex: 0,
          }} />

          {steps.map((step) => (
            <div key={step.number} style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              padding: '0 32px',
              position: 'relative',
              zIndex: 1,
            }}>
              {/* Large faded number */}
              <div style={{
                fontSize: '80px',
                fontWeight: '900',
                lineHeight: '1',
                letterSpacing: '-4px',
                marginBottom: '8px',
                background: `linear-gradient(135deg, rgba(${step.gradientColors},0.20) 0%, rgba(${step.gradientColors},0.04) 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                userSelect: 'none',
              }}>
                {step.number}
              </div>

              {/* Icon circle */}
              <div style={{
                width: '48px', height: '48px', borderRadius: '14px',
                background: `rgba(${step.gradientColors},0.08)`,
                border: `1px solid rgba(${step.gradientColors},0.18)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: `rgb(${step.gradientColors})`,
                marginBottom: '20px',
              }}>
                {step.icon}
              </div>

              <h3 style={{
                fontSize: '18px', fontWeight: '700',
                color: 'var(--text)', margin: '0 0 12px', letterSpacing: '-0.3px',
              }}>
                {step.title}
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: '1.7', margin: 0 }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
