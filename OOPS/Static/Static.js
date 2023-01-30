class User{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
}

const user1=new User('Rakesh K',30);
const user2=new User('John Doe',40);
const user3=new User('jane Doe',20);

const Users=[user1,user2,user3];



Users.sort((a,b)=>{ return a.age-b.age});
// Users()
console.log(Users);