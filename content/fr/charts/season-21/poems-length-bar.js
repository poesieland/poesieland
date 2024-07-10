import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
[
    { label: '8', value: 3 },
    { label: '12', value: 8 },
    { label: '16', value: 2 },
    { label: '20', value: 1 },
]
  ];
    addBarChart('season21PoemLengthBar', ['Poèmes'], data, { scales: { y: { ticks: { stepSize: 1 } } } });
})();
