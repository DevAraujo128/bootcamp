let copo = document.querySelector(".imagem-copo");
let circulo = document.querySelector(".circulo");
function mudarCor(img , cor) {
    document.querySelector(".imagem-copo").src = img;
    document.querySelector(".circulo").style.backgroundColor = cor;
}