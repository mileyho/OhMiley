$(function(){

	var $checkbox = $(':checkbox[name=sel]');

	$('.notSelAll').click(function(){
		$checkbox.attr('checked', !!'');
 
		return false;
	});

	$('header li a').click(function(){
		$(this).addClass('this_page')
	});

	$(".rooms_s_img li").click(function(){
		$("html").css("overflow","hidden");
	})

	$(".lightbox-close").click(function(){
		$("html").css("overflow","visible");
	});

});