import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Amitié', value: 3, color: 'rgba(254, 231, 240, 1)' },
    { label: 'Amour platonique', value: 4, color: 'rgba(55, 111, 125, 1)' },
    { label: 'Romantisme', value: 2, color: 'rgba(253, 108, 158, 1)' },
    { label: 'Passion', value: 6, color: 'rgba(199, 44, 72, 1)' },
    { label: 'Aube', value: 1, color: 'rgba(255, 203, 96, 1)' },
    { label: 'Lune', value: 1, color: 'rgba(253, 241, 184, 1)' },
    { label: 'Nuit', value: 2, color: 'rgba(47, 27, 12, 1)' },
    { label: 'Enfance et adolescence', value: 2, color: 'rgba(247, 235, 253, 1)' },
    { label: 'Espoir', value: 2, color: 'rgba(234, 191, 250, 1)' },
    { label: 'Création', value: 3, color: 'rgba(220, 147, 246, 1)' },
    { label: 'Portraits', value: 1, color: 'rgba(179, 51, 233, 1)' },
    { label: 'Temps', value: 4, color: 'rgba(140, 7, 221, 1)' },
    { label: 'Etre', value: 6, color: 'rgba(105, 16, 168, 1)' },
    { label: 'Apprentissage', value: 5, color: 'rgba(70, 24, 115, 1)' },
    { label: 'Révolte', value: 1, color: 'rgba(61, 0, 102, 1)' },
    { label: 'Flore', value: 4, color: 'rgba(84, 114, 174, 1)' },
    { label: 'Ciel', value: 2, color: 'rgba(119, 181, 254, 1)' },
    { label: 'Mer', value: 1, color: 'rgba(0, 127, 255, 1)' },
    { label: 'Faune', value: 4, color: 'rgba(4, 139, 154, 1)' },
    { label: 'Musique et chant', value: 1, color: 'rgba(252, 191, 140, 1)' },
    { label: 'Toucher', value: 2, color: 'rgba(244, 114, 5, 1)' },
    { label: 'Automne', value: 4, color: 'rgba(27, 79, 8, 1)' },
    { label: 'Hiver', value: 3, color: 'rgba(24, 57, 30, 1)' },
  ];
  addPieChart('season5Pie', [data], { plugins: { title: { display: true, text: 'Cinquième Saison : Espaces de vie - De septembre 1997 à mars 1998' } } });
})();
