require('C:/Users/Administrator/AppData/Roaming/npm/node_modules/nightwatch/bin/runner.js');
var nightwatch = require('C:/Users/Administrator/AppData/Roaming/npm/node_modules/nightwatch/index.js');
module.exports = {  
      '设置':function(browser){  //#baseInNews_do
      console.log('setting,设置');
      browser.resizeWindow(1024,700);
      browser.url('http://127.0.0.1:8020/mc/zc_person_index.html');
      browser.setValue('#login_user_name','sheep');//用户名
      browser.setValue('#login_user_pwd','123123');
      browser.click('#login_btn');  //点击登录
      browser.pause(10000);

      browser.click('#nav_setting > img');//点击设置
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/设置_选项.png');
      browser.click('#left_sysOpt > ul > li:nth-child(1) > span:nth-child(2)');//点击系统设置
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/设置_系统设置.png');


      browser.click('#nav_setting > img');//点击设置
      browser.click('#left_resetPwd > span');//点击修改密码
      browser.pause(2000);
      browser.saveScreenshot('D:/workspace/test/pic/设置_修改密码.png');
      browser.setValue('#left_opwd','123123');//点当前密码
      browser.click('#left_resetPwd_ok');//ok
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/设置_没有新密码.png');
      browser.setValue('#left_npwd','123123');//新密码
      browser.click('#left_resetPwd_ok');//ok
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/设置_密码不一致.png');
      browser.setValue('#left_confmNpwd','123123');//确认密码
      browser.click('#left_resetPwd_ok');//ok
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/设置_没有验证码.png');
      //验证码永远输入错误====================>>>>>>>>>>>>>改不了
      browser.click('body > div.pa.wp.hp.tl0.bg_1.c_25.b_3.b_w1.b_s.fs14.p5.tl50p > div.wp.p5 > div.fr.mr5 > img');//关闭



      browser.click('#nav_setting > img');//点击设置
      browser.click('#left_feedBack');//点击意见反馈
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/设置_意见反馈.png');
      browser.pause(1000);
      browser.setValue('#left_feedBack_title','收到公司的人工费');
      browser.setValue('#left_feedBack_content','大帅哥的是谁');
      browser.click('#left_feedBack_ok');//ok
      browser.pause(500);
      browser.saveScreenshot('D:/workspace/test/pic/设置_提交.png');
      }
}
