// Nas versões mais atuais de JS abandonamos as functions e adotamos as classes
// Aqui temos recursos em comum com outras linguagens, como o constructor 
// Além da instância por 'new'

class Prog {
  constructor (Nome, tec) {
    this.nome = Nome
    this.tec = tec
  }
  getName() {
    return this.name
  }
}
const progFront = new Prog('Ana', 'React')
const progBack = new Prog('Gustavo', 'Ruby')
console.log(progFront)
console.log(progBack)

// Nao podemos adicionar propriedades diretamente as classes
// isso precisa ser feito ao inicia-la ou via prototype 
// Metodos da classe tambem podem utilizar 'this' para se referir ao objeto instanciado
// Os objetos nao precisam da palavra function 

class Game {
  constructor (name, genre) {
    this.name = name
    this.genre = genre
  }

  descreverGame() {
    console.log(`Jogo nomeado ${this.name}, do genero ${this.genre}`)
  }
}

const zeldaTOTK = new Game('The Legend of Zelda: Tears of the Kingdom', 'RPG')
zeldaTOTK.descreverGame()