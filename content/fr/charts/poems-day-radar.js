import { addRadarChart } from './add-chart.js'
(async function () {
  const data = [
    { label: 'Janvier', value: 3 },
    { label: '', value: 3 },
    { label: '', value: 5 },
    { label: '', value: 6 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 3 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 2 },
    { label: '', value: 3 },
    { label: '', value: 2 },
    { label: '', value: 3 },
    { label: '', value: 3 },
    { label: '', value: 2 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 5 },
    { label: '', value: 2 },
    { label: '', value: 3 },
    { label: '', value: 3 },
    { label: '', value: 3 },
    { label: '', value: 1 },
    { label: '', value: 4 },
    { label: '', value: 4 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 3 },
    { label: 'Février', value: 5 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 3 },
    { label: '', value: 1 },
    { label: '', value: 3 },
    { label: '', value: 2 },
    { label: '', value: 2 },
    { label: '', value: 3 },
    { label: '', value: 3 },
    { label: '', value: 2 },
    { label: '', value: 2 },
    { label: '', value: 3 },
    { label: '', value: 3 },
    { label: '', value: 3 },
    { label: '', value: 1 },
    { label: '', value: 4 },
    { label: '', value: 4 },
    { label: '', value: 2 },
    { label: '', value: 4 },
    { label: '', value: 6 },
    { label: '', value: 0 },
    { label: '', value: 3 },
    { label: '', value: 1 },
    { label: '', value: 5 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: 'Mars', value: 3 },
    { label: '', value: 2 },
    { label: '', value: 6 },
    { label: '', value: 3 },
    { label: '', value: 4 },
    { label: '', value: 1 },
    { label: '', value: 3 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 3 },
    { label: '', value: 2 },
    { label: '', value: 5 },
    { label: '', value: 2 },
    { label: '', value: 5 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: 'Printemps', value: 2 },
    { label: '', value: 3 },
    { label: '', value: 2 },
    { label: '', value: 2 },
    { label: '', value: 6 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 3 },
    { label: '', value: 3 },
    { label: 'Avril', value: 4 },
    { label: '', value: 2 },
    { label: '', value: 4 },
    { label: '', value: 3 },
    { label: '', value: 3 },
    { label: '', value: 3 },
    { label: '', value: 2 },
    { label: '', value: 0 },
    { label: '', value: 3 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 2 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 4 },
    { label: '', value: 1 },
    { label: '', value: 4 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 3 },
    { label: '', value: 4 },
    { label: '', value: 0 },
    { label: '', value: 7 },
    { label: '', value: 4 },
    { label: '', value: 2 },
    { label: '', value: 5 },
    { label: '', value: 3 },
    { label: 'Mai', value: 6 },
    { label: '', value: 3 },
    { label: '', value: 5 },
    { label: '', value: 4 },
    { label: '', value: 4 },
    { label: '', value: 0 },
    { label: '', value: 4 },
    { label: '', value: 3 },
    { label: '', value: 1 },
    { label: '', value: 7 },
    { label: '', value: 4 },
    { label: '', value: 3 },
    { label: '', value: 3 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 6 },
    { label: '', value: 4 },
    { label: '', value: 5 },
    { label: '', value: 5 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 6 },
    { label: '', value: 2 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 3 },
    { label: '', value: 3 },
    { label: 'Juin', value: 5 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 0 },
    { label: '', value: 3 },
    { label: '', value: 5 },
    { label: '', value: 5 },
    { label: '', value: 3 },
    { label: '', value: 3 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 6 },
    { label: '', value: 2 },
    { label: '', value: 4 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 3 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 4 },
    { label: 'Eté', value: 2 },
    { label: '', value: 2 },
    { label: '', value: 3 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 3 },
    { label: '', value: 2 },
    { label: '', value: 2 },
    { label: '', value: 2 },
    { label: '', value: 3 },
    { label: 'Juillet', value: 3 },
    { label: '', value: 6 },
    { label: '', value: 3 },
    { label: '', value: 2 },
    { label: '', value: 3 },
    { label: '', value: 3 },
    { label: '', value: 5 },
    { label: '', value: 5 },
    { label: '', value: 4 },
    { label: '', value: 3 },
    { label: '', value: 3 },
    { label: '', value: 3 },
    { label: '', value: 4 },
    { label: '', value: 3 },
    { label: '', value: 2 },
    { label: '', value: 3 },
    { label: '', value: 4 },
    { label: '', value: 5 },
    { label: '', value: 0 },
    { label: '', value: 2 },
    { label: '', value: 3 },
    { label: '', value: 5 },
    { label: '', value: 4 },
    { label: '', value: 4 },
    { label: '', value: 2 },
    { label: '', value: 4 },
    { label: '', value: 3 },
    { label: '', value: 4 },
    { label: '', value: 2 },
    { label: '', value: 2 },
    { label: '', value: 3 },
    { label: 'Août', value: 2 },
    { label: '', value: 2 },
    { label: '', value: 3 },
    { label: '', value: 1 },
    { label: '', value: 4 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 6 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 3 },
    { label: '', value: 4 },
    { label: '', value: 4 },
    { label: '', value: 3 },
    { label: '', value: 6 },
    { label: '', value: 6 },
    { label: '', value: 6 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 6 },
    { label: '', value: 5 },
    { label: '', value: 5 },
    { label: '', value: 4 },
    { label: '', value: 1 },
    { label: '', value: 3 },
    { label: '', value: 5 },
    { label: '', value: 4 },
    { label: '', value: 6 },
    { label: 'Septembre', value: 5 },
    { label: '', value: 0 },
    { label: '', value: 4 },
    { label: '', value: 5 },
    { label: '', value: 4 },
    { label: '', value: 4 },
    { label: '', value: 5 },
    { label: '', value: 5 },
    { label: '', value: 3 },
    { label: '', value: 3 },
    { label: '', value: 6 },
    { label: '', value: 5 },
    { label: '', value: 4 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 3 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 4 },
    { label: '', value: 4 },
    { label: '', value: 5 },
    { label: '', value: 1 },
    { label: 'Automne', value: 2 },
    { label: '', value: 4 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 3 },
    { label: '', value: 4 },
    { label: 'Octobre', value: 4 },
    { label: '', value: 6 },
    { label: '', value: 2 },
    { label: '', value: 2 },
    { label: '', value: 3 },
    { label: '', value: 3 },
    { label: '', value: 2 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 4 },
    { label: '', value: 4 },
    { label: '', value: 2 },
    { label: '', value: 3 },
    { label: '', value: 0 },
    { label: '', value: 2 },
    { label: '', value: 3 },
    { label: '', value: 2 },
    { label: '', value: 2 },
    { label: '', value: 2 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 3 },
    { label: '', value: 3 },
    { label: '', value: 4 },
    { label: '', value: 0 },
    { label: '', value: 2 },
    { label: '', value: 3 },
    { label: '', value: 3 },
    { label: '', value: 2 },
    { label: 'Novembre', value: 6 },
    { label: '', value: 5 },
    { label: '', value: 4 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 5 },
    { label: '', value: 3 },
    { label: '', value: 3 },
    { label: '', value: 0 },
    { label: '', value: 4 },
    { label: '', value: 5 },
    { label: '', value: 2 },
    { label: '', value: 5 },
    { label: '', value: 3 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 4 },
    { label: '', value: 2 },
    { label: '', value: 4 },
    { label: '', value: 3 },
    { label: '', value: 3 },
    { label: '', value: 2 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 3 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: 'Décembre', value: 2 },
    { label: '', value: 4 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 3 },
    { label: '', value: 2 },
    { label: '', value: 2 },
    { label: '', value: 3 },
    { label: '', value: 2 },
    { label: '', value: 0 },
    { label: '', value: 2 },
    { label: '', value: 2 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 4 },
    { label: '', value: 2 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: 'Hiver', value: 3 },
    { label: '', value: 0 },
    { label: '', value: 2 },
    { label: '', value: 3 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 3 },
    { label: '', value: 0 },
    { label: '', value: 3 },
    { label: '', value: 1 },
  ];
  addRadarChart('poemDayRadar', ['Poèmes selon le jour de l\'année'], [data], { backgroundColor: 'rgba(76, 201, 240)', borderColor: 'rgba(0, 0, 0, 0.1)', pointBackgroundColor: 'rgba(0, 0, 0, 0.1)', pointBorderColor: '#fff', pointHoverBackgroundColor: '#fff', pointHoverBorderColor: 'rgb(54, 162, 235)', elements: { line: { borderWidth: 1  } }, scales: { r: { ticks: { stepSize: 1 } } } });
})();
