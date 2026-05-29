import logo from '../assets/logo.svg'

const links = [
  { label: 'GitHub',        href: 'https://github.com/pedrotonidandel/abyss-releases', external: true },
  { label: 'Reportar bug',  href: 'https://github.com/pedrotonidandel/abyss-releases/issues', external: true },
  { label: 'Versão Web',    href: 'http://app.abyss.grupoquote.com.br/', external: true },
  { label: 'Acessar app',   href: 'http://app.abyss.grupoquote.com.br/', external: true },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ borderTop: '1px solid var(--divider)', padding: '48px 24px 32px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Row 1 */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '24px', marginBottom: '32px',
        }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src={logo} width={28} height={28} style={{ objectFit: 'contain' }} alt="Abyss" />
            <span style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text)', letterSpacing: '-0.3px' }}>
              Abyss
            </span>
          </div>

          {/* Center links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '28px', flexWrap: 'wrap' }}>
            {links.map(({ label, href, external }) => (
              <a
                key={label + href}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                style={{
                  fontSize: '14px', color: 'var(--muted)', opacity: 0.6,
                  textDecoration: 'none', transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.color = 'var(--text)'
                  el.style.opacity = '1'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.color = 'var(--muted)'
                  el.style.opacity = '0.6'
                }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Credit */}
          <p style={{ fontSize: '14px', color: 'var(--muted)', opacity: 0.45, margin: 0 }}>
            Feito com ❤️ por <span style={{ opacity: 0.8 }}>Pedro</span>
          </p>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid var(--divider)', marginBottom: '24px' }} />

        {/* Row 2 */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '12px',
        }}>
          <p style={{ fontSize: '12px', color: 'var(--muted)', opacity: 0.3, margin: 0 }}>
            © {year} Abyss. Todos os direitos reservados.
          </p>
          <p style={{ fontSize: '12px', color: 'var(--muted)', opacity: 0.3, margin: 0 }}>
            Software livre e de código aberto
          </p>
        </div>
      </div>
    </footer>
  )
}
