// PRIMERA PRE ENTREGA DEL PROYECTO FINAL
// - CREAR UN ALGORITMO CON UN CONDICIONAL
// - CREAR UN ALGORITMO UTILIZANDO UN CICLO
// - ARMAR UN SIMULADOR INTERACTIVO: CARRITO DE COMPRAS

function descuento(valor, porcentaje) {
    return (valor * porcentaje) / 100
}

function cuotas(valor, cantidadCuotas) {
    // 6 cuotas -> 15% interes
    // 12 cuotas -> 20% interes
    // 18 cuotas -> 22% interes
    let valorCuota = valor / cantidadCuotas
    if (cantidadCuotas == 6) {
        let valorCuotaConInteres = valorCuota * 1.15;
        let valorTotal = valorCuotaConInteres * 6;
        return valorTotal;
    } else if (cantidadCuotas == 12) {
        let valorCuotaConInteres = valorCuota * 1.20;
        let valorTotal = valorCuotaConInteres * 12;
        return valorTotal;
    } else if (cantidadCuotas == 18) {
        let valorCuotaConInteres = valorCuota * 1.22
        let valorTotal = valorCuotaConInteres * 18;
        return valorTotal;
    }
    // CAMBIAR POR UN SWITCH
}

let total = 0.0, precio = 0.0, cantidad = 0;

function agregarItemCarrito(precio, cantidad) {
    // precio = parseFloat(prompt("Ingrese el valor del producto: "));
    // cantidad = parseInt(prompt("Ingrese la cantidad de productos: "));
    console.log("El usuario agrega " + cantidad + " productos de $" + precio);
    total += precio * cantidad;
}

function vaciarCarrito() {
    let decision = prompt("Estas seguro que deseas vaciar el carrito? (si/no): ");
    if (decision == "si") {
        total = 0;
        console.log("Vaciar carrito: el usuario vacio el carrito.");
    } else {
        console.log("Vaciar carrito: el usuario ingreso 'no' o un input no valido.");
    }
}

function mostrarCarrito() {
    alert("El total del carrito es de $" + total);
}

