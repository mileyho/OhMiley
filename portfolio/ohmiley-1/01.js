$(function(){
	
	$(window).scroll(function(){
		
		var WIDTH = $(window).innerWidth()/2-170;
	
		if( $(window).scrollTop() >=3300 ){
			$("#email").stop(true,false).animate({left:WIDTH},500);
		}else{
			$("#email").stop(true,false).animate({left:-350},900);
			
		}
		
		if($(window).scrollTop() >=0){
			$("#logo").removeClass().addClass("logo_1")
			$("#B01").removeClass().addClass("btn_select")
			$("#B02").removeClass().addClass("btn_original")	
			$("#B03").removeClass().addClass("btn_original")	
			$("#B04").removeClass().addClass("btn_original")
		}
		if($(window).scrollTop() >=1300){
			$("#logo").removeClass().addClass("logo_2")
			$("#B02").removeClass().addClass("btn_select")
			$("#B01").removeClass().addClass("btn_original")
			$("#B03").removeClass().addClass("btn_original")	
			$("#B04").removeClass().addClass("btn_original")	
		}
		if($(window).scrollTop() >=2300){
			$("#logo").removeClass().addClass("logo_3")
			$("#B03").removeClass().addClass("btn_select")
			$("#B01").removeClass().addClass("btn_original")	
			$("#B02").removeClass().addClass("btn_original")	
			$("#B04").removeClass().addClass("btn_original")	
		}
		if($(window).scrollTop() >=3300){
			$("#logo").removeClass().addClass("logo_4")	
			$("#B04").removeClass().addClass("btn_select")
			$("#B01").removeClass().addClass("btn_original")	
			$("#B02").removeClass().addClass("btn_original")	
			$("#B03").removeClass().addClass("btn_original")
			
		}
	
	})
	
	
	
	$("#B01").click(function(){
		$(this).removeClass().addClass("btn_select")
		$("#B02").removeClass().addClass("btn_original")	
		$("#B03").removeClass().addClass("btn_original")	
		$("#B04").removeClass().addClass("btn_original")
		$("html,body").stop().animate({scrollTop:0},800)
		return false	
	})
	$("#B02").click(function(){
		$(this).removeClass().addClass("btn_select")
		$("#B01").removeClass().addClass("btn_original")	
		$("#B03").removeClass().addClass("btn_original")	
		$("#B04").removeClass().addClass("btn_original")
		$("html,body").stop().animate({scrollTop:1300},800)
		return false	
	})
	$("#B03").click(function(){
		$(this).removeClass().addClass("btn_select")
		$("#B01").removeClass().addClass("btn_original")	
		$("#B02").removeClass().addClass("btn_original")	
		$("#B04").removeClass().addClass("btn_original")
		$("html,body").stop().animate({scrollTop:2300},800)
		return false	
	})
	$("#B04").click(function(){
		$(this).removeClass().addClass("btn_select")
		$("#B01").removeClass().addClass("btn_original")	
		$("#B02").removeClass().addClass("btn_original")	
		$("#B03").removeClass().addClass("btn_original")
		$("html,body").stop().animate({scrollTop:3300},800)
		return false
	})
	
	
})





