// Uma classe pode herdar propriedades de outra por meio de herança
// Utilizamos a palavra chave 'extends', para adicionar a classe que vai trazer as propriedades
// E 'super' para enviar os valores para a classe pai

class Mamifero {
  constructor(patas) {
    this.patas = patas
  }
}
class lobo extends Mamifero {
  constructor(patas, familia) {
    super(patas, patas)
    this.familia = familia
  }
}
const loboLobasso = new lobo(4, 'canideo')
console.log(loboLobasso)

console.log(loboLobasso.patas)
