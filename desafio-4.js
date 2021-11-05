function iva(precio) {
  let iva = precio * 0.21;
  return iva;
}
let precio = parseInt(prompt("ingrese el precio del articulo"));
let resultado = precio + iva(precio);

console.log(resultado);
