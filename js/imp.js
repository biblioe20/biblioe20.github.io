function printDiv1(Ficha) {
     var contenido= document.getElementById(Ficha).innerHTML;
     var contenidoOriginal= document.body.innerHTML;

     document.body.innerHTML = contenido;

     window.print();

     document.body.innerHTML = contenidoOriginal;
}