import logo from '../assets/logo.svg'

export function Nav() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 50,
        background: 'rgba(17,23,32,0.8)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderBottom: '1px solid var(--divider)',
        height: '60px',
      }}
    >
      <div style={{
        maxWidth: '1200px', margin: '0 auto', padding: '0 24px',
        height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src={logo} width={30} height={30} style={{ objectFit: 'contain' }} alt="Abyss" />
          <span style={{ fontSize: '17px', fontWeight: '700', color: 'var(--text)', letterSpacing: '-0.3px' }}>
            Abyss
          </span>
        </div>

        {/* Center nav links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {[
            { label: 'Recursos', href: '#recursos' },
            { label: 'Download', href: '#download' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                fontSize: '14px', color: 'var(--muted)', fontWeight: '500',
                textDecoration: 'none', transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--muted)' }}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Right CTA */}
        <a
          href="http://app.abyss.grupoquote.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            padding: '8px 18px',
            background: 'transparent',
            border: '1px solid var(--divider)',
            borderRadius: '10px',
            fontSize: '14px', fontWeight: '600', color: 'var(--text)',
            textDecoration: 'none', transition: 'all 0.2s ease',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.background = 'var(--panel-2)'
            el.style.borderColor = 'rgba(255,255,255,0.14)'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.background = 'transparent'
            el.style.borderColor = 'var(--divider)'
          }}
        >
          Acessar app →
        </a>
      </div>
    </nav>
  )
}
