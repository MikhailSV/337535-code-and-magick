'use strict';

var creatureRandomColor = function (names) {
  for (var i = 0; i < names.length; i++) {
    var colorStationIfirst = 'rgba(0, 0,';
    var colorStationIsecond = ')';
    var colorGamerStatShade = (Math.floor(Math.random() * 10)) * 0.1;
    var colorGamerStatСlarity = 215 + (Math.floor(Math.random() * 50));
    var colorStationI = colorStationIfirst + colorGamerStatСlarity + ',' + colorGamerStatShade + colorStationIsecond;
  }
  return colorStationI;
};

var drawStatistic = function (ctx, names, times) {
  var statHeight = 150;
  var statWidth = 40;
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    var name = names[i];
    var cutTime = Math.round(time / 100);

    if (name === 'Вы') {
      var colorForStatUser = 'rgba(255, 0, 0, 1)';
    } else {
      var colorForStatUser = creatureRandomColor(names);
    }

    ctx.fillStyle = colorForStatUser;
    ctx.fillRect(150 + 90 * i, (statHeight - cutTime), statWidth, cutTime + 80);

    ctx.fillStyle = '#000';
    ctx.font = '14px PT Mono';
    ctx.fillText(name, 150 + 90 * i, 250);

    ctx.fillStyle = '#000';
    ctx.font = '14px PT Mono';
    ctx.fillText(cutTime, 150 + 90 * i, (statHeight - cutTime) - 10);
  }
};

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

  drawStatistic(ctx, names, times);
};
