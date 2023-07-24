// Para adicionar metodos antes da criação do objeto, podemos acessar o prototype e colocalos la
// Porém com a evolução da linguagem, outros recursos foram criados, tornando este pouco utilizado 

function Cachorro(nome, raca){
  this.nome = nome
  this.raca = raca
}

Cachorro.prototype.uivar = function(){
  console.log('Auuuuuu mim de papai')
}
const labrador = new Cachorro('Boris', 'Labrador')
labrador.uivar()
  