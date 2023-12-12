import { addPieChart } from './add-chart.js'
(async function () {
  const data = [
    { label: '1 quatrain', value: 12, color: 'rgba(72, 149, 239, 0.4)' },
    { label: '2 quatrains', value: 80, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '3 quatrains', value: 316, color: 'rgba(72, 149, 239, 0.6000000000000001)' },
    { label: '4 quatrains', value: 178, color: 'rgba(72, 149, 239, 0.7000000000000001)' },
    { label: '5 quatrains', value: 47, color: 'rgba(72, 149, 239, 0.8)' },
    { label: '6 quatrains', value: 7, color: 'rgba(72, 149, 239, 0.9)' },
    { label: '7 quatrains', value: 2, color: 'rgba(72, 149, 239, 1)' },
    { label: 'Nombre de vers non multiple de quatre', value: 163, color: 'rgba(67, 97, 238, 0.9)' },
    { label: 'Pas de quatrain car rimes suivies, acrostiche découpé différemment', value: 81, color: 'rgba(67, 97, 238, 0.7)' },
  ];
  addPieChart('poemLengthPie', [data], 'En quatrains ?');
})();
