require('C:/Users/Administrator/AppData/Roaming/npm/node_modules/nightwatch/bin/runner.js');
var nightwatch = require('C:/Users/Administrator/AppData/Roaming/npm/node_modules/nightwatch/index.js');
module.exports={
	'板式切换_板式1':function(browser){  
    console.log('style_switch,板式切换,多图显示选择');  
	  browser.url('http://127.0.0.1:8020/mc/zc_person_index.html');
	  browser.setValue('#login_user_name','sheep');//用户名过短
    browser.setValue('#login_user_pwd','123123');
    browser.click('#login_btn');  //点击登录
    browser.pause(10000); 
	  browser.click('#zc_person_body_manyPicture');
    browser.pause(2000);
    browser.click('#index_menu_pageType > div > table > tbody > tr:nth-child(1) > td:nth-child(2)');//点击版式1
    browser.pause(3000);

    browser.assert.attributeContains('#canvas_con > div > div.pr.hp > div > div:nth-child(2) > div > div > div.pr.hp > div > div:nth-child(2) > div > div > div:nth-child(4) > div:nth-child(2) > div > div:nth-child(2) > div > canvas:nth-child(5)','class','zr-element');//山行曲线图界面
    browser.assert.attributeContains('#zc_person_canvas_body_body_head > div:nth-child(2)','class','cf b0 bb_1');//上方栏
    browser.assert.attributeContains('#zc_person_canvas_many','class','fl ml10 mt2 c_7 shadow1 btn pt3lr7 b_w1 b_s b_1 r2');//多图按钮属性
    browser.assert.attributeContains('#index_news_img','src','imgs/IT.png'); //资讯图片属性等于imgs/IT.png
    browser.assert.attributeContains('#index_news_img','class','w30 h30 mt8 ml10'); //资讯图片样式
    browser.assert.containsText('#index_news_text','资讯');
    browser.assert.cssClassPresent('#zc_person_chat','w60'); //聊天图片logo有w60样式
    browser.assert.attributeContains('#table_single_detail','class','h180');//右侧详细信息
    browser.assert.attributeContains('body > div:nth-child(18) > div:nth-child(2) > div > div > div.pr.hp > div > div.pa.wp.fs14','class','pa wp fs14'); //底边三个产品信息栏
    browser.assert.attributeContains('#zc_person_index_left > div.pa.hp.fl.bc_51.oh','class','pa hp fl bc_51 oh'); //左侧选项界面
    browser.assert.attributeContains('#zc_person_right > div','class','fl pa t0 hp ml2'); //左侧市场选项文字属性包括。。。
    browser.assert.attributeEquals('body','class','oh');
    browser.assert.attributeEquals('#canvas_cloud_upload','class','fl btn c_7 shadow1 w25 h24 mr10 b_w1 b_s b_1 easeWebkit2s diagram_opt');
    browser.assert.attributeEquals('#canvas_model','class','fl btn c_7 shadow1 w25 h24 mr30 b_w1 b_s b_1 diagram_opt');
    browser.assert.elementPresent('#index_nav');//左侧选项界面检查index_nav元素存在于DOM

    browser.click('#zc_person_canvas_many > img')//点击多图选择按钮
    browser.pause(1000);
    browser.click('#mutli_ping_bs > div > div:nth-child(2)')//2zhang
    browser.pause(1000);
    browser.saveScreenshot('D:/workspace/test/pic/板式切换_板式1_多图2.png')
    browser.click('#zc_person_canvas_many > img')//点击多图按钮
    browser.click('#mutli_ping_bs > div > div:nth-child(3)')//3zhang
    browser.pause(1000);
    browser.saveScreenshot('D:/workspace/test/pic/板式切换_板式1_多图3.png')

    browser.click('#zc_person_canvas_many > img')//点击多图按钮
    browser.click('#mutli_ping_bs > div > div:nth-child(4)')//4zhang
    browser.pause(1000);
    browser.saveScreenshot('D:/workspace/test/pic/板式切换_板式1_多图4.png')

    browser.click('#zc_person_canvas_many > img')//点击多图按钮
    browser.pause(1000);
    browser.click('#mutli_ping_bs > div > div:nth-child(5)')//5zhang
    browser.pause(1000);
    browser.saveScreenshot('D:/workspace/test/pic/板式切换_板式1_多图5.png')

    browser.click('#zc_person_canvas_many > img')//点击多图按钮
    browser.pause(1000);
    browser.click('#mutli_ping_bs > div > div:nth-child(16)')//16zhang
    browser.pause(1000);
    browser.saveScreenshot('D:/workspace/test/pic/板式切换_板式1_多图16.png')

    browser.click('#zc_person_canvas_many > img')//点击多图按钮
    browser.pause(1000);
    browser.click('#mutli_ping_bs > div > div:nth-child(13)')//13zhang
    browser.pause(1000);
    browser.saveScreenshot('D:/workspace/test/pic/板式切换_板式1_多图13.png')

    browser.click('#zc_person_canvas_many > img')//点击多图按钮
    browser.pause(1000);
    browser.click('#mutli_ping_bs > div > div:nth-child(25)')//25zhang
    browser.pause(1000);
    browser.saveScreenshot('D:/workspace/test/pic/板式切换_板式1_多图25.png')


    browser.click('#zc_person_canvas_many > img')//点击多图按钮
    browser.pause(1000);
    browser.click('#mutli_ping_bs > div > div:nth-child(14)')//25zhang
    browser.pause(1000);
    browser.saveScreenshot('D:/workspace/test/pic/板式切换_板式1_多图14.png')

    browser.click('#zc_person_canvas_many > img')//点击多图按钮
    browser.click('#mutli_ping_bs > div > div:nth-child(17)')//25zhang
    browser.pause(1000);
    browser.saveScreenshot('D:/workspace/test/pic/板式切换_板式1_多图17.png')

    browser.click('#zc_person_canvas_many > img')//点击多图按钮
    browser.pause(1000);
    browser.click('#canvas_ping > li.btn.c_7.mt5.ml3.b_w1.b_s.b_15.p2 > img')//底边第一个
    browser.pause(1000);
    browser.saveScreenshot('D:/workspace/test/pic/板式切换_板式1_底边1.png')


    browser.click('#zc_person_canvas_many > img')//点击多图按钮
    browser.pause(1000);
    browser.click('#canvas_ping > li:nth-child(2) > img')//底边第2个
    browser.pause(1000);
    browser.saveScreenshot('D:/workspace/test/pic/板式切换_板式1_底边2.png')

    browser.click('#zc_person_canvas_many > img')//点击多图按钮
    browser.pause(1000);
    browser.click('#canvas_ping > li:nth-child(3) > img')//底边第3个
    browser.pause(1000);
    browser.saveScreenshot('D:/workspace/test/pic/板式切换_板式1_底边3.png')

    browser.click('#zc_person_canvas_many > img')//点击多图按钮
    browser.pause(1000);
    browser.click('#canvas_ping > li:nth-child(4) > img')//底边第4个
    browser.pause(1000);
    browser.saveScreenshot('D:/workspace/test/pic/板式切换_板式1_底边4.png')
	},
	 '板式切换_板式2':function(browser){  
    browser.resizeWindow(1024,582);
    browser.click('#zc_person_body_manyPicture');
    browser.pause(2000);
    browser.click('#index_menu_pageType > div > table > tbody > tr:nth-child(2) > td:nth-child(2)');//板式2
    browser.pause(5000);
    browser.saveScreenshot('D:/workspace/test/pic/板式切换_板式2_首页.png');
    browser.assert.elementPresent('#zc_person_rev');
    browser.assert.elementPresent('#zc_person_right > div');
    browser.assert.containsText('#table_con > div > div.pr.hp > div > div:nth-child(2) > div > div > div.pr.hp.oh > div > div:nth-child(2) > div > div > div > table > thead > tr','代码 名称 买价 卖价 最高价 最低价 今开 昨收 涨跌量 涨跌幅% 更新时间');
    browser.assert.attributeContains('#table_con > div > div.pr.hp > div > div:nth-child(2) > div > div > div.pr.hp.oh > div > div:nth-child(2) > div','class','hp pr oya scrollbar');
    browser.assert.attributeContains('#canvas_chartGroupTools','class','fl mt4 cp b_w1 b_s b_55 r2 p3 ml20');//画图工具条
    browser.assert.attributeContains('#mutli_lines_btn > span','class','mt2 fa fa-cog');
    
    browser.pause(5000);
    browser.click('#zc_person_canvas_many > img');//多图选择按钮
    browser.saveScreenshot('D:/workspace/test/pic/板式切换_板式2_多图选框.png');
    browser.click('#mutli_ping_bs > div > div:nth-child(25)');//25zhang
    browser.saveScreenshot('D:/workspace/test/pic/板式切换_板式2_多图25.png');
    browser.click('#zc_person_canvas_many > img');//点击多图按钮
    browser.click('#mutli_ping_bs > div > div:nth-child(14)');//25zhang
    browser.pause(1000);
    browser.saveScreenshot('D:/workspace/test/pic/板式切换_板式2_多图14.png');

    browser.click('#zc_person_canvas_many > img');//点击多图按钮
    browser.pause(1000);
    browser.click('#mutli_ping_bs > div > div:nth-child(17)');//17zhang
    browser.pause(1000);
    browser.saveScreenshot('D:/workspace/test/pic/板式切换_板式2_多图17.png');

    browser.click('#zc_person_canvas_many > img');//点击多图按钮
    browser.pause(1000);
    browser.click('#mutli_ping_bs > div > div:nth-child(3)');//3zhang
    browser.pause(1000);
    browser.saveScreenshot('D:/workspace/test/pic/板式切换_板式2_多图3.png');

    browser.click('#zc_person_canvas_many > img');//点击多图按钮
    browser.pause(1000);
    browser.click('#mutli_ping_bs > div > div:nth-child(14)');//14zhang
    browser.pause(1000);
    browser.saveScreenshot('D:/workspace/test/pic/板式切换_板式2_多图14.png');

    browser.click('#zc_person_canvas_many > img');//点击多图按钮
    browser.pause(1000);
    browser.click('#mutli_ping_bs > div > div:nth-child(10)');//25zhang
    browser.pause(1000);
    browser.saveScreenshot('D:/workspace/test/pic/板式切换_板式2_多图10.png');
    },
    '板式切换_板式3':function(browser){//
    browser.resizeWindow(1024,582);
    browser.click('#zc_person_body_manyPicture').pause(3000);
    browser.click('#index_menu_pageType > div > table > tbody > tr:nth-child(3) > td:nth-child(2)');// 板式3
    browser.saveScreenshot('D:/workspace/test/pic/板式切换_板式3_首页.png');
    browser.assert.attributeContains('#zc_person_rev','class','b_0 bc_opt3 b0 bt_1 bl_1 bb_1 b_s b_1 hp wp'); //中间区域
    browser.assert.attributeContains('#zc_person_right > div','class','fl pa t0 hp ml2'); //右边栏
    browser.assert.attributeContains('body > div:nth-child(18) > div:nth-child(2) > div > div > div.pr.hp > div > div.pa.wp.fs14','class','pa wp fs14');//底边栏
    browser.assert.attributeContains('#zc_person_index_left > div.pa.hp.fl.bc_51.oh','class','pa hp fl bc_51 oh');//左边栏
    browser.assert.attributeContains('#zc_person_canvas_body_body_head','class','p2 mt8');
    browser.assert.elementPresent('#index_head_R > ul');
    
    browser.click('#zc_person_canvas_many > img');//点击多图按钮
    browser.pause(1000);
    browser.click('#mutli_ping_bs > div > div:nth-child(14)')//14zhang
    browser.pause(1000);
    browser.saveScreenshot('D:/workspace/test/pic/板式切换_板式3_多图14.png');

    browser.click('#zc_person_canvas_many > img');//点击多图按钮
    browser.pause(1000);
    browser.click('#mutli_ping_bs > div > div:nth-child(25)')//25zhang
    browser.pause(1000);
    browser.saveScreenshot('D:/workspace/test/pic/板式切换_板式3_多图25.png');

    browser.click('#zc_person_canvas_many > img');//点击多图按钮
    browser.pause(1000);
    browser.click('#mutli_ping_bs > div > div:nth-child(10)')//25zhang
    browser.pause(1000);
    browser.saveScreenshot('D:/workspace/test/pic/板式切换_板式3_多图10.png');
    }
}