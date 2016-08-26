/**
 * Created by Sergey Firsov on 25.08.2016.
 */

var beResponcive = function () {
    if($(window).width() < 900) {
        $(".btn-responsive").hide();
    }
    else {
        $(".btn-responsive").show();
    }
};

$(document).ready(function () {
    beResponcive();
});

$(window).resize(function () {
    beResponcive();
});

function onClickWelcome() {
    $('html, body').animate({scrollTop: 0});
}

function onClickAssemblingHardware() {
    var elementPosition = $('#assembling-hardware').position().top;
    $('html, body').animate({scrollTop: elementPosition});
}

function onClickInstallingSoftware() {
    var elementPosition = $('#installing-software').position().top;
    $('html, body').animate({scrollTop: elementPosition});
}

function onClickControlsOverview() {
    var elementPosition = $('#controls-overview').position().top;
    $('html, body').animate({scrollTop: elementPosition});
}
