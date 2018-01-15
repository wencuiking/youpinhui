$(function(){
	var items = $(".ulb").children();
	var len =items.length;
	var index = 0;
	var dots= $(".uls").children();
	//自动轮播
	function autoplay(){
		$(items[index]).show();
		$(dots[index]).css("background","");
	function play(){
		$(dots[index]).css("background","");
		if(index>=0 & index<len-1){
			$(items[index]).hide();
			index++;
			$(items[index]).show();
			$(dots[index]).css("background","url(img/iicons_02.png) no-repeat");
		}else{
			$(items[index]).hide();
			index=0;
			$(items[index]).show();
			$(dots[index]).css("background","url(img/iicons_02.png) no-repeat");
		}
		
			
	}
	setInterval(play,3000);
}
autoplay();
//左按钮
	$(".lt").click(function(){
		$(dots[index]).css("background","");
		if(index==0){
			$(items[index]).hide();
			index=len-1;
			$(items[index]).show();
			$(dots[index]).css("background","url(img/iicons_02.png) no-repeat");
		}else{
			$(items[index]).hide();
			index--;
			$(items[index]).show();
			$(dots[index]).css("background","url(img/iicons_02.png) no-repeat");
		}
	})
//右边按钮	
	$(".rt").click(function(){
		$(dots[index]).css("background","");
		if(index==len-1){
			$(items[index]).hide();
			index=0;
			$(items[index]).show();
			$(dots[index]).css("background","url(img/iicons_02.png) no-repeat");
		}else{
			$(items[index]).hide();
			index++;
			$(items[index]).show();
			$(dots[index]).css("background","url(img/iicons_02.png) no-repeat");
		}
	})
	//小图轮播
	$(dots).mouseover(function(){
		var num = $(this).index();
		$(items).hide();
		$(dots).css("background","");
		$(items[num]).show();
		$(dots[num]).css("background","url(img/iicons_02.png) no-repeat");
		setTimeout(function(){
			$(dots[num]).css("background","");
		},500)
	})
})
