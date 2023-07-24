//Metodos OOP
const animal = {
  tipo: 'cachorro',
  nome: 'Rex',
  latir: function() {
    console.log('Au Au')
  }
}
animal.latir()

//Os metodos sao utilizados tambem para interagir com as propriedades do seu objeto
//podemos exibir elas ou modifica-las
//podemos nos referenciar ao proprio objeto com a palavra this

const user = {
  name: 'Abraao',
  
  getName: function() {
    return this.name
  },

  setName : function(newName) {
    this.name = newName
  } 
}

console.log(user.getName())

user.setName('Solange')

console.log(user.getName())

