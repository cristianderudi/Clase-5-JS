function Auto(marca, modelo, color = "blanco") {
  this.marca = marca;
  this.modelo = modelo;
  this.color = color;
}

const miAuto = new Auto("Ford", "Falcon", "Rojo");
const miAuto2 = new Auto("Chevrolet", "Corvette");
const miAuto3 = new Auto("Ford", "Ka", "Rosa");
//for(let dato in miAuto){
//  console.log(dato, miAuto[dato])
//}
const arrayAutos = [miAuto, miAuto2, miAuto3];

for (let auto of arrayAutos) {
  console.log(auto);
}

for (let auto of arrayAutos) {
  for (let dato in auto) {
    console.log(dato, auto[dato]);
  }
}

arrayAutos.forEach((auto) => console.log(auto));

for (let index = 0; index < arrayAutos.length; index++) {
  console.log(arrayAutos[index]);
}

