import logo from '../assets/logo.png'

export function Nav() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: 'rgba(8,8,8,0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src={logo} width={32} height={32} style={{ objectFit: 'contain' }} alt="Abyss" />
          <span style={{
            fontSize: '18px',
            fontWeight: '700',
            color: '#e8e8e8',
            letterSpacing: '-0.3px',
          }}>
            Abyss
          </span>
        </div>

        {/* CTA */}
        <a
          href="#download"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '9px 20px',
            background: '#00b4ff',
            color: '#080808',
            borderRadius: '10px',
            fontWeight: '600',
            fontSize: '14px',
            textDecoration: 'none',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLAnchorElement).style.background = '#22c4ff'
            ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 24px rgba(0,180,255,0.35)'
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLAnchorElement).style.background = '#00b4ff'
            ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none'
          }}
        >
          Baixar agora
        </a>
      </div>
    </nav>
  )
}
