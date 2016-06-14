// require('../bin/runner.js');
// var nightwatch = require('../index.js');
require('C:/Users/Administrator/AppData/Roaming/npm/node_modules/nightwatch/bin/runner.js');
var nightwatch = require('C:/Users/Administrator/AppData/Roaming/npm/node_modules/nightwatch/index.js');
module.exports = {  
      '右侧商品信息栏':function(browser){ 
      console.log('right_bar,右边栏,右侧商品信息栏收藏');
      browser.resizeWindow(1024,700);
      browser.url('http://127.0.0.1:8020/mc/zc_person_index.html');
      browser.setValue('#login_user_name','sheep');//用户名
      browser.setValue('#login_user_pwd','123123');
      browser.click('#login_btn');  //点击登录
      browser.pause(10000);


      browser.click('#switherContent');
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/右侧商品_分钟.png');
      browser.assert.containsText('#table_single_chart > div.pa.t0.l0.z10.w300.p5 > div.w60.pa.mt2.ml210 > div > table > tbody','1分\n5分\n15分\n30分');
      browser.assert.attributeContains('#table_single_chart > div.pa.t0.l0.z10.w300.p5 > div.w60.pa.mt2.ml210 > div','class','list_bs bg_1 b_65');
      browser.click('#table_single_chart > div.pa.t0.l0.z10.w300.p5 > div.w60.pa.mt2.ml210 > div > table > tbody > tr:nth-child(1)');//点击1分,选择分钟后其他的颜色为灰色
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/右侧商品_1分钟.png');
      browser.assert.attributeContains('#switherContent','class','ml210 h20 z20 pl3 pt3 fs14 dib');
      browser.assert.cssClassNotPresent('#table_single_chart > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(1)','tabPopChart_focus');
      browser.assert.cssClassNotPresent('#table_single_chart > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(2)','tabPopChart_focus');
      browser.assert.cssClassNotPresent('#table_single_chart > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(3)','tabPopChart_focus');
      browser.assert.cssClassNotPresent('#table_single_chart > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(4)','tabPopChart_focus');
      browser.click('#switherContent');
      browser.pause(2000);
      browser.click('#table_single_chart > div.pa.t0.l0.z10.w300.p5 > div.w60.pa.mt2.ml210 > div > table > tbody > tr:nth-child(2)');//点击5分,选择分钟后其他的颜色为灰色
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/右侧商品_5分钟.png');
      browser.assert.attributeContains('#switherContent','class','ml210 h20 z20 pl3 pt3 fs14 dib');
      browser.assert.cssClassNotPresent('#table_single_chart > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(1)','tabPopChart_focus');
      browser.assert.cssClassNotPresent('#table_single_chart > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(2)','tabPopChart_focus');
      browser.assert.cssClassNotPresent('#table_single_chart > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(3)','tabPopChart_focus');
      browser.assert.cssClassNotPresent('#table_single_chart > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(4)','tabPopChart_focus');
      browser.click('#switherContent');
      browser.pause(2000);
      browser.click('#table_single_chart > div.pa.t0.l0.z10.w300.p5 > div.w60.pa.mt2.ml210 > div > table > tbody > tr:nth-child(3)');//点击15分,选择分钟后其他的颜色为灰色
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/右侧商品_15分钟.png');
      browser.assert.attributeContains('#switherContent','class','ml210 h20 z20 pl3 pt3 fs14 dib');
      browser.assert.cssClassNotPresent('#table_single_chart > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(1)','tabPopChart_focus');
      browser.assert.cssClassNotPresent('#table_single_chart > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(2)','tabPopChart_focus');
      browser.assert.cssClassNotPresent('#table_single_chart > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(3)','tabPopChart_focus');
      browser.assert.cssClassNotPresent('#table_single_chart > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(4)','tabPopChart_focus');
      browser.click('#switherContent');
      browser.pause(2000);
      browser.click('#table_single_chart > div.pa.t0.l0.z10.w300.p5 > div.w60.pa.mt2.ml210 > div > table > tbody > tr:nth-child(4)');//点击30分,选择分钟后其他的颜色为灰色
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/右侧商品_30分钟.png');
      browser.assert.attributeContains('#switherContent','class','ml210 h20 z20 pl3 pt3 fs14 dib');
      browser.assert.cssClassNotPresent('#table_single_chart > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(1)','tabPopChart_focus');
      browser.assert.cssClassNotPresent('#table_single_chart > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(2)','tabPopChart_focus');
      browser.assert.cssClassNotPresent('#table_single_chart > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(3)','tabPopChart_focus');
      browser.assert.cssClassNotPresent('#table_single_chart > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(4)','tabPopChart_focus');


      browser.click('#table_single_chart > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(1)');//点击分时,选择时分后其他的颜色为灰色
      browser.pause(2000);
      browser.saveScreenshot('D:/workspace/test/pic/右侧商品_分时.png');
      browser.assert.cssClassPresent('#table_single_chart > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(1)','tabPopChart_focus');
      browser.assert.attributeContains('#switherContent','class','ml210 h20 z20 pl3 pt3 fs14 dib');
      browser.assert.cssClassNotPresent('#table_single_chart > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(2)','tabPopChart_focus');
      browser.assert.cssClassNotPresent('#table_single_chart > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(3)','tabPopChart_focus');
      browser.assert.cssClassNotPresent('#table_single_chart > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(4)','tabPopChart_focus');
      browser.assert.cssClassNotPresent('#switherContent','style','background: rgb(21, 167, 250');

      browser.click('#table_single_chart > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(2)');//点击日线,选择时分后其他的颜色为灰色
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/右侧商品_日线.png');
      browser.assert.cssClassNotPresent('#table_single_chart > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(1)','tabPopChart_focus');
      browser.assert.attributeContains('#switherContent','class','ml210 h20 z20 pl3 pt3 fs14 dib');
      browser.assert.cssClassPresent('#table_single_chart > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(2)','tabPopChart_focus');
      browser.assert.cssClassNotPresent('#table_single_chart > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(3)','tabPopChart_focus');
      browser.assert.cssClassNotPresent('#table_single_chart > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(4)','tabPopChart_focus');
      browser.assert.cssClassNotPresent('#switherContent','style','background: rgb(21, 167, 250');


      browser.click('#table_single_chart > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(3)');//点击周线,选择时分后其他的颜色为灰色
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/右侧商品_周线.png');
      browser.assert.cssClassNotPresent('#table_single_chart > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(1)','tabPopChart_focus');
      browser.assert.attributeContains('#switherContent','class','ml210 h20 z20 pl3 pt3 fs14 dib');
      browser.assert.cssClassNotPresent('#table_single_chart > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(2)','tabPopChart_focus');
      browser.assert.cssClassPresent('#table_single_chart > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(3)','tabPopChart_focus');
      browser.assert.cssClassNotPresent('#table_single_chart > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(4)','tabPopChart_focus');
      browser.assert.cssClassNotPresent('#switherContent','style','background: rgb(21, 167, 250');

      browser.click('#table_single_chart > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(4)');//点击小时,选择时分后其他的颜色为灰色
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/右侧商品_小时.png');
      browser.assert.cssClassNotPresent('#table_single_chart > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(1)','tabPopChart_focus');
      browser.assert.attributeContains('#switherContent','class','ml210 h20 z20 pl3 pt3 fs14 dib');
      browser.assert.cssClassNotPresent('#table_single_chart > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(2)','tabPopChart_focus');
      browser.assert.cssClassNotPresent('#table_single_chart > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(3)','tabPopChart_focus');
      browser.assert.cssClassPresent('#table_single_chart > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(4)','tabPopChart_focus');
      browser.assert.cssClassNotPresent('#switherContent','style','background: rgb(21, 167, 250');
    },
    /*'右上角收藏图标':function(browser){
      browser.resizeWindow(1024,700);
      browser.pause(2000);
      browser.click('#table_single_detail');//五角星按钮
      browser.pause(2000);
      browser.saveScreenshot('D:/workspace/test/pic/右上角收藏_收藏.png');
      browser.click('#table_single_detail');//五角星按钮
      browser.pause(2000);
      browser.saveScreenshot('D:/workspace/test/pic/右上角收藏_取消收藏.png');
    }*/
}
