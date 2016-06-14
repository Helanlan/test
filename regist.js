require('C:/Users/Administrator/AppData/Roaming/npm/node_modules/nightwatch/bin/runner.js');
var nightwatch = require('C:/Users/Administrator/AppData/Roaming/npm/node_modules/nightwatch/index.js');
module.exports = {
   '正常注册':function(browser){
       browser.resizeWindow(1024,582);
       browser.url('http://127.0.0.1:8020/mc/zc_person_index.html');
       browser.click('#login_form > div.login_choice > span.fs12.ml80.cp');
       browser.saveScreenshot('D:/workspace/test/pic/注册_主页.png');
       browser.assert.containsText('body > div.regi_container.pr.bc_10 > div.regi_head > span.regi_head_name','润投财经');
       browser.assert.cssClassPresent('body > div.regi_container.pr.bc_10 > div.regi_foot.mt5 > span','regi_foot_check');
       browser.assert.containsText('body > div.regi_container.pr.bc_10 > div.regi_body.pr > div.pr.mt10.cf > span.fl.mt10.ml20 > a','换一张');
     
      browser.setValue('#regi_name','helloo');//用户名
      browser.setValue('#regi_pwd','123123');
      browser.setValue('#regi_repwd','123123');
      browser.setValue('#regi_vcode','z6nd');
      browser.saveScreenshot('D:/workspace/test/pic/注册_输入.png');
      browser.click('#regi_btn > img');  //点击注册按钮
      browser.pause(1000)
      browser.saveScreenshot('D:/workspace/test/pic/注册_正在注册.png');
      browser.assert.containsText('#regi_msg','正在注册');
      browser.pause(10000);
      browser.saveScreenshot('D:/workspace/test/pic/注册_注册成功.png');
      browser.assert.containsText('#index_head_L', '润投财经');
      browser.assert.containsText('#proType_free', '现货市场');
      browser.assert.cssClassPresent('#proType_free', 'bc_51');
      browser.assert.cssClassNotPresent('#proType > li:nth-child(1)','bc_51');
      browser.assert.cssClassNotPresent('#proType > li:nth-child(3)','bc_51');
      browser.assert.cssClassNotPresent('#proType > li:nth-child(4)','bc_51');
      browser.assert.cssClassPresent('#table_con > div > div.pr.hp > div > div:nth-child(2) > div > div > div.pr.hp.oh > div > div:nth-child(2) > div', 'scrollbar');
      browser.end();
  },
   //     let sel=(`SELECT acct_id,name FROM test_zc_users where name= 'rdwfc';`);
  //     console.log('SELECT acct_id,name FROM test_zc_users where name= rdwfc')
  //     let yhm=yield mysql.query(`delete from test_zc_users where name='hellllo';delete from test_zc_balance where user_id =sel.acct_id;`);
  '注册已经存在的用户':function(browser){
      browser.resizeWindow(1024,582);
      browser.url('http://127.0.0.1:8020/mc/zc_person_index.html');
      browser.setValue('#regi_name','helloo');//用户名
      browser.setValue('#regi_pwd','123123');
      browser.setValue('#regi_repwd','123123');
      browser.setValue('#regi_vcode','z6nd');
      browser.click('#regi_btn > img');  //点击注册按钮
      browser.pause(1000)
      browser.saveScreenshot('D:/workspace/test/pic/注册_已经注册.png');
      browser.assert.containsText('#regi_msg','对不起，此用户名已经注册。');
      browser.end();
  },
  '没有用户名':function(browser){
      browser.resizeWindow(1024,582);
      browser.url('http://127.0.0.1:8020/mc/zc_person_index.html');
      // browser.setValue('#regi_name','hello');//用户名
      browser.setValue('#regi_pwd','123123');
      browser.setValue('#regi_repwd','123123');
      browser.setValue('#regi_vcode','z6nd');
      browser.click('#regi_btn > img');  //点击注册按钮
      browser.pause(1000)
      browser.saveScreenshot('D:/workspace/test/pic/注册_无用户名.png');
      browser.assert.containsText('#regi_msg','用户名长度4-20之间');
      browser.end();
  },
  '没有密码':function(browser){
      browser.resizeWindow(1024,582);
      browser.url('http://127.0.0.1:8020/mc/zc_person_index.html');
      browser.setValue('#regi_name','hello');//用户名
      // browser.setValue('#regi_pwd','123123');
      // browser.setValue('#regi_repwd','123123');
      // browser.setValue('#regi_vcode','z6nd');
      browser.click('#regi_btn > img');  //点击注册按钮
      browser.pause(1000)
      browser.saveScreenshot('D:/workspace/test/pic/注册_没有密码.png');
      browser.assert.containsText('#regi_msg','密码长度6-25之间');
      browser.end();
  },
  '只输入一次密码':function(browser){
      browser.resizeWindow(1024,582);
      browser.url('http://127.0.0.1:8020/mc/zc_person_index.html');
      browser.setValue('#regi_name','hello');//用户名
      browser.setValue('#regi_pwd','123123');
      browser.click('#regi_btn > img');  //点击注册按钮
      browser.pause(2000)
      browser.saveScreenshot('D:/workspace/test/pic/注册_密码不一致.png');
      browser.assert.containsText('#regi_msg','两次密码输入不一致');
      browser.end();
  },
   '没有验证码':function(browser){
      browser.resizeWindow(1024,582);
      browser.url('http://127.0.0.1:8020/mc/zc_person_index.html');
      browser.setValue('#regi_name','hello');//用户名
      browser.setValue('#regi_pwd','123123');
      browser.setValue('#regi_repwd','123123');
      // browser.setValue('#regi_vcode','z6nd');
      browser.click('#regi_btn > img');  //点击注册按钮
      browser.pause(1000)
      browser.saveScreenshot('D:/workspace/test/pic/注册_无验证码.png');
      browser.assert.containsText('#regi_msg','请输入四位验证码');
      browser.end();
  },



  //验证码写死的情况下，验证码错误也能注册
  '验证码错误':function(browser){
      browser.resizeWindow(1024,582);
      browser.url('http://127.0.0.1:8020/mc/zc_person_index.html');
      browser.setValue('#regi_name','hello');//用户名
      browser.setValue('#regi_pwd','123123');
      browser.setValue('#regi_repwd','123123');
      browser.setValue('#regi_vcode','fgtd');
      browser.click('#regi_btn > img');  //点击注册按钮
      browser.pause(1000)
      browser.saveScreenshot('D:/workspace/test/pic/注册_验证码错误.png');
      browser.assert.containsText('#regi_msg','对不起，验证码错误。');
      browser.end();
  },
  '验证码错误':function(browser){
      browser.resizeWindow(1024,582);
      browser.url('http://127.0.0.1:8020/mc/zc_person_index.html');
      browser.click('#login_form > div.login_choice > span.fs12.ml80.cp');
      browser.assert.containsText('body > div.regi_container.pr.bc_10 > div.regi_head > span.regi_head_name','润投财经');
      browser.assert.cssClassPresent('body > div.regi_container.pr.bc_10 > div.regi_foot.mt5 > span','regi_foot_check');
      browser.assert.containsText('body > div.regi_container.pr.bc_10 > div.regi_body.pr > div.pr.mt10.cf > span.fl.mt10.ml20 > a','换一张');
      browser.setValue('#regi_name','hello');//用户名
      browser.setValue('#regi_pwd','123123');
      browser.setValue('#regi_repwd','123123');
      browser.setValue('#regi_vcode','fgtd');
      browser.click('#regi_btn > img');  //点击注册按钮
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/注册_验证码错误1.png');
      browser.assert.containsText('#regi_msg','对不起，验证码错误。');
      browser.end();
      },
}