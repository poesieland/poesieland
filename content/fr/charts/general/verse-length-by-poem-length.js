import { addBubbleChart } from '../add-chart.js'
(async function () {
  const data = [
    { x: 14, y: 12, r: 8.098159509202453987730061350 },
    { x: 20, y: 12, r: 0.7361963190184049079754601226 },
    { x: 20, y: 8, r: 5.1533742331288343558282208588 },
    { x: 14, y: 8, r: 8.834355828220858895705521472 },
    { x: 12, y: 12, r: 16.932515337423312883435582822 },
    { x: 24, y: 6, r: 2.9447852760736196319018404908 },
    { x: 16, y: 8, r: 29.815950920245398773006134970 },
    { x: 16, y: 6, r: 15.276073619631901840490797546 },
    { x: 8, y: 6, r: 8.098159509202453987730061350 },
    { x: 26, y: 8, r: 0.3680981595092024539877300614 },
    { x: 12, y: 8, r: 30 },
    { x: 16, y: 12, r: 10.306748466257668711656441718 },
    { x: 10, y: 12, r: 5.1533742331288343558282208588 },
    { x: 14, y: 6, r: 3.3128834355828220858895705522 },
    { x: 22, y: 8, r: 0.7361963190184049079754601226 },
    { x: 16, y: 4, r: 2.9447852760736196319018404908 },
    { x: 12, y: 6, r: 16.196319018404907975460122699 },
    { x: 4, y: 8, r: 1.8404907975460122699386503068 },
    { x: 20, y: 4, r: 3.3128834355828220858895705522 },
    { x: 28, y: 6, r: 0.7361963190184049079754601226 },
    { x: 28, y: 8, r: 0.7361963190184049079754601226 },
    { x: 12, y: 9, r: 1.8404907975460122699386503068 },
    { x: 16, y: 5, r: 6.9938650306748466257668711656 },
    { x: 16, y: 3, r: 1.104294478527607361963190184 },
    { x: 16, y: 2, r: 0.3680981595092024539877300614 },
    { x: 6, y: 6, r: 1.104294478527607361963190184 },
    { x: 20, y: 6, r: 7.7300613496932515337423312884 },
    { x: 20, y: 5, r: 1.4723926380368098159509202454 },
    { x: 10, y: 6, r: 2.208588957055214723926380368 },
    { x: 14, y: 3, r: 0.3680981595092024539877300614 },
    { x: 20, y: 7, r: 3.3128834355828220858895705522 },
    { x: 16, y: 10, r: 2.208588957055214723926380368 },
    { x: 16, y: 7, r: 3.6809815950920245398773006134 },
    { x: 12, y: 10, r: 4.0490797546012269938650306748 },
    { x: 8, y: 10, r: 2.9447852760736196319018404908 },
    { x: 10, y: 10, r: 1.8404907975460122699386503068 },
    { x: 8, y: 8, r: 13.619631901840490797546012270 },
    { x: 8, y: 12, r: 12.515337423312883435582822086 },
    { x: 12, y: 7, r: 11.411042944785276073619631902 },
    { x: 10, y: 8, r: 9.202453987730061349693251534 },
    { x: 14, y: 7, r: 1.4723926380368098159509202454 },
    { x: 18, y: 8, r: 2.208588957055214723926380368 },
    { x: 6, y: 12, r: 4.7852760736196319018404907976 },
    { x: 12, y: 4, r: 2.208588957055214723926380368 },
    { x: 10, y: 7, r: 1.8404907975460122699386503068 },
    { x: 8, y: 7, r: 3.6809815950920245398773006134 },
    { x: 18, y: 6, r: 0.7361963190184049079754601226 },
    { x: 6, y: 8, r: 2.5766871165644171779141104294 },
    { x: 6, y: 5, r: 0.3680981595092024539877300614 },
    { x: 14, y: 10, r: 1.104294478527607361963190184 },
    { x: 16, y: 11, r: 0.7361963190184049079754601226 },
    { x: 8, y: 11, r: 1.4723926380368098159509202454 },
    { x: 6, y: 14, r: 0.3680981595092024539877300614 },
    { x: 6, y: 11, r: 1.104294478527607361963190184 },
    { x: 6, y: 7, r: 0.7361963190184049079754601226 },
    { x: 12, y: 5, r: 4.4171779141104294478527607362 },
    { x: 14, y: 11, r: 0.3680981595092024539877300614 },
    { x: 8, y: 9, r: 0.3680981595092024539877300614 },
    { x: 10, y: 11, r: 0.3680981595092024539877300614 },
    { x: 24, y: 8, r: 1.4723926380368098159509202454 },
    { x: 10, y: 5, r: 0.3680981595092024539877300614 },
    { x: 12, y: 11, r: 1.4723926380368098159509202454 },
    { x: 14, y: 4, r: 0.3680981595092024539877300614 },
    { x: 8, y: 5, r: 0.7361963190184049079754601226 },
    { x: 10, y: 14, r: 0.3680981595092024539877300614 },
    { x: 4, y: 12, r: 1.4723926380368098159509202454 },
    { x: 4, y: 11, r: 0.3680981595092024539877300614 },
    { x: 4, y: 7, r: 0.3680981595092024539877300614 },
    { x: 6, y: 9, r: 0.3680981595092024539877300614 },
    { x: 18, y: 12, r: 0.3680981595092024539877300614 },
    { x: 12, y: 14, r: 0.7361963190184049079754601226 },
    { x: 4, y: 9, r: 0.3680981595092024539877300614 },
    { x: 6, y: 10, r: 0.3680981595092024539877300614 },
    { x: 8, y: 14, r: 0.3680981595092024539877300614 },
    { x: 4, y: 10, r: 0.3680981595092024539877300614 },
    { x: 16, y: 9, r: 0.3680981595092024539877300614 },
    { x: 20, y: 3, r: 0.3680981595092024539877300614 },
    { x: 28, y: 4, r: 0.3680981595092024539877300614 },
    { x: 24, y: 7, r: 0.3680981595092024539877300614 },
    { x: 20, y: 2, r: 0.7361963190184049079754601226 },
    { x: 12, y: 2, r: 0.3680981595092024539877300614 },
    { x: 8, y: 4, r: 0.3680981595092024539877300614 },
    { x: 24, y: 4, r: 0.7361963190184049079754601226 },
  ];
  const borderColorsArray = ['rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(72, 149, 239, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(72, 149, 239, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(72, 149, 239, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(72, 149, 239, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)',];
  addBubbleChart('verseLengthByPoemLength', 'Longueur des vers selon la longueur du poème (en bleu plus foncé occurrence deux fois plus forte)', data, borderColorsArray, {scales: {x:{ticks:{stepSize:2}, title: {display:true, text:'Nombre de vers'}},y:{ticks:{stepSize:1}, title: {display:true, text:'Longueur du vers'}}}});
})();
