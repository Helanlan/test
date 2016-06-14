require('C:/Users/Administrator/AppData/Roaming/npm/node_modules/nightwatch/bin/runner.js');
var nightwatch = require('C:/Users/Administrator/AppData/Roaming/npm/node_modules/nightwatch/index.js');
module.exports = {
    '划线工具':function(browser){  
      console.log('score_tool,划线工具'); 
      browser.resizeWindow(1024,582);
      browser.url('http://127.0.0.1:8020/mc/zc_person_index.html');
      browser.setValue('#login_user_name','sheep');//用户名
      browser.setValue('#login_user_pwd','123123');
      browser.click('#login_btn');  //点击登录
      browser.pause(10000);
      browser.click('#zc_person_body_manyPicture');//点击版式选择按钮
      browser.click('#index_menu_pageType > div > table > tbody > tr:nth-child(1)');//点击版式1
      browser.pause(2000);
      browser.click('#mutli_cycle');//点击日线
      browser.pause(2000);

      browser.click('#table_furl');
      browser.pause(1000);
      browser.click('#canvas_chartGroupTools > li:nth-child(2)');//点击划线工具第一个
      browser.saveScreenshot('D:/workspace/test/pic/划线工具_1.png');
      browser.assert.attributeContains('#canvas_chartTools_content > div > table > tbody > tr:nth-child(1) > td:nth-child(1) > img','src','imgs/rtdream/c1_slash.png'); //线形图标
      browser.assert.attributeContains('#canvas_chartTools_content > div > table > tbody > tr:nth-child(1) > td:nth-child(3) > img','src','imgs/rtdream/uncollected_min.png'); //心形图标
      browser.assert.containsText('#canvas_chartTools_content > div > table > tbody > tr:nth-child(1)','线段');
      browser.assert.attributeContains('#canvas_chartTools_content > div','class','list_bs bg_1 b_65');
      browser.assert.attributeContains('#canvas_chartTools_content > div','style','display: block');
      // browser.click('#canvas_chartTools_content > div > table > tbody > tr:nth-child(1)');
      // browser.click('#canvas_con > div > div.pr.hp > div > div:nth-child(2) > div > div > div.pr.hp > div > div:nth-child(2) > div > div > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div > canvas:nth-child(5)'); //点击划线框
     


      browser.click('#canvas_chartGroupTools > li:nth-child(3)');//点击划线工具第2个
      browser.saveScreenshot('D:/workspace/test/pic/划线工具_2.png');
      browser.assert.attributeContains('#canvas_chartTools_content > div','class','list_bs bg_1 b_65');
      browser.assert.containsText('#canvas_chartTools_content > div > table > tbody > tr:nth-child(1)','三角形');
      browser.assert.attributeContains('#canvas_chartTools_content > div > table > tbody > tr:nth-child(1) > td:nth-child(1) > img','src','imgs/rtdream/c2_triangle.png');
      browser.assert.attributeContains('#canvas_chartTools_content > div > table > tbody > tr:nth-child(1) > td:nth-child(3) > img','src','imgs/rtdream/uncollected_min.png');


      browser.click('#canvas_chartGroupTools > li:nth-child(4)');//点击划线工具第3个
      browser.saveScreenshot('D:/workspace/test/pic/划线工具_3.png');
      browser.assert.attributeContains('#canvas_chartTools_content > div','class','list_bs bg_1 b_65');
      browser.assert.containsText('#canvas_chartTools_content > div > table > tbody','三浪\n五浪\n八浪\n头肩顶/底\nM头W底\nABCD形态\nXABCD形态\n三角形态');
      browser.assert.attributeContains('#canvas_chartTools_content > div > table > tbody > tr:nth-child(8) > td:nth-child(1) > img','src','imgs/rtdream/c3_tetraShape.png');


      browser.click('#canvas_chartGroupTools > li:nth-child(5)');//点击划线工具第4个
      browser.pause(2000);
      browser.saveScreenshot('D:/workspace/test/pic/划线工具_4.png');
      browser.assert.attributeContains('#canvas_chartTools_content > div','class','list_bs bg_1 b_65');
      browser.assert.containsText('#canvas_chartTools_content > div > table > tbody','速阻线\n江恩箱\n江恩角度线\n斐波那契通道\n斐波那契同心圆\n干草叉\n黄金分割');
      browser.assert.attributeContains('#canvas_chartTools_content > div > table > tbody > tr:nth-child(7) > td:nth-child(3) > img','src','imgs/rtdream/uncollected_min.png');


      browser.click('#canvas_chartGroupTools > li:nth-child(6)');//点击划线工具栏第5个,图标文字
      browser.pause(2000);
      browser.saveScreenshot('D:/workspace/test/pic/划线工具_图表文字.png');
      browser.click('#canvas_con > div > div.pr.hp > div > div:nth-child(2) > div > div > div.pr.hp > div > div:nth-child(2) > div > div > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div > canvas:nth-child(5)');//点击写字区域====================>>点不到
      browser.pause(2000);
      browser.saveScreenshot('D:/workspace/test/pic/划线工具_写字界面.png');
      browser.setValue('#canvas_write','润投财经');
      browser.pause(2000);
      browser.click('#canvas_txt_style');//点击字体设置按钮
      browser.saveScreenshot('D:/workspace/test/pic/划线工具_写字界面_字体设置.png');
      browser.click('#canvas_txt_style_list > div > table > tbody > tr:nth-child(1)');//宋体
      browser.click('#canvas_txt_size');//点击字号设置按钮
      browser.saveScreenshot('D:/workspace/test/pic/划线工具_写字界面_字号设置.png');
      browser.click('#canvas_txt_size_list > div > table > tbody > tr:nth-child(3)');//大号字体
      browser.click('#canvas_txt > div:nth-child(1) > div:nth-child(4) > span');//加粗
      browser.click('#canvas_txt > div:nth-child(4) > div.dib.w24.h24.b_65.tac');//背景按钮
      browser.saveScreenshot('D:/workspace/test/pic/划线工具_字界面_背景设置.png');
      browser.click('#canvas_txt_colorbg > div > div.scolor3 > div > div > div.blocks > span:nth-child(18)');//颜色选择
      browser.click('#canvas_txt > div:nth-child(1) > div:nth-child(5) > span');//斜体
      browser.click('#canvas_txt > div:nth-child(5) > div.dib.w24.h24.b_65.tac');//边框设置
      browser.saveScreenshot('D:/workspace/test/pic/划线工具_字界面_边框设置.png');
      browser.click('#canvas_txt_border > div > div.scolor3 > div > div > div.blocks > span:nth-child(74)');//颜色选择
      browser.click('#canvas_con > div > div.pr.hp > div > div:nth-child(2) > div > div > div.pr.hp > div > div:nth-child(2) > div > div > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div');//点击写字区域
      //颜色选择框被覆盖一般，无法点击确定
      browser.click('#canvas_txt > div.tac.a1_b20.pa.ml10 > button.btn.line_c_1.pt0lr8.r2.ml140');//保存(无效)
      browser.pause(2000);
      browser.saveScreenshot('D:/workspace/test/pic/划线工具_写字界面_文字设置结果.png');



      browser.click('#canvas_chartGroupTools > li:nth-child(7) > img');//点击划线工具栏第6个(收藏)
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/划线工具_收藏.png');

      browser.click('#person_canvas_delPic > img');//点击划线工具栏第7个(删除)
      browser.saveScreenshot('D:/workspace/test/pic/划线工具_删除.png');
    }
}

