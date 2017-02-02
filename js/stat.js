'use strict';

var createRandomColor = function ( ) {
    var colorStatUserfirst = 'rgba(0, 0,';
    var colorStatUsersecond = ')';
    var colorGamerStatShade = (Math.floor(Math.random() * 10)) * 0.1;
    var colorGamerStatСlarity = 215 + (Math.floor(Math.random() * 50));
    var colorStatUser = colorStatUserfirst + colorGamerStatСlarity + ',' + colorGamerStatShade + colorStatUsersecond;
  return colorStatUser;
};

var drawStatistic = function (ctx, names, times) {
  var statHeight = 150;
  var statWidth = 40;
  var maxTime = Math.max.apply(Math, times);
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    var name = names[i];
    var pesentMaxStat = time / maxTime
    var startStatPoint = 230;
    var endStatPoint = startStatPoint - statHeight * pesentMaxStat
    var heightStat = startStatPoint - endStatPoint;
    if (name === 'Вы') {
      var colorForStatUser = 'rgba(255, 0, 0, 1)';
    } else {
      var colorForStatUser = createRandomColor(names);
    }

    ctx.fillStyle = colorForStatUser;
    ctx.fillRect(150 + 90 * i, endStatPoint, statWidth, heightStat);

    ctx.fillStyle = '#000';
    ctx.font = '14px PT Mono';
    ctx.fillText(name, 150 + 90 * i, 250);

    ctx.fillStyle = '#000';
    ctx.font = '14px PT Mono';
    ctx.fillText(Math.round(time), 150 + 90 * i, endStatPoint - 10);
  }
};

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.strokeRect(110, 20, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 110, 40);
  ctx.fillText('Список результатов', 110, 55);

  drawStatistic(ctx, names, times);
};
