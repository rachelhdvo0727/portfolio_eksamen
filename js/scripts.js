window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    //burgermenu
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);

    function goBack() {
        window.history.back();
    }
    // Video
    //var video = document.querySelector("#video");
    // Buttons
    ////var playButton = document.querySelector("#play-pause");
    //var muteButton = document.querySelector("#mute");
    ////var fullScreenButton = document.querySelector("#full-screen");

    // Sliders
    //var seekBar = document.querySelector("#seek-bar");
    //var volumeBar = document.querySelector("#volume-bar");

    //playButton.addEventListener("onclick", playVideo);

    // Event listener for the mute button
    //muteButton.addEventListener("click", muteVideo);

    // Event listener for the full-screen button
    //fullScreenButton.addEventListener("click", fullScreen);

    // Event listener for the seek bar
    //seekBar.addEventListener("change", barVises);

    // Update the seek bar as the video plays
    //video.addEventListener("timeupdate", videoUpdate);

    // Pause the video when the slider handle is being dragged
    //seekBar.addEventListener("mousedown", sliderPause);

    // Play the video when the slider handle is dropped
    //seekBar.addEventListener("mouseup", sliderPlay);

}

function toggleMenu() {
    console.log("toggleMenu");

    //åben burgermenu
    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult = document.querySelector("#menu")
        .classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#menuknap")
            .classList.toggle("change");
    } else {
        document.querySelector("#menuknap")
            .classList.toggle("change");
    }
}
