// Prototype é um recurso que faz parte da arquitetura JavaScript
// É uma espécie de Herança, onde objetos pais herdam propriedades e metodos aos filhos

// O recurso fundamental que temos que entender da OOP é o Fallback
// Quando a propriedade nao existe em um dado/objeto, ela é procurada em seu ancestral
// Ou seja, é por isso que temos acesso a length em string, por exemplo

const text = 'Testando'
console.log(Object.getPrototypeOf(text))
