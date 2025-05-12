function FiltroConLe() {
    document.getElementById("conle").hidden = false;
    document.getElementById("sinle").hidden = true;
    document.getElementById("dulce").hidden = true;
    document.getElementById("inte").hidden = true;
    document.getElementById("mama").hidden = true;
    document.getElementById("plano").hidden = true;
    document.getElementById("rusti").hidden = true;
    document.getElementById("espe").hidden = true;
    document.getElementById("cere").hidden = true;
}

function FiltroSinLe() {
    document.getElementById("conle").hidden = true;
    document.getElementById("sinle").hidden = false;
    document.getElementById("dulce").hidden = true;
    document.getElementById("inte").hidden = true;
    document.getElementById("mama").hidden = true;
    document.getElementById("plano").hidden = true;
    document.getElementById("rusti").hidden = true;
    document.getElementById("espe").hidden = true;
    document.getElementById("cere").hidden = true;
}

function FiltroDulce() {
    document.getElementById("conle").hidden = true;
    document.getElementById("sinle").hidden = true;
    document.getElementById("dulce").hidden = false;
    document.getElementById("inte").hidden = true;
    document.getElementById("mama").hidden = true;
    document.getElementById("plano").hidden = true;
    document.getElementById("rusti").hidden = true;
    document.getElementById("espe").hidden = true;
    document.getElementById("cere").hidden = true;
}

function FiltroInte() {
    document.getElementById("conle").hidden = true;
    document.getElementById("sinle").hidden = true;
    document.getElementById("dulce").hidden = true;
    document.getElementById("inte").hidden = false;
    document.getElementById("mama").hidden = true;
    document.getElementById("plano").hidden = true;
    document.getElementById("rusti").hidden = true;
    document.getElementById("espe").hidden = true;
    document.getElementById("cere").hidden = true;
}

function FiltroMaMa() {
    document.getElementById("conle").hidden = true;
    document.getElementById("sinle").hidden = true;
    document.getElementById("dulce").hidden = true;
    document.getElementById("inte").hidden = true;
    document.getElementById("mama").hidden = false;
    document.getElementById("plano").hidden = true;
    document.getElementById("rusti").hidden = true;
    document.getElementById("espe").hidden = true;
    document.getElementById("cere").hidden = true;
}

function FiltroPlano() {
    document.getElementById("conle").hidden = true;
    document.getElementById("sinle").hidden = true;
    document.getElementById("dulce").hidden = true;
    document.getElementById("inte").hidden = true;
    document.getElementById("mama").hidden = true;
    document.getElementById("plano").hidden = false;
    document.getElementById("rusti").hidden = true;
    document.getElementById("espe").hidden = true;
    document.getElementById("cere").hidden = true;
}

function FiltroRusti() {
    document.getElementById("conle").hidden = true;
    document.getElementById("sinle").hidden = true;
    document.getElementById("dulce").hidden = true;
    document.getElementById("inte").hidden = true;
    document.getElementById("mama").hidden = true;
    document.getElementById("plano").hidden = true;
    document.getElementById("rusti").hidden = false;
    document.getElementById("espe").hidden = true;
    document.getElementById("cere").hidden = true;
}

function FiltroEspe() {
    document.getElementById("conle").hidden = true;
    document.getElementById("sinle").hidden = true;
    document.getElementById("dulce").hidden = true;
    document.getElementById("inte").hidden = true;
    document.getElementById("mama").hidden = true;
    document.getElementById("plano").hidden = true;
    document.getElementById("rusti").hidden = true;
    document.getElementById("espe").hidden = false;
    document.getElementById("cere").hidden = true;
}

function FiltroCere() {
    document.getElementById("conle").hidden = true;
    document.getElementById("sinle").hidden = true;
    document.getElementById("dulce").hidden = true;
    document.getElementById("inte").hidden = true;
    document.getElementById("mama").hidden = true;
    document.getElementById("plano").hidden = true;
    document.getElementById("rusti").hidden = true;
    document.getElementById("espe").hidden = true;
    document.getElementById("cere").hidden = false;
}

function BorrarFiltro() {
    document.getElementById("conle").hidden = false;
    document.getElementById("sinle").hidden = false;
    document.getElementById("dulce").hidden = false;
    document.getElementById("inte").hidden = false;
    document.getElementById("mama").hidden = false;
    document.getElementById("plano").hidden = false;
    document.getElementById("rusti").hidden = false;
    document.getElementById("espe").hidden = false;
    document.getElementById("cere").hidden = false;
}