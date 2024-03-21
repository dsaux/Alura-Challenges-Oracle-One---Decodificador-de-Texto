
function criptografar() {
    var data = document.getElementById("textoclaro").value;
    var ExpRegMinusculaEspaco="^[ a-z]+$";
    if (data.match(ExpRegMinusculaEspaco) != null){
        document.getElementById("myP1").style.visibility = "hidden";
        document.getElementById("myP2").style.visibility = "none";
        document.getElementById("myP3").style.visibility = "hidden";
        
        function substituir(cadena, caracterv, caractern){
            var nuevacadena = cadena.replace(new RegExp(caracterv,'g'),caractern);
            return nuevacadena;
            }
            var cadenaAntigua = data;
            var caracterv="e";
            var caractern="enter";
            var cadenaAntigua = substituir(cadenaAntigua, caracterv, caractern);
            var caracterv="i";
            var caractern="imes";
            var cadenaAntigua = substituir(cadenaAntigua, caracterv, caractern);
            var caracterv="a";
            var caractern="ai";
            var cadenaAntigua = substituir(cadenaAntigua, caracterv, caractern);
            var caracterv="o";
            var caractern="ober";
            var cadenaAntigua = substituir(cadenaAntigua, caracterv, caractern);
            var caracterv="u";
            var caractern="ufat";
            var cadenamodificada = substituir(cadenaAntigua, caracterv, caractern);
            console.log(cadenamodificada);
            document.getElementById("myP4").innerHTML = cadenamodificada;
        }
    else{
        document.getElementById("myP1").style.visibility = "hidden";
        document.getElementById("myP2").style.visibility = "none";
        document.getElementById("myP3").style.visibility = "hidden";
        document.getElementById("myP4").innerHTML = "Insira apenas letras minusculas";
        }  
}

function descriptografar() {
    var data = document.getElementById("textoclaro").value;
    var ExpRegMinusculaEspaco="^[ a-z]+$";
    if (data.match(ExpRegMinusculaEspaco) != null){
        document.getElementById("myP1").style.visibility = "hidden";
        document.getElementById("myP2").style.visibility = "none";
        document.getElementById("myP3").style.visibility = "hidden";
        
        function substituir(cadena, caracterv, caractern){
            var nuevacadena = cadena.replace(new RegExp(caracterv,'g'),caractern);
            return nuevacadena;
            }
            var cadenaAntigua = data;
            var caracterv="enter";
            var caractern="e";
            var cadenaAntigua = substituir(cadenaAntigua, caracterv, caractern);
            var caracterv="imes";
            var caractern="i";
            var cadenaAntigua = substituir(cadenaAntigua, caracterv, caractern);
            var caracterv="ai";
            var caractern="a";
            var cadenaAntigua = substituir(cadenaAntigua, caracterv, caractern);
            var caracterv="ober";
            var caractern="o";
            var cadenaAntigua = substituir(cadenaAntigua, caracterv, caractern);
            var caracterv="ufat";
            var caractern="u";
            var cadenamodificada = substituir(cadenaAntigua, caracterv, caractern);
            console.log(cadenamodificada);
            document.getElementById("myP4").innerHTML = cadenamodificada;
        }    
    else{
        document.getElementById("myP1").style.visibility = "hidden";
        document.getElementById("myP2").style.visibility = "none";
        document.getElementById("myP3").style.visibility = "hidden";
        document.getElementById("myP4").innerHTML = "Insira apenas letras minusculas";
        } 
}

