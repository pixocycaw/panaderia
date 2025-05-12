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
    mostrarCategoria('conle');
}

function FiltroSinLe() {
    mostrarCategoria('sinle');
}

function FiltroDulce() {
    mostrarCategoria('dulce');
}

function FiltroInte() {
    mostrarCategoria('inte');
}

function FiltroMaMa() {
    mostrarCategoria('mama');
}

function FiltroPlano() {
    mostrarCategoria('plano');
}

function FiltroRusti() {
    mostrarCategoria('rusti');
}

function FiltroEspe() {
    mostrarCategoria('espe');
}

function FiltroCere() {
    mostrarCategoria('cere');
}

// Inicializar: asegurarse de que todos los productos son visibles al cargar
document.addEventListener('DOMContentLoaded', function() {
    BorrarFiltro();
});
