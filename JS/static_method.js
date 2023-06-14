
//static methods belongs to class not an object
class Animal {
    constructor(name){
        this.name=name;
    }


    walk(){

      console.log("animal "+this.capitaize()+" is walking");
    }

    // here capitalize method is a static method  
    capitaize(){
       return  this.name.charAt(0).toUpperCase()+this.name.substr(1,this.name.length);
    }
}

x=new Animal('Monkey');
console.log(x.walk());

Animal.name='jake';
Animal.walk;


