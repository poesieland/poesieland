import { addBubbleChart } from '../add-chart.js'
(async function () {
  const data = [
    { x: 12, y: 14, r: 8.627450980392156862745098039 },
    { x: 12, y: 20, r: 0.7843137254901960784313725490 },
    { x: 8, y: 20, r: 5.0980392156862745098039215686 },
    { x: 8, y: 14, r: 9.411764705882352941176470588 },
    { x: 12, y: 12, r: 17.647058823529411764705882353 },
    { x: 6, y: 24, r: 3.137254901960784313725490196 },
    { x: 8, y: 16, r: 29.803921568627450980392156862 },
    { x: 6, y: 16, r: 15.882352941176470588235294118 },
    { x: 6, y: 8, r: 8.235294117647058823529411765 },
    { x: 8, y: 26, r: 0.3921568627450980392156862746 },
    { x: 8, y: 12, r: 30 },
    { x: 12, y: 16, r: 10.588235294117647058823529412 },
    { x: 12, y: 10, r: 5.4901960784313725490196078432 },
    { x: 6, y: 14, r: 3.5294117647058823529411764706 },
    { x: 8, y: 22, r: 0.7843137254901960784313725490 },
    { x: 4, y: 16, r: 3.5294117647058823529411764706 },
    { x: 6, y: 12, r: 15.882352941176470588235294118 },
    { x: 8, y: 4, r: 1.9607843137254901960784313726 },
    { x: 4, y: 20, r: 3.137254901960784313725490196 },
    { x: 6, y: 28, r: 0.3921568627450980392156862746 },
    { x: 8, y: 28, r: 0.7843137254901960784313725490 },
    { x: 9, y: 12, r: 1.568627450980392156862745098 },
    { x: 5, y: 16, r: 6.6666666666666666666666666666 },
    { x: 2, y: 16, r: 0.3921568627450980392156862746 },
    { x: 6, y: 6, r: 1.1764705882352941176470588236 },
    { x: 6, y: 20, r: 8.235294117647058823529411765 },
    { x: 3, y: 16, r: 0.7843137254901960784313725490 },
    { x: 5, y: 20, r: 1.568627450980392156862745098 },
    { x: 6, y: 10, r: 2.3529411764705882352941176470 },
    { x: 3, y: 14, r: 0.3921568627450980392156862746 },
    { x: 7, y: 20, r: 3.5294117647058823529411764706 },
    { x: 10, y: 16, r: 2.3529411764705882352941176470 },
    { x: 7, y: 16, r: 3.5294117647058823529411764706 },
    { x: 10, y: 12, r: 4.3137254901960784313725490196 },
    { x: 10, y: 8, r: 3.137254901960784313725490196 },
    { x: 10, y: 10, r: 1.9607843137254901960784313726 },
    { x: 8, y: 8, r: 13.333333333333333333333333333 },
    { x: 12, y: 8, r: 12.156862745098039215686274510 },
    { x: 7, y: 12, r: 10.980392156862745098039215686 },
    { x: 8, y: 10, r: 9.019607843137254901960784314 },
    { x: 7, y: 14, r: 1.568627450980392156862745098 },
    { x: 8, y: 18, r: 2.3529411764705882352941176470 },
    { x: 12, y: 6, r: 4.7058823529411764705882352942 },
    { x: 4, y: 12, r: 1.568627450980392156862745098 },
    { x: 7, y: 10, r: 1.9607843137254901960784313726 },
    { x: 7, y: 8, r: 3.9215686274509803921568627450 },
    { x: 6, y: 18, r: 0.7843137254901960784313725490 },
    { x: 8, y: 6, r: 2.7450980392156862745098039216 },
    { x: 5, y: 6, r: 0.3921568627450980392156862746 },
    { x: 10, y: 14, r: 1.1764705882352941176470588236 },
    { x: 11, y: 16, r: 0.7843137254901960784313725490 },
    { x: 11, y: 8, r: 1.568627450980392156862745098 },
    { x: 14, y: 6, r: 0.3921568627450980392156862746 },
    { x: 11, y: 6, r: 1.1764705882352941176470588236 },
    { x: 7, y: 6, r: 0.7843137254901960784313725490 },
    { x: 5, y: 12, r: 4.7058823529411764705882352942 },
    { x: 11, y: 14, r: 0.3921568627450980392156862746 },
    { x: 9, y: 8, r: 0.3921568627450980392156862746 },
    { x: 11, y: 10, r: 0.3921568627450980392156862746 },
    { x: 8, y: 24, r: 1.568627450980392156862745098 },
    { x: 5, y: 10, r: 0.3921568627450980392156862746 },
    { x: 11, y: 12, r: 1.568627450980392156862745098 },
    { x: 4, y: 14, r: 0.3921568627450980392156862746 },
    { x: 5, y: 8, r: 0.3921568627450980392156862746 },
    { x: 14, y: 10, r: 0.3921568627450980392156862746 },
    { x: 12, y: 4, r: 1.568627450980392156862745098 },
    { x: 11, y: 4, r: 0.3921568627450980392156862746 },
    { x: 7, y: 4, r: 0.3921568627450980392156862746 },
    { x: 9, y: 6, r: 0.3921568627450980392156862746 },
    { x: 12, y: 18, r: 0.3921568627450980392156862746 },
    { x: 14, y: 12, r: 0.7843137254901960784313725490 },
    { x: 9, y: 4, r: 0.3921568627450980392156862746 },
    { x: 10, y: 6, r: 0.3921568627450980392156862746 },
    { x: 14, y: 8, r: 0.3921568627450980392156862746 },
    { x: 10, y: 4, r: 0.3921568627450980392156862746 },
    { x: 9, y: 16, r: 0.3921568627450980392156862746 },
    { x: 3, y: 20, r: 0.3921568627450980392156862746 },
    { x: 4, y: 28, r: 0.3921568627450980392156862746 },
    { x: 7, y: 24, r: 0.3921568627450980392156862746 },
    { x: 2, y: 20, r: 0.3921568627450980392156862746 },
    { x: 2, y: 12, r: 0.3921568627450980392156862746 },
    { x: 4, y: 8, r: 0.3921568627450980392156862746 },
  ];
  const borderColorsArray = ['rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(72, 149, 239, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(72, 149, 239, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(72, 149, 239, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(72, 149, 239, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)',];
  addBubbleChart('poemLengthByVerseLength', 'Longueur du poème selon la longueur du vers (en bleu plus foncé occurrence deux fois plus forte)', data, borderColorsArray, {scales: {x:{ticks:{stepSize:1}, title: {display:true, text:'Longueur du vers'}},y:{ticks:{stepSize:2}, title: {display:true, text:'Nombre de vers'}}}});
})();
