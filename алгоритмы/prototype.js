function Person(name) {
  this.name = name;
};

const artem = new Person('Artem');
console.log(artem.__proto__ === Person.prototype);
Person.prototype.sayHello = function() {
  console.log(`Hello ${this.name}!`);
};

artem.sayHello();

class Person2 {
}

const elena = new Person2();
console.log(elena);