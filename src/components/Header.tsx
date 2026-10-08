import React, { useState, useEffect } from 'react';

const products = [
  { n: '01', name: 'Fenêtres', mat: 'PVC · Aluminium · Bois', anchor: 'produit-01' },
  { n: '02', name: 'Baies & portes-fenêtres', mat: 'Aluminium · PVC · Bois', anchor: 'produit-02' },
  { n: '03', name: 'Portes d\'entrée', mat: 'Aluminium · Bois', anchor: 'produit-03' },
  { n: '04', name: 'Volets', mat: 'Aluminium · PVC · Bois', anchor: 'produit-04' },
  { n: '05', name: 'Stores bannes', mat: 'Aluminium · Toile', anchor: 'produit-05' },
  { n: '06', name: 'Portes de garage', mat: 'Acier · Aluminium · Bois', anchor: 'produit-06' },
  { n: '07', name: 'Portails & clôtures', mat: 'Aluminium · PVC', anchor: 'produit-07' },
  { n: '08', name: 'Garde-corps', mat: 'Aluminium · Verre · Inox', anchor: 'produit-08' },
];

interface HeaderProps {
  currentPath?: string;
}

export default function Header({ currentPath = '/' }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [wide, setWide] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setWide(window.innerWidth >= 1200);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Top Banner */}
      <div style={{ background: '#13243D', color: '#fff', font: "500 12px/1 'IBM Plex Mono', monospace", letterSpacing: '.04em' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '10px clamp(20px, 4vw, 56px)', display: 'flex', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
          <span>Menuisier poseur à Dieulouard · Pont-à-Mousson, Frouard, Nomeny et alentours</span>
          <span style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <span>Lun – Ven 9h – 17h30</span>
            <span>Devis gratuit à domicile</span>
          </span>
        </div>
      </div>

      {/* Header */}
      <header onMouseLeave={closeMenu} style={{ position: 'sticky', top: 0, zIndex: 40, background: '#fff', borderBottom: '1px solid #D5DFEA' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '14px clamp(20px, 4vw, 56px)', display: 'flex', alignItems: 'center', gap: 'clamp(20px, 3vw, 40px)', minHeight: '92px' }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <img src="/assets/logo-jy-chretien.jpeg" alt="Menuiserie JY Chrétien" style={{ height: '62px', width: 'auto', display: 'block' }} />
          </a>

          <nav style={{ display: 'flex', gap: 'clamp(16px, 2.2vw, 30px)', alignItems: 'center', flex: 1, minWidth: 0, overflow: 'hidden', font: "600 15px/1 'Sofia Sans', sans-serif", flexWrap: 'nowrap', whiteSpace: 'nowrap' }}>
            <button
              onMouseEnter={openMenu}
              onClick={openMenu}
              style={{ background: 'none', border: 0, padding: 0, cursor: 'pointer', color: '#13243D', fontWeight: 600, display: 'flex', gap: '6px', alignItems: 'center' }}
            >
              Menuiseries <span style={{ fontSize: '10px', color: '#2F70B4' }}>▼</span>
            </button>

            <a
              href="/realisations"
              style={{
                color: currentPath === '/realisations' ? '#2F70B4' : '#13243D',
                borderBottom: currentPath === '/realisations' ? '2px solid #2F70B4' : 'none',
                paddingBottom: currentPath === '/realisations' ? '4px' : '0'
              }}
            >
              Réalisations
            </a>

            <a
              href="/qualifications"
              style={{
                color: currentPath === '/qualifications' ? '#2F70B4' : '#13243D',
                borderBottom: currentPath === '/qualifications' ? '2px solid #2F70B4' : 'none',
                paddingBottom: currentPath === '/qualifications' ? '4px' : '0'
              }}
            >
              Qualifications
            </a>

            <a
              href="/societe"
              style={{
                color: currentPath === '/societe' ? '#2F70B4' : '#13243D',
                borderBottom: currentPath === '/societe' ? '2px solid #2F70B4' : 'none',
                paddingBottom: currentPath === '/societe' ? '4px' : '0'
              }}
            >
              La société
            </a>

            {wide && (
              <a href="/#avis" style={{ color: '#13243D' }}>
                Avis clients
              </a>
            )}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '22px', flexShrink: 0 }}>
            {wide && (
              <a href="tel:+33383241772" style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1, color: '#13243D', whiteSpace: 'nowrap' }}>
                <span style={{ font: "500 11px 'IBM Plex Mono', monospace", color: '#4A5A70', letterSpacing: '.04em' }}>Appelez-nous</span>
                <span style={{ font: "700 20px 'Sofia Sans Condensed', sans-serif", letterSpacing: '.02em' }}>03 83 24 17 72</span>
              </a>
            )}

            <a
              href="#contact"
              style={{ whiteSpace: 'nowrap', background: '#D9262C', color: '#fff', padding: '15px 24px', borderRadius: '999px', font: "700 15px/1 'Sofia Sans', sans-serif", transition: 'background 0.2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#B81E24'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#D9262C'; }}
            >
              Contactez-nous
            </a>
          </div>
        </div>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div
            onMouseEnter={openMenu}
            style={{
              position: 'absolute',
              left: 'clamp(12px, 2vw, 28px)',
              right: 'clamp(12px, 2vw, 28px)',
              top: 'calc(100% + 8px)',
              background: '#fff',
              borderRadius: '24px',
              border: '1px solid #D5DFEA',
              boxShadow: '0 30px 60px -30px rgba(19, 36, 61, 0.35)',
              overflow: 'hidden'
            }}
          >
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '28px 36px 32px', display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '6px 28px' }}>
              {products.map((p) => (
                <a
                  key={p.n}
                  href={`/#${p.anchor}`}
                  onClick={closeMenu}
                  style={{ display: 'flex', gap: '14px', alignItems: 'baseline', padding: '14px 12px', borderRadius: '14px', color: '#13243D', transition: 'background 0.2s, color 0.2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#F3F7FB'; e.currentTarget.style.color = '#2F70B4'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#13243D'; }}
                >
                  <span style={{ font: "500 12px 'IBM Plex Mono', monospace", color: '#2F70B4' }}>{p.n}</span>
                  <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <span style={{ font: "700 22px/1.1 'Sofia Sans Condensed', sans-serif" }}>{p.name}</span>
                    <span style={{ fontSize: '13px', color: '#4A5A70' }}>{p.mat}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
