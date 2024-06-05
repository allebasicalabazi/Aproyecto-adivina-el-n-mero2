// valor aleatorio generado
var y = Math.floor(Math.random() * 10 + 1);
  
// contar el número de intentos
function submit() {
   check_value.document.getElementById("intento") = n
}

var n = 1

// numero adivinado por el usuario
var x = document.getElementById("guessFiled").value;

// crear para el intento correcto
if(x==y)
    {
        alert("¡¡¡¡FELICIDADES!!!!"+playername+"LO ADIVINASTE BIEN"+guess+"INTENTO");
        guess= 1;
    }
    else if(x > y)  /*si el numero adivinado es mayor que el numero actual*/
     {
        guess++;
        alert("¡OOPS LO SIENTO, EL NUMERO QUE ESCOGISTE ES DEMASIADO GRANDE! INTENTA CON UNO MÁS PUEQUEÑO");
     }

    else
     {
        guess++;
        alert("¡OOPS LO SIENTO, EL NUMERO QUE ESCOGISTE ES DEMASIADO PEQUEÑO! INTENTA CON UNO MÁS GRANDE");
     }
  
// función para el número adivinado por el usuario     
