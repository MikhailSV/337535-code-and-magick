'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.strokeRect(110, 20, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 110, 25);
  ctx.fillText('Список результатов', 110, 40);

  var statHeight = 240;
  var statWidth = 40;
  for (var i = 0; i < names.length; i++) {
    var time = times[i];
    var name = names[i];
    var colorGamerStatA = (Math.floor(Math.random() * 10)) * 0.1;
    var colorGamerStatB = (Math.floor(Math.random() * 255));

    if (name === 'Вы') {
      var colorStationI = 'rgba(255, 0, 0, 1)';
    } else {
      var colorStationI = '"rgba(0, 0,' + colorGamerStatB + ',' + colorGamerStatA + ')"';

    }
    ctx.fillStyle = colorStationI;
    ctx.fillRect(150 + 90 * i, statHeight - Math.round(time), statWidth, Math.round(time));

    ctx.fillStyle = '#000';
    ctx.font = '14px PT Mono';
    ctx.fillText(name, 150 + 90 * i, 260);

    ctx.fillStyle = '#000';
    ctx.font = '14px PT Mono';
    ctx.fillText(Math.round(time), 150 + 90 * i, (statHeight - Math.round(time)) - 10);
  }
};
