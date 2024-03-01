function template(type) {
    switch (type) {
        case "loader":
            return `<div class="loader-page"><div class="loader"><span class="loader-text">loading</span><span class="load"></span></div></div>`;
        case "head":
            return `
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">`;
        case "body":
            return `
<div class="topnav">
    <a href="/">HOME</a>
    <a href="/llcmd/">LLCMD</a>
    <a href="https://www.github.com/Roxadu/" style="float:right;">
        <img src="/asset/image/github-mark.svg" alt="Github" width="20em" height="20em">
    </a>
</div>
<div id="navspacer"></div>`;
    }
}

let head = document.head;
let body = document.body;
body.innerHTML = `${template("loader")}\n${body.innerHTML}`;
head.innerHTML = `${head.innerHTML}\n${template("head")}`;
body.innerHTML = `${template("body")}\n${body.innerHTML}`;
document.getElementById("navspacer").style.height = `${document.querySelector(".topnav").clientHeight + 9}px`;

window.addEventListener("load", function() {
    document.querySelector(".loader-page").style.display = "none";
});