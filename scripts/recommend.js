'use strict';
const rcmd = require('menu-7-11');
module.exports = (robot) => {
    robot.hear(/menu>/i, (msg) => {
        const username = msg.message.user.name;
        const menuname = rcmd.recommend();
        msg.send(username + ' さん、' + '今日のおすすめメニューは ' + menuname + ' です！');
    });
};