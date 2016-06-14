require('C:/Users/Administrator/AppData/Roaming/npm/node_modules/nightwatch/bin/runner.js');
var nightwatch = require('C:/Users/Administrator/AppData/Roaming/npm/node_modules/nightwatch/index.js');
module.exports = {  
    '产品显示选择':function(browser){  //#index_menu_pageType > div > table > tbody
      console.log('top_bar,产品显示选择(曲线图左上),周期选择,线形选择,指标搜索,线型设置');
      browser.resizeWindow(1024,700);
      browser.url('http://127.0.0.1:8020/mc/zc_person_index.html');
      browser.setValue('#login_user_name','sheep');//用户名
      browser.setValue('#login_user_pwd','123123');
      browser.click('#login_btn');  //点击登录
      browser.pause(6000);
      browser.click('#proType > li:nth-child(3)');//点击外汇市场
      browser.click('#zc_person_body_manyPicture');//点击版式选择按钮
      browser.pause(2000);
      browser.assert.attributeContains('#index_menu_pageType > div','class','list_bs bg_1 b_65');
      browser.assert.elementPresent('#index_menu_pageType > div > table > tbody');
      browser.saveScreenshot('D:/workspace/test/pic/产品显示选择_板式选择界面.png');
      browser.click('#index_menu_pageType > div > table > tbody > tr:nth-child(1) > td:nth-child(2)');//点击版式1
      browser.saveScreenshot('D:/workspace/test/pic/产品显示选择_板式1.png');
     /* 
      browser.pause(2000);
      browser.click('#mutli_search_li');//点击产品搜索下拉按钮
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/产品显示选择_下拉选择界面.png');
      browser.click('#mutli_search_content > div > div:nth-child(2) > div > div > table > tbody > tr:nth-child(1) > td');//点击下拉框第一个产品
      browser.pause(2000);
      browser.saveScreenshot('D:/workspace/test/pic/产品显示选择_选择first产品.png');

      browser.click('#mutli_search_li')//点击搜索下拉按钮
      browser.pause(2000);
      browser.click('#mutli_search_content > div > div.pa.wp.bc_10 > input');//点击搜索输入框
      browser.setValue('#mutli_search_content > div > div.pa.wp.bc_10 > input','copper');//搜索框输入copper
      browser.pause(3000);
      browser.saveScreenshot('D:/workspace/test/pic/产品显示选择_索搜框输入.png');
      browser.click('#mutli_search_content > div > div:nth-child(2) > div > div > table > tbody > tr > td');//点击搜索结果第一个
      browser.saveScreenshot('D:/workspace/test/pic/产品显示选择_搜索产品显示.png');
      //三处产品显示一致
      browser.pause(2000);
      browser.assert.containsText('#mutli_search','Copper');
      browser.assert.containsText('#canvas_con > div > div.pr.hp > div > div:nth-child(2) > div > div > div.pr.hp > div > div:nth-child(2) > div > div.fl.pr.w50p.h50p.chart_selected > div:nth-child(4) > div:nth-child(1) > div:nth-child(1)','Copper');
      browser.assert.containsText('#table_pname','铜');

      browser.click('#mutli_search');//点击搜索下拉按钮
      browser.pause(2000) ;
      browser.click('#mutli_search_content > div > div:nth-child(2) > div > div > table > tbody > tr:nth-child(10) > td');
      browser.saveScreenshot('D:/workspace/test/pic/产品显示选择_任意显示.png');
      //选中的上下边框为蓝色，没选中的上下边框为灰色
      browser.assert.cssClassPresent('#canvas_con > div > div.pr.hp > div > div:nth-child(2) > div > div > div.pr.hp > div > div:nth-child(2) > div > div:nth-child(1)','chart_selected');//有色
      browser.assert.cssClassNotPresent('#canvas_con > div > div.pr.hp > div > div:nth-child(2) > div > div > div.pr.hp > div > div:nth-child(2) > div > div:nth-child(2)','chart_selected');//没有chart_selected色

      browser.click('#canvas_con > div > div.pr.hp > div > div:nth-child(2) > div > div > div.pr.hp > div > div:nth-child(2) > div > div:nth-child(2)');//点击第二个成品框
      browser.assert.cssClassNotPresent('#canvas_con > div > div.pr.hp > div > div:nth-child(2) > div > div > div.pr.hp > div > div:nth-child(2) > div > div:nth-child(1)','chart_selected');//没有chart_selected色
      browser.assert.cssClassPresent('#canvas_con > div > div.pr.hp > div > div:nth-child(2) > div > div > div.pr.hp > div > div:nth-child(2) > div > div:nth-child(2)','chart_selected');
      browser.assert.cssClassNotPresent('#canvas_con > div > div.pr.hp > div > div:nth-child(2) > div > div > div.pr.hp > div > div:nth-child(2) > div > div:nth-child(3)','chart_selected');//没有chart_selected色
      browser.assert.cssClassNotPresent('#canvas_con > div > div.pr.hp > div > div:nth-child(2) > div > div > div.pr.hp > div > div:nth-child(2) > div > div:nth-child(4)','chart_selected');//没有chart_selected色
      browser.saveScreenshot('D:/workspace/test/pic/产品显示选择__多图列表点击第二个.png');*/
    },
    
    '周期选择':function(browser){ 
      browser.pause(3000);
      console.log(',周期选择选择');
      browser.resizeWindow(1024,700);
      browser.click('#mutli_cycle_li');//点击日线按钮
      browser.pause(2000);
      browser.saveScreenshot('D:/workspace/test/pic/周期选择_日线选择界面.png');
      browser.assert.attributeContains('#mutli_cycle_li','class','w48 dib tac wsn diagram_change_span mr-9 easeWebkit  diagram_change_text bc_33');//点到日线按钮，按钮所有颜色变化
      browser.assert.cssClassNotPresent('#mutli_times','diagram_change_text');//分时按钮
      browser.assert.containsText('#mutli_cycle_content > div > table > tbody','1分\n5分\n15分\n30分\n60分\n日线\n周线');
      browser.assert.attributeContains('#mutli_cycle_content > div','class','list_bs bg_1 b_65');//下拉框格式
      //箭头==================================================================================================>>
      browser.click('#canvas_con > div > div.pr.hp > div > div:nth-child(2) > div > div > div.pr.hp > div > div:nth-child(2) > div > div');//点击任意位置取消日线下拉框显示
      browser.saveScreenshot('D:/workspace/test/pic/周期选择_日线默认界面.png');
      browser.click('#mutli_cycle_li');//点击日线按钮
      browser.click('#mutli_cycle_content > div > table > tbody > tr:nth-child(1) > td');//点击1分
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/周期选择_1分.png');
      browser.assert.containsText('#mutli_cycle','1分');
      browser.assert.containsText('#canvas_con > div > div.pr.hp > div > div:nth-child(2) > div > div > div.pr.hp > div > div:nth-child(2) > div > div.fl.pr.w50p.h50p.chart_selected > div:nth-child(4) > div:nth-child(1) > div:nth-child(2)','(1分)');//指标旁边显示
      browser.click('#mutli_cycle_li');//点击日线按钮
      browser.click('#mutli_cycle_content > div > table > tbody > tr:nth-child(2) > td');//点击5分
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/周期选择_5分.png');
      browser.assert.containsText('#mutli_cycle','5分');
      browser.assert.containsText('#canvas_con > div > div.pr.hp > div > div:nth-child(2) > div > div > div.pr.hp > div > div:nth-child(2) > div > div.fl.pr.w50p.h50p.chart_selected > div:nth-child(4) > div:nth-child(1) > div:nth-child(2)','(5分)');//指标旁边显示

      browser.click('#mutli_cycle_li');//点击日线按钮
      browser.click('#mutli_cycle_content > div > table > tbody > tr:nth-child(3) > td')//点击15分
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/周期选择_15分.png');
      browser.assert.containsText('#mutli_cycle','15分');
      browser.assert.containsText('#canvas_con > div > div.pr.hp > div > div:nth-child(2) > div > div > div.pr.hp > div > div:nth-child(2) > div > div.fl.pr.w50p.h50p.chart_selected > div:nth-child(4) > div:nth-child(1) > div:nth-child(2)','(15分)');//指标旁边显示

      browser.click('#mutli_cycle_li');//点击日线按钮
      browser.click('#mutli_cycle_content > div > table > tbody > tr:nth-child(4) > td');//点击30分
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/周期选择_30分.png');
      browser.assert.containsText('#mutli_cycle','30分');
      browser.assert.containsText('#canvas_con > div > div.pr.hp > div > div:nth-child(2) > div > div > div.pr.hp > div > div:nth-child(2) > div > div.fl.pr.w50p.h50p.chart_selected > div:nth-child(4) > div:nth-child(1) > div:nth-child(2)','(30分)');//指标旁边显示

      browser.click('#mutli_cycle_li');//点击日线按钮
      browser.click('#mutli_cycle_content > div > table > tbody > tr:nth-child(5) > td');//点击60分
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/周期选择_60分.png');
      browser.assert.containsText('#mutli_cycle','60分');
      browser.assert.containsText('#canvas_con > div > div.pr.hp > div > div:nth-child(2) > div > div > div.pr.hp > div > div:nth-child(2) > div > div.fl.pr.w50p.h50p.chart_selected > div:nth-child(4) > div:nth-child(1) > div:nth-child(2)','(60分)');//指标旁边显示

      browser.click('#mutli_cycle_li');//点击日线按钮
      browser.click('#mutli_cycle_content > div > table > tbody > tr:nth-child(6)');//点击日线
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/周期选择_日线.png');
      browser.assert.containsText('#mutli_cycle','日线');
      browser.assert.containsText('#canvas_con > div > div.pr.hp > div > div:nth-child(2) > div > div > div.pr.hp > div > div:nth-child(2) > div > div.fl.pr.w50p.h50p.chart_selected > div:nth-child(4) > div:nth-child(1) > div:nth-child(2)','(日线)');//指标旁边显示
      browser.click('#mutli_cycle_li');//点击日线按钮
      browser.click('#mutli_cycle_content > div > table > tbody > tr:nth-child(7)');//点击周线
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/周期选择_周线.png');
      browser.assert.containsText('#mutli_cycle','周线');
      browser.assert.containsText('#canvas_con > div > div.pr.hp > div > div:nth-child(2) > div > div > div.pr.hp > div > div:nth-child(2) > div > div.fl.pr.w50p.h50p.chart_selected > div:nth-child(4) > div:nth-child(1) > div:nth-child(2)','(周线)');//指标旁边显示

      browser.click('#mutli_times');//点击分时图按钮
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/周期选择_分时图.png')
      browser.assert.attributeContains('#mutli_times','class','dib tac wsn diagram_change_span ml-8 easeWebkit diagram_change_text');
    },
    '线形选择':function(browser){  //选择线形按钮需要点击两次才能调出下拉选项===================================>>>>>>
      browser.resizeWindow(1024,700);
      browser.pause(5000);
      browser.click('#mutli_linear_li');//点击线形选择按钮
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/线形选择_线形选择.png');

      browser.click('#mutli_liner_content > div > table > tbody > tr:nth-child(2)');//点击美国线
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/线形选择_山形线.png');


      browser.click('#mutli_linear_li');//点击线形选择按钮
      browser.click('#mutli_liner_content > div > table > tbody > tr:nth-child(3) > td:nth-child(2)');//点击山形线
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/线形选择_美国线.png');

      browser.click('#mutli_linear_li');//点击线形选择按钮
      browser.click('#mutli_liner_content > div > table > tbody > tr:nth-child(1)');//点击k线
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/线形选择_k线.png');
    },
    '线型设置':function(browser){ //#lines_bg_color_0 > div > div.scolor3 > div > div > div.alpha > label:nth-child(5)
      browser.resizeWindow(1024,700);
      browser.pause(5000);
      browser.click('#mutli_lines_btn > span');//线型设置按钮
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/线型设置_首页.png');
      browser.click('#canvas_line_con > table > tbody > tr:nth-child(1) > td:nth-child(2) > div.dib.w29.h29.b_65.tac');//点击阳线烛行按钮
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/线型设置_阳线颜色框.png');
      browser.click('#positive_color_0 > div > div.scolor3 > div > div > div.blocks > span:nth-child(38)');//点击一个颜色
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/线型设置_阳线选择颜色.png');
      browser.click('#canvas_line_con > table > tbody > tr:nth-child(1) > td:nth-child(3) > div.dib.w29.h29.b_65.tac');//点击阴线烛行按钮
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/线型设置_阴线颜色框.png');
      browser.click('#negative_color_0 > div > div.scolor3 > div > div > div.blocks > span:nth-child(1)');//点击一个颜色==============
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/线型设置_阴选择颜色.png');
      browser.click('#canvas_line_con > div');//点击空白处=====================================error
      browser.click('#canvas_line_yes');//点击保存
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/线型设置_保存颜色设置.png');
      browser.pause(2000);

      browser.click('#mutli_lines_btn > span');//点击设置按钮
      browser.pause(1000);
      browser.click('#canvas_line_bgtg');//点击背景按钮
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/线型设置_背景设置.png');
      browser.click('#canvas_line_conbg > table > tbody > tr:nth-child(2) > td:nth-child(2) > div.dib.w29.h29.b_65.tac');//点击网格线按钮
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/线型设置_网格线.png');
      browser.click('#canvas_line_conbg > table > tbody > tr:nth-child(1) > td:nth-child(2) > div.dib.w29.h29.b_65.tac');//点击全局背景
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/线型设置_设置_全局背景.png');
      browser.click('#lines_bg_color_0 > div > div.scolor3 > div > div > div.blocks > span:nth-child(30)');//颜色选择
                     
      browser.click('#lines_bg_color_0 > div > div.scolor3 > button.btn.fs10.line_c_1.h20.pa.r2');//确定

      //点击十字线按钮
      browser.click('#canvas_line_conbg > table > tbody > tr:nth-child(3) > td:nth-child(2) > div.dib.w29.h29.b_65.tac');
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/线型设置_十字线.png');
      browser.click('#lines_bg_color_2 > div > div.scolor3 > div > div > div.blocks > span:nth-child(43)');//颜色选择
      browser.pause(1000);
      browser.click('#lines_bg_color_2 > div > div.scolor3 > button.btn.fs10.line_c_1.h20.pa.r2');//确定

      browser.click('#canvas_line_conbg > table > tbody > tr:nth-child(4) > td:nth-child(2) > div.dib.w29.h29.b_65.tac');//点击坐标文字按钮
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/线型设置_坐标文字.png');
      browser.click('#lines_bg_color_3 > div > div.scolor3 > div > div > div.blocks > span:nth-child(1)');//颜色选择
      browser.pause(1000);

      browser.click('#lines_bg_color_3 > div > div.scolor3 > div > div > div.alpha > label:nth-child(4)');//点击中透明
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/线型设置_中透明.png');
      browser.click('#lines_bg_color_3 > div > div.scolor3 > div > div > div.alpha > label:nth-child(3)');//点击低透明
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/线型设置_低透明.png');
      browser.click('#lines_bg_color_3 > div > div.scolor3 > div > div > div.alpha > label:nth-child(5)');//点击高透明
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/线型设置_高透明.png');
      browser.click('#lines_bg_color_3 > div > div.scolor3 > button.btn.fs10.line_c_1.h20.pa.r2');//确定

      browser.click('#canvas_line_yes');//保存
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/线型设置_设置结果.png');
    },

    '指标搜索':function(browser){  
      browser.resizeWindow(1024,700);
      browser.pause(5000);
      browser.click('#mutli_search_btn > img'); //点击指标搜索按钮
      browser.saveScreenshot('D:/workspace/test/pic/指标搜索_主页.png');
      browser.pause(1000);
      browser.click('#mulit_search_left > div:nth-child(2) > div:nth-child(3)');//点击指标收藏
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/指标搜索_指标收藏.png');

      browser.click('#mulit_search_left > div:nth-child(2) > div:nth-child(4)');//点击策略收藏
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/指标搜索_策略收藏.png');

      browser.click('#mulit_search_left > div:nth-child(3) > div.pl25.cp.pb5.pt5.fs15.sub_title');//点击内置指标
      browser.pause(2000);
      browser.saveScreenshot('D:/workspace/test/pic/指标搜索_内置指标.png');

      browser.click('#mulit_search_left > div:nth-child(4) > div:nth-child(3)');//点击私人策略库
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/指标搜索_私人策略库.png');
      browser.click('#mulit_search_left > div:nth-child(4) > div:nth-child(4)');//点击公共策略库
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/指标搜索_公共策略库.png');

      browser.click('#mulit_search_left > div:nth-child(5) > div.pl25.cp.pb5.pt5.fs15.sub_title');//点击我的模板
      browser.pause(1000);
      browser.saveScreenshot('D:/workspace/test/pic/指标搜索_我的模板.png');
      },
}
