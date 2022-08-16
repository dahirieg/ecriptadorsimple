     let btnEncriptar = document.getElementById('btnEncripta');
     let btnDesencriptar = document.getElementById('btnDecriptar');
     let btnCopiar = document.getElementById('btnCopia');
     var activo = false;
     var arr = [];
     var validar = [];
     var frace;
     var acento = false;

     window.onload = function() {
         document.getElementById('txtEncriptar').focus();
     }


     function limpiarPanel() {
         if (activo == true) {
             document.getElementById('btnCopia').style.visibility = "visible";
             document.getElementById('muneco').style.visibility = "hidden";
             document.getElementById('label1').style.visibility = "hidden";
             document.getElementById('label2').style.visibility = "hidden";


         } else {
             document.getElementById('btnCopia').style.visibility = "hidden";
             document.getElementById('muneco').style.visibility = "visible";
             document.getElementById('label1').style.visibility = "visible";
             document.getElementById('label2').style.visibility = "visible";
             document.getElementById('respuesta').value = "";


         };
     }



     function validaAcento(arreglo) {

         console.log(arreglo)
         for (let i = 0; i < arreglo.length; i++) {


             if (arreglo.charAt(i) == 'á' || arreglo.charAt(i) == 'é' || arreglo.charAt(i) == 'í' || arreglo.charAt(i) == 'ó' || arreglo.charAt(i) == 'ú') {
                 alert("No se aceptan acentos ni favor corregir");

                 document.getElementById('txtEncriptar').focus();
                 activo = false;
                 acento = true;
                 limpiarPanel();
                 location.reload();

                 exit();
             }

         }
         if (acento == false) {

             activo = true;
             limpiarPanel();
             encriptar(arreglo);
             return arreglo;

         }


     }


     function inicio(texto) {
         texto = txtEncriptar.value;
         texto = texto.toLowerCase();

         frace = validaAcento(texto);
         return texto


     }

     function encriptar(texto) {

         texto = texto.replace(new RegExp("e", "g"), "enter");
         texto = texto.replace(new RegExp("i", "g"), "imes");
         texto = texto.replace(new RegExp("a", "g"), "ai");
         texto = texto.replace(new RegExp("o", "g"), "ober");
         texto = texto.replace(new RegExp("u", "g"), "ufat");


         document.getElementById('respuesta').value = texto;
         //return texto;

     }



     function decriptar(texto) {
         texto = txtEncriptar.value;

         activo = true;
         limpiarPanel();

         texto = texto.replace(new RegExp("enter", "g"), "e");
         texto = texto.replace(new RegExp("imes", "g"), "i");
         texto = texto.replace(new RegExp("ai", "g"), "a");
         texto = texto.replace(new RegExp("ober", "g"), "o");
         texto = texto.replace(new RegExp("ufat", "g"), "u");


         document.getElementById('respuesta').value = texto;

     }

     function copiar() {
         var copyText = document.getElementById("respuesta");

         copyText.select();
         copyText.setSelectionRange(0, 99999);


         navigator.clipboard.writeText(copyText.value);


     }