import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '1 quatrain', value: 13, color: 'rgba(72, 149, 239, 0.4)' },
    { label: '2 quatrains', value: 98, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '3 quatrains', value: 383, color: 'rgba(72, 149, 239, 0.6000000000000001)' },
    { label: '4 quatrains', value: 222, color: 'rgba(72, 149, 239, 0.7000000000000001)' },
    { label: '5 quatrains', value: 56, color: 'rgba(72, 149, 239, 0.8)' },
    { label: '6 quatrains', value: 13, color: 'rgba(72, 149, 239, 0.9)' },
    { label: '7 quatrains', value: 3, color: 'rgba(72, 149, 239, 1)' },
    { label: 'Nombre de vers non multiple de quatre', value: 167, color: 'rgba(67, 97, 238, 0.9)' },
    { label: 'Rimes suivies ou acrostiche découpé différemment', value: 35, color: 'rgba(67, 97, 238, 0.7)' },
  ];
  addPieChart('poemLengthPie', [data], { plugins: { title: { display: true, text: 'En quatrains ?' } } });
})();
