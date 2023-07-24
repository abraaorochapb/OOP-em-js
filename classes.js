// É o molde dos objetos, nelas definimos os metodos e propriedades
// JavaScript já possui suas classes, porém podemos criar as nossas 

const cachorro = {
  raca:null,
  patas: 4
}
const pastorAlemao = Object.create(cachorro)
pastorAlemao.raca = 'Pastor Alemao'
console.log(pastorAlemao)

const filaBr = Object.create(cachorro)
filaBr.raca = 'Fila Brasileiro'
console.log(filaBr)

// Funções construtoras: utilizando funções como classes, conseguimos iniciar as propriedades com a criação do objeto
// O construtor tem como objetivo instanciar um objeto, ou seja, criar um novo objeto

const criarJogo = (nome, genero) => {
  const jogo = Object.create({})
  jogo.nome = nome
  jogo.genero = genero

  return jogo
}

const Lol = criarJogo('Lol', 'Moba')
console.log(Lol)
const Valorant = criarJogo('Valorant', 'FPS')
console.log(Valorant)

// Classes baseadas em funções: semelhante a anterior, mas usando a palavra new, esta maneira é muito utilizada

function Prog (Nome, tec){
  this.nome = Nome
  this.tec = tec
}
const programador1 = new Prog('Abraao', 'JavaScript')
console.log(programador1)
const programador2 = new Prog('Solange', 'Java')
console.log(programador2)



