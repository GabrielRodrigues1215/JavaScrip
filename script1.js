function checkNull(Numero1, Numero2) {

    if(Numero1 > Numero2){
        return alert ("Numero Maior: " + Numero1.value);
        }else {
            return alert("Numero Maior: " + Numero2.value);
        }  


}

function palavra(str){
        
    var cont = 0;
    var palavra = String(str.value);        
    var n = palavra.length;
    
    for(i = 0; i < n ; i++) {

          if(palavra[i] =="A" || palavra[i] == "a") cont++;

    }    
      
        alert(cont);
        
  }

function enviar() {
 
    var Numero1 = document.getElementById("Numero1");
    var Numero2 = document.getElementById("Numero2");
    checkNull(Numero1,Numero2);

    var Pala = document.getElementById("Palavra");
    palavra(Pala);
  }  