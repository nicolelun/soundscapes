<!-- begin menu toggle -->
$(document).ready(function() {
    $("#menuButton1").click(function() {
        $(".menuButtonBox").toggleClass("menuButtonBox-change");
        $(".menuBar").toggleClass("menuBar-change");
    });

    $("#closeMenu1").click(function() {
        $(".menuButtonBox").toggleClass("menuButtonBox-change");
        $(".menuBar").toggleClass("menuBar-change");
    });
});
<!-- end menu toggle -->

<!-- begin instructions -->
$(document).ready(function() {
    $("#closeInstructions1").click(function() {
        $(".instructionsBox").toggleClass("instructionsBox-change");
    });
});
<!-- end instructions -->

<!-- begin hit area toggle -->
$(document).ready(function() {
    $(".hitArea.retainHit").click(function() {
        $(this).toggleClass("hitSelected");
    });
});
<!-- end hit area toggle -->

<!-- begin media play -->
$(document).ready(function() {
    $("#pauseAll1").click(function() {
        $(".hitSelected").removeClass("hitSelected").addClass("hitArea");
    });

    $("#playAll1").click(function() {
        $(".hitArea").addClass("hitSelected");
    });
});

function playPause(mediaID) {
    var myMedia = document.getElementById(mediaID);
    if (myMedia.paused) {
        myMedia.play();
    } else {
        myMedia.pause();
    }
}

function pauseAll() {
    var myMedia = document.getElementsByClassName('media');
    var i = myMedia.length;
    while (i--) {
        myMedia[i].pause();
    }
}

function playAll() {
    var myMedia = document.getElementsByClassName('media');
    var i = myMedia.length;
    while (i--) {
        myMedia[i].play();
    }
}
<!-- end media play -->

