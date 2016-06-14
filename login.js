require('C:/Users/Administrator/AppData/Roaming/npm/node_modules/nightwatch/bin/runner.js');
var nightwatch = require('C:/Users/Administrator/AppData/Roaming/npm/node_modules/nightwatch/index.js');
module.exports = {
      '登录' : function (browser) {
      browser.url('http://test.rtdream.com/mc/4f794082926b8e37eb9c3b9c7f3b4c26614ad3a5/zc_person_index.html');
      browser.saveScreenshot('D:/workspace/test/pic/登录_首页.png');
      browser.assert.containsText('.bg_img', '润投财经');
      browser.setValue('#login_user_name','sheep');
      browser.setValue('#login_user_pwd','123123');
      browser.saveScreenshot('D:/workspace/test/pic/登录_输入.png');
      browser.click('#login_btn');
      browser.saveScreenshot('D:/workspace/test/pic/登录_正在登陆.png');
      browser.pause(10000);
      browser.saveScreenshot('D:/workspace/test/pic/登录_登陆成功.png');
      browser.assert.containsText('#index_head_L', '润投财经');
      browser.assert.containsText('#proType_free', '商品');
      browser.assert.cssClassPresent('#proType_free', 'bc_51');
      browser.assert.cssClassNotPresent('#proType > li:nth-child(1)','bc_51');
      browser.assert.cssClassNotPresent('#proType > li:nth-child(3)','bc_51');
      browser.assert.cssClassNotPresent('#proType > li:nth-child(4)','bc_51');
      browser.assert.cssClassPresent('#table_con > div > div.pr.hp > div > div:nth-child(2) > div > div > div.pr.hp.oh > div > div:nth-child(2) > div', 'scrollbar');
  },
  '登录记住密码' : function (browser) {
    
      browser.resizeWindow(1024,582);
      browser.click('#index_port');//个人头像按钮
      browser.click('#index_recur_login'); //退出登录
      browser.pause(1000);
      browser.waitForElementVisible('body', 3000);
      browser.assert.containsText('.bg_img', '润投财经');
      browser.setValue('#login_user_pwd','123123');
      browser.waitForElementVisible('#login_btn',2000);
      browser.click('#pwd_remember'); //点击记住密码
      browser.saveScreenshot('D:/workspace/test/pic/登录记住密码.png');
      browser.click('#login_btn');//登陆
      browser.pause(10000);
      browser.saveScreenshot('D:/workspace/test/pic/登录记住密码_登陆成功.png');
      browser.assert.containsText('#zc_person_body_body_head', '商品');
  },

  '自动登录' : function (browser) {
      browser.pause(2000);
      browser.resizeWindow(1024,582);
      browser.click('#index_port');
      browser.click('#index_recur_login'); //退出登录
      browser.pause(1000);
      browser.click('#auto_login');//点击自动登录
      browser.click('#login_btn');
      browser.assert.cssClassNotPresent('#login_btn > img','imgs/login_btn_img.png');
      browser.assert.containsText('#login_msg','正在登录');
      browser.saveScreenshot('D:/workspace/test/pic/登录自动登录_正在登录.png');
      browser.pause(5000);
      browser.saveScreenshot('D:/workspace/test/pic/登录自动登录_登陆成功.png');
      browser.assert.containsText('#zc_person_body_body_head', '商品');
      browser.waitForElementVisible('#index_port',3000);
      browser.click('#index_port');
      browser.click('#index_recur_login'); //退出登录
      browser.pause(6000);
      browser.assert.containsText('#zc_person_body_body_head', '商品');
      browser.end();
  },

  //=========================================================>>>>>>>>错误
  '用户名长度输入错误':function(browser){
      browser.resizeWindow(1024,582);
      browser.url('http://test.rtdream.com/mc/4f794082926b8e37eb9c3b9c7f3b4c26614ad3a5/zc_person_index.html');
      browser.pause(3000);
      browser.setValue('#login_user_name','abc'); //用户名过短
      browser.setValue('#login_user_pwd','123123');
      browser.click('#login_btn');  //点击登录
      browser.saveScreenshot('D:/workspace/test/pic/yhm长度过短.png');
      browser.assert.containsText('#login_msg','用户名长度4-20之间');
      // browser.assert.cssClassNotPresent('#cancel_login_btn','c_10');
      browser.pause(2000);  


      browser.setValue('#login_user_name','adfghrgrseeejngvsdfgirutgeromdfkjsgu');//用户名过长
      browser.saveScreenshot('D:/workspace/test/pic/yhm长度过长.png');
      browser.assert.containsText('#login_msg','用户名长度4-20之间');
      // browser.assert.cssClassNotPresent('#cancel_login_btn','c_10');//取消按钮不存在
  },
  //========================================》》》》》
  '登录时密码长度输入错误':function(browser){
      browser.pause(3000);
      browser.resizeWindow(1024,582);
      browser.url('http://test.rtdream.com/mc/4f794082926b8e37eb9c3b9c7f3b4c26614ad3a5/zc_person_index.html');
      browser.setValue('#login_user_name','abwewdf');
      browser.setValue('#login_user_pwd','123');
      browser.click('#cancel_login_btn');//点击取消==========================>>>>>>>>error
      browser.click('#login_btn');  //点击登录
      browser.saveScreenshot('D:/workspace/test/pic/pwd长度过短.png');
      browser.assert.containsText('#login_msg','密码长度6-25之间');
      // browser.assert.cssClassNotPresent('#cancel_login_btn','c_10');
      browser.setValue('#login_user_pwd','123456789456123jdfjshjfhsajfhuiefhaejkfjeargsegrgr');
      browser.click('#login_btn');  //点击登录
      browser.saveScreenshot('D:/workspace/test/pic/pwd长度过长.png');
      browser.assert.containsText('#login_msg','密码长度6-25之间');
      // browser.assert.cssClassNotPresent('#cancel_login_btn','c_10');  //取消按钮不存在
  }
}

// 