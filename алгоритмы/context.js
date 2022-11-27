const a = {
  name: 'Artem',
  sayHi: function() {
    console.log(this.name);
  },
  sayHiTo: function(person) {
    console.log(`${this.name} says Hi to ${person}`)
  }
};

const c = {
  name: 'Elena'
}

a.sayHi.call(c);
a.sayHiTo.apply(c, ['Bob']);