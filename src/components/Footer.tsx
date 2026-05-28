import logo from '../assets/logo.png'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      borderTop: '1px solid #111',
      padding: '40px 24px',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
      }}>
        {/* Main row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px',
          marginBottom: '32px',
        }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src={logo} width={28} height={28} style={{ objectFit: 'contain' }} alt="Abyss" />
            <span style={{ fontSize: '16px', fontWeight: '700', color: '#e8e8e8', letterSpacing: '-0.3px' }}>
              Abyss
            </span>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            {[
              { label: 'GitHub', href: 'https://github.com/pedrotonidandel/abyss-releases' },
              { label: 'Reportar bug', href: 'https://github.com/pedrotonidandel/abyss-releases/issues' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '14px',
                  color: '#555',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#e8e8e8' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#555' }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Credit */}
          <p style={{ fontSize: '14px', color: '#444', margin: 0 }}>
            Feito com ❤️ por <span style={{ color: '#666' }}>Pedro</span>
          </p>
        </div>

        {/* Bottom */}
        <div style={{
          borderTop: '1px solid #0f0f0f',
          paddingTop: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <p style={{ fontSize: '12px', color: '#2a2a2a', margin: 0 }}>
            © {year} Abyss. Todos os direitos reservados.
          </p>
          <p style={{ fontSize: '12px', color: '#2a2a2a', margin: 0 }}>
            Software livre e de código aberto
          </p>
        </div>
      </div>
    </footer>
  )
}
