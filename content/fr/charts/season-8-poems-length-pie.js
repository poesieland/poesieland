import { addPieChart } from './add-chart.js'
(async function () {
  const data = [
    { label: '2 quatrains', value: 9, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '3 quatrains', value: 16, color: 'rgba(72, 149, 239, 0.6000000000000001)' },
    { label: '4 quatrains', value: 6, color: 'rgba(72, 149, 239, 0.7000000000000001)' },
    { label: 'Nombre de vers non multiple de quatre', value: 17, color: 'rgba(67, 97, 238, 0.9)' },
    { label: 'Pas de quatrain car rimes suivies, acrostiche découpé différemment', value: 2, color: 'rgba(67, 97, 238, 0.7)' },
  ];
  addPieChart('season8PoemLengthPie', [data], 'En quatrains ?');
})();
