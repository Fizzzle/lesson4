'use strict';

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`Hello ${this.name}`);
    }
};
User.prototype.exit = function () {
    console.log(`Чуваки, тут ${this.name} ушел... что делать будем?`);
}

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

alex.exit();

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex);