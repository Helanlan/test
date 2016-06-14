require('C:/Users/Administrator/AppData/Roaming/npm/node_modules/nightwatch/bin/runner.js');
var nightwatch = require('C:/Users/Administrator/AppData/Roaming/npm/node_modules/nightwatch/index.js');
module.exports = {  
      '行业资讯':function(browser){ 
      console.log('news,行业资讯,新闻直播,财经日历');
      browser.resizeWindow(1024,700);
      browser.url('http://127.0.0.1:8020/mc/zc_person_index.html');
      browser.setValue('#login_user_name','sheep');//用户名
      browser.setValue('#login_user_pwd','123123');
      browser.click('#login_btn');  //点击登录
      browser.pause(10000);

      browser.click('#zc_person_news');//点击资讯
      browser.pause(500);
      browser.saveScreenshot('D:/workspace/test/pic/行业资讯_主页.png');
      browser.click('#baseInNews_wo');//点击周排行
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/行业资讯_周排行.png');
      browser.click('#baseInNews_mo');//点击月排行
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/行业资讯_月排行.png');

      browser.click('#baseInNews_do');//点击日排行
      browser.click('#baseInNews_news_order > li:nth-child(1) > span');//点击日排行第一项
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/行业资讯_日排行第一项.png');

      browser.click('#baseInNews_wo');//点击周排行
      browser.click('#baseInNews_news_order > li:nth-child(2) > span');//点击周排行一项
      browser.saveScreenshot('D:/workspace/test/pic/行业资讯_周排行一项.png');

      browser.pause(1000);
      browser.click('#consultNav > li:nth-child(2)');//点击国际
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/行业资讯_国际.png');
      browser.click('#consultNav > li:nth-child(3)');//点击原油
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/行业资讯_原油.png');
      browser.click('#consultNav > li:nth-child(4)');////点击贵金属
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/行业资讯_贵金属.png');
      browser.click('#consultNav > li:nth-child(6)')//点击外汇
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/行业资讯_外汇.png');
      browser.click('#consultNav > li:nth-child(7)')//点击独家
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/行业资讯_独家.png');

      },
      '新闻直播':function(browser){
      browser.click('#news_final');//点击新闻直播
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/新闻直播_主页.png');
      browser.click('#fintial > div:nth-child(1) > div:nth-child(2) > div > div > table > tbody > tr:nth-child(2) > td.b_0.b_s.bb_1.b_15.w80 > span.fr.mr10.cp.fs14.mt5 > img');//点击分享按钮
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/新闻直播_分享界面.png');
      browser.click('#final_txt');//聊天室选择
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/新闻直播_选择下拉框.png');
      browser.click('#news_share');//分享按钮
      browser.saveScreenshot('D:/workspace/test/pic/新闻直播_分享对象.png');
      browser.click('#zc_person_news');//回到资讯界面
      },
      '财经日历':function(browser){
      browser.click('#news_base');//点击财经日历
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/财经日历_主页.png');
      }
}
