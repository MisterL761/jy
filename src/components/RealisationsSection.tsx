import React, { useState } from 'react';
import LightboxModal from './LightboxModal';
import type { ProjectItem } from './LightboxModal';

const featuredProjects: ProjectItem[] = [
  { id: 'r10', cat: 'Portes de garage', title: 'Garage et porte d\'entrée', products: 'Porte de garage sectionnelle verte à hublots, porte d\'entrée en bois', mat: 'Bois', src: '/assets/realisations/r10.jpg' },
  { id: 'r6', cat: 'Volets', title: 'Volets battants rouges', products: 'Volets battants à persiennes', mat: 'Aluminium', src: '/assets/realisations/r6.jpg' },
  { id: 'r1', cat: 'Portails', title: 'Clôture et portillon', products: 'Clôture et portillon blancs à motif de cercles', mat: 'Aluminium', src: '/assets/realisations/r1.jpg' }
];

export default function RealisationsSection() {
  const [activeLbIndex, setActiveLbIndex] = useState<number | null>(null);
  const [hov, setHov] = useState<string | null>(null);

  const tileA = featuredProjects[0];
  const tileB = featuredProjects[1];
  const tileC = featuredProjects[2];

  const handlePrev = () => {
    if (activeLbIndex !== null) {
      setActiveLbIndex((activeLbIndex + featuredProjects.length - 1) % featuredProjects.length);
    }
  };

  const handleNext = () => {
    if (activeLbIndex !== null) {
      setActiveLbIndex((activeLbIndex + 1) % featuredProjects.length);
    }
  };

  return (
    <section id="realisations" data-screen-label="Réalisations" style={{ maxWidth: '1400px', margin: '0 auto', padding: 'clamp(80px,9vw,140px) clamp(20px,4vw,56px) 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '32px', flexWrap: 'wrap', marginBottom: '48px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', maxWidth: '720px' }}>
          <span style={{ font: "500 12px 'IBM Plex Mono', monospace", letterSpacing: '.08em', color: '#2F70B4', textTransform: 'uppercase' }}>02 — Réalisations</span>
          <h2 style={{ margin: 0, font: "700 clamp(40px,4.4vw,68px)/.95 'Sofia Sans Condensed', sans-serif", textWrap: 'balance' }}>
            Nos chantiers, photographiés après la pose.
          </h2>
          <div style={{ width: '120px', height: '6px', background: '#2F70B4', borderRadius: '6px' }}></div>
        </div>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <a
            href="/realisations"
            style={{
              display: 'flex',
              gap: '10px',
              alignItems: 'center',
              border: '1px solid #13243D',
              color: '#13243D',
              padding: '14px 22px',
              borderRadius: '999px',
              font: "700 15px/1 'Sofia Sans', sans-serif",
              transition: 'background 0.2s, color 0.2s'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#13243D'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#13243D'; }}
          >
            Voir toutes les réalisations →
          </a>
        </div>
      </div>

      {/* Tile A */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,8fr) minmax(0,4fr)', gap: 'clamp(24px,3vw,48px)', alignItems: 'flex-end' }}>
        <div
          onClick={() => setActiveLbIndex(0)}
          onMouseEnter={() => setHov(tileA.id)}
          onMouseLeave={() => setHov(null)}
          style={{ position: 'relative', height: 'clamp(420px,46vw,640px)', background: '#E6EEF7', overflow: 'hidden', cursor: 'zoom-in', borderRadius: '28px' }}
        >
          <div style={{ position: 'absolute', inset: 0, transform: hov === tileA.id ? 'scale(1.035)' : 'scale(1)', transition: 'transform .9s cubic-bezier(.2,.7,.2,1)' }}>
            <img src={tileA.src} alt={tileA.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <span style={{ position: 'absolute', top: '18px', left: '18px', background: '#D9262C', color: '#fff', font: "700 13px/1 'Sofia Sans', sans-serif", padding: '10px 16px', borderRadius: '999px', pointerEvents: 'none' }}>
            {tileA.cat}
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', paddingBottom: '8px' }}>
          <span style={{ font: "500 12px 'IBM Plex Mono', monospace", color: '#4A5A70' }}>{tileA.mat}</span>
          <h3 style={{ margin: 0, font: "700 clamp(30px,2.8vw,42px)/1 'Sofia Sans Condensed', sans-serif" }}>{tileA.title}</h3>
          <dl style={{ margin: 0, display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '8px 18px', fontSize: '14px', borderTop: '1px solid #D5DFEA', paddingTop: '16px' }}>
            <dt style={{ font: "500 12px 'IBM Plex Mono', monospace", color: '#2F70B4', paddingTop: '2px' }}>Produits</dt>
            <dd style={{ margin: 0 }}>{tileA.products}</dd>
            <dt style={{ font: "500 12px 'IBM Plex Mono', monospace", color: '#2F70B4', paddingTop: '2px' }}>Matériau</dt>
            <dd style={{ margin: 0 }}>{tileA.mat}</dd>
          </dl>
          <button
            onClick={() => setActiveLbIndex(0)}
            style={{ alignSelf: 'flex-start', background: 'none', border: '1px solid #13243D', borderRadius: '999px', padding: '13px 20px', font: "700 15px/1 'Sofia Sans', sans-serif", color: '#13243D', cursor: 'pointer', transition: 'background 0.2s, color 0.2s' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#13243D'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#13243D'; }}
          >
            Voir le projet en détail →
          </button>
        </div>
      </div>

      {/* Tiles B & C */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,5fr) minmax(0,7fr)', gap: 'clamp(24px,3vw,48px)', marginTop: 'clamp(48px,6vw,96px)', alignItems: 'start' }}>
        <div
          onClick={() => setActiveLbIndex(1)}
          onMouseEnter={() => setHov(tileB.id)}
          onMouseLeave={() => setHov(null)}
          style={{ display: 'flex', flexDirection: 'column', gap: '16px', cursor: 'zoom-in' }}
        >
          <div style={{ position: 'relative', height: 'clamp(340px,34vw,480px)', background: '#E6EEF7', overflow: 'hidden', borderRadius: '24px' }}>
            <div style={{ position: 'absolute', inset: 0, transform: hov === tileB.id ? 'scale(1.035)' : 'scale(1)', transition: 'transform .9s cubic-bezier(.2,.7,.2,1)' }}>
              <img src={tileB.src} alt={tileB.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <span style={{ position: 'absolute', top: '16px', left: '16px', background: '#D9262C', color: '#fff', font: "700 13px/1 'Sofia Sans', sans-serif", padding: '10px 16px', borderRadius: '999px', pointerEvents: 'none' }}>
              {tileB.cat}
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', alignItems: 'baseline', padding: '0 6px' }}>
            <span style={{ font: "700 24px/1.1 'Sofia Sans Condensed', sans-serif" }}>{tileB.title}</span>
            <span style={{ font: "500 12px 'IBM Plex Mono', monospace", color: '#4A5A70', whiteSpace: 'nowrap' }}>{tileB.mat}</span>
          </div>
          <span style={{ fontSize: '14px', color: '#4A5A70', marginTop: '-8px', padding: '0 6px' }}>{tileB.products}</span>
        </div>

        <div
          onClick={() => setActiveLbIndex(2)}
          onMouseEnter={() => setHov(tileC.id)}
          onMouseLeave={() => setHov(null)}
          style={{ display: 'flex', flexDirection: 'column', gap: '16px', cursor: 'zoom-in', marginTop: 'clamp(40px,8vw,120px)' }}
        >
          <div style={{ position: 'relative', height: 'clamp(380px,40vw,580px)', background: '#E6EEF7', overflow: 'hidden', borderRadius: '24px' }}>
            <div style={{ position: 'absolute', inset: 0, transform: hov === tileC.id ? 'scale(1.035)' : 'scale(1)', transition: 'transform .9s cubic-bezier(.2,.7,.2,1)' }}>
              <img src={tileC.src} alt={tileC.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <span style={{ position: 'absolute', top: '16px', left: '16px', background: '#D9262C', color: '#fff', font: "700 13px/1 'Sofia Sans', sans-serif", padding: '10px 16px', borderRadius: '999px', pointerEvents: 'none' }}>
              {tileC.cat}
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', alignItems: 'baseline', padding: '0 6px' }}>
            <span style={{ font: "700 24px/1.1 'Sofia Sans Condensed', sans-serif" }}>{tileC.title}</span>
            <span style={{ font: "500 12px 'IBM Plex Mono', monospace", color: '#4A5A70', whiteSpace: 'nowrap' }}>{tileC.mat}</span>
          </div>
          <span style={{ fontSize: '14px', color: '#4A5A70', marginTop: '-8px', padding: '0 6px' }}>{tileC.products}</span>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'clamp(48px,5vw,72px)' }}>
        <a
          href="/realisations"
          style={{ background: '#13243D', color: '#fff', padding: '18px 28px', borderRadius: '999px', font: "700 16px/1 'Sofia Sans', sans-serif", transition: 'background 0.2s' }}
          onMouseEnter={(e) => { e.currentTarget.style.background = '#2F70B4'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = '#13243D'; }}
        >
          Voir toutes nos réalisations →
        </a>
      </div>

      {activeLbIndex !== null && (
        <LightboxModal
          project={featuredProjects[activeLbIndex]}
          onClose={() => setActiveLbIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  );
}
