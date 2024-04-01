import { addBubbleChart } from './add-chart.js'
(async function () {
  const data = [
    { x: 14, y: 12, r: 22 },
    { x: 20, y: 12, r: 2 },
    { x: 20, y: 8, r: 12 },
    { x: 14, y: 8, r: 24 },
    { x: 12, y: 12, r: 86 },
    { x: 24, y: 6, r: 7 },
    { x: 16, y: 8, r: 73 },
    { x: 16, y: 6, r: 73 },
    { x: 8, y: 6, r: 21 },
    { x: 26, y: 8, r: 1 },
    { x: 12, y: 8, r: 149 },
    { x: 16, y: 12, r: 27 },
    { x: 10, y: 12, r: 14 },
    { x: 14, y: 6, r: 7 },
    { x: 22, y: 8, r: 2 },
    { x: 16, y: 4, r: 7 },
    { x: 12, y: 6, r: 64 },
    { x: 4, y: 8, r: 5 },
    { x: 20, y: 4, r: 8 },
    { x: 28, y: 6, r: 1 },
    { x: 28, y: 8, r: 2 },
    { x: 12, y: 9, r: 3 },
    { x: 16, y: 5, r: 12 },
    { x: 16, y: 2, r: 1 },
    { x: 6, y: 6, r: 3 },
    { x: 20, y: 6, r: 20 },
    { x: 16, y: 3, r: 2 },
    { x: 20, y: 5, r: 4 },
    { x: 10, y: 6, r: 6 },
    { x: 14, y: 3, r: 1 },
    { x: 20, y: 7, r: 9 },
    { x: 16, y: 10, r: 6 },
    { x: 16, y: 7, r: 9 },
    { x: 12, y: 10, r: 11 },
    { x: 8, y: 10, r: 8 },
    { x: 10, y: 10, r: 5 },
    { x: 8, y: 8, r: 33 },
    { x: 8, y: 12, r: 29 },
    { x: 12, y: 7, r: 25 },
    { x: 10, y: 8, r: 22 },
    { x: 14, y: 7, r: 4 },
    { x: 18, y: 8, r: 6 },
    { x: 6, y: 12, r: 12 },
    { x: 12, y: 4, r: 4 },
    { x: 10, y: 7, r: 5 },
    { x: 8, y: 7, r: 10 },
    { x: 18, y: 6, r: 2 },
    { x: 6, y: 8, r: 7 },
    { x: 6, y: 5, r: 1 },
    { x: 14, y: 10, r: 3 },
    { x: 16, y: 11, r: 2 },
    { x: 8, y: 11, r: 4 },
    { x: 6, y: 14, r: 1 },
    { x: 6, y: 11, r: 3 },
    { x: 6, y: 7, r: 2 },
    { x: 12, y: 5, r: 7 },
    { x: 14, y: 11, r: 1 },
    { x: 8, y: 9, r: 1 },
    { x: 10, y: 11, r: 1 },
    { x: 24, y: 8, r: 3 },
    { x: 10, y: 5, r: 1 },
    { x: 12, y: 11, r: 4 },
    { x: 14, y: 4, r: 1 },
    { x: 8, y: 5, r: 1 },
    { x: 10, y: 14, r: 1 },
    { x: 4, y: 12, r: 4 },
    { x: 4, y: 11, r: 1 },
    { x: 4, y: 7, r: 1 },
    { x: 6, y: 9, r: 1 },
    { x: 18, y: 12, r: 1 },
    { x: 12, y: 14, r: 2 },
    { x: 4, y: 9, r: 1 },
    { x: 6, y: 10, r: 1 },
    { x: 8, y: 14, r: 1 },
    { x: 4, y: 10, r: 1 },
    { x: 16, y: 9, r: 1 },
    { x: 20, y: 3, r: 1 },
    { x: 28, y: 4, r: 1 },
    { x: 24, y: 7, r: 1 },
    { x: 20, y: 2, r: 1 },
  ];
  addBubbleChart('verseLengthByPoemLength', [data], 'Longueur des vers selon la longueur du poème');
})();
