require('C:/Users/Administrator/AppData/Roaming/npm/node_modules/nightwatch/bin/runner.js');
var nightwatch = require('C:/Users/Administrator/AppData/Roaming/npm/node_modules/nightwatch/index.js');
module.exports = {
    '云端上传':function(browser){ 
      console.log('upload_cloud-multi_template,云端上传，多图模板');  
      browser.resizeWindow(1024,582);
      browser.url('http://127.0.0.1:8020/mc/zc_person_index.html');
      browser.setValue('#login_user_name','sheep');//用户名
      browser.setValue('#login_user_pwd','123123');
      browser.click('#login_btn');  //点击登录
      browser.pause(10000);
      browser.click('#zc_person_body_manyPicture');//点击版式选择按钮
      browser.click('#index_menu_pageType > div > table > tbody > tr:nth-child(1)');//点击版式1
      browser.pause(2000);

      browser.click('#canvas_cloud_upload > span');//点击云端上传按钮
      browser.saveScreenshot('D:/workspace/test/pic/云端上传_首页.png');
      browser.assert.containsText('#can_upload_right > table > tbody > tr','名称 日期 操作');
      browser.assert.attributeContains('#can_upload_right','class','h300 mt10 scrollbar-y');
      browser.setValue('#canvas_upload_name','aadas');//输入框输入内容========================
      browser.click('#canvas_upload_saveBtn');//点击保存按钮
      browser.saveScreenshot('D:/workspace/test/pic/云端上传_分时图不能保存.png');
      browser.assert.containsText('#mainTips','分时图不能保存在云端');
      browser.pause(5000);
      browser.assert.hidden('#mainTips');



      browser.saveScreenshot('D:/workspace/test/pic/云端上传_保存中.png');
      browser.pause(2000);
      browser.saveScreenshot('D:/workspace/test/pic/云端上传_保存结束.png');

      browser.click('#cloud_upload_tab > tbody > tr:nth-child(1) > td:nth-child(3) > span:nth-child(2)')//share button
      browser.saveScreenshot('D:/workspace/test/pic/云端上传_分享地址界面.png');
      browser.click('#canvas_share_btn').pause(500);
      browser.saveScreenshot('D:/workspace/test/pic/云端上传_复制成功.png');


      browser.click('#cloud_upload_tab > tbody > tr:nth-child(1) > td:nth-child(3) > span:nth-child(4)')//点击删除按钮
      browser.saveScreenshot('D:/workspace/test/pic/云端上传_删除界面.png');
      browser.click('#canvas_del_no');//点击取消
      browser.click('body > div.pa.wp.hp.tl0.bg_1.c_25.b_3.b_w1.b_s.fs14.p5.tl50p > div.wp.p5 > div.fr.mr5 > img');//点击关闭按钮
    },
    '多图模板':function(browser){
      browser.pause(2000);
      browser.resizeWindow(1024,582);
      browser.click('#canvas_model > span');//点击多图模板按钮
      browser.saveScreenshot('D:/workspace/test/pic/多图模板_主页.png');
      browser.setValue('#canvas_upload_name','aadas');//输入框输入内容======================================
      browser.click('#canvas_upload_saveBtn');//点击保存按钮
      browser.saveScreenshot('D:/workspace/test/pic/多图模板_保存.png');
      browser.pause(3000);
      browser.click('#cloud_upload_tab > tbody > tr:nth-child(1) > td:nth-child(3) > span.c_asome.ml5.dib.cp')
      browser.saveScreenshot('D:/workspace/test/pic/多图模板_删除.png');
    }
}

