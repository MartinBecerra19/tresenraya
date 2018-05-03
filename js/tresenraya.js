window.onload = function () {
    var juego = ["", "", "", "", "", "", "", "", ""]
    var el = document.getElementById("body");
    el.setAttribute("style", "height:" + window.innerHeight + "px");
    
    var celdas = document.getElementsByClassName("celda");

    let turno = 0;
    for (const celda of celdas) {
        celda.onclick = function () {
            if (turno == 0) {
                celda.innerHTML = "X";
                turno++;
                juego[celda.id] = "X"
                document.getElementById("jugador2").setAttribute("class","seleccionado");
                document.getElementById("jugador1").setAttribute("class","noseleccionado");
            } else {
                celda.innerHTML = "O";
                turno--;
                juego[celda.id] = "O";
                document.getElementById("jugador1").setAttribute("class","seleccionado");
                document.getElementById("jugador2").setAttribute("class","noseleccionado");
            }
            Comprobar(juego);
        }
    }
}

function Comprobar(juego) {
    var celdas = document.getElementsByClassName("celda");
    var contador = 0;
    if (juego[0] == juego[1] && juego[1] == juego[2] && juego[0] != "") {
        alert("Ha ganado: " + juego[0]);
        Vacia();
    }
    if (juego[3] == juego[4] && juego[4] == juego[5] && juego[3] != "") {
        alert("Ha ganado: " + juego[3]);
        Vacia();
    }
    if (juego[6] == juego[7] && juego[7] == juego[8] && juego[6] != "") {
        alert("Ha ganado: " + juego[6]);
        Vacia();
    }
    if (juego[0] == juego[3] && juego[3] == juego[6] && juego[0] != "") {
        alert("Ha ganado: " + juego[0]);
        Vacia();
    }
    if (juego[1] == juego[4] && juego[4] == juego[7] && juego[1] != "") {
        alert("Ha ganado: " + juego[1]);
        Vacia();
    }
    if (juego[2] == juego[5] && juego[5] == juego[8] && juego[2] != "") {
        alert("Ha ganado: " + juego[2]);
        Vacia();
    }
    if (juego[0] == juego[4] && juego[4] == juego[8] && juego[0] != "") {
        alert("Ha ganado: " + juego[0]);
        Vacia();
    }
    if (juego[2] == juego[4] && juego[4] == juego[6] && juego[2] != "") {
        alert("Ha ganado: " + juego[2]);
        Vacia();
    }
    if (contador >= 9) {
        alert("Empate");
        Vacia();
    }
    function Vacia() {
        var celdas = document.getElementsByClassName("celda");
        for (let celda of celdas) {
            celda.innerHTML = "";
            juego = ["", "", "", "", "", "", "", "", ""];
            turno = 0;
            contador = 0;
        }
    }
}