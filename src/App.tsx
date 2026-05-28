import { ReleaseProvider } from './context/ReleaseContext'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { HowItWorks } from './components/HowItWorks'
import { Mockup } from './components/Mockup'
import { Download } from './components/Download'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <ReleaseProvider>
      <div style={{ minHeight: '100vh', background: '#080808' }}>
        <Nav />
        <Hero />
        <Features />
        <HowItWorks />
        <Mockup />
        <Download id="download" />
        <Footer />
      </div>
    </ReleaseProvider>
  )
}
