import { Film, Download, Users, Star, Bell, Shield } from 'lucide-react'
import type { ReactNode } from 'react'

interface Feature {
  icon: ReactNode
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: <Film size={22} />,
    title: 'Catálogo Completo',
    description: 'Filmes, séries, animes e livros em uma interface unificada. Adicione seus próprios addons.',
  },
  {
    icon: <Download size={22} />,
    title: 'Download via Torrent',
    description: 'Baixe diretamente pelo app com suporte a torrents, controle de velocidade e retomada automática.',
  },
  {
    icon: <Users size={22} />,
    title: 'Sistema Social',
    description: 'Adicione amigos, veja o que estão assistindo e compare bibliotecas.',
  },
  {
    icon: <Star size={22} />,
    title: 'Avaliações e Comentários',
    description: 'Avalie e comente cada título. Veja o que a comunidade achou.',
  },
  {
    icon: <Bell size={22} />,
    title: 'Novidades e Releases',
    description: 'Fique por dentro das atualizações do app com changelog integrado e notificações.',
  },
  {
    icon: <Shield size={22} />,
    title: 'Privacidade em primeiro lugar',
    description: 'Seus dados de download nunca saem do seu computador. O servidor só vê o que você deixar.',
  },
]

function FeatureCard({ icon, title, description }: Feature) {
  return (
    <div
      style={{
        background: '#0f0f0f',
        border: '1px solid #1a1a1a',
        borderRadius: '16px',
        padding: '28px',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        transition: 'all 0.25s ease',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderColor = 'rgba(0,180,255,0.25)'
        el.style.background = '#111'
        el.style.transform = 'translateY(-2px)'
        el.style.boxShadow = '0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,180,255,0.05)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderColor = '#1a1a1a'
        el.style.background = '#0f0f0f'
        el.style.transform = 'translateY(0)'
        el.style.boxShadow = 'none'
      }}
    >
      {/* Icon container */}
      <div style={{
        width: '44px',
        height: '44px',
        borderRadius: '12px',
        background: 'rgba(0,180,255,0.08)',
        border: '1px solid rgba(0,180,255,0.15)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#00b4ff',
      }}>
        {icon}
      </div>

      <div>
        <h3 style={{
          fontSize: '16px',
          fontWeight: '700',
          color: '#e8e8e8',
          margin: '0 0 8px',
          letterSpacing: '-0.2px',
        }}>
          {title}
        </h3>
        <p style={{
          fontSize: '14px',
          color: '#666',
          lineHeight: '1.65',
          margin: 0,
        }}>
          {description}
        </p>
      </div>
    </div>
  )
}

export function Features() {
  return (
    <section style={{
      maxWidth: '1100px',
      margin: '0 auto',
      padding: '80px 24px',
    }}>
      {/* Section header */}
      <div style={{ textAlign: 'center', marginBottom: '56px' }}>
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
          Recursos
        </div>
        <h2 style={{
          fontSize: 'clamp(28px, 4vw, 44px)',
          fontWeight: '800',
          color: '#e8e8e8',
          margin: '0 0 16px',
          letterSpacing: '-1px',
        }}>
          Tudo que você precisa,
          <br />
          <span style={{ color: '#555' }}>num só lugar</span>
        </h2>
        <p style={{ fontSize: '16px', color: '#555', maxWidth: '440px', margin: '0 auto', lineHeight: '1.6' }}>
          Do catálogo aos downloads, do social às avaliações — o Abyss cobre tudo.
        </p>
      </div>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '16px',
      }}>
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </section>
  )
}
