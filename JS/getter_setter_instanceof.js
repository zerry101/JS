

class Human{ 

    constructor(){}

}


class Person extends Human {

    constructor(name) {
        super();
        this._name = name
    }

    get PersonName() {
        return this._name;
    }


    set NewPersonName(name) {
        this._name = name;
    }
}


x=new Person('raj');
console.log("old name is "+x.PersonName);
x.NewPersonName='raju';
console.log("new name is "+x.PersonName);



console.log(x instanceof Person );
console.log(x instanceof Human );
