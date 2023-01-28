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
}


class CurrentAccount extends BankAccount{
    transactionLimit;
 constructor(customerName,balance=0,list)
 {
    super(customerName,balance) ;
    this.transactionLimit=10000;
 }   
 
}

const rakeshAccount=new CurrentAccount('rk',3000);
console.log(rakeshAccount);
















