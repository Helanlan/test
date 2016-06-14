require('C:/Users/Administrator/AppData/Roaming/npm/node_modules/nightwatch/bin/runner.js');
var nightwatch = require('C:/Users/Administrator/AppData/Roaming/npm/node_modules/nightwatch/index.js');
module.exports={
	'市场界面切换_默认商品':function(browser){   
    //body > div:nth-child(17) > div:nth-child(2) > div > div
    browser.resizeWindow(1024,582); 
    console.log('market_switch,市场切换');  
	  browser.url('http://127.0.0.1:8020/mc/zc_person_index.html');
	  browser.setValue('#login_user_name','sheep');//用户名过短
    browser.setValue('#login_user_pwd','123123');
    browser.click('#login_btn');  //点击登录
    browser.pause(10000); 
	  browser.saveScreenshot('D:/workspace/test/pic/市场界面切换_商品.png');
	  browser.assert.containsText('#index_head_L', '润投财经');
    browser.assert.containsText('#proType_free', '商品');
    browser.assert.cssClassPresent('#proType_free', 'bc_51'); //默认选中商品，处于高亮状态，其他不高亮
    browser.assert.cssClassNotPresent('#proType > li:nth-child(1)','bc_51');
    browser.assert.cssClassNotPresent('#proType > li:nth-child(3)','bc_51');
    browser.assert.cssClassNotPresent('#proType > li:nth-child(4)','bc_51');
    browser.assert.cssClassPresent('#table_con > div > div.pr.hp > div > div:nth-child(2) > div > div > div.pr.hp.oh > div > div:nth-child(2) > div', 'scrollbar'); //产品信息大界面有scrollbar样式
    browser.assert.containsText('#table_con > div > div.pr.hp > div > div:nth-child(2) > div > div > div.pr.hp.oh > div > div:nth-child(2) > div > div > div > table > thead > tr','代码 名称 买价 卖价 最高价 最低价 今开 昨收 涨跌量 涨跌幅% 更新时间');
    browser.assert.attributeContains('#index_news_img','src','imgs/IT.png'); //资讯图片属性等于imgs/IT.png
    browser.assert.containsText('#index_news_text','资讯');
    browser.assert.cssClassPresent('#zc_person_chat','w60'); //聊天图片logo有w60样式
    browser.assert.cssClassPresent('#table_single_detail','h180');//右侧详细信息
    browser.assert.cssClassPresent('body > div:nth-child(18) > div:nth-child(2) > div > div > div.pr.hp > div > div.pa.wp.fs14','wp'); //底边三个产品信息栏

    browser.assert.attributeContains('#zc_person_index_left > div.pa.hp.fl.bc_51.oh','class','pa hp fl bc_51 oh'); //左侧选项界面
    browser.assert.attributeContains('#zc_person_right > div','class','fl pa t0 hp ml2'); //左侧市场选项文字属性包括。。。
    browser.assert.attributeEquals('body','class','oh');
    // browser.assert.cssProperty('#index_market_text','ul','市场');
    browser.assert.elementPresent('#index_nav');//左侧选项界面检查index_nav元素存在于DOM
	},
	'市场界面切换_自选品种':function(browser){ //
      browser.resizeWindow(1024,582); 
      browser.pause(3000);
      browser.click('#proType > li:nth-child(1)');
      browser.assert.attributeContains('#proType > li.fl.ml20.bc_51.c_0.tac.r2.pbt5.mt-5','class','fl ml20 bc_51 c_0 tac r2 pbt5 mt-5');
      browser.saveScreenshot('D:/workspace/test/pic/市场界面切换_自选品种.png')
      browser.assert.attributeContains('#proType_free','class','fl ml20 c_26 pbt5 mt-5');
      browser.assert.attributeContains('#proType > li:nth-child(3)','class','fl ml20 c_26 pbt5 mt-5');
      browser.assert.attributeContains('#proType > li:nth-child(4)','class','fl ml20 c_26 pbt5 mt-5');
      browser.assert.containsText('#table_con > div > div.pr.hp > div > div:nth-child(2) > div > div > div.pr.hp.oh > div > div:nth-child(2) > div > div > div > table > thead > tr','代码 名称 买价 卖价 最高价 最低价 今开 昨收 涨跌量 涨跌幅% 更新时间');
      browser.assert.attributeContains('#zc_person_table_body > tr.h30.lh25.selectedRow','class','h30 lh25 selectedRow');//产品项
      browser.assert.attributeContains('#zc_person_table_body','class','c_17 tb_body fs14');//产品显示界面
      browser.assert.attributeContains('#zc_person_index_left > div.pa.hp.fl.bc_51.oh','class','pa hp fl bc_51 oh');//左侧
      browser.assert.attributeContains('#index_news_img','src','imgs/IT.png'); //资讯图片属性等于imgs/IT.png
      browser.assert.containsText('#index_news_text','资讯');
      browser.assert.cssClassPresent('#zc_person_chat','w60'); //聊天图片logo有w60样式
      browser.assert.cssClassPresent('#table_single_detail','h180');//右侧详细信息
      browser.assert.cssClassPresent('body > div:nth-child(18) > div:nth-child(2) > div > div > div.pr.hp > div > div.pa.wp.fs14','wp'); //底边三个产品信息栏
      browser.assert.attributeContains('#zc_person_index_left > div.pa.hp.fl.bc_51.oh','class','pa hp fl bc_51 oh'); //左侧选项界面
      browser.assert.attributeContains('#zc_person_right > div','class','fl pa t0 hp ml2'); //左侧市场选项文字属性包括。。。
      browser.assert.attributeEquals('body','class','oh');
      },
      '市场界面切换_外汇市场':function(browser){  // 
      browser.resizeWindow(1024,582);
      browser.pause(3000);
      browser.click('#proType > li:nth-child(3)');
      browser.pause(6000);
      browser.assert.attributeContains('#proType > li:nth-child(3)','class','fl ml20 bc_51 c_0 tac r2 pbt5 mt-5');//外汇市场
      browser.saveScreenshot('D:/workspace/test/pic/市场界面切换_外汇市场.png');
      browser.assert.attributeContains('#proType > li:nth-child(1)','class','fl ml20 c_26 pbt5 mt-5');
      browser.assert.attributeContains('#proType_free','class','fl ml20 c_26 pbt5 mt-5');
      browser.assert.attributeContains('#proType > li:nth-child(4)','class','fl ml20 c_26 pbt5 mt-5');
      browser.assert.containsText('#table_con > div > div.pr.hp > div > div:nth-child(2) > div > div > div.pr.hp.oh > div > div:nth-child(2) > div > div > div > table > thead > tr','代码 名称 买价 卖价 最高价 最低价 今开 昨收 涨跌量 涨跌幅% 更新时间');
      browser.assert.containsText('#table_single_chart > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul','分时日线周线小时');                                
      browser.assert.attributeContains('#refresh','class','dib window_no_drag cp pt0lr6 w14 h14 fr refresh');//刷新
      browser.assert.attributeContains('#zc_person_body_manyPicture','class','cp');//多图按钮
      browser.assert.attributeContains('#zc_person_body_manyPicture','src','imgs/rtdream/market.png');//右上角分隔图片
      browser.assert.attributeContains('#zc_person_table_body > tr.h30.lh25.selectedRow','class','h30 lh25 selectedRow');//产品项
      browser.assert.attributeContains('#zc_person_table_body','class','c_17 tb_body fs14');//产品显示界面
      browser.assert.attributeContains('#zc_person_index_left > div.pa.hp.fl.bc_51.oh','class','pa hp fl bc_51 oh');//左侧
      browser.assert.attributeContains('#index_news_img','src','imgs/IT.png'); //资讯图片属性等于imgs/IT.png
      browser.assert.attributeContains('#table_furl','src','imgs/rtdream/furl.png'); //折叠图片属性等于imgs/IT.png
      browser.assert.containsText('#index_news_text','资讯');
      browser.assert.cssClassPresent('#zc_person_chat','w60'); //聊天图片logo有w60样式
      browser.assert.cssClassPresent('#table_single_detail','h180');//右侧详细信息
      browser.assert.cssClassPresent('body > div:nth-child(18) > div:nth-child(2) > div > div > div.pr.hp > div > div.pa.wp.fs14','wp'); //底边三个产品信息栏
      browser.assert.attributeContains('#zc_person_index_left > div.pa.hp.fl.bc_51.oh','class','pa hp fl bc_51 oh'); //左侧选项界面
      browser.assert.attributeContains('#zc_person_right > div','class','fl pa t0 hp ml2'); //左侧市场选项文字属性包括。。。
      browser.assert.attributeEquals('body','class','oh');
      },
     '市场界面切换_股指期货':function(browser){
      browser.resizeWindow(1024,582);
      browser.pause(3000);
      browser.click('#proType > li:nth-child(4)');
      browser.pause(1000)
      browser.assert.attributeContains('#proType > li:nth-child(4)','class','fl ml20 bc_51 c_0 tac r2 pbt5 mt-5');
      browser.saveScreenshot('D:/workspace/test/pic/市场界面切换_股指期货.png');
      browser.assert.attributeContains('#proType_free','class','fl ml20 c_26 pbt5 mt-5');
      browser.assert.attributeContains('#proType > li:nth-child(3)','class','fl ml20 c_26 pbt5 mt-5');
      browser.assert.attributeContains('#proType > li:nth-child(1)','class','fl ml20 c_26 pbt5 mt-5');
      browser.assert.containsText('#table_con > div > div.pr.hp > div > div:nth-child(2) > div > div > div.pr.hp.oh > div > div:nth-child(2) > div > div > div > table > thead > tr','代码 名称 买价 卖价 最高价 最低价 今开 昨收 涨跌量 涨跌幅% 更新时间');
      browser.assert.containsText('#table_single_chart > div.pa.t0.l0.z10.w300.p5 > div.w200.mt-20 > div > div > ul','分时日线周线小时');
      browser.assert.attributeContains('#refresh','class','dib window_no_drag cp pt0lr6 w14 h14 fr refresh');//刷新
      browser.assert.attributeContains('#zc_person_body_manyPicture','class','cp');//多图按钮
      browser.assert.attributeContains('#zc_person_body_manyPicture','src','imgs/rtdream/market.png');//右上角分隔图片
      browser.assert.attributeContains('#zc_person_table_body > tr.h30.lh25.selectedRow','class','h30 lh25 selectedRow');//产品项
      browser.assert.attributeContains('#zc_person_table_body','class','c_17 tb_body fs14');//产品显示界面
      browser.assert.attributeContains('#zc_person_index_left > div.pa.hp.fl.bc_51.oh','class','pa hp fl bc_51 oh');//左侧
      browser.assert.attributeContains('#index_news_img','src','imgs/IT.png'); //资讯图片属性等于imgs/IT.png
      browser.assert.containsText('#index_news_text','资讯');
      browser.assert.cssClassPresent('#zc_person_chat','w60'); //聊天图片logo有w60样式
      browser.assert.cssClassPresent('#table_single_detail','h180');//右侧详细信息
      browser.assert.cssClassPresent('body > div:nth-child(18) > div:nth-child(2) > div > div > div.pr.hp > div > div.pa.wp.fs14','wp'); //底边三个产品信息栏
      browser.assert.attributeContains('#zc_person_index_left > div.pa.hp.fl.bc_51.oh','class','pa hp fl bc_51 oh'); //左侧选项界面
      browser.assert.attributeContains('#zc_person_right > div','class','fl pa t0 hp ml2'); //左侧市场选项文字属性包括。。。
      browser.assert.attributeContains('#table_furl','class','pa h30 w30 mt8 mr3 t0 r0 cp easeWebkit');//折叠按钮
      browser.assert.attributeContains('#table_furl','src','imgs/rtdream/furl.png');//折叠按钮
      browser.assert.attributeEquals('body','class','oh');
      }
}