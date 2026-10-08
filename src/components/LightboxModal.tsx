import React, { useEffect } from 'react';

export interface ProjectItem {
  id: string;
  cat: string;
  title: string;
  products: string;
  mat: string;
  img?: string;
  src?: string;
}

interface LightboxModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function LightboxModal({ project, onClose, onPrev, onNext }: LightboxModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose, onPrev, onNext]);

  if (!project) return null;

  const imageSrc = project.src || `/assets/realisations/${project.id}.jpg`;

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(19,36,61,.55)', padding: 'clamp(10px,2vw,28px)', display: 'flex' }}>
      <div style={{ flex: 1, background: '#fff', borderRadius: '32px', overflow: 'hidden', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 400px' }}>
        
        {/* Left Image Box */}
        <div style={{ display: 'flex', flexDirection: 'column', padding: '20px', gap: '14px', minHeight: 0 }}>
          <div style={{ position: 'relative', flex: 1, minHeight: 0, background: '#E6EEF7', borderRadius: '22px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={imageSrc} alt={project.title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
            <button
              onClick={onPrev}
              aria-label="Réalisation précédente"
              style={{ position: 'absolute', left: '16px', top: '50%', marginTop: '-26px', width: '52px', height: '52px', borderRadius: '50%', border: 0, background: '#fff', color: '#13243D', fontSize: '20px', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
            >
              ←
            </button>
            <button
              onClick={onNext}
              aria-label="Réalisation suivante"
              style={{ position: 'absolute', right: '16px', top: '50%', marginTop: '-26px', width: '52px', height: '52px', borderRadius: '50%', border: 0, background: '#fff', color: '#13243D', fontSize: '20px', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
            >
              →
            </button>
          </div>
        </div>

        {/* Right Info Box */}
        <aside style={{ padding: '28px 32px', display: 'flex', flexDirection: 'column', gap: '22px', overflow: 'auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ background: '#D9262C', color: '#fff', font: "700 13px/1 'Sofia Sans', sans-serif", padding: '10px 16px', borderRadius: '999px' }}>
              {project.cat}
            </span>
            <button
              onClick={onClose}
              style={{ background: '#F3F7FB', border: 0, width: '46px', height: '46px', borderRadius: '50%', cursor: 'pointer', color: '#13243D', fontSize: '16px' }}
              aria-label="Fermer"
            >
              ✕
            </button>
          </div>

          <h3 style={{ margin: 0, font: "700 44px/.98 'Sofia Sans Condensed', sans-serif" }}>{project.title}</h3>
          <div style={{ width: '80px', height: '6px', background: '#2F70B4', borderRadius: '6px' }}></div>

          <dl style={{ margin: 0, display: 'flex', flexDirection: 'column', background: '#F3F7FB', borderRadius: '20px', padding: '6px 18px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '12px', padding: '12px 0', borderBottom: '1px solid #D5DFEA' }}>
              <dt style={{ font: "500 11px 'IBM Plex Mono', monospace", color: '#2F70B4', paddingTop: '3px' }}>CATÉGORIE</dt>
              <dd style={{ margin: 0, fontSize: '15px' }}>{project.cat}</dd>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '12px', padding: '12px 0', borderBottom: '1px solid #D5DFEA' }}>
              <dt style={{ font: "500 11px 'IBM Plex Mono', monospace", color: '#2F70B4', paddingTop: '3px' }}>PRODUITS</dt>
              <dd style={{ margin: 0, fontSize: '15px' }}>{project.products}</dd>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '12px', padding: '12px 0', borderBottom: '1px solid #D5DFEA' }}>
              <dt style={{ font: "500 11px 'IBM Plex Mono', monospace", color: '#2F70B4', paddingTop: '3px' }}>MATÉRIAU</dt>
              <dd style={{ margin: 0, fontSize: '15px' }}>{project.mat}</dd>
            </div>
          </dl>

          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
            <button
              onClick={onPrev}
              style={{ background: 'none', border: '1px solid #13243D', borderRadius: '999px', padding: '12px 16px', font: "700 14px/1 'Sofia Sans', sans-serif", color: '#13243D', cursor: 'pointer' }}
            >
              ← Projet précédent
            </button>
            <button
              onClick={onNext}
              style={{ background: 'none', border: '1px solid #13243D', borderRadius: '999px', padding: '12px 16px', font: "700 14px/1 'Sofia Sans', sans-serif", color: '#13243D', cursor: 'pointer' }}
            >
              Projet suivant →
            </button>
          </div>

          <a
            href="#contact"
            onClick={onClose}
            style={{ marginTop: 'auto', background: '#D9262C', color: '#fff', padding: '18px 22px', borderRadius: '999px', font: "700 16px/1 'Sofia Sans', sans-serif", textAlign: 'center', transition: 'background 0.2s' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#B81E24'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#D9262C'; }}
          >
            Un projet similaire ? Contactez-nous
          </a>
        </aside>

      </div>
    </div>
  );
}
