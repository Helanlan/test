require('C:/Users/Administrator/AppData/Roaming/npm/node_modules/nightwatch/bin/runner.js');
var nightwatch = require('C:/Users/Administrator/AppData/Roaming/npm/node_modules/nightwatch/index.js');
module.exports = {  
      '指标设置':function(browser){  
      browser.resizeWindow(1024,700);
      console.log('Main_map-indexset,主图界面指标设置');
      browser.resizeWindow(1024,700);
      browser.url('http://127.0.0.1:8020/mc/zc_person_index.html');
      browser.setValue('#login_user_name','sheep');//用户名
      browser.setValue('#login_user_pwd','123123');
      browser.click('#login_btn');  //点击登录
      browser.pause(10000);

      browser.click('#zc_person_body_manyPicture');
      browser.pause(2000);
      browser.click('#index_menu_pageType > div > table > tbody > tr:nth-child(1) > td:nth-child(2)');//点击版式1
      browser.pause(5000);
      browser.click('#mutli_cycle');//点击日线
      browser.pause(5000);
      browser.click('#canvas_con > div > div.pr.hp > div > div:nth-child(2) > div > div > div.pr.hp > div > div:nth-child(2) > div > div > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(9) > img');//指标设置按钮
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/指标设置_首页.png');
      browser.setValue('#canvas_target_con > table > tbody > tr:nth-child(1) > td:nth-child(2) > input','80');
      browser.pause(1000);


      browser.click('#canvas_target_bgtg');//点击样式按钮
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/指标设置_样式界面.png');
      //颜色设置按钮，第一个
      browser.click('#canvas_target_conbg > table > tbody > tr:nth-child(1) > td:nth-child(2) > div.dib.w29.h29.b_65.tac');
      browser.click('#target_picker_0 > div > div.scolor3 > div > div > div.blocks > span:nth-child(17)');//颜色选择
      browser.click('#target_picker_0 > div > div.scolor3 > div > div > div.alpha > label:nth-child(4)');//中透明
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/指标设置_中透明.png');
      browser.click('#target_picker_0 > div > div.scolor3 > div > div > div.alpha > label:nth-child(2)');//低透明
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/指标设置_低透明.png');
      browser.click('#target_picker_0 > div > div.scolor3 > div > div > div.alpha > label:nth-child(5)');//高透明
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/指标设置_高透明.png');
      browser.click('#target_picker_0 > div > div.scolor3 > button.btn.fs10.line_c_1.h20.pa.r2');//确定

      //颜色设置按钮，第2个
      browser.click('#canvas_target_conbg > table > tbody > tr:nth-child(2) > td:nth-child(2) > div.dib.w29.h29.b_65.tac');
      browser.saveScreenshot('D:/workspace/test/pic/指标设置_调色板2.png');
      browser.click('#target_picker_1 > div > div.scolor3 > div > div > div.blocks > span:nth-child(6)');//颜色选择
      browser.click('#target_picker_1 > div > div.scolor3 > button.btn.fs10.line_c_1.h20.pa.r2');//确定
      browser.setValue('#canvas_target_conbg > table > tbody > tr:nth-child(2) > td:nth-child(4) > input','00');//粗细设置
      browser.saveScreenshot('D:/workspace/test/pic/指标设置_粗细设置.png');
      browser.click('#canvas_target_yes');//save
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/指标设置_设置结果.png');
    },
}
