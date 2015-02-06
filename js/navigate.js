// Preloader
$(document).ready(function() {
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 3000);
});

// Change header style after scroll
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
        $(".main").addClass("shadow");
        $("#totop").css("display","block");
    }
    else {
        $(".main").removeClass("shadow");
        $("#totop").css("display","none");
    }
});

// Keyable: set keys
$(document).ready(function() {
    $(".keyable").css("display","none");
    // Show at initial load
    $("#works").css("display","block");

    // Click instead
    showLink($("ul.browse li a"));

    $(document).keypress(function(e) {
        switch(e.which) {
            // Key: w
            case 119: showKey("#works"); break;
            // Key: p
            case 112: showKey("#profile"); break;
            // Key: c
            case 99: showKey("#contact"); break;
        }
    });
});

// Keyable: animation
function showKey(element_id) {
    $(".keyable").css("display","none");
    $(element_id).animate({width:'toggle'},600);
}

// Click instead of pressing key
function showLink(array) {
    array.each(function(i) {
        $(this).click(function() {
            var target = $(this).attr("href");
            $(".keyable").css("display","none");
            $(target).animate({width:'toggle'},600);
            // .slideDown("slow");
        });
    });
}

// Smooth scroll: press up/down to jump by section
function scrollToSection(anchor) {
    $("html,body").animate({scrollTop: anchor.offset().top},600);
}

var i = 1;
$(document).keydown(function (event) {
    if (event.keyCode == 38) {
        i--;
        scrollToSection($("#Sect"+i));
    } else if (event.keyCode == 40) {
        i++;
        event.preventDefault();
        scrollToSection($("#Sect"+i));
    }
});