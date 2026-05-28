export function Mockup() {
  return (
    <section style={{
      padding: '40px 24px 80px',
      maxWidth: '1100px',
      margin: '0 auto',
    }}>
      {/* Section header */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '7px',
          padding: '5px 14px',
          background: 'rgba(85,68,255,0.08)',
          border: '1px solid rgba(85,68,255,0.2)',
          borderRadius: '100px',
          fontSize: '12px',
          color: '#8877ff',
          fontWeight: '600',
          marginBottom: '20px',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
        }}>
          Interface
        </div>
        <h2 style={{
          fontSize: 'clamp(28px, 4vw, 44px)',
          fontWeight: '800',
          color: '#e8e8e8',
          margin: '0',
          letterSpacing: '-1px',
        }}>
          Detalhes que encantam
        </h2>
      </div>

      {/* Detail page mockup */}
      <div style={{
        background: '#0d0d0d',
        border: '1px solid #1e1e1e',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 0 80px rgba(85,68,255,0.06), 0 40px 120px rgba(0,0,0,0.6)',
      }}>
        {/* Title bar */}
        <div style={{
          height: '36px',
          background: '#080808',
          borderBottom: '1px solid #141414',
          display: 'flex',
          alignItems: 'center',
          padding: '0 14px',
          gap: '7px',
        }}>
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840' }} />
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: 140, height: 20, background: '#111', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '11px', color: '#444' }}>Detalhes do título</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div style={{ display: 'flex', padding: '40px', gap: '48px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          {/* Poster */}
          <div style={{
            width: '200px',
            minWidth: '200px',
            height: '300px',
            borderRadius: '12px',
            background: 'linear-gradient(155deg, #1a0a4a 0%, #5544ff 50%, #00b4ff 100%)',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(85,68,255,0.3)',
            flexShrink: 0,
          }}>
            {/* Fake poster detail lines */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '80px',
              background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
            }} />
            {/* Play button */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'rgba(0,0,0,0.5)',
              border: '2px solid rgba(255,255,255,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <div style={{
                width: 0,
                height: 0,
                borderTop: '8px solid transparent',
                borderBottom: '8px solid transparent',
                borderLeft: '14px solid rgba(255,255,255,0.8)',
                marginLeft: '3px',
              }} />
            </div>
          </div>

          {/* Info */}
          <div style={{ flex: 1, minWidth: '260px' }}>
            {/* Genre tags */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
              {['Ficção Científica', 'Ação', '2023'].map(tag => (
                <span key={tag} style={{
                  padding: '4px 12px',
                  background: 'rgba(0,180,255,0.08)',
                  border: '1px solid rgba(0,180,255,0.18)',
                  borderRadius: '100px',
                  fontSize: '12px',
                  color: '#00b4ff',
                  fontWeight: '500',
                }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Title placeholder */}
            <div style={{ width: '70%', height: '28px', background: '#1e1e1e', borderRadius: '8px', marginBottom: '10px' }} />
            <div style={{ width: '45%', height: '18px', background: '#171717', borderRadius: '6px', marginBottom: '24px' }} />

            {/* Stars */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '24px' }}>
              {[1, 2, 3, 4, 5].map(i => (
                <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill={i <= 4 ? '#00b4ff' : 'none'} stroke={i <= 4 ? '#00b4ff' : '#333'} strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
              <span style={{ fontSize: '13px', color: '#555', marginLeft: '4px' }}>4.0 · 1.2k avaliações</span>
            </div>

            {/* Description bars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '36px' }}>
              {[100, 95, 90, 78, 55].map((width, i) => (
                <div key={i} style={{ width: `${width}%`, height: '10px', background: '#161616', borderRadius: '5px' }} />
              ))}
            </div>

            {/* Action buttons */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button style={{
                padding: '12px 24px',
                background: 'transparent',
                border: '1.5px solid #00b4ff',
                color: '#00b4ff',
                borderRadius: '10px',
                fontWeight: '600',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}>
                + Adicionar à biblioteca
              </button>
              <button style={{
                padding: '12px 24px',
                background: '#00b4ff',
                border: '1.5px solid #00b4ff',
                color: '#080808',
                borderRadius: '10px',
                fontWeight: '700',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Baixar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
