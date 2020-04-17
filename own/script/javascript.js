class Animal {
  constructor(options){
    this.name = options.name
    this.age = options.age
    this.hasTail = options.hasTail
  }
}

const animal = new Animal ({
  name: 'Animal',
  age: 5,
  hasTail: true
})