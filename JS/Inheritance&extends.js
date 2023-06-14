class Animal{
    constructor(name,color){
        this.name=name;
        this.color=color;
    }

    run(){
        console.log(this.name +" is running");
    }
    shout(){
        console.log(this.name +" is shouting");
    }

}


class Monkey extends Animal{

}

y=new Monkey('ken','blue');
x=new Monkey('ken1','red');
console.log(y.color);
console.log(x.color);
console.log(x.run());
console.log(y.run());