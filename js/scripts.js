window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    document.querySelector("#menuknap")
        .addEventListener("click", toggleMenu);
    document.querySelector(".tema").hover(temaZoomin);

}

function toggleMenu() {
    console.log("toggleMenu");

    //åben burgermenu
    document.querySelector("#menu")
        .classList.toggle("hidden");

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

function temaZoomin() {
    console.log("temaZoomin");

    $(this).hover("zoomin");
}
