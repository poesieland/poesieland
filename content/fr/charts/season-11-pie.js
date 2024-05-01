import { addPieChart } from './add-chart.js'
(async function () {
  const data = [
    { label: 'Amour malheureux', value: 1, color: 'rgba(255, 194, 209, 1)' },
    { label: 'Romantisme', value: 3, color: 'rgba(255, 179, 198, 1)' },
    { label: 'Aimé (amant)', value: 1, color: 'rgba(251, 111, 146, 1)' },
    { label: 'Lune', value: 1, color: 'rgba(238, 186, 11, 1)' },
    { label: 'Crépuscule', value: 2, color: 'rgba(166, 60, 6, 1)' },
    { label: 'Nuit', value: 1, color: 'rgba(113, 0, 0, 1)' },
    { label: 'Espoir', value: 4, color: 'rgba(234, 191, 250, 1)' },
    { label: 'Création', value: 4, color: 'rgba(220, 147, 246, 1)' },
    { label: 'Foi', value: 4, color: 'rgba(203, 93, 241, 1)' },
    { label: 'Portraits', value: 1, color: 'rgba(179, 51, 233, 1)' },
    { label: 'Temps', value: 7, color: 'rgba(140, 7, 221, 1)' },
    { label: 'Etre', value: 3, color: 'rgba(105, 16, 168, 1)' },
    { label: 'Révolte', value: 1, color: 'rgba(61, 0, 102, 1)' },
    { label: 'Neige', value: 1, color: 'rgba(183, 239, 197, 1)' },
    { label: 'Flore', value: 5, color: 'rgba(146, 230, 167, 1)' },
    { label: 'Jardin et paysage', value: 3, color: 'rgba(74, 214, 109, 1)' },
    { label: 'Eau douce', value: 1, color: 'rgba(37, 162, 68, 1)' },
    { label: 'Ciel', value: 3, color: 'rgba(26, 116, 49, 1)' },
    { label: 'Mer', value: 2, color: 'rgba(16, 69, 29, 1)' },
    { label: 'Musique et chant', value: 11, color: 'rgba(63, 193, 192, 1)' },
    { label: 'Mouvement', value: 4, color: 'rgba(4, 166, 194, 1)' },
    { label: 'Toucher', value: 1, color: 'rgba(15, 128, 170, 1)' },
    { label: 'Printemps', value: 2, color: 'rgba(255, 182, 39, 1)' },
    { label: 'Eté', value: 1, color: 'rgba(255, 149, 5, 1)' },
  ];
  addPieChart('season11Pie', [data], { plugins: { title: { display: true, text: 'Onzième Saison : Perceptible - De mars à mai 1999' } } });
})();
