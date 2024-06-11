import { addRadarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Janvier', value: 1 },
    { label: '', value: 3 },
    { label: '', value: 4 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 2 },
    { label: '', value: 3 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: 'Février', value: 2 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 2 },
    { label: '', value: 2 },
    { label: '', value: 2 },
    { label: '', value: 2 },
    { label: '', value: 2 },
    { label: '', value: 3 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 3 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: 'Mars', value: 3 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 2 },
    { label: '', value: 0 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: 'Printemps', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 2 },
    { label: '', value: 5 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 2 },
    { label: 'Avril', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 3 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 3 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 0 },
    { label: '', value: 3 },
    { label: '', value: 3 },
    { label: '', value: 0 },
    { label: '', value: 3 },
    { label: '', value: 4 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: 'Mai', value: 3 },
    { label: '', value: 1 },
    { label: '', value: 3 },
    { label: '', value: 3 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 3 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 2 },
    { label: '', value: 0 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 4 },
    { label: '', value: 2 },
    { label: '', value: 4 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 6 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: 'Juin', value: 3 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 4 },
    { label: '', value: 3 },
    { label: '', value: 5 },
    { label: '', value: 0 },
    { label: '', value: 2 },
    { label: '', value: 3 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: 'Eté', value: 2 },
    { label: '', value: 0 },
    { label: '', value: 2 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: 'Juillet', value: 0 },
    { label: '', value: 5 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 3 },
    { label: '', value: 3 },
    { label: '', value: 2 },
    { label: '', value: 3 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 3 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 2 },
    { label: '', value: 5 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 3 },
    { label: '', value: 2 },
    { label: '', value: 0 },
    { label: '', value: 3 },
    { label: '', value: 2 },
    { label: '', value: 4 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 2 },
    { label: '', value: 3 },
    { label: 'Août', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 3 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 0 },
    { label: '', value: 2 },
    { label: '', value: 3 },
    { label: '', value: 5 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 3 },
    { label: '', value: 5 },
    { label: '', value: 3 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 2 },
    { label: '', value: 2 },
    { label: '', value: 5 },
    { label: 'Septembre', value: 2 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 4 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 3 },
    { label: '', value: 2 },
    { label: '', value: 2 },
    { label: '', value: 3 },
    { label: '', value: 5 },
    { label: '', value: 0 },
    { label: '', value: 3 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 2 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 3 },
    { label: '', value: 2 },
    { label: '', value: 3 },
    { label: '', value: 0 },
    { label: 'Automne', value: 1 },
    { label: '', value: 4 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 3 },
    { label: 'Octobre', value: 2 },
    { label: '', value: 5 },
    { label: '', value: 2 },
    { label: '', value: 2 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 3 },
    { label: '', value: 3 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 2 },
    { label: '', value: 3 },
    { label: '', value: 1 },
    { label: 'Novembre', value: 3 },
    { label: '', value: 3 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 2 },
    { label: '', value: 4 },
    { label: '', value: 1 },
    { label: '', value: 3 },
    { label: '', value: 2 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: 'Décembre', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 3 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 3 },
    { label: '', value: 2 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: 'Hiver', value: 2 },
    { label: '', value: 0 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 3 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
  ];
  addRadarChart('poemDay-philosophieRadar', ['Poèmes selon le jour de l\'année'], [data], { backgroundColor: 'rgba(220, 147, 246, 0.5)', borderColor: 'rgba(220, 147, 246, 1)', pointBackgroundColor: 'rgba(220, 147, 246, 1)', pointBorderColor: '#fff', pointHoverBackgroundColor: '#fff', pointHoverBorderColor: 'rgb(54, 162, 235)', elements: { line: { borderWidth: 1  } }, scales: { r: { ticks: { stepSize: 1 } } } });
})();
