// metodo cambiar imagenes cada 5 seg //

var image = new Array()
image[0] = "img/anuncio_1-1.png"
image[1] = "img/anuncio_1-2.png"
image[2] = "img/anuncio_1-3.png"
var delay = 5000
var count = 1;
var cubeimage = new Array()

for (i = 0; i < image.length; i++) {
    cubeimage[i] = new Image()
    cubeimage[i].src = image[i]
}

function movecube() {
    if (window.createPopup)
        cube.filters[0].apply()
        document.getElementById("cube").src=cubeimage[count].src;
    if (window.createPopup)
        cube.filters[0].play()
    count++;
    if (count == cubeimage.length)
        count = 0;
    setTimeout("movecube()", delay)
}
window.onload = new Function("setTimeout('movecube()',delay)")