// Funcion constructora
function articulo(codigo, nombre, precio, producto, promo) {
    this.codigo = codigo,
    this.nombre = nombre,
    this.precio = precio,
    this.producto = producto,
    this.promo = promo
}

// Articulos
const articulo0 = new articulo(000, "SOBRE DE FIGURITAS X10", 2000, "FIGURITAS", false);
const articulo1 = new articulo(001, "SOBRE DE FIGURITAS X25", 3750, "FIGURITAS", false);
const articulo2 = new articulo(002, "ALBUM FIFA WORLD CUP QATAR 2022", 750, "ALBUM", false);
const articulo3 = new articulo(003, "ALBUM TAPA DURA FIFA WORLD CUP QATAR 2022", 750, "ALBUM", false);
const articulo4 = new articulo(004, "PROMO ÁLBUM DE ORO", 7500, "ALBUM", false);
const articulo5 = new articulo(005, "PROMO ÁLBUM + X50 SOBRES DE FIGURITAS", 8250, "COMBO", true);
const articulo6 = new articulo(006, "PROMO ÁLBUM + X100 SOBRES DE FIGURITAS", 14250, "COMBO", true);
const articulo7 = new articulo(007, "PROMO ÁLBUM TAPA DURA + X100 SOBRES DE FIGURITAS", 17250, "COMBO", true);
// ***********************************************************************************************************



// ***********************************************************************************************************
// ***********************************    Funcion listarArticulos()    *****************************************
// # Propósito: 
// # Parametros : 
function listarArticulos(){
    console.log(0);
}
// ***********************************************************************************************************



// ***********************************************************************************************************
// ***********************************     Funcion menuCarrito()     *****************************************
// # Propósito: 
// # Parametros : 
function menuCarrito(){
    console.log(0);
}
// ***********************************************************************************************************



// ***********************************************************************************************************
// ***********************************    Funcion menuPrincipal()    *****************************************
// # Propósito: Llamar al menu principal del programa.
// # Parametros : opcionPrincipal = opcion que elige el usuario.
function menuPrincipal(opcionPrincipal) {
    while(opcionPrincipal != 0){
        switch (opcionPrincipal){
            case 1:
                // Articulos
                // Aca iria la funcion del submenú de articulos
                listarArticulos();
                alert("Articulos");
                break;

            case 2:
                // Carrito
                alert("Carrito");
                // Aca iria la funcion del submenú del carrito
                break;

            default:
                // Incorrecta            
                alert("# Opcion inválida. Elija otra opción.");
                break;
        }
        opcionPrincipal = parseInt(prompt("Para continuar, elija una opcion:\n 1. Lista de artículos\n2. Mi carrito\n\n0. Salir"));
    }
    alert("Gracias por utilizar nuestra tienda online.");
}
// ***********************************************************************************************************


// ***********************************************************************************************************
// Programa principal
let opcionPrincipal = parseInt(prompt("# Bienvenido al menú de compras Panini #\n Elija una opcion para continuar:\n 1. Lista de artículos\n2. Mi carrito\n\n0. Salir"));
menuPrincipal(opcionPrincipal);
// ***********************************************************************************************************
