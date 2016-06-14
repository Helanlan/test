require('C:/Users/Administrator/AppData/Roaming/npm/node_modules/nightwatch/bin/runner.js');
var nightwatch = require('C:/Users/Administrator/AppData/Roaming/npm/node_modules/nightwatch/index.js');
module.exports = {  
    '底边栏产品设置':function(browser){
      console.log('blow_bar,底边栏产品设置,时区设置');
      browser.resizeWindow(1024,700);
      browser.url('http://127.0.0.1:8020/mc/zc_person_index.html');
      browser.setValue('#login_user_name','sheep');//用户名
      browser.setValue('#login_user_pwd','123123');
      browser.click('#login_btn');  //点击登录
      browser.pause(10000);

      browser.click('#iStyle1');//点击底边栏第一个产品
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/底边栏产品设置_商品信息.png');
      browser.assert.containsText('#miniDiagram-container > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul','分时日线周线小时');
      browser.assert.cssClassPresent('#miniDiagram-container > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(1)','tabPopChart_focus');
      browser.assert.cssClassNotPresent('#miniDiagram-container > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(2)','tabPopChart_focus');
      browser.assert.cssClassNotPresent('#miniDiagram-container > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(3)','tabPopChart_focus');
      browser.assert.cssClassNotPresent('#miniDiagram-container > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(4)','tabPopChart_focus');
      browser.click('#miniDiagram-container > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(2)');//点击日线
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/底边栏产品设置_日线.png');
      browser.assert.cssClassNotPresent('#miniDiagram-container > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(1)','tabPopChart_focus');
      browser.assert.cssClassPresent('#miniDiagram-container > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(2)','tabPopChart_focus');
      browser.assert.cssClassNotPresent('#miniDiagram-container > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(3)','tabPopChart_focus');
      browser.assert.cssClassNotPresent('#miniDiagram-container > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(4)','tabPopChart_focus');

      browser.click('#miniDiagram-container > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(3)');//点击周线
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/底边栏产品设置_周线.png');
      browser.assert.cssClassNotPresent('#miniDiagram-container > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(1)','tabPopChart_focus');
      browser.assert.cssClassNotPresent('#miniDiagram-container > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(2)','tabPopChart_focus');
      browser.assert.cssClassPresent('#miniDiagram-container > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(3)','tabPopChart_focus');
      browser.assert.cssClassNotPresent('#miniDiagram-container > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(4)','tabPopChart_focus');

      browser.click('#miniDiagram-container > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(4)');//点击小时
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/底边栏产品设置_小时.png');
      browser.assert.cssClassNotPresent('#miniDiagram-container > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(1)','tabPopChart_focus');
      browser.assert.cssClassNotPresent('#miniDiagram-container > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(2)','tabPopChart_focus');
      browser.assert.cssClassNotPresent('#miniDiagram-container > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(3)','tabPopChart_focus');
      browser.assert.cssClassPresent('#miniDiagram-container > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(4)','tabPopChart_focus');
      browser.pause(2000);
      browser.click('#miniDiagram-container > div.pa.t0.l0.z10.w300.p5 > div.cp > span');//点击分钟按钮
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/底边栏产品设置_分钟下拉栏.png');
      browser.pause(2000);
      browser.assert.containsText('#miniDiagram-container > div.pa.t0.l0.z10.w300.p5 > div.w60.pa.mt2.ml210 > div > table > tbody','1分\n5分\n15分\n30分');
      browser.pause(2000);
      browser.click('#miniDiagram-container > div.pa.t0.l0.z10.w300.p5 > div.w60.pa.mt2.ml210 > div > table > tbody > tr:nth-child(1)');//点击1分
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/底边栏产品设置_1分钟.png');
      browser.assert.attributeContains('#switherContent','class','ml210 h20 z20 pl3 pt3 fs14 dib');
      browser.assert.cssClassNotPresent('#table_single_chart > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(2)','tabPopChart_focus');
      browser.assert.cssClassNotPresent('#table_single_chart > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(3)','tabPopChart_focus');
      browser.assert.cssClassNotPresent('#table_single_chart > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(4)','tabPopChart_focus');

      browser.click('#miniDiagram-container > div.pa.t0.l0.z10.w300.p5 > div.cp > span');//点击分钟按钮
      browser.pause(2000);
      browser.click('#miniDiagram-container > div.pa.t0.l0.z10.w300.p5 > div.w60.pa.mt2.ml210 > div > table > tbody > tr:nth-child(4)');//点击30分,颜色判断
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/底边栏产品设置_30分钟.png');
      browser.assert.attributeContains('#switherContent','class','ml210 h20 z20 pl3 pt3 fs14 dib');
      browser.assert.cssClassNotPresent('#miniDiagram-container > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(1)','tabPopChart_focus');
      browser.assert.cssClassNotPresent('#miniDiagram-container > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(2)','tabPopChart_focus');
      browser.assert.cssClassNotPresent('#miniDiagram-container > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(3)','tabPopChart_focus');
      browser.assert.cssClassNotPresent('#miniDiagram-container > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul > li:nth-child(4)','tabPopChart_focus');

      browser.click('#miniSetting');//点进设置按钮
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/底边栏产品设置_设置.png');
      browser.assert.attributeContains('#selfDiagramRight','class','diagram_search z10 oh bg_1');
      browser.setValue('#selfDiagramRight > div > div.pa.wp.bc_10 > input','copper');
      browser.pause(1000);
      browser.click('#selfDiagramRight > div > div:nth-child(2) > div > div > table > tbody > tr');//点击第一个
      //不能搜索======>>>>>bug
      /*browser.assert.containsText('#iStyle1 > span:nth-child(1)','铜');
      browser.click('#iStyle1');
      browser.assert.containsText('#miniDiagram > div.h30.bc_68','Copper');*/
      browser.click('#miniClose > img');//点击关闭
      browser.pause(1000);
      browser.assert.hidden('#miniDiagram');
    },
    '时区设置':function(browser){
      browser.resizeWindow(1024,700);
      browser.click('#server_time');//时区设置
      browser.pause(3000);
      browser.saveScreenshot('D:/workspace/test/pic/时区设置.png');

      browser.click('#index_head_L');//时区设置
      browser.pause(5000);
    }
}
