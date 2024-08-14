//Objetivos.
//- Crear Una clase Producto con los atributos 'nombre' y 'precio'. (DONE)
//- Crea la clase Carrito que tenga como atributo un arreglo para almacenar los productos seleccionados.(DONE)
//- Crea una funcion que permita agregar productos al carrito. (DONE)
//- Crea una funcion que permita calcular el total de la compra. (DONE)
//- Crea una funcion que permita finalizar la compra. (DONE)
//- Crea una función que permita mostrar los detalles de la compra.
//- Valida que los datos que se ingresen correspondan con los productos vendidos y, de lo contrario, vuelve a solicitar al
//  usuario que ingrese la información hasta que sea correcta.
//- Permite que el usuario siga agregando productos al carrito hasta que decida no continuar agregando mas. (DONE)
//- Verifica que el codigo este bien estructurado, siga buenas practicas y sea facil de entender.

//Funcion para crear productos con Nombre y Precio.
class Producto {
    constructor(nombre,precio) {

        this.Nombre = nombre;
        this.Precio = precio;
    
    }
}

//Lista de Productos

var Leche = new Producto ('Leche',1000);
var PanDeMolde = new Producto ('Pan de molde',2000);
var Queso = new Producto ('Queso',1200);
var Mermelada = new Producto ('Mermelada',890);
var Azucar = new Producto ('Azúcar',1300);

//Funcion para almacenar productos dados por la funcion Producto()

class Carrito {
    constructor(cantidad, item) {

        this.Cantidad = cantidad;
        this.Item = item;
        
    }
}


//Función para agregar objetos al carro

function Añadir_Item(Valor) {

    //Menu de productos.

    Compra = prompt ("Productos disponibles:" + "\n" + 
        "1.- " + Leche.Nombre + " $" + Leche.Precio + "\n" +
        "2.- " + PanDeMolde.Nombre + " $" + PanDeMolde.Precio + "\n" +
        "3.- " + Queso.Nombre + " $" + Queso.Precio + "\n" +
        "4.- " + Mermelada.Nombre + " $" + Mermelada.Precio + "\n" +
        "5.- " + Azucar.Nombre + " $" + Azucar.Precio + "\n" +
        "\n" + "Ingresa el numero del producto que deseas agregar al carrito:")

        //Si la opción elegida es 'Leche'

        if (Compra === "1") {

                Amount = prompt ("Ingresa la cantidad de unidades:")

                var Milk = new Carrito (Amount, Leche.Nombre)

            // Compra de una sola leche.
            

            if (Amount === "1") {

                alert (Milk.Cantidad + " " + Milk.Item + " " + "agregada al carrito.")

                // Branching: Seguir comprando o no (Arreglar)

                Continuar = prompt ("¿desea seguir agregando productos? (s/n)")

                    //Si se elige continuar comprando.

                    if (Continuar === "s") {
                        

                       var Compra = Leche.Precio * Milk.Cantidad + Valor;

                        let Total = Compra;

                        var LecheTotal = new Carrito (Milk.Cantidad, Leche.Nombre);

                        return Añadir_Item(Total);

                    }

                    if (Continuar === "n") {

                        var Compra = Valor + Leche.Precio * Milk.Cantidad; 

                        let Total = Compra;

                        alert ("Total de la compra:" + " $" + Total);

                        console.log (Milk);
                        
                    }
                
            }

             //Si se compran mas de 1 unidad de Leche

            if (Amount != "1"){

                alert (Milk.Cantidad + " Unidades de " + Milk.Item + " " + "agregadas al carrito.")

                // Branching: Seguir comprando o no (Arreglar)

                Continuar = prompt ("¿desea seguir agregando productos? (s/n)")

                    //Si se elige continuar comprando.

                    if (Continuar === "s") {
                        

                       var Compra = Leche.Precio * Milk.Cantidad + Valor;

                        let Total = Compra;

                        return Añadir_Item(Total);

                    }

                    if (Continuar === "n") {

                        var Compra = Valor + Leche.Precio * Milk.Cantidad; 

                        let Total = Compra;

                        alert ("Total de la compra:" + " $" + Total)
                        
                    }
                
            }


            }
    
}





function Menu_Principal(){

    alert 

}