import "../jquery.js";

$(document).ready(function () {
    $("#btn").click(function () {
        $(".nav").toggleClass("show-nav");
    })

    $(window).scroll(function () {
        $curr = $(this).scrollTop();
        if ($curr > 0) {
            $("header").addClass("header-change");
        } else {
            $("header").removeClass("header-change");
        }
    })
}) 