
document.getElementById("formularioLogin").addEventListener("submit", function(event) {
    const usuario = document.getElementById("usuario").value.trim();
    const contrasena = document.getElementById("contrasena").value.trim();

    if (usuario === "" || contrasena === "") {
        alert("Ingrese datos");
        event.preventDefault();
    }
});

function calcularInteres() {
    const inversion = parseFloat(document.getElementById("inversion").value);
    const tasaInteres = parseFloat(document.getElementById("tasaInteres").value);

    if (isNaN(inversion) || isNaN(tasaInteres) || inversion <= 0 || tasaInteres < 0) {
        alert("Por favor, ingrese valores válidos.");
        return;
    }

    const total = inversion * (1 + tasaInteres / 100);
    document.getElementById("total").value = total.toFixed(2);
}

function jugar() {
    const opciones = ["piedra", "papel", "tijera"];
    const opcionJugador = document.getElementById("jugadorOpcion").value.toLowerCase().trim();
    const opcionComputadora = opciones[Math.floor(Math.random() * opciones.length)];

    if (!opciones.includes(opcionJugador)) {
        alert("Por favor, ingrese una opción válida: Piedra, Papel o Tijera.");
        return;
    }

    document.getElementById("computadoraOpcion").value = opcionComputadora;

    let resultado = "";
    if (opcionJugador === opcionComputadora) {
        resultado = "Empate";
    } else if (
        (opcionJugador === "piedra" && opcionComputadora === "tijera") ||
        (opcionJugador === "papel" && opcionComputadora === "piedra") ||
        (opcionJugador === "tijera" && opcionComputadora === "papel")
    ) {
        resultado = "Ganaste";
    } else {
        resultado = "Perdiste";
    }
    document.getElementById("resultadoJuego").value = resultado;
}

