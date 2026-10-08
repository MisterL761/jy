import React, { useState, useEffect } from 'react';
import LightboxModal from './LightboxModal';
import type { ProjectItem } from './LightboxModal';

interface RealisationProject extends ProjectItem {
  w: number;
  h: number;
}

const allProjects: RealisationProject[] = [
  { id: 'r10', cat: 'Portes de garage', title: 'Garage et porte d\'entrée', products: 'Porte de garage sectionnelle verte à hublots, porte d\'entrée en bois', mat: 'Bois', w: 1600, h: 1200 },
  { id: 'r13', cat: 'Volets', title: 'Façade rénovée', products: 'Volets roulants, porte d\'entrée, clôture et portillon', mat: 'Aluminium', w: 1200, h: 1600 },
  { id: 'r1', cat: 'Portails', title: 'Clôture et portillon', products: 'Clôture et portillon blancs à motif de cercles', mat: 'Aluminium', w: 1600, h: 1200 },
  { id: 'r14', cat: 'Portes d\'entrée', title: 'Porte contemporaine', products: 'Porte d\'entrée grise à poignée inox', mat: 'Aluminium', w: 1200, h: 1600 },
  { id: 'r6', cat: 'Volets', title: 'Volets battants rouges', products: 'Volets battants à persiennes', mat: 'Aluminium', w: 720, h: 960 },
  { id: 'r7', cat: 'Portails', title: 'Portail coulissant', products: 'Portail coulissant anthracite à lames', mat: 'Aluminium', w: 960, h: 720 },
  { id: 'r9', cat: 'Portes d\'entrée', title: 'Porte à petits bois', products: 'Porte d\'entrée blanche vitrée à petits bois', mat: 'PVC', w: 1200, h: 1600 },
  { id: 'r2', cat: 'Garde-corps', title: 'Escalier extérieur', products: 'Garde-corps et main courante gris', mat: 'Aluminium', w: 720, h: 960 },
  { id: 'r8', cat: 'Volets', title: 'Volet roulant solaire', products: 'Volet roulant solaire sur fenêtre cintrée', mat: 'Aluminium', w: 1600, h: 1200 },
  { id: 'r3', cat: 'Portes de garage', title: 'Porte de garage à hublots', products: 'Porte sectionnelle anthracite à hublots', mat: 'Acier', w: 720, h: 960 },
  { id: 'r15', cat: 'Portes d\'entrée', title: 'Porte entièrement vitrée', products: 'Porte d\'entrée anthracite vitrée, barre de tirage', mat: 'Aluminium', w: 1200, h: 1600 },
  { id: 'r4', cat: 'Portails', title: 'Portail et portillon', products: 'Portail battant blanc à décor découpé, portillon assorti', mat: 'Aluminium', w: 666, h: 888 },
  { id: 'r11', cat: 'Portes d\'entrée', title: 'Porte gris anthracite', products: 'Porte d\'entrée à vitrage cintré', mat: 'Aluminium', w: 1200, h: 1600 },
  { id: 'r5', cat: 'Garde-corps', title: 'Double escalier', products: 'Garde-corps à barreaudage gris', mat: 'Aluminium', w: 360, h: 480 },
  { id: 'r16', cat: 'Portes d\'entrée', title: 'Porte à vitrage décoratif', products: 'Porte d\'entrée grise, vitrage imprimé', mat: 'Aluminium', w: 1200, h: 1600 }
];

const categories = ['Tout', 'Portes d\'entrée', 'Portes de garage', 'Volets', 'Portails', 'Garde-corps'];
const materials = ['Tous', 'Aluminium', 'PVC', 'Bois', 'Acier'];

export default function RealisationsGallery() {
  const [selectedCat, setSelectedCat] = useState('Tout');
  const [selectedMat, setSelectedMat] = useState('Tous');
  const [hovId, setHovId] = useState<string | null>(null);
  const [activeLbIndex, setActiveLbIndex] = useState<number | null>(null);
  const [vw, setVw] = useState(1400);

  useEffect(() => {
    const handleResize = () => setVw(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredList = allProjects.filter(p =>
    (selectedCat === 'Tout' || p.cat === selectedCat) &&
    (selectedMat === 'Tous' || p.mat === selectedMat)
  );

  const cols = vw < 760 ? 1 : vw < 1100 ? 2 : 3;
  const rows: RealisationProject[][] = [];
  for (let i = 0; i < filteredList.length; i += cols) {
    rows.push(filteredList.slice(i, i + cols));
  }

  const widths: { [id: string]: string } = {};
  rows.forEach(r => {
    const sum = r.reduce((t, p) => t + p.w / p.h, 0);
    const G = 24 * (r.length - 1);
    const full = r.length === cols || rows.length === 1;
    r.forEach(p => {
      const fr = full ? (p.w / p.h) / sum : (p.w / p.h) / Math.max(sum, cols * 0.9);
      widths[p.id] = `calc((100% - ${G}px) * ${fr.toFixed(4)})`;
    });
  });

  const handlePrev = () => {
    if (activeLbIndex !== null && filteredList.length > 0) {
      setActiveLbIndex((activeLbIndex + filteredList.length - 1) % filteredList.length);
    }
  };

  const handleNext = () => {
    if (activeLbIndex !== null && filteredList.length > 0) {
      setActiveLbIndex((activeLbIndex + 1) % filteredList.length);
    }
  };

  return (
    <>
      <section data-screen-label="Intro" style={{ maxWidth: '1400px', margin: '0 auto', padding: 'clamp(48px,6vw,96px) clamp(20px,4vw,56px) 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,7fr) minmax(0,5fr)', gap: 'clamp(28px,4vw,64px)', alignItems: 'end' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <span style={{ font: "500 12px 'IBM Plex Mono', monospace", letterSpacing: '.08em', color: '#2F70B4', textTransform: 'uppercase' }}>Réalisations</span>
            <h1 style={{ margin: 0, font: "800 clamp(52px,6.4vw,100px)/.9 'Sofia Sans Condensed', sans-serif", letterSpacing: '-.01em', textWrap: 'balance' }}>
              Nos chantiers, maison par maison.
            </h1>
            <div style={{ width: '120px', height: '6px', background: '#2F70B4', borderRadius: '6px' }}></div>
          </div>
        </div>

        {/* Filter Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px', flexWrap: 'wrap', marginTop: 'clamp(40px,5vw,64px)', padding: '10px', background: '#F3F7FB', borderRadius: '999px' }}>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {categories.map(c => {
              const count = c === 'Tout' ? allProjects.length : allProjects.filter(p => p.cat === c).length;
              const isSel = c === selectedCat;
              return (
                <button
                  key={c}
                  onClick={() => setSelectedCat(c)}
                  style={{
                    padding: '12px 18px',
                    border: 0,
                    borderRadius: '999px',
                    background: isSel ? '#13243D' : 'transparent',
                    color: isSel ? '#fff' : '#13243D',
                    font: "600 14px/1 'Sofia Sans', sans-serif",
                    cursor: 'pointer',
                    display: 'flex',
                    gap: '8px',
                    alignItems: 'center'
                  }}
                >
                  {c}
                  <span style={{ font: "500 11px 'IBM Plex Mono', monospace", opacity: 0.7 }}>{count}</span>
                </button>
              );
            })}
          </div>

          <div style={{ display: 'flex', gap: '6px', alignItems: 'center', paddingRight: '8px' }}>
            <span style={{ font: "500 11px 'IBM Plex Mono', monospace", color: '#4A5A70', marginRight: '4px' }}>MATÉRIAU</span>
            {materials.map(m => {
              const isSel = m === selectedMat;
              return (
                <button
                  key={m}
                  onClick={() => setSelectedMat(m)}
                  style={{
                    padding: '10px 14px',
                    border: `1px solid ${isSel ? '#2F70B4' : '#D5DFEA'}`,
                    borderRadius: '999px',
                    background: isSel ? '#2F70B4' : '#fff',
                    color: isSel ? '#fff' : '#13243D',
                    font: "600 13px/1 'Sofia Sans', sans-serif",
                    cursor: 'pointer'
                  }}
                >
                  {m}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section data-screen-label="Galerie" style={{ maxWidth: '1400px', margin: '0 auto', padding: 'clamp(32px,4vw,56px) clamp(20px,4vw,56px) 0' }}>
        {filteredList.length === 0 ? (
          <div style={{ padding: '80px 24px', textAlign: 'center', background: '#F3F7FB', borderRadius: '28px', display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'center' }}>
            <span style={{ font: "700 28px 'Sofia Sans Condensed', sans-serif" }}>Aucune réalisation pour ce choix.</span>
            <button
              onClick={() => { setSelectedCat('Tout'); setSelectedMat('Tous'); }}
              style={{ background: '#13243D', color: '#fff', border: 0, borderRadius: '999px', padding: '14px 22px', font: "700 15px/1 'Sofia Sans', sans-serif", cursor: 'pointer' }}
            >
              Voir toutes les réalisations
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap', columnGap: '24px', rowGap: 'clamp(32px,3vw,48px)', alignItems: 'flex-start' }}>
            {filteredList.map((p, idx) => {
              const isHov = hovId === p.id;
              const imgSrc = `/assets/realisations/${p.id}.jpg`;
              return (
                <article
                  key={p.id}
                  onClick={() => setActiveLbIndex(idx)}
                  onMouseEnter={() => setHovId(p.id)}
                  onMouseLeave={() => setHovId(null)}
                  style={{ flex: `0 0 ${widths[p.id] || '30%'}`, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '14px', cursor: 'zoom-in' }}
                >
                  <div style={{ position: 'relative', aspectRatio: `${p.w} / ${p.h}`, background: '#E6EEF7', borderRadius: '26px', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', inset: 0, transform: isHov ? 'scale(1.035)' : 'scale(1)', transition: 'transform .9s cubic-bezier(.2,.7,.2,1)' }}>
                      <img src={imgSrc} alt={`Photo : ${p.title}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <span style={{ position: 'absolute', top: '16px', left: '16px', background: '#D9262C', color: '#fff', font: "700 13px/1 'Sofia Sans', sans-serif", padding: '10px 16px', borderRadius: '999px', pointerEvents: 'none' }}>
                      {p.cat}
                    </span>
                    <span style={{ position: 'absolute', right: '16px', bottom: '16px', background: '#fff', color: '#13243D', font: "500 12px/1 'IBM Plex Mono', monospace", padding: '10px 14px', borderRadius: '999px', pointerEvents: 'none', opacity: isHov ? 1 : 0, transition: 'opacity .3s' }}>
                      Agrandir
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', alignItems: 'baseline', padding: '0 6px' }}>
                    <span style={{ font: "700 clamp(22px,2vw,28px)/1.1 'Sofia Sans Condensed', sans-serif" }}>{p.title}</span>
                    <span style={{ font: "500 12px 'IBM Plex Mono', monospace", color: '#4A5A70', whiteSpace: 'nowrap' }}>{p.mat}</span>
                  </div>
                  <span style={{ fontSize: '15px', color: '#4A5A70', marginTop: '-6px', padding: '0 6px' }}>{p.products}</span>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {activeLbIndex !== null && filteredList[activeLbIndex] && (
        <LightboxModal
          project={filteredList[activeLbIndex]}
          onClose={() => setActiveLbIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </>
  );
}
