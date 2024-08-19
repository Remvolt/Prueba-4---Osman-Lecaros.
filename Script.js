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
//- Verifica que el codigo este bien estructurado, siga buenas practicas y sea facil de entender. (DONE)

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

var MilkCounter = 0
var BreadCounter = 0
var CheeseCounter = 0
var JamCounter = 0
var SugarCounter = 0


function Detalles_Compra(Total) {

    alert ("Total de la compra:" + " $" + Total)
                  
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

                var Milk = new Carrito (Amount , Leche.Nombre)

            // Compra de una sola leche.
            

            if (Amount === "1") {

                alert (Milk.Cantidad + " " + Milk.Item + " " + "agregada al carrito.")

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

                        alert ("Total de la compra:" + " $" + Total);
                        
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

                       alert ("Total de la compra:" + " $" + Total + " Cantidad de Leche= " + MilkCounter);
                        
                    }
                
            }


            }
    

        //Si la opción elegida es 'Pan De Molde'

        if (Compra === "2") {

            Amount = prompt ("Ingresa la cantidad de unidades:")

            var Bread = new Carrito (Amount, PanDeMolde.Nombre)

        // Compra de un solo pan.
        

        if (Amount === "1") {

            alert (Bread.Cantidad + " " + Bread.Item + " " + "agregado al carrito.")

            // Branching: Seguir comprando o no (Arreglar)

            Continuar = prompt ("¿desea seguir agregando productos? (s/n)")

                //Si se elige continuar comprando.

                if (Continuar === "s") {
                    

                var Compra = PanDeMolde.Precio * Bread.Cantidad + Valor;

                    let Total = Compra;

                    return Añadir_Item(Total);

                }

                if (Continuar === "n") {

                    var Compra = Valor + PanDeMolde.Precio * Bread.Cantidad; 

                    let Total = Compra;

                    alert ("Total de la compra:" + " $" + Total);
                    
                }
            
        }

        //Si se compran mas de 1 unidad de Pan

        if (Amount != "1"){

            alert (Bread.Cantidad + " Unidades de " + Bread.Item + " " + "agregados al carrito.")

            // Branching: Seguir comprando o no (Arreglar)

            Continuar = prompt ("¿desea seguir agregando productos? (s/n)")

                //Si se elige continuar comprando.

                if (Continuar === "s") {
                    

                var Compra = PanDeMolde.Precio * Bread.Cantidad + Valor;

                    let Total = Compra;

                    return Añadir_Item(Total);

                }

                if (Continuar === "n") {

                    var Compra = Valor + PanDeMolde.Precio * Bread.Cantidad; 

                    let Total = Compra;

                    alert ("Total de la compra:" + " $" + Total)
                    
                }
            
        }


        }

        //Si la opción elegida es 'Queso'

        if (Compra === "3") {

            Amount = prompt ("Ingresa la cantidad de unidades:")

            var Cheese = new Carrito (Amount, Queso.Nombre)

        // Compra de un queso.
        

        if (Amount === "1") {

            alert (Cheese.Cantidad + " " + Cheese.Item + " " + "agregado al carrito.")

            // Branching: Seguir comprando o no (Arreglar)

            Continuar = prompt ("¿desea seguir agregando productos? (s/n)")

                //Si se elige continuar comprando.

                if (Continuar === "s") {
                    

                var Compra = Queso.Precio * Cheese.Cantidad + Valor;

                    let Total = Compra;

                    return Añadir_Item(Total);

                }

                if (Continuar === "n") {

                    var Compra = Valor + Queso.Precio * Cheese.Cantidad; 

                    let Total = Compra;

                    alert ("Total de la compra:" + " $" + Total);
                    
                }
            
        }

        //Si se compran mas de 1 unidad de Queso

        if (Amount != "1"){

            alert (Cheese.Cantidad + " Unidades de " + Cheese.Item + " " + "agregados al carrito.")

            // Branching: Seguir comprando o no (Arreglar)

            Continuar = prompt ("¿desea seguir agregando productos? (s/n)")

                //Si se elige continuar comprando.

                if (Continuar === "s") {
                    

                var Compra = Queso.Precio * Cheese.Cantidad + Valor;

                    let Total = Compra;

                    return Añadir_Item(Total);

                }

                if (Continuar === "n") {

                    var Compra = Valor + Queso.Precio * Cheese.Cantidad; 

                    let Total = Compra;

                    alert ("Total de la compra:" + " $" + Total)
                    
                }
            
        }


        }

        //Si la opción elegida es 'Mermelada'

        if (Compra === "4") {

            Amount = prompt ("Ingresa la cantidad de unidades:")

            var Jam = new Carrito (Amount, Mermelada.Nombre)

        // Compra de una mermelada.
        

        if (Amount === "1") {

            alert (Jam.Cantidad + " " + Jam.Item + " " + "agregada al carrito.")

            // Branching: Seguir comprando o no (Arreglar)

            Continuar = prompt ("¿desea seguir agregando productos? (s/n)")

                //Si se elige continuar comprando.

                if (Continuar === "s") {
                    

                var Compra = Mermelada.Precio * Jam.Cantidad + Valor;

                    let Total = Compra;

                    return Añadir_Item(Total);

                }

                if (Continuar === "n") {

                    var Compra = Valor + Mermelada.Precio * Jam.Cantidad; 

                    let Total = Compra;

                    alert ("Total de la compra:" + " $" + Total);
                    
                }
            
        }

        //Si se compran mas de 1 unidad de Mermelada

        if (Amount != "1"){

            alert (Jam.Cantidad + " Unidades de " + Jam.Item + " " + "agregadas al carrito.")

            // Branching: Seguir comprando o no (Arreglar)

            Continuar = prompt ("¿desea seguir agregando productos? (s/n)")

                //Si se elige continuar comprando.

                if (Continuar === "s") {
                    

                var Compra = Mermelada.Precio * Jam.Cantidad + Valor;

                    let Total = Compra;

                    return Añadir_Item(Total);

                }

                if (Continuar === "n") {

                    var Compra = Valor + Mermelada.Precio * Jam.Cantidad; 

                    let Total = Compra;

                    alert ("Total de la compra:" + " $" + Total)
                    
                }
            
        }


        }
        
        //Si la opción elegida es 'Azucar'

        if (Compra === "5") {

            Amount = prompt ("Ingresa la cantidad de unidades:")

            var Sugar = new Carrito (Amount, Azucar.Nombre)

        // Compra de una unidad de Azucar.
        

        if (Amount === "1") {

            alert (Sugar.Cantidad + " " + Sugar.Item + " " + "agregada al carrito.")

            // Branching: Seguir comprando o no (Arreglar)

            Continuar = prompt ("¿desea seguir agregando productos? (s/n)")

                //Si se elige continuar comprando.

                if (Continuar === "s") {
                    

                var Compra = Azucar.Precio * Sugar.Cantidad + Valor;

                    let Total = Compra;

                    return Añadir_Item(Total);

                }

                if (Continuar === "n") {

                    var Compra = Valor + Azucar.Precio * Sugar.Cantidad; 

                    let Total = Compra;

                    alert ("Total de la compra:" + " $" + Total);
                    
                }
            
        }

        //Si se compran mas de 1 unidad de Azucar

        if (Amount != "1"){

            alert (Sugar.Cantidad + " Unidades de " + Sugar.Item + " " + "agregadas al carrito.")

            // Branching: Seguir comprando o no (Arreglar)

            Continuar = prompt ("¿desea seguir agregando productos? (s/n)")

                //Si se elige continuar comprando.

                if (Continuar === "s") {
                    

                var Compra = Azucar.Precio * Sugar.Cantidad + Valor;

                    let Total = Compra;

                    return Añadir_Item(Total);

                }

                if (Continuar === "n") {

                    var Compra = Valor + Azucar.Precio * Sugar.Cantidad; 

                    let Total = Compra;

                    alert ("Total de la compra:" + " $" + Total)
                    
                }
            
        }


        }
        

}





function Menu_Principal(){

    alert 

}