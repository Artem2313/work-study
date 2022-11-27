const user = {
	name: 'Artem',
	sayHi: function() {
		console.log(`Say hi to ${this.name}!`);
	}
};

user.sayHi(); // ?

const func = user.sayHi;
func(); // ?
/// Call and apply
func.call(user);
func.apply(user);
////  Bind
const bindedFunc = user.sayHi.bind(user);
bindedFunc();
/// add args
const user2 = {
	name: 'Arthur',
	sayHi: function(middlename) {
		console.log(`Say hi to ${this.name} ${middlename}!`);
	}
}

// New func
const func2 = user2.sayHi;
// Call
func2.call(user2, 'Artyomovich');
// Apply
func2.apply(user2, ['Artyomovich']);
// Bind
const bindedFunc2 = user2.sayHi.bind(user2, 'Artyomovich');
bindedFunc2();

/// arrow func
const user3 = {
	name: 'Ares',
	sayHi: () => {
		console.log(`Say hi to ${this.name}!`);
	}
};

user3.sayHi();
const func3 = user3.sayHi;
func3();

// why do we use arrow func

let group = {
  title: "My Family",
  members: ["Father", "Mother", "Sister", "Brother"],

  showList() {
    this.members.forEach(
      member => console.log(this.title + ': ' + member)
    );
  }
};

group.showList();


