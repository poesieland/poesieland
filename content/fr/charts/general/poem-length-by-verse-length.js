import { addBubbleChart } from '../add-chart.js'
(async function () {
  const data = [
    { x: 12, y: 14, r: 8.354430379746835443037974684 },
    { x: 12, y: 20, r: 0.7594936708860759493670886076 },
    { x: 8, y: 20, r: 5.3164556962025316455696202532 },
    { x: 8, y: 14, r: 9.113924050632911392405063291 },
    { x: 12, y: 12, r: 17.468354430379746835443037975 },
    { x: 6, y: 24, r: 3.0379746835443037974683544304 },
    { x: 8, y: 16, r: 15 },
    { x: 6, y: 16, r: 15.569620253164556962025316456 },
    { x: 6, y: 8, r: 8.354430379746835443037974684 },
    { x: 8, y: 26, r: 0.3797468354430379746835443038 },
    { x: 8, y: 12, r: 30 },
    { x: 12, y: 16, r: 10.632911392405063291139240506 },
    { x: 12, y: 10, r: 5.3164556962025316455696202532 },
    { x: 6, y: 14, r: 3.4177215189873417721518987342 },
    { x: 8, y: 22, r: 0.7594936708860759493670886076 },
    { x: 4, y: 16, r: 3.0379746835443037974683544304 },
    { x: 6, y: 12, r: 16.329113924050632911392405063 },
    { x: 8, y: 4, r: 1.8987341772151898734177215190 },
    { x: 4, y: 20, r: 3.0379746835443037974683544304 },
    { x: 6, y: 28, r: 0.7594936708860759493670886076 },
    { x: 8, y: 28, r: 0.7594936708860759493670886076 },
    { x: 9, y: 12, r: 1.8987341772151898734177215190 },
    { x: 5, y: 16, r: 7.2151898734177215189873417722 },
    { x: 3, y: 16, r: 1.1392405063291139240506329114 },
    { x: 2, y: 16, r: 0.3797468354430379746835443038 },
    { x: 6, y: 6, r: 1.1392405063291139240506329114 },
    { x: 6, y: 20, r: 7.974683544303797468354430380 },
    { x: 5, y: 20, r: 1.5189873417721518987341772152 },
    { x: 6, y: 10, r: 2.2784810126582278481012658228 },
    { x: 3, y: 14, r: 0.3797468354430379746835443038 },
    { x: 7, y: 20, r: 3.4177215189873417721518987342 },
    { x: 10, y: 16, r: 2.2784810126582278481012658228 },
    { x: 7, y: 16, r: 3.797468354430379746835443038 },
    { x: 10, y: 12, r: 4.1772151898734177215189873418 },
    { x: 10, y: 8, r: 3.0379746835443037974683544304 },
    { x: 10, y: 10, r: 1.8987341772151898734177215190 },
    { x: 8, y: 8, r: 13.670886075949367088607594937 },
    { x: 12, y: 8, r: 12.531645569620253164556962025 },
    { x: 7, y: 12, r: 11.772151898734177215189873418 },
    { x: 8, y: 10, r: 8.734177215189873417721518987 },
    { x: 7, y: 14, r: 1.5189873417721518987341772152 },
    { x: 8, y: 18, r: 2.2784810126582278481012658228 },
    { x: 12, y: 6, r: 4.9367088607594936708860759494 },
    { x: 4, y: 12, r: 1.8987341772151898734177215190 },
    { x: 7, y: 10, r: 1.8987341772151898734177215190 },
    { x: 7, y: 8, r: 3.797468354430379746835443038 },
    { x: 6, y: 18, r: 0.7594936708860759493670886076 },
    { x: 8, y: 6, r: 2.6582278481012658227848101266 },
    { x: 5, y: 6, r: 0.3797468354430379746835443038 },
    { x: 10, y: 14, r: 1.1392405063291139240506329114 },
    { x: 11, y: 16, r: 0.7594936708860759493670886076 },
    { x: 11, y: 8, r: 1.5189873417721518987341772152 },
    { x: 14, y: 6, r: 0.3797468354430379746835443038 },
    { x: 11, y: 6, r: 1.1392405063291139240506329114 },
    { x: 7, y: 6, r: 0.7594936708860759493670886076 },
    { x: 5, y: 12, r: 4.5569620253164556962025316456 },
    { x: 11, y: 14, r: 0.3797468354430379746835443038 },
    { x: 9, y: 8, r: 0.3797468354430379746835443038 },
    { x: 11, y: 10, r: 0.3797468354430379746835443038 },
    { x: 8, y: 24, r: 1.5189873417721518987341772152 },
    { x: 5, y: 10, r: 0.3797468354430379746835443038 },
    { x: 11, y: 12, r: 1.5189873417721518987341772152 },
    { x: 4, y: 14, r: 0.3797468354430379746835443038 },
    { x: 5, y: 8, r: 0.7594936708860759493670886076 },
    { x: 14, y: 10, r: 0.3797468354430379746835443038 },
    { x: 12, y: 4, r: 1.5189873417721518987341772152 },
    { x: 11, y: 4, r: 0.3797468354430379746835443038 },
    { x: 7, y: 4, r: 0.3797468354430379746835443038 },
    { x: 9, y: 6, r: 0.3797468354430379746835443038 },
    { x: 12, y: 18, r: 0.3797468354430379746835443038 },
    { x: 14, y: 12, r: 0.7594936708860759493670886076 },
    { x: 9, y: 4, r: 0.3797468354430379746835443038 },
    { x: 10, y: 6, r: 0.3797468354430379746835443038 },
    { x: 14, y: 8, r: 0.3797468354430379746835443038 },
    { x: 10, y: 4, r: 0.3797468354430379746835443038 },
    { x: 9, y: 16, r: 0.3797468354430379746835443038 },
    { x: 3, y: 20, r: 0.3797468354430379746835443038 },
    { x: 4, y: 28, r: 0.3797468354430379746835443038 },
    { x: 7, y: 24, r: 0.3797468354430379746835443038 },
    { x: 2, y: 20, r: 0.7594936708860759493670886076 },
    { x: 2, y: 12, r: 0.3797468354430379746835443038 },
    { x: 4, y: 8, r: 0.3797468354430379746835443038 },
    { x: 4, y: 24, r: 0.7594936708860759493670886076 },
  ];
  const borderColorsArray = ['rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(72, 149, 239, 1)','rgba(76, 201, 240, 1)','rgba(72, 149, 239, 1)','rgba(72, 149, 239, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(72, 149, 239, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(72, 149, 239, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)',];
  addBubbleChart('poemLengthByVerseLength', 'Longueur du poème selon la longueur du vers (en bleu plus foncé occurrence deux fois plus forte)', data, borderColorsArray, {scales: {x:{ticks:{stepSize:1}, title: {display:true, text:'Longueur du vers'}},y:{ticks:{stepSize:2}, title: {display:true, text:'Nombre de vers'}}}});
})();
