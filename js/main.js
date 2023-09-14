$(document).ready(function(){
    $(document).on("click", ".load-data", function(){
        for(var i = 0; i < 6; i++){
            $("#contacts-list-holder .mCSB_container").append('<div class="item"><a href="javascript: void(0);" class="title" data-tagline="hello"></a></div>');
        }
    });

    $(".info-box--body").mCustomScrollbar({
        theme:"dark",
        scrollInertia:0,
        advanced:{
            autoScrollOnFocus: false,
            updateOnContentResize: true
        }
    });

    if($(".dp").length > 0){
        $(".dp").datepicker({
            "autoclose": true
        });
    }
    $(".select2").select2({
        theme: 'bootstrap4',
    });

    $('[data-toggle="tab"]').on('hide.bs.tab', function (e) {
        $(".article-popup").fadeOut();
    });

    new WOW().init();
});
$(document).on("click", function(e){
    if($(".datepicker").length > 0){
        $("body").addClass("calendar-opened");
    }else{
        $("body").removeClass("calendar-opened");
    }
});
$(document).on("click", ".auth-screens .cross-icon", function(e){
    e.stopPropagation();
    $("body").removeClass("show-auth-screens");
    $("body").removeAttr("data-step");
});
$(document).on("click", "[data-step]", function(){
    $("body").attr("data-step", $(this).attr("data-step"));
    $("body").addClass("show-auth-screens");
});
$(document).on("click", ".call-log-button", function(){
    $("body").addClass("show-calls-history");
});
$(document).on("click", ".calls-history .cross-icon, .calls-history-overlay", function(){
    $("body").removeClass("show-calls-history");
});
$(document).on("click", ".get-password", function(){
    $("body").addClass("show-password-sent");
});
$(document).on("click", ".password-sent-button", function(){
    $("body").removeClass("show-password-sent");
});

$(document).on("click", ".popup-trigger", function(){
    $(".article-popup").fadeIn();

    $(".article-popup .scroll-area").customScrollbar({
        skin: "default-skin",
        hScroll: false,
    });
});

$(document).on("click", ".close-popup", function(){
    $(".article-popup").fadeOut();
});