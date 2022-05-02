function Media() {
    var nota1Elemento = document.getElementById("nota1");
    var nota2Elemento = document.getElementById("nota2");
    var nota3Elemento = document.getElementById("nota3");
    var nota4Elemento = document.getElementById("nota4");

    var nota1 = nota1Elemento.value;
    var nota1Elemento = parseFloat(nota1);
    var nota2 = nota2Elemento.value;
    var nota2Elemento = parseFloat(nota2);
    var nota3 = nota3Elemento.value;
    var nota3Elemento = parseFloat(nota3);
    var nota4 = nota4Elemento.value;
    var nota4Elemento = parseFloat(nota4);

    var mediaFinal = (nota1Elemento + nota2Elemento + nota3Elemento + nota4Elemento) / 4;
    console.log(mediaFinal);
    var elementoValorMedia = document.getElementById("valorMedia");
    var valorMedia = "Sua média final é " + mediaFinal;
    elementoValorMedia.innerHTML = valorMedia;
}