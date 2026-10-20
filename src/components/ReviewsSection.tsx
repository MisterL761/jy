import React, { useState } from 'react';

const reviews = [
  { q: "2 chantiers avec vous avec toujours le même souci : de la définition du besoin, la réponse commerciale jusqu'à la réalisation chialée. ( chialé est peut-être du patois lorrain signifiant dans les moindres détails.) Mention spéciale aux monteurs qui sont très pros et respectueux à domicile. Bref vous pouvez les solliciter. Vous ne serez pas déçu.", who: "Serge S.", where: 'Avis Google', what: "Deux chantiers" },
  { q: "Le portail et la clôture fournis par la menuiserie Chrétien sont de très belle qualité, fidèles à notre commande, et très bien posés malgré nos murets abîmés ! Excellente qualité d'écoute, conseils judicieux. Bravo et merci !", who: "Sandra F.", where: 'Avis Google', what: "Portail et clôture" },
  { q: "Après deux réalisations effectuées avec l'entreprise Menuiserie Chrétien je recommande vivement cette entreprise. Le conseil et la qualité Des produits proposés m'ont permis d'améliorer considérablement mon isolation thermique. Très bon rapport / qualité prix. Encore merci à toute l'équipe. À bientôt pour d'autres travaux.", who: "Mickael B.", where: 'Avis Google', what: "Isolation thermique" },
  { q: "Professionnel très sérieux et à l'écoute de nos demandes et besoins. Je recommande vivement. Installation d'une porte d'entrée et porte de garage sectionnelle", who: "Virginie C.", where: 'Avis Google', what: "Porte d'entrée et porte de garage" },
  { q: "Excellent conseil, et accueil en magasin ainsi que tout le suivi administratif de notre dossier. Pose soignée. Nous sommes extrêmement satisfaits du garde corps fourni et posé par l'entreprise CHRÉTIEN.", who: "Mt54", where: 'Avis Google', what: "Garde-corps" },
  { q: "Pour faciliter passage terrasse, réfection seuil, et pose volets roulant et porte fenêtre. Rapidité, efficacité, fait selon notre demande. Merci", who: "Ivan P.", where: 'Avis Google', what: "Seuil, volets roulants et porte-fenêtre" },
  { q: "Super fenêtre et porte fenêtre plus volets solaire . Je recommande, pas déçu du résultat 👍", who: "Riquet L.", where: 'Avis Google', what: "Fenêtres, porte-fenêtre et volets solaires" },
  { q: "Très satisfaite de la pose de ma porte d'entrée. Comparé à d'autres entreprises, j'ai trouvé exactement ce que je voulais et les prix sont très raisonnables. De plus j'avais une pièce à changer sur un volet, ce qui a été fait en même temps. Poseur sympa et très professionnel.", who: "Mzd J.", where: 'Avis Google', what: "Porte d'entrée" },
  { q: "Commande et installation d'une porte de grange sectionnelle motorisée ainsi qu'une porte d'entrée. Pose rapide et sérieuse, très satisfait du travail", who: "Marchi C.", where: 'Avis Google', what: "Porte sectionnelle et porte d'entrée" },
  { q: "Pose de trois fenêtres, d'un volet électrique et d'une porte de service sécurisée par une équipe sympathique et professionnelle 👍", who: "Alexandre G.", where: 'Avis Google', what: "Fenêtres, volet électrique et porte de service" },
  { q: "Très bien à l'écoute et très bon accueil. Travail de très bonne qualité ainsi que les matériaux utilisés. Je recommande.", who: "Bruno C.", where: 'Avis Google', what: "" },
  { q: "Menuiseries avec un bon rapport qualité / prix. Travail soigné de la part des poseurs. Rien à redire", who: "Vincent D.", where: 'Avis Google', what: "Menuiseries" },
  { q: "Qualité des produits, compétent, sérieux et sympathique. Je recommande", who: "Andre T.", where: 'Avis Google', what: "" },
  { q: "Très professionnel, rapide, travail très propre. Je recommande.", who: "Aymeric G.", where: 'Avis Google', what: "" },
  { q: "Très bonne équipe, travail de professionnel, je recommande vivement.", who: "Mickael B.", where: 'Avis Google', what: "" },
  { q: "Impeccable - 10/10 - nickel", who: "Edwige N.", where: 'Avis Google', what: "" },
  { q: "Parfait. Pose impeccable.", who: "Clo K.", where: 'Avis Google', what: "Pose" },
  { q: "Tout correspond à nos attentes, merci", who: "Jean-Claude C.", where: 'Avis Google', what: "" },
  { q: "Au top ! Je recommande", who: "Thomas R.", where: 'Avis Google', what: "" }
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
            {currentRev.what && (
              <span style={{ background: '#fff', color: '#13243D', font: "600 13px/1 'Sofia Sans', sans-serif", padding: '8px 14px', borderRadius: '999px' }}>
                {currentRev.what}
              </span>
            )}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
