$(function(){
	var items = $("#ul1").children();
	var len =items.length;
	var index = 0;
	var dots= $("#group").children();
	//自动轮播
	function autoplay(){
		$(items[index]).show();
		$(dots[index]).css("background","#d91711");
	function play(){
		$(dots[index]).css("background","#b0998b");
		if(index>=0 & index<len-1){
			$(items[index]).hide();
			index++;
			$(items[index]).show();
			$(dots[index]).css("background","#d91711");
		}else{
			$(items[index]).hide();
			index=0;
			$(items[index]).show();
			$(dots[index]).css("background","#d91711");
		}
		
			
	}
	setInterval(play,3000);
}
autoplay();
//左按钮
	$("#lt").click(function(){
		$(dots[index]).css("background","#b0998b");
		if(index==0){
			$(items[index]).hide();
			index=len-1;
			$(items[index]).show();
			$(dots[index]).css("background","#d91711");
		}else{
			$(items[index]).hide();
			index--;
			$(items[index]).show();
			$(dots[index]).css("background","#d91711");
		}
	})
//右边按钮	
	$("#rt").click(function(){
		$(dots[index]).css("background","#b0998b");
		if(index==len-1){
			$(items[index]).hide();
			index=0;
			$(items[index]).show();
			$(dots[index]).css("background","#d91711");
		}else{
			$(items[index]).hide();
			index++;
			$(items[index]).show();
			$(dots[index]).css("background","#d91711");
		}
	})
	//小圆点轮播
	$("#group span").mouseover(function(){
		var num = $(this).index();
		$(items).hide();
		$(dots).css("background","#b0998b");
		$(items[num]).show();
		$(dots[num]).css("background","#d91711");
	})
})
