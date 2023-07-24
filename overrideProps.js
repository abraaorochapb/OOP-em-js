// As intancias dos objetos sao criadas basedas nas classes 
// Ou seja, as propriedades de um objeto tem valores definidos no construtor ou por metodos 
// Para alteralas podemos utilizar o prototype

class humano {
  constructor (nome, idade, profissao) {
    this.nome = nome
    this.idade = idade
  }
}
const abraao = new humano('Abraao', 19)
console.log(abraao)
 
humano.prototype.idade = 'nao definida'
console.log(humano.prototype.idade)