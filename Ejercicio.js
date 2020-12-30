const ordenar = require('./Ordenar')

function Vehiculo(marca, modelo, puertas, precio, cilindrada){
    this.marca = marca;
    this.modelo = modelo;
    this.puertas = puertas;
    this.precio = precio;
    this.cilindrada = cilindrada;
    this.convert=function(){  
        var div1=this.precio.slice(1).split('.');
        var div2=(div1[0]+div1[1]).split(',');
        var div3=(div2[0]+'.'+div2[1])-0
        return div3
    }
}

var peugeot1=new Vehiculo('Peugeot','206', 4, '$200.000,00')
var honda=new Vehiculo('Honda', 'Titan', undefined, '$60.000,00', '125cc')
var peugeot2=new Vehiculo('Peugeot', '208', 5, '$250.000,00')
var yamaha=new Vehiculo('Yamaha', 'YBR', undefined, '$80.500,50', '160cc')   

function total(array){
        var arrayprecios=array.map(function(elementos) {
            return elementos.convert()
    })
    arrayprecios=ordenar(arrayprecios)
    var arrayOrdenado=[]
    for (let j = 0; j < arrayprecios.length; j++) {
        for (let i = 0; i < array.length; i++) {
            if(arrayprecios[j]===array[i].convert()){
                var obj=array[i]}        
        }arrayOrdenado.push(obj)     
    } 
    array.forEach(element => console.log(`Marca: ${element.marca} // Modelo: ${element.modelo} // ${element.puertas?'Puertas: '+element.puertas:'Cilindrada: '+element.cilindrada} // Precio: ${element.precio}`));

    console.log('=============================');

    console.log(`Vehículo más caro: ${arrayOrdenado[0].marca} ${arrayOrdenado[0].modelo}`)
    console.log(`Vehículo más barato: ${arrayOrdenado[arrayOrdenado.length-1].marca} ${arrayOrdenado[arrayOrdenado.length-1].modelo}`)
    var letraY = array.find(element => element.modelo.toString().search('Y')>=0)
    console.log(`Vehículo que contiene en el modelo la letra ‘Y’: ${letraY.marca} ${letraY.modelo} ${letraY.precio}`);

    console.log('=============================');

      
console.log(`Vehículos ordenados por precio de mayor a menor:`)
    arrayOrdenado.forEach(element => console.log(element.marca+' '+element.modelo))
    
}

total([peugeot1, honda, peugeot2, yamaha])