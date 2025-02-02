var img = document.getElementById("myimg");
var clouds = document.getElementById("clouds");
var plane = document.getElementById("plane");
var ballons = document.getElementById("ballons");

img.onclick = function() {
    if (clouds.style.webkitAnimationPlayState == "paused") {
        clouds.style.webkitAnimationPlayState = "running";
        plane.style.webkitAnimationPlayState = "running";
        ballons.style.webkitAnimationPlayState = "running";
        img.src = 'images/pause.png';
    } else {
        clouds.style.webkitAnimationPlayState = "paused";
        plane.style.webkitAnimationPlayState = "paused";
        ballons.style.webkitAnimationPlayState = "paused";
        img.src = 'images/play.png';
    }
}

