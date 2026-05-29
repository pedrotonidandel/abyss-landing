import { ReleaseProvider } from './context/ReleaseContext'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { HowItWorks } from './components/HowItWorks'
import { Mockup } from './components/Mockup'
import { Download } from './components/Download'
import { Footer } from './components/Footer'

const CATEGORIES = ['Filmes', 'Séries', 'Animes', 'Livros', 'Jogos']
const STRIP_ITEMS = [...CATEGORIES, ...CATEGORIES, ...CATEGORIES, ...CATEGORIES]

function CategoryStrip() {
  return (
    <div style={{
      borderTop: '1px solid var(--divider)',
      borderBottom: '1px solid var(--divider)',
      overflow: 'hidden',
      position: 'relative',
      padding: '12px 0',
    }}>
      {/* Fade edges */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, var(--bg) 0%, transparent 8%, transparent 92%, var(--bg) 100%)',
        zIndex: 2, pointerEvents: 'none',
      }} />
      <div style={{
        display: 'flex',
        width: 'max-content',
        animation: 'scroll-x 18s linear infinite',
      }}>
        {STRIP_ITEMS.map((cat, i) => (
          <span
            key={i}
            style={{
              fontSize: '13px',
              color: 'var(--muted)',
              fontWeight: '500',
              padding: '0 24px',
              opacity: 0.5,
              whiteSpace: 'nowrap',
              letterSpacing: '0.3px',
            }}
          >
            {cat}
            <span style={{ marginLeft: '24px', opacity: 0.4 }}>·</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default function App() {
  return (
    <ReleaseProvider>
      <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
        <Nav />
        <Hero />
        <CategoryStrip />
        <Features />
        <HowItWorks />
        <Mockup />
        <Download id="download" />
        <Footer />
      </div>
    </ReleaseProvider>
  )
}
