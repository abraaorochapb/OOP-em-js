// Get é utilizado para exibir o valor de uma propriedade 
// E o set é utilizado para alterar o valor de uma propriedade

class Post {
  constructor(title, descrição, tags) {
    this.title = title
    this.descrição = descrição
    this.tags = tags
  }
  get exbTitle() {
    return `Você está lendo o post ${this.title}`
  }

  set setTags(tag) {
    const arrTags = tag.split(', ')
   this.tags = arrTags
  }
}
const frontendBasics = new Post('Frontend Basics', 'The least you need to be a frontend developer')
console.log(frontendBasics.exbTitle)

frontendBasics.setTags = ('HTML, CSS, JS, Framework/Library')
console.log(frontendBasics.tags)

