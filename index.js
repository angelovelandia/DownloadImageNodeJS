const imgDownload = require('./download-image').download;

const urlImg = "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg";

const nomFile = "Node.js_logo.svg";

imgDownload(urlImg, nomFile, function(){
    console.log("Imagen: " + nomFile + " descargada con exito.");
});