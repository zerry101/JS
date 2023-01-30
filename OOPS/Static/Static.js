// let id=1;

class User {
  static id = 1;

  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.id = User.id++;
  }

  /**A static variable is a class property that is used in a class and not on the instance of the class. The variable is stored on the data segment area of the memory, and the same value is shared among every instance created in a class */

  static CompareByAge = (a, b) => {
    return a.age - b.age;
  };



}


Math.random;
const user1 = new User("Rakesh K", 30);
const user2 = new User("John Doe", 40);
const user3 = new User("jane Doe", 20);

const Users = [user1, user2, user3];

Users.sort(User.CompareByAge);
// Users()
console.log(Users);
