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
    takePersonalLoan;
 constructor(customerName,balance=0,list)
 {
    super(customerName,balance) ;
    this.transactionLimit=10000;
    this.takePersonalLoan=(amount)=>{
        console.log(`You will recieve of  ${amount}  of personal loan`);
    }
 }   
 
}

const rakeshAccount=new CurrentAccount('rk',3000);
rakeshAccount.takePersonalLoan(30000);
console.log(rakeshAccount);
















