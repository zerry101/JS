class RailwayForm {
    
constructor(givenname){
    this.name=givenname
}

    submit() {
        console.log(`${this.name}'s form has beeen submitted`);

    }

    cancel() {
        console.log(`${this.name}'s form has bseen cancelled`);
    }

}


let x = new RailwayForm('zishan');
let y = new RailwayForm('rohan');

x.submit();

y.submit();
