function openNav(id) {
    document.getElementById(id).style.width = "100vw";
}

function closeNav(id) {
    document.getElementById(id).style.width = "0";
}

$('.slider_reviews').slick({
	infinite: true,
	slidesToShow: 2,
	slidesToScroll: 1,
	prevArrow:'<p class="prev but"><img src="static/images/chevron-left.png"></p>',
	nextArrow:'<p class="next but"><img src="static/images/chevron-right.png"></p>',
	responsive: [
	{
	  breakpoint: 1200,
	  settings: {
	    slidesToShow: 1
	  }
	},
	{
      breakpoint: 720,
      settings: {
        dots:true,
        slidesToShow: 1
      }
    }
	]
});
