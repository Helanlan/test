require('C:/Users/Administrator/AppData/Roaming/npm/node_modules/nightwatch/bin/runner.js');
var nightwatch = require('C:/Users/Administrator/AppData/Roaming/npm/node_modules/nightwatch/index.js');
module.exports = {  
      '社交_公共聊天室':function(browser){  //#baseInNews_do
      console.log('gam,公共聊天室，私人聊天室');
      browser.resizeWindow(1024,700);
      browser.url('http://test.rtdream.com/mc/4f794082926b8e37eb9c3b9c7f3b4c26614ad3a5/zc_person_index.html');
      browser.setValue('#login_user_name','sheep');//用户名
      browser.setValue('#login_user_pwd','123123');
      browser.click('#login_btn');  //点击登录
      browser.pause(10000);

      browser.click('#zc_person_chat');//点击社交
      browser.pause(500);
      browser.saveScreenshot('D:/workspace/test/pic/公共聊天室_主页.png');
      browser.click('#common_chat_room > div:nth-child(4) > div > div.fl.w210.ml10 > div.mt5.fs14.cf > span.fl');//点击客服
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/公共聊天室_客服聊天界面.png');

      browser.setValue('#chat_enter','你好啊啊啊');//输入框
      browser.click('#chat_send');//点击发送
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/公共聊天室_信息发送.png');


      browser.click('#chat_load');//点击云端下载
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/公共聊天室_云端下载界面.png');
      browser.click('#cloud_load_panel > tbody > tr:nth-child(2) > td:nth-child(3) > div.fl.w10.h10.ml20 > img');//点击分享按钮
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/公共聊天室_云端下载分享.png');
      browser.click('#chat_send');//点击发送
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/公共聊天室_云端信息发送.png');



      browser.click('#chat_norm');//点击商品代码
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/公共聊天室_商品代码.png');
      browser.click('#norm_search > div > div:nth-child(2) > div > div > table > tbody > tr:nth-child(1)');//点击第一个
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/公共聊天室_商品代码点击.png');
      browser.click('#chat_send');//点击发送
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/公共聊天室_商品代码发送.png');
      browser.click('#chat_norm');//点击商品代码
      browser.setValue('#norm_search > div > div.pa.wp.bc_10 > input','copper');//输入copper
      browser.pause(1000);
      browser.click('#norm_search > div > div:nth-child(2) > div > div > table > tbody > tr:nth-child(1)');//点击第一个
      browser.click('#chat_send');//点击发送
      /////点击发送后的商品信息，自己查看一遍


      browser.click('#chat_nav_face');//点击表情按钮
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/公共聊天室_表情.png');
      browser.click('#chat_brow > li:nth-child(4)');////点击一个表情
      browser.click('#chat_send');//点击发送
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/公共聊天室_表情发送.png');


      browser.click('#chat_bodyDialogs > div.fs14.c_21 > ul > li.fr.p5.mr10.mt3')//点击发送方式按钮
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/公共聊天室_发送方式.png');


      },
      '私人聊天室':function(browser){
      browser.pause(2000);
      browser.resizeWindow(1024,700);
      browser.click('#private_chat');//点击私人聊天室
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/私人聊天室_首页.png');

      browser.click('#private_choose > span:nth-child(1)');//点击我的关注
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/私人聊天室_我的关注.png');
      browser.click('#followMain_choose > table > tbody > tr > td:nth-child(2) > span');//点击粉丝
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/私人聊天室_粉丝.png');
      browser.click('#followMain_choose > table > tbody > tr > td:nth-child(3) > span');//点击自选
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/私人聊天室_自选.png');
      browser.saveScreenshot('D:/workspace/test/pic/私人聊天室_粉丝.png');
      browser.click('#followMain_choose > table > tbody > tr > td:nth-child(4) > span');//点击动态
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/私人聊天室_动态.png');
      
      }
    
}
