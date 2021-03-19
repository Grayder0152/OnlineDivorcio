$('.hidden_menu_button').click(function(){
	$(".hidden_menu_button span").toggleClass('active')
	$(".mob_menu").toggleClass('active_menu')
	$(".mob_menu li").toggleClass('active_menu_li')
	$("article").toggleClass('blur')
	// $("body").toggleClass('active_article')
})
