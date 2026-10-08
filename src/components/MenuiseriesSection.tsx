import React, { useState, useEffect } from 'react';

const productsData = [
  { n: '01', key: 'Fenêtres', name: 'Fenêtres', mats: ['PVC', 'Aluminium', 'Bois'], typesLabel: 'OUVERTURES', types: ['Battantes', 'Oscillo-battantes', 'Coulissantes', 'Fixes et châssis à soufflet'], desc: 'Des fenêtres fabriquées sur mesure après relevé précis de chaque ouverture. En rénovation, nous choisissons avec vous entre la pose sur dormant existant et la dépose totale, selon l\'état des menuiseries et le résultat attendu.', img: '/assets/fenetre-cuisine.webp', img2: '/assets/fenetre-produit.webp' },
  { n: '02', key: 'Baie vitrée', name: 'Baies & portes-fenêtres', mats: ['Aluminium', 'PVC', 'Bois'], typesLabel: 'OUVERTURES', types: ['Coulissants 2, 3 ou 4 vantaux', 'Galandage', 'Portes-fenêtres battantes'], desc: 'Pour ouvrir le séjour sur le jardin ou la terrasse. Les grandes dimensions demandent une étude attentive des appuis, des seuils et du vitrage : nous la faisons sur place.', img: '/assets/baie-vitree.webp', img2: '/assets/porte-fenetre.jpeg' },
  { n: '03', key: 'Porte d\'entrée', name: 'Portes d\'entrée', mats: ['Aluminium', 'Bois'], typesLabel: 'CONFIGURATIONS', types: ['Pleines ou vitrées', 'Avec tierce ou imposte', 'Serrure multipoints, barre de tirage'], desc: 'La porte d\'entrée donne le ton de la façade. Nous vous aidons à choisir le modèle, la couleur et les accessoires, puis nous la posons avec les réglages et l\'étanchéité qu\'elle mérite.', img: '/assets/porte-entree-alu.jpg', img2: '/assets/porte-entree-2.jpeg' },
  { n: '04', key: 'Volets', name: 'Volets', mats: ['Aluminium', 'PVC', 'Bois'], typesLabel: 'TYPES', types: ['Volets roulants filaires ou solaires', 'Volets battants', 'Motorisation de volets existants'], desc: 'Volets roulants intégrés ou en rénovation, volets battants traditionnels : pour l\'isolation, la sécurité et le confort d\'été.', img: '/assets/volet-battant.jpg', img2: '/assets/volet-roulant.jpg' },
  { n: '05', key: 'Store banne', name: 'Stores bannes', mats: ['Aluminium', 'Toile'], typesLabel: 'TYPES', types: ['Stores bannes coffres', 'Stores monoblocs', 'Manuels ou motorisés'], desc: 'Un store banne protège la terrasse du soleil et garde la maison plus fraîche. Nous choisissons avec vous la toile, la couleur et l\'avancée adaptées à votre façade.', img: '/assets/store-banne-1.jpg', img2: '/assets/store-banne-2b.jpg' },
  { n: '06', key: 'Porte de garage', name: 'Portes de garage', mats: ['Acier', 'Aluminium', 'Bois'], typesLabel: 'TYPES', types: ['Sectionnelles', 'Enroulables', 'Battantes ou basculantes'], desc: 'Portes isolées et motorisées, assorties à la porte d\'entrée et aux fenêtres pour une façade cohérente.', img: '/assets/porte-garage-1.jpg', img2: '/assets/porte-garage-2.jpg' },
  { n: '07', key: 'Portail / clôture', name: 'Portails & clôtures', mats: ['Aluminium', 'PVC'], typesLabel: 'TYPES', types: ['Portails battants', 'Portails coulissants', 'Portillons, clôtures, motorisation'], desc: 'Portails, portillons et clôtures dessinés ensemble, avec motorisation et contrôle d\'accès si vous le souhaitez.', img: '/assets/portail-1.jpg', img2: '/assets/cloture-1.jpg' },
  { n: '08', key: 'Garde-corps', name: 'Garde-corps', mats: ['Aluminium', 'Verre', 'Inox'], typesLabel: 'USAGES', types: ['Balcons et terrasses', 'Escaliers', 'Fenêtres basses'], desc: 'Des garde-corps sûrs et discrets, à barreaudage ou vitrés, adaptés à la façade et aux normes en vigueur.', img: '/assets/garde-corps-1.jpg', img2: '/assets/garde-corps-2.jpg' }
];

export default function MenuiseriesSection() {
  const [prodActive, setProdActive] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      let activeIndex = 0;
      productsData.forEach((p, i) => {
        const el = document.getElementById('produit-' + p.n);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.45) {
          activeIndex = i;
        }
      });
      setProdActive(activeIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="menuiseries" data-screen-label="Menuiseries" style={{ maxWidth: '1400px', margin: '0 auto', padding: 'clamp(80px, 9vw, 140px) clamp(20px, 4vw, 56px) 0' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 3fr) minmax(0, 9fr)', gap: 'clamp(32px, 5vw, 72px)', alignItems: 'start' }}>
        
        {/* Sticky Nav */}
        <aside style={{ position: 'sticky', top: '120px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
          <span style={{ font: "500 12px 'IBM Plex Mono', monospace", letterSpacing: '.08em', color: '#2F70B4', textTransform: 'uppercase' }}>01 — Menuiseries</span>
          <h2 style={{ margin: 0, font: "700 clamp(38px, 3.8vw, 58px)/.95 'Sofia Sans Condensed', sans-serif" }}>Ce que nous posons</h2>
          <div style={{ width: '120px', height: '6px', background: '#2F70B4', borderRadius: '6px' }}></div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '8px' }}>
            {productsData.map((p, i) => {
              const isActive = i === prodActive;
              return (
                <a
                  key={p.n}
                  href={`#produit-${p.n}`}
                  style={{
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'center',
                    padding: '10px 14px',
                    borderRadius: '999px',
                    background: isActive ? '#13243D' : 'transparent',
                    color: isActive ? '#fff' : '#13243D',
                    font: "600 15px/1.2 'Sofia Sans', sans-serif",
                    transition: 'background .25s, color .25s'
                  }}
                >
                  <span style={{ font: "500 11px 'IBM Plex Mono', monospace", opacity: 0.75 }}>{p.n}</span>
                  <span>{p.name}</span>
                </a>
              );
            })}
          </nav>
        </aside>

        {/* Products Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(72px, 8vw, 120px)' }}>
          {productsData.map((p, i) => (
            <article key={p.n} id={`produit-${p.n}`} style={{ scrollMarginTop: '120px', display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <div style={{ position: 'relative', flex: '1 1 0', minWidth: 0, height: 'clamp(320px, 32vw, 460px)', background: '#F3F7FB', borderRadius: '24px', overflow: 'hidden', order: i % 2 ? 2 : 1 }}>
                  <img src={p.img} alt={`Photo : ${p.name}`} style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
                </div>
                <div style={{ position: 'relative', flex: '1 1 0', minWidth: 0, height: 'clamp(320px, 32vw, 460px)', background: '#F3F7FB', borderRadius: '24px', overflow: 'hidden', order: i % 2 ? 1 : 2 }}>
                  <img src={p.img2} alt={`Détail : ${p.name}`} style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 6fr) minmax(0, 5fr)', gap: 'clamp(24px, 4vw, 56px)', alignItems: 'start' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <span style={{ font: "500 12px 'IBM Plex Mono', monospace", color: '#2F70B4' }}>
                    {p.n} / {String(productsData.length).padStart(2, '0')}
                  </span>
                  <h3 style={{ margin: 0, font: "700 clamp(34px, 3.4vw, 52px)/.98 'Sofia Sans Condensed', sans-serif" }}>{p.name}</h3>
                  <p style={{ margin: 0, color: '#34465E', textWrap: 'pretty' }}>{p.desc}</p>
                  <a
                    href="#contact"
                    style={{
                      alignSelf: 'flex-start',
                      marginTop: '6px',
                      display: 'flex',
                      gap: '10px',
                      alignItems: 'center',
                      border: '1px solid #13243D',
                      color: '#13243D',
                      padding: '13px 20px',
                      borderRadius: '999px',
                      font: "700 15px/1 'Sofia Sans', sans-serif",
                      transition: 'background 0.2s, color 0.2s'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = '#13243D'; e.currentTarget.style.color = '#fff'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#13243D'; }}
                  >
                    Nous contacter pour ce produit →
                  </a>
                </div>

                <dl style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: '18px', padding: '22px 24px', background: '#F3F7FB', borderRadius: '20px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <dt style={{ font: "500 11px 'IBM Plex Mono', monospace", color: '#2F70B4' }}>MATÉRIAUX</dt>
                    <dd style={{ margin: 0, display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                      {p.mats.map((m) => (
                        <span key={m} style={{ background: '#fff', border: '1px solid #D5DFEA', padding: '7px 12px', borderRadius: '999px', font: "600 13px/1 'Sofia Sans', sans-serif" }}>
                          {m}
                        </span>
                      ))}
                    </dd>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <dt style={{ font: "500 11px 'IBM Plex Mono', monospace", color: '#2F70B4' }}>{p.typesLabel}</dt>
                    <dd style={{ margin: 0, display: 'flex', flexDirection: 'column' }}>
                      {p.types.map((t) => (
                        <span key={t} style={{ fontSize: '15px', padding: '7px 0', borderBottom: '1px solid #D5DFEA' }}>
                          {t}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
