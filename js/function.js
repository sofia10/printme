$().ready(function(){
	$(".login").click(function(){
		$(".dropdown").slideToggle();
	});

$('#fullpage').fullpage({
	navigation: true,
	navigationPosition: "right"
});

$("ul.tab li").click(function(){
    $("ul.tab li").removeClass('active');
    $(this).addClass('active');
    var index = $(this).index();
    $("ul.tabContent li").hide();
    $("ul.tabContent li").eq(index).fadeIn();
  });


$("div.buttons a").click(function(){
    $("div.buttons a").removeClass('active');
    $(this).addClass('active');
    var index = $(this).index();
    $("div.logregister form").hide();
    $("div.logregister form").eq(index).fadeIn();
  });


// Swiper Slider
var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        direction: 'vertical',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        mousewheelControl: true
    });

// Swiper Slider END !!!!!

$(document).ready(function(){
    
    $('div.zoma > img:nth-child(1)').click(function(){
        
    });


    $('div.raodenoba > img:nth-child(1)').click(function(){
        var spanVal = parseInt($(this).parent().find("input").val());
       
        if (spanVal > 1){
            spanVal--;
            $(this).parent().find("input").val(spanVal + " ცალი");
        }
    });

    $('div.raodenoba > img:nth-child(3)').click(function(){
        var spanVal = parseInt($(this).parent().find("input").val());
            spanVal++;
            $(this).parent().find("input").val(spanVal + " ცალი");
    });

});

$("#reg").click(function(){
    $(".popupbg").fadeIn();
    $(".popup").fadeIn();
});

$(".popupbg").click(function(){
    $(".popupbg").fadeOut();
    $(".popup").fadeOut();
});

});