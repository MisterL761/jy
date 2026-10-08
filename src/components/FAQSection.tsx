import React, { useState } from 'react';

const faqData = [
  { q: 'Le devis est-il vraiment gratuit ?', a: 'Oui. Nous nous déplaçons chez vous pour prendre les mesures et étudier le projet, puis nous vous remettons un devis détaillé, sans engagement.' },
  { q: 'Faut-il refaire la maçonnerie pour changer mes fenêtres ?', a: 'Pas forcément. En rénovation, la pose sur le dormant existant évite les travaux de maçonnerie quand il est sain. Si ce n\'est pas le cas, nous faisons une dépose totale. Nous vous conseillons la bonne solution lors de la visite.' },
  { q: 'Aluminium, PVC ou bois : que choisir ?', a: 'Chaque matériau a ses atouts : le PVC pour son rapport qualité-prix et son entretien facile, l\'aluminium pour la finesse des profils et les grandes baies, le bois pour son charme et l\'harmonie avec les maisons anciennes. Nous comparons les options avec vous, selon votre maison et votre budget.' },
  { q: 'Quels sont les délais ?', a: 'Les menuiseries sont fabriquées sur mesure : le délai dépend des produits et de la saison. Il est indiqué sur le devis, et nous fixons la date de pose avec vous dès la réception de la commande.' },
  { q: 'Combien de temps dure la pose ?', a: 'Pour une maison, la pose des fenêtres prend généralement une à quelques journées. Nous protégeons les sols, évacuons les anciennes menuiseries et laissons les lieux propres.' },
  { q: 'Puis-je bénéficier d\'aides financières ?', a: 'Certains travaux d\'isolation, comme le remplacement de fenêtres simple vitrage, peuvent ouvrir droit à des aides selon votre situation. Nous vous fournissons les documents nécessaires à vos démarches.' },
  { q: 'Intervenez-vous dans ma commune ?', a: 'Nous intervenons autour de Dieulouard, entre Nancy, Metz, Pont-à-Mousson et Toul. Consultez la carte ci-dessus ou appelez-nous pour vérifier.' }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" data-screen-label="FAQ" style={{ maxWidth: '1400px', margin: '0 auto', padding: 'clamp(80px,9vw,140px) clamp(20px,4vw,56px) 0' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,4fr) minmax(0,8fr)', gap: 'clamp(28px,4vw,64px)', alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', position: 'sticky', top: '120px' }}>
          <span style={{ font: "500 12px 'IBM Plex Mono', monospace", letterSpacing: '.08em', color: '#2F70B4', textTransform: 'uppercase' }}>07 — Questions fréquentes</span>
          <h2 style={{ margin: 0, font: "700 clamp(36px,3.6vw,54px)/.98 'Sofia Sans Condensed', sans-serif", textWrap: 'balance' }}>Vos questions avant de vous lancer</h2>
          <div style={{ width: '120px', height: '6px', background: '#2F70B4', borderRadius: '6px' }}></div>
          <p style={{ margin: 0, color: '#34465E' }}>
            Une autre question ? Appelez-nous au <a href="tel:+33383241772" style={{ color: '#13243D', fontWeight: 700 }}>03 83 24 17 72</a> ou passez au showroom.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {faqData.map((x, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} style={{ background: isOpen ? '#F3F7FB' : '#fff', borderRadius: '22px', transition: 'background .25s' }}>
                <button
                  onClick={() => toggle(i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '20px',
                    padding: '22px 26px',
                    background: 'none',
                    border: 0,
                    cursor: 'pointer',
                    textAlign: 'left',
                    color: '#13243D'
                  }}
                >
                  <span style={{ font: "700 clamp(20px,1.8vw,24px)/1.15 'Sofia Sans Condensed', sans-serif" }}>{x.q}</span>
                  <span
                    style={{
                      flexShrink: 0,
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: isOpen ? '#2F70B4' : '#F3F7FB',
                      color: isOpen ? '#fff' : '#13243D',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      font: "600 20px/1 'Sofia Sans', sans-serif",
                      transition: 'transform .25s, background .25s, color .25s',
                      transform: isOpen ? 'rotate(45deg)' : 'none'
                    }}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p style={{ margin: 0, padding: '0 26px 24px', maxWidth: '720px', color: '#34465E', textWrap: 'pretty' }}>
                    {x.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
