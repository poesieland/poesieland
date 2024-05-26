import { addBubbleChart } from './add-chart.js'
(async function () {
  const data = [
    { x: 14, y: 12, r: 8.741721854304635761589403974 },
    { x: 20, y: 12, r: 0.7947019867549668874172185430 },
    { x: 20, y: 8, r: 5.1655629139072847682119205298 },
    { x: 14, y: 8, r: 9.536423841059602649006622517 },
    { x: 12, y: 12, r: 17.682119205298013245033112583 },
    { x: 24, y: 6, r: 3.1788079470198675496688741722 },
    { x: 16, y: 8, r: 15.099337748344370860927152318 },
    { x: 16, y: 6, r: 29.801324503311258278145695364 },
    { x: 8, y: 6, r: 8.344370860927152317880794702 },
    { x: 26, y: 8, r: 0.3973509933774834437086092716 },
    { x: 12, y: 8, r: 30 },
    { x: 16, y: 12, r: 10.728476821192052980132450331 },
    { x: 10, y: 12, r: 5.5629139072847682119205298014 },
    { x: 14, y: 6, r: 3.5761589403973509933774834438 },
    { x: 22, y: 8, r: 0.7947019867549668874172185430 },
    { x: 16, y: 4, r: 3.1788079470198675496688741722 },
    { x: 12, y: 6, r: 28.609271523178807947019867550 },
    { x: 4, y: 8, r: 1.9867549668874172185430463576 },
    { x: 20, y: 4, r: 3.1788079470198675496688741722 },
    { x: 28, y: 6, r: 0.3973509933774834437086092716 },
    { x: 28, y: 8, r: 0.7947019867549668874172185430 },
    { x: 12, y: 9, r: 1.1920529801324503311258278146 },
    { x: 16, y: 5, r: 5.9602649006622516556291390728 },
    { x: 16, y: 2, r: 0.3973509933774834437086092716 },
    { x: 6, y: 6, r: 1.1920529801324503311258278146 },
    { x: 20, y: 6, r: 8.344370860927152317880794702 },
    { x: 16, y: 3, r: 0.7947019867549668874172185430 },
    { x: 20, y: 5, r: 1.589403973509933774834437086 },
    { x: 10, y: 6, r: 2.3841059602649006622516556292 },
    { x: 14, y: 3, r: 0.3973509933774834437086092716 },
    { x: 20, y: 7, r: 3.5761589403973509933774834438 },
    { x: 16, y: 10, r: 2.3841059602649006622516556292 },
    { x: 16, y: 7, r: 3.5761589403973509933774834438 },
    { x: 12, y: 10, r: 4.3708609271523178807947019868 },
    { x: 8, y: 10, r: 3.1788079470198675496688741722 },
    { x: 10, y: 10, r: 1.9867549668874172185430463576 },
    { x: 8, y: 8, r: 13.112582781456953642384105960 },
    { x: 8, y: 12, r: 11.523178807947019867549668874 },
    { x: 12, y: 7, r: 10.728476821192052980132450331 },
    { x: 10, y: 8, r: 9.139072847682119205298013245 },
    { x: 14, y: 7, r: 1.589403973509933774834437086 },
    { x: 18, y: 8, r: 2.3841059602649006622516556292 },
    { x: 6, y: 12, r: 4.7682119205298013245033112582 },
    { x: 12, y: 4, r: 1.589403973509933774834437086 },
    { x: 10, y: 7, r: 1.9867549668874172185430463576 },
    { x: 8, y: 7, r: 3.9735099337748344370860927152 },
    { x: 18, y: 6, r: 0.7947019867549668874172185430 },
    { x: 6, y: 8, r: 2.7814569536423841059602649006 },
    { x: 6, y: 5, r: 0.3973509933774834437086092716 },
    { x: 14, y: 10, r: 1.1920529801324503311258278146 },
    { x: 16, y: 11, r: 0.7947019867549668874172185430 },
    { x: 8, y: 11, r: 1.589403973509933774834437086 },
    { x: 6, y: 14, r: 0.3973509933774834437086092716 },
    { x: 6, y: 11, r: 1.1920529801324503311258278146 },
    { x: 6, y: 7, r: 0.7947019867549668874172185430 },
    { x: 12, y: 5, r: 3.5761589403973509933774834438 },
    { x: 14, y: 11, r: 0.3973509933774834437086092716 },
    { x: 8, y: 9, r: 0.3973509933774834437086092716 },
    { x: 10, y: 11, r: 0.3973509933774834437086092716 },
    { x: 24, y: 8, r: 1.589403973509933774834437086 },
    { x: 10, y: 5, r: 0.3973509933774834437086092716 },
    { x: 12, y: 11, r: 1.589403973509933774834437086 },
    { x: 14, y: 4, r: 0.3973509933774834437086092716 },
    { x: 8, y: 5, r: 0.3973509933774834437086092716 },
    { x: 10, y: 14, r: 0.3973509933774834437086092716 },
    { x: 4, y: 12, r: 1.589403973509933774834437086 },
    { x: 4, y: 11, r: 0.3973509933774834437086092716 },
    { x: 4, y: 7, r: 0.3973509933774834437086092716 },
    { x: 6, y: 9, r: 0.3973509933774834437086092716 },
    { x: 18, y: 12, r: 0.3973509933774834437086092716 },
    { x: 12, y: 14, r: 0.7947019867549668874172185430 },
    { x: 4, y: 9, r: 0.3973509933774834437086092716 },
    { x: 6, y: 10, r: 0.3973509933774834437086092716 },
    { x: 8, y: 14, r: 0.3973509933774834437086092716 },
    { x: 4, y: 10, r: 0.3973509933774834437086092716 },
    { x: 16, y: 9, r: 0.3973509933774834437086092716 },
    { x: 20, y: 3, r: 0.3973509933774834437086092716 },
    { x: 28, y: 4, r: 0.3973509933774834437086092716 },
    { x: 24, y: 7, r: 0.3973509933774834437086092716 },
    { x: 20, y: 2, r: 0.3973509933774834437086092716 },
  ];
  const borderColorsArray = ['rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(72, 149, 239, 1)','rgba(76, 201, 240, 1)','rgba(72, 149, 239, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(72, 149, 239, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)',];
  addBubbleChart('verseLengthByPoemLength', 'Longueur des vers selon la longueur du poème (en bleu plus foncé occurrence deux fois plus forte)', data, borderColorsArray, {scales: {x:{ticks:{stepSize:2}, title: {display:true, text:'Nombre de vers'}},y:{ticks:{stepSize:1}, title: {display:true, text:'Longueur du vers'}}}});
})();
