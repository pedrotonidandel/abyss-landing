const steps = [
  {
    number: '01',
    title: 'Baixe o app',
    description: 'Instale em Windows, macOS ou Linux. Sem dependências extras, sem configuração complicada.',
    color: '#00b4ff',
  },
  {
    number: '02',
    title: 'Adicione seus addons',
    description: 'Importe catálogos de conteúdo em JSON. Filmes, séries, animes e livros com um clique.',
    color: '#8877ff',
  },
  {
    number: '03',
    title: 'Aproveite',
    description: 'Gerencie sua biblioteca, baixe o que quiser e compartilhe com seus amigos.',
    color: '#5544ff',
  },
]

export function HowItWorks() {
  return (
    <section style={{
      padding: '80px 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background stripe */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, transparent 0%, rgba(0,180,255,0.02) 50%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '7px',
            padding: '5px 14px',
            background: 'rgba(0,180,255,0.06)',
            border: '1px solid rgba(0,180,255,0.15)',
            borderRadius: '100px',
            fontSize: '12px',
            color: '#00b4ff',
            fontWeight: '600',
            marginBottom: '20px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}>
            Como funciona
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: '800',
            color: '#e8e8e8',
            margin: '0',
            letterSpacing: '-1px',
          }}>
            Três passos para começar
          </h2>
        </div>

        {/* Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          position: 'relative',
        }}>
          {steps.map((step, index) => (
            <div key={step.number} style={{ position: 'relative' }}>
              {/* Connector line (desktop only, between steps) */}
              {index < steps.length - 1 && (
                <div style={{
                  position: 'absolute',
                  top: '32px',
                  right: '-12px',
                  width: '24px',
                  height: '1px',
                  background: 'linear-gradient(to right, rgba(255,255,255,0.1), transparent)',
                  zIndex: 1,
                }} />
              )}

              <div style={{
                background: '#0f0f0f',
                border: '1px solid #1a1a1a',
                borderRadius: '16px',
                padding: '32px 28px',
                height: '100%',
              }}>
                {/* Step number */}
                <div style={{
                  fontSize: '11px',
                  fontWeight: '700',
                  color: step.color,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  marginBottom: '20px',
                  opacity: 0.8,
                }}>
                  Passo {step.number}
                </div>

                {/* Large number accent */}
                <div style={{
                  fontSize: '72px',
                  fontWeight: '900',
                  lineHeight: '1',
                  marginBottom: '20px',
                  background: `linear-gradient(135deg, ${step.color}22 0%, transparent 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  letterSpacing: '-4px',
                }}>
                  {step.number}
                </div>

                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  color: '#e8e8e8',
                  margin: '0 0 12px',
                  letterSpacing: '-0.3px',
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#666',
                  lineHeight: '1.65',
                  margin: 0,
                }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
