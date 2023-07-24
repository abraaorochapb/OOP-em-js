// Quando utilizamos o recurso Symbol com classe, é possivel criar uma propriedade unica e imutavel
// Isso é util quando temos um dado que se repetirá em todos os objetos criados a partir da classe

class Car {
  constructor(model, brand) {
    this.model = model
    this.brand = brand 
  }
}
const wheels = Symbol()
Car.prototype[wheels] = 4

const e36 = new Car('E36', 'BMW')
console.log(e36)
console.log(e36[wheels])