// Función para mostrar solo productos de una categoría específica
function mostrarCategoria(categoria) {
    // Ocultar todos los productos primero
    const todosProductos = document.querySelectorAll('.product-card');
    todosProductos.forEach(producto => {
        producto.style.display = 'none';
    });
    
    // Mostrar solo los productos de la categoría seleccionada
    const productosCategoria = document.querySelectorAll('.product-card[id="' + categoria + '"]');
    productosCategoria.forEach(producto => {
        producto.style.display = 'block';
    });
}

// Función para mostrar todos los productos
function BorrarFiltro() {
    const todosProductos = document.querySelectorAll('.product-card');
    todosProductos.forEach(producto => {
        producto.style.display = 'block';
    });
}

// Funciones específicas para cada categoría
function FiltroConLe() {
    document.getElementById("conle").style.display = "block"; 
    document.getElementById("sinle").style.display = "none"; 
    document.getElementById("dulce").style.display = "none"; 
    document.getElementById("inte").style.display = "none"; 
    document.getElementById("mama").style.display = "none"; 
    document.getElementById("plano").style.display = "none"; 
    document.getElementById("rusti").style.display = "none"; 
    document.getElementById("espe").style.display = "none"; 
    document.getElementById("cere").style.display = "none"; 
}

function FiltroSinLe() {
    document.getElementById("conle").style.display = "none"; 
    document.getElementById("sinle").style.display = "block"; 
    document.getElementById("dulce").style.display = "none"; 
    document.getElementById("inte").style.display = "none"; 
    document.getElementById("mama").style.display = "none"; 
    document.getElementById("plano").style.display = "none"; 
    document.getElementById("rusti").style.display = "none"; 
    document.getElementById("espe").style.display = "none"; 
    document.getElementById("cere").style.display = "none"; 
}

function FiltroDulce() {
    document.getElementById("conle").style.display = "none"; 
    document.getElementById("sinle").style.display = "none"; 
    document.getElementById("dulce").style.display = "block"; 
    document.getElementById("inte").style.display = "none"; 
    document.getElementById("mama").style.display = "none"; 
    document.getElementById("plano").style.display = "none"; 
    document.getElementById("rusti").style.display = "none"; 
    document.getElementById("espe").style.display = "none"; 
    document.getElementById("cere").style.display = "none"; 
}

function FiltroInte() {
    document.getElementById("conle").style.display = "none"; 
    document.getElementById("sinle").style.display = "none"; 
    document.getElementById("dulce").style.display = "none"; 
    document.getElementById("inte").style.display = "block"; 
    document.getElementById("mama").style.display = "none"; 
    document.getElementById("plano").style.display = "none"; 
    document.getElementById("rusti").style.display = "none"; 
    document.getElementById("espe").style.display = "none"; 
    document.getElementById("cere").style.display = "none"; 
}

function FiltroMaMa() {
    document.getElementById("conle").style.display = "none"; 
    document.getElementById("sinle").style.display = "none"; 
    document.getElementById("dulce").style.display = "none"; 
    document.getElementById("inte").style.display = "none"; 
    document.getElementById("mama").style.display = "block"; 
    document.getElementById("plano").style.display = "none"; 
    document.getElementById("rusti").style.display = "none"; 
    document.getElementById("espe").style.display = "none"; 
    document.getElementById("cere").style.display = "none";
}

function FiltroPlano() {
    document.getElementById("conle").style.display = "none"; 
    document.getElementById("sinle").style.display = "none"; 
    document.getElementById("dulce").style.display = "none"; 
    document.getElementById("inte").style.display = "none"; 
    document.getElementById("mama").style.display = "none"; 
    document.getElementById("plano").style.display = "block"; 
    document.getElementById("rusti").style.display = "none"; 
    document.getElementById("espe").style.display = "none"; 
    document.getElementById("cere").style.display = "none"; 
}

function FiltroRusti() {
    document.getElementById("conle").style.display = "none"; 
    document.getElementById("sinle").style.display = "none"; 
    document.getElementById("dulce").style.display = "none"; 
    document.getElementById("inte").style.display = "none"; 
    document.getElementById("mama").style.display = "none"; 
    document.getElementById("plano").style.display = "none"; 
    document.getElementById("rusti").style.display = "none"; 
    document.getElementById("espe").style.display = "block"; 
    document.getElementById("cere").style.display = "none"; 
}

function FiltroEspe() {
    document.getElementById("conle").style.display = "none"; 
    document.getElementById("sinle").style.display = "none"; 
    document.getElementById("dulce").style.display = "none"; 
    document.getElementById("inte").style.display = "none"; 
    document.getElementById("mama").style.display = "none"; 
    document.getElementById("plano").style.display = "none"; 
    document.getElementById("rusti").style.display = "none"; 
    document.getElementById("espe").style.display = "block"; 
    document.getElementById("cere").style.display = "none"; 
}

function FiltroCere() {
    document.getElementById("conle").style.display = "none"; 
    document.getElementById("sinle").style.display = "none"; 
    document.getElementById("dulce").style.display = "none"; 
    document.getElementById("inte").style.display = "none"; 
    document.getElementById("mama").style.display = "none"; 
    document.getElementById("plano").style.display = "none"; 
    document.getElementById("rusti").style.display = "none"; 
    document.getElementById("espe").style.display = "none"; 
    document.getElementById("cere").style.display = "block"; 
}

function BorrarFiltro() {
    document.getElementById("conle").style.display = "none"; 
    document.getElementById("sinle").style.display = "none"; 
    document.getElementById("dulce").style.display = "none"; 
    document.getElementById("inte").style.display = "none"; 
    document.getElementById("mama").style.display = "none"; 
    document.getElementById("plano").style.display = "none"; 
    document.getElementById("rusti").style.display = "none"; 
    document.getElementById("espe").style.display = "none"; 
    document.getElementById("cere").style.display = "none"; 
}