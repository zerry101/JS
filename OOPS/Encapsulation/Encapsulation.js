class BankAccount {

    customerName;
    accountNumber;
    #balance;
    // using # we can declare variable privately which cannot be accessed outside of class  

    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.#balance = balance;
        this.accountNumber = Date.now();

    }

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        this.#balance -= amount;
    }
    set Balance(amount){
        if(isNaN(amount))
        {
            // console.log('enter numeric value');
            throw new Error('Amount is not valid input');
        }
        

            this.#balance=amount;      
    }

    get Balance(){
    return this.#balance;
    }


}

// Inheritace below

class CurrentAccount extends BankAccount{
    transactionLimit=10000;;
    takePersonalLoan;
    constructor(customerName,balance=0,list)
    {  
        super(customerName,balance) ;
        //  calulateInterest;
        this.#calulateInterest;
     // Inheritance in constructor above
     this.takePersonalLoan=(amount)=>{
         this.#calulateInterest();
         console.log(`You will recieve of  ${amount}  of personal loan`);
        }
        
    }   
    
    
   #calulateInterest=()=>{
        
       console.log('Calculating interest');
    }


 

 
}

const rakeshAccount=new CurrentAccount('rk',3000);
// rakeshAccount.takePersonalLoan(30000);
// rakeshAccount.#balance(5000);
// using above line of code we can change or access   balance externally(outside class) which is a security issue
console.log(rakeshAccount);
// rakeshAccount.setBalance('hllo');

rakeshAccount.Balance=200;

// console.log();
console.log(rakeshAccount.takePersonalLoan(20));    















