var contador = 0;
var juego = ["", "", "", "", "", "", "", "", ""];
var turno = 0;
var marcadorX = 0;
var marcadorO = 0;
window.onload = function () {
    var el = document.getElementById("body")
    el.setAttribute("style", "height:" + window.innerHeight + "px")
    var celdas = document.getElementsByClassName("celda");



    for (let celda of celdas) {
        celda.onclick = function () {
            if (celda.textContent == "") {
                if (turno == 0) {
                    celda.innerHTML = "X"
                    turno++
                    contador++
                    juego[celda.id] = "X"
                    document.getElementById("jugadorO").setAttribute("class", "seleccionado")
                    document.getElementById("jugadorX").setAttribute("class", "no seleccionado")
                } else {
                    celda.innerHTML = "O"
                    turno--
                    contador++
                    juego[celda.id] = "O"
                    document.getElementById("jugadorX").setAttribute("class", "seleccionado")
                    document.getElementById("jugadorO").setAttribute("class", "no seleccionado")

                }
                Comprobar(juego);
            }
        }
    }
}

function Comprobar(juego) {
    var celdas = document.getElementsByClassName("celda");
    if ((juego[0] == juego[1]) && (juego[1] == juego[2]) && juego[0] != "") {
        alert("Ha ganado: " + juego[0])
        var ganador = juego[0]
        Puntuar(ganador)
        Vaciar();
    }
    if (juego[3] == juego[4] && juego[4] == juego[5] && juego[3] != "") {
        alert("Ha ganado: " + juego[3])
        var ganador = juego[3]
        Puntuar(ganador)
        Vaciar();
    }
    if (juego[6] == juego[7] && juego[7] == juego[8] && juego[6] != "") {
        alert("Ha ganado: " + juego[6])
        var ganador = juego[6]
        Puntuar(ganador)
        Vaciar();
    }
    if (juego[0] == juego[3] && juego[3] == juego[6] && juego[0] != "") {
        alert("Ha ganado: " + juego[0])
        var ganador = juego[0]
        Puntuar(ganador)
        Vaciar();
    }
    if (juego[1] == juego[4] && juego[4] == juego[7] && juego[1] != "") {
        alert("Ha ganado: " + juego[1])
        var ganador = juego[1]
        Puntuar(ganador)
        Vaciar();
    }
    if (juego[2] == juego[5] && juego[5] == juego[8] && juego[2] != "") {
        alert("Ha ganado: " + juego[2])
        var ganador = juego[2]
        Puntuar(ganador)
        Vaciar();
    }
    if (juego[0] == juego[4] && juego[4] == juego[8] && juego[0] != "") {
        alert("Ha ganado: " + juego[0])
        var ganador = juego[0]
        Puntuar(ganador)
        Vaciar();
    }
    if (juego[2] == juego[4] && juego[4] == juego[6] && juego[2] != "") {
        alert("Ha ganado: " + juego[2])
        var ganador = juego[2]
        Puntuar(ganador)
        Vaciar();
    }
    if (contador >= 9) {
        alert("Empate")
        Vaciar()
    }
}

function Vaciar() {
    var celdas = document.getElementsByClassName("celda");
    for (let celda of celdas) {
        celda.innerHTML = "";
        juego = ["", "", "", "", "", "", "", "", ""];
        contador = 0;
        turno = 0;
        document.getElementById("jugadorX").setAttribute("class", "seleccionado")
        document.getElementById("jugadorO").setAttribute("class", "no seleccionado")
    }
}

function Puntuar(ganador) {
    
    if (ganador == "X") {
        marcadorX++
        document.getElementById("marcadorX").innerHTML = marcadorX;
    }
    if (ganador == "O") {
        marcadorO++
        document.getElementById("marcadorO").innerHTML = marcadorO;
    }
}