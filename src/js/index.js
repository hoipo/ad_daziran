var canShow = false;
new PageSlider({
    pages: $('.page-wrap .page'),
    dev: false,
    preventDefault: true,
    oninit: function() {
        if (canShow) {
            $(".bg1,.bg2").addClass("hide");
            $(".t1,.t2,.t3").addClass("show");
        } else {
            canShow = true;
        }
    },
    onSwipeUp: function() {
        if (this.index === 0) {
            var page = $(this.pages).eq(0);
            page.find('.text').addClass("show");
            page.find('.arrow').addClass('black');
            page.data('lock-next', false);
        }
    },
    onSwipeDown: function() {
        if (this.index === 0) {
            var page = $(this.pages).eq(0);
            page.find('.text').removeClass("show");
            page.find('.arrow').removeClass('black');
            page.data('lock-next', true);
        }
    },
    onchange: function() {}
});

var musicPlay = true;
$(".musicLogo").on("touchstart", function(e) {
    e.stopPropagation();
    //如果正在播放音乐
    if (musicPlay) {
        $(".musicLogo").css("background-position", "0px -40px");
        $(".musicLogo").removeClass("rotate");
        $("#myAudio")[0].pause();
        musicPlay = false;
    } else {
        $(".musicLogo").css("background-position", "0px 0px");
        $(".musicLogo").addClass("rotate");
        $("#myAudio")[0].play();
        musicPlay = true;
    }
})

var firstTimePlayMusic = function() {
    $("#myAudio")[0].play();
    $("#view").off("touchstart", firstTimePlayMusic);
}

$("#view").on("touchstart", firstTimePlayMusic);

(function() {
    var counter = 0;
    var list = ["../img/p1_01.jpg", "../img/p1_02.jpg"];
    var img = new Image();
    img.onload = function() {
        counter++;
        if (counter >= 2) {
            if (canShow) {
                $(".bg1,.bg2").addClass("hide");
                $(".t1,.t2,.t3").addClass("show");
            } else {
                canShow = true;
            }
        } else {
            this.src = list.shift();
        }
    }
    img.src = list.shift();
})();