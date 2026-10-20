


/* Buscamos el formulario y esperamos que se presione
el boton para verificar los numeros */
document.getElementById("formNumeros").addEventListener("submit", function(event) {

    // Evitamos que la pagina se recargue
    event.preventDefault();

    // Obtenemos el primer numero ingresado
    let num1 = parseInt(document.getElementById("num1").value);

    // Obtenemos el segundo numero ingresado
    let num2 = parseInt(document.getElementById("num2").value);

    // Buscamos donde mostrar los resultados
    let resultado = document.getElementById("resultado");

    // Creamos una variable para guardar los mensajes
    let mensaje = "";

    // Verificamos si el primer numero es mayor, menor o igual
    if (num1 > num2) {
        mensaje += "El primer numero es mayor que el segundo.\n";
    } else if (num1 < num2) {
        mensaje += "El primer numero es menor que el segundo.\n";
    } else {
        mensaje += "Los dos numeros son iguales.\n";
    }

    // Verificamos si el primer numero es primo
    let primo1 = true;

    if (num1 < 2) {
        primo1 = false;
    }

    // Comprobamos si el primer numero tiene otros divisores
    for (let i = 2; i < num1; i++) {
        if (num1 % i === 0) {
            primo1 = false;
            break;
        }
    }

    // Mostramos si el primer numero es primo
    if (primo1) {
        mensaje += num1 + " es un numero primo.\n";
    } else {
        mensaje += num1 + " no es un numero primo.\n";
    }

    // Verificamos si el segundo numero es primo
    let primo2 = true;

    if (num2 < 2) {
        primo2 = false;
    }

    // Comprobamos si el segundo numero tiene otros divisores
    for (let i = 2; i < num2; i++) {
        if (num2 % i === 0) {
            primo2 = false;
            break;
        }
    }

    // Mostramos si el segundo numero es primo
    if (primo2) {
        mensaje += num2 + " es un numero primo.";
    } else {
        mensaje += num2 + " no es un numero primo.";
    }

    // Mostramos los resultados en la pagina
    resultado.textContent = mensaje;

});


