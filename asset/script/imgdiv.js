const ImgScales = {}

function zoomImg(imgId, scale) {
    let img = document.getElementById(imgId);
    let ww = window.innerWidth;
    let wh = window.innerHeight;
    if (!ImgScales[imgId]) ImgScales[imgId] = [1.0, img.clientWidth, img.clientHeight];
    let sclnow = ImgScales[imgId];
    sclnow[0] += scale;
    if (sclnow[1]*sclnow[0] < Math.min(ww*0.7, sclnow[1]) || sclnow[2]*sclnow[0] < wh*0.7 || sclnow[0] > 2.0) {
        sclnow[0] -= scale;
        return;
    }
    img.style.width = parseInt(sclnow[1] * sclnow[0]) + "px";
}

function zoomRImg(imgId) {
    let img = document.getElementById(imgId);
    if (!ImgScales[imgId]) ImgScales[imgId] = [1.0, img.clientWidth, img.clientHeight];
    let sclnow = ImgScales[imgId];
    sclnow[0] = 1.0;
    img.style.width = sclnow[1] + "px";
}