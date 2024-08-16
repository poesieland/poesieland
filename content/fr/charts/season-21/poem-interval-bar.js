import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Moins d\'un jour', value: 8, color: 'rgba(72, 149, 239, 1)' },
    { label: 'Un jour', value: 19, color: 'rgba(72, 149, 239, 0.9)' },
    { label: '2j', value: 1, color: 'rgba(72, 149, 239, 0.7)' },
    { label: '3j', value: 1, color: 'rgba(72, 149, 239, 0.7)' },
    { label: '4j', value: 4, color: 'rgba(72, 149, 239, 0.7)' },
    { label: '5j', value: 2, color: 'rgba(72, 149, 239, 0.7)' },
  ];
    addBarChart('season21PoemIntervalBar', ['Fréquence'], [data], { scales: { y: { ticks: { stepSize: 1 } } } });
})();
