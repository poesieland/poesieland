import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '5', value: 5 },
    { label: '6', value: 11 },
    { label: '7', value: 1 },
    { label: '8', value: 3 },
    { label: '12', value: 3 },
    { label: '2, 7', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '6, 3', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '8, 6', value: 1, color: 'rgba(72, 149, 239, 1)' },
  ];
    addBarChart('season20VerseLengthBar', ['Poèmes'], [data], { scales: { y: { ticks: { stepSize: 1 } } } });
})();
