import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
[
    { label: '6', value: 1 },
    { label: '8', value: 6 },
    { label: '12', value: 18 },
    { label: '16', value: 8 },
    { label: '20', value: 3 },
    { label: '24', value: 2 },
    { label: '28', value: 1 },
]
  ];
    addBarChart('season21PoemLengthBar', ['Poèmes'], data, { scales: { y: { ticks: { stepSize: 1 } } } });
})();
