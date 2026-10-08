import React, { useState } from 'react';

const reviews = [
  { q: 'Le devis était clair, la pose s\'est faite en deux jours comme prévu et l\'équipe a laissé la maison propre. On sent la différence dans le séjour dès les premiers froids.', who: 'M. et Mme L.', where: '', what: 'Fenêtres PVC' },
  { q: 'De bons conseils pour choisir la porte d\'entrée, sans pousser vers le plus cher. Un réglage a été refait quelques semaines après, sans que j\'aie à relancer.', who: 'Sophie R.', where: '', what: 'Porte d\'entrée aluminium' },
  { q: 'Portail motorisé et clôture posés ensemble. Chantier bien organisé, et un interlocuteur joignable du premier rendez-vous jusqu\'à la mise en service.', who: 'Didier M.', where: '', what: 'Portail et clôture' }
];

export default function ReviewsSection() {
  const [revIndex, setRevIndex] = useState(0);

  const prevRev = () => {
    setRevIndex((revIndex + reviews.length - 1) % reviews.length);
  };

  const nextRev = () => {
    setRevIndex((revIndex + 1) % reviews.length);
  };

  const currentRev = reviews[revIndex];

  return (
    <section id="avis" data-screen-label="Avis" style={{ maxWidth: '1400px', margin: '0 auto', padding: 'clamp(80px,9vw,140px) clamp(20px,4vw,56px) 0' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,3fr) minmax(0,9fr)', gap: 'clamp(24px,4vw,64px)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <span style={{ font: "500 12px 'IBM Plex Mono', monospace", letterSpacing: '.08em', color: '#2F70B4', textTransform: 'uppercase' }}>06 — Avis clients</span>
          <h2 style={{ margin: 0, font: "700 clamp(34px,3.2vw,48px)/.98 'Sofia Sans Condensed', sans-serif" }}>Ce qu'en disent nos clients</h2>
          <div style={{ width: '120px', height: '6px', background: '#2F70B4', borderRadius: '6px' }}></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '8px' }}>
            <button
              onClick={prevRev}
              aria-label="Avis précédent"
              style={{ width: '46px', height: '46px', borderRadius: '50%', border: '1px solid #13243D', background: '#fff', cursor: 'pointer', color: '#13243D', transition: 'background 0.2s, color 0.2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#13243D'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#13243D'; }}
            >
              ←
            </button>
            <span style={{ font: "500 12px 'IBM Plex Mono', monospace" }}>
              {revIndex + 1} / {reviews.length}
            </span>
            <button
              onClick={nextRev}
              aria-label="Avis suivant"
              style={{ width: '46px', height: '46px', borderRadius: '50%', border: '1px solid #13243D', background: '#fff', cursor: 'pointer', color: '#13243D', transition: 'background 0.2s, color 0.2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#13243D'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#13243D'; }}
            >
              →
            </button>
          </div>
        </div>

        <figure style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: '32px', background: '#F3F7FB', borderRadius: '32px', padding: 'clamp(28px,4vw,56px)' }}>
          <blockquote style={{ margin: 0, font: "500 clamp(28px,3.2vw,46px)/1.12 'Sofia Sans Condensed', sans-serif", textWrap: 'pretty', minHeight: '3.4em' }}>
            « {currentRev.q} »
          </blockquote>
          <figcaption style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ font: "700 17px 'Sofia Sans', sans-serif" }}>{currentRev.who}</span>
            {currentRev.where && <span style={{ font: "500 12px 'IBM Plex Mono', monospace", color: '#4A5A70' }}>{currentRev.where}</span>}
            <span style={{ background: '#fff', color: '#13243D', font: "600 13px/1 'Sofia Sans', sans-serif", padding: '8px 14px', borderRadius: '999px' }}>
              {currentRev.what}
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
