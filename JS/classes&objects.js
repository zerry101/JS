class RailwayForm {
    
    submit(givenname) {
        this.name = givenname
        console.log(`${this.name}'s form has beeen submitted`);

    }

    cancel(givenname) {
        this.name = givenname
        console.log(`${this.name}'s form has bseen cancelled`);
    }

}


let x = new RailwayForm();
let y = new RailwayForm();

x.submit('zishan');
y.submit('rohan');
y.cancel('rohan');
x.cancel('rohan');