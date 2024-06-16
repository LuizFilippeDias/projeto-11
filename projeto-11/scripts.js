/*

Function() constructor
*expressão new
*criar um novo objeto
*this keyword

*/

function Person(name){
  this.name = name
  this.walk = function(){
    return this.name + " está andando"
  }
}

const pessoa = new Person("Luiz")
const pessoa2 = new Person("Helena")
console.log(pessoa.walk())
console.log(pessoa2.walk())