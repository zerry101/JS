class BankAccount {

    customerName;
    accountNumber;
    balance;

    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.balance = balance;
        this.accountNumber = Date.now();

    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        this.balance -= amount;
    }

    // In class variables are refered as properties and funtions are refered as properties
    // In class we pass Input parameters in constructor
    // In class hoisting will not work
    // Hoisting means calling of function or making object before declaration see below commented code

    
    /** hello()
     * function hello(){
     * console.log("hello");
     * }
     * above function is called before initialization which will run 
     * but 
     * 
     * obj= new A()
     * class A{
     * properties and methods
     * }
     * above code will give error as object is declared before class initialization
     */

}

// const rakeshAccount=new BankAccount("rakesh",900);

// console.log(rakeshAccount);

// rakeshAccount.deposit(1000);
// console.log(rakeshAccount);


const acccustomerName = document.querySelector("#customerName");
const accbalance = document.querySelector("#balance");
const custaccountForm = document.querySelector("#accountForm");

const accounts = [];

custaccountForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const account = new BankAccount(acccustomerName.value, Number(accbalance.value));
    accounts.push(account);
    console.log(account);
})

// const    