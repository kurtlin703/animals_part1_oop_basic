class Animal {
  constructor(name) {
    this.name = name;
  }
  sound() {
    return "sound";
  }
  eat() {
    return this.name + " eats";
  }
}

class Dog extends Animal {
  sound() {
    return "dog barks";
  }

}
class Cat extends Animal {
  sound() {
    return  "cat meows";
  }
} 

class Home{
  constructor(){
    this.petArray = []
  }
  adoptPet(pet){
    this.petArray.push(pet)
    
  }
  makeAllSound(){
    for(var i = 0; i <this.petArray.length; i++){
      console.log(this.petArray[i].sound())
    }
    
  }

}


let dog = new Dog("rex");
let dog1 = new Dog("lethabo")
let dog2 = new Dog("kurt")
let cat = new Cat("stormy");
let home = new Home()

home.adoptPet(dog1)
home.makeAllSound()
home.adoptPet(cat)
home.makeAllSound()
home.adoptPet(dog2)
home.makeAllSound()




