$(window).resize(function() {
    if ($(window).width() < 769) {
        /* Detalle Producto */
        $('#detalle-columna1').removeClass("col-5");
        $('#detalle-columna1').addClass("col-12");
        $('#detalle-columna2').removeClass("col-7");
        $('#detalle-columna2').addClass("col-12");
        /* Columnas Mitad */
        $('#columna1').removeClass("col-6");
        $('#columna1').addClass("col-12");
        $('#columna2').removeClass("col-6");
        $('#columna2').addClass("col-12");
        /* Columnas Informacion */
        $('#info-columna1').removeClass("col-8");
        $('#info-columna1').addClass("col-12");
        $('#info-columna2').removeClass("col-4");
        $('#info-columna2').addClass("col-12");
        /* Columnas tercia */
        $('#tercia-columna1').removeClass("col-4");
        $('#tercia-columna1').addClass("col-12");
        $('#tercia-columna2').removeClass("col-4");
        $('#tercia-columna2').addClass("col-12");
        $('#tercia-columna3').removeClass("col-4");
        $('#tercia-columna3').addClass("col-12");
        /* Columnas tercia 2*/
        $('#tercia-columna1-1').removeClass("col-4");
        $('#tercia-columna1-1').addClass("col-12");
        $('#tercia-columna2-2').removeClass("col-4");
        $('#tercia-columna2-2').addClass("col-12");
        $('#tercia-columna3-3').removeClass("col-4");
        $('#tercia-columna3-3').addClass("col-12");
    } else {
        /* Detalle Producto */
        $('#detalle-columna1').removeClass("col-12");
        $('#detalle-columna1').addClass("col-6");
        $('#detalle-columna2').removeClass("col-12");
        $('#detalle-columna2').addClass("col-6");
        /* Columnas Mitad */
        $('#columna1').removeClass("col-12");
        $('#columna1').addClass("col-6");
        $('#columna2').removeClass("col-12");
        $('#columna2').addClass("col-6");
        /* Columnas Informacion */
        $('#info-columna1').removeClass("col-12");
        $('#info-columna1').addClass("col-8");
        $('#info-columna2').removeClass("col-12");
        $('#info-columna2').addClass("col-4");
        /* Columnas tercia */
        $('#tercia-columna1').removeClass("col-12");
        $('#tercia-columna1').addClass("col-4");
        $('#tercia-columna2').removeClass("col-12");
        $('#tercia-columna2').addClass("col-4");
        $('#tercia-columna3').removeClass("col-12");
        $('#tercia-columna3').addClass("col-4");
        /* Columnas tercia 2*/
        $('#tercia-columna1-1').removeClass("col-12");
        $('#tercia-columna1-1').addClass("col-4");
        $('#tercia-columna2-2').removeClass("col-12");
        $('#tercia-columna2-2').addClass("col-4");
        $('#tercia-columna3-3').removeClass("col-12");
        $('#tercia-columna3-3').addClass("col-4");
    }
});
$(window).resize(function() {

    /*  if ($(window).width() < 769) {
         $('#contenidoPersonaje').removeClass("col-6");
         $('#contenidoPersonaje').addClass("col-12");
         $('#contenidoPersonajeFoto').removeClass("col-6");
         $('#contenidoPersonajeFoto').addClass("col-12");
     } else {
         $('#contenidoPersonaje').removeClass("col-6");
         $('#contenidoPersonaje').addClass("col-12");
         $('#contenidoPersonajeFoto').removeClass("col-12");
         $('#contenidoPersonajeFoto').addClass("col-6");
     } */

});