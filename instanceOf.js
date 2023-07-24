//conferir a ancestralidade de um objeto

class aviao {
  constructor (asas) {
    this.asas = asas
  }
}

class aviaoModelo extends aviao {
  constructor (asas, modelo) {
    super(asas)
    this.modelo = modelo
  }
}

const boeing737 = new aviaoModelo(4, '737')
console.log(boeing737)

console.log(boeing737 instanceof aviaoModelo)
console.log(aviaoModelo instanceof aviao) // Aqui recebemos false pois estamos comparando classe-classe, e nao obj-classe 
