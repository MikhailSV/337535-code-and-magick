'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.strokeRect(110, 20, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 110, 45);
  ctx.fillText('Список результатов', 110, 60);

  var statHeight = 150;
  var statWidth = 40;
  var colorStationIfirs = 'rgba(0, 0,';
  var colorStationIsecond = ')';
  for (var i = 0; i < names.length; i++) {
    var time = times[i];
    var name = names[i];
    var colorGamerStatA = (Math.floor(Math.random() * 10)) * 0.1;
    var colorGamerStatB = 255 - (Math.floor(Math.random() * 50));
    if (name === 'Вы') {
      var colorStationI = 'rgba(255, 0, 0, 1)';
    } else {
      var colorStationI = colorStationIfirs + colorGamerStatB + ',' + colorGamerStatA + colorStationIsecond;

    }
    var catTime = Math.round(time / 100)

    ctx.fillStyle = colorStationI;
    ctx.fillRect(150 + 90 * i, (statHeight - catTime), statWidth, catTime + 80);

    ctx.fillStyle = '#000';
    ctx.font = '14px PT Mono';
    ctx.fillText(name, 150 + 90 * i, 250);

    ctx.fillStyle = '#000';
    ctx.font = '14px PT Mono';
    ctx.fillText(catTime, 150 + 90 * i, (statHeight - catTime) - 10);
  }
};
