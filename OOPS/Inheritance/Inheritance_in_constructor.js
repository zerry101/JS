function BanckAccount(customerName, Balance) {
    this.customerName = customerName;
    this.accountNumber = 0;
    this.Balance = Balance;

}


BanckAccount.prototype.withdraw = function (amount) {
    this.Balance -= amount;
};


BanckAccount.prototype.deposit = function (amount) {
    this.Balance += amount;
};


// currentAccount.prototype.deposit = function (amount) {
//     this.Balance += amount;
// };
    



function currentAccount(customerName, Balance) {
    // this.customerName = customerName;
    // this.accountNumber = 0;
    // this.Balance = Balance;

    BanckAccount.call(this,customerName,Balance);
    // above code to access properties and methods defined inside BankAccount constructor but not prototype of BankAccount
    this.transactionLimit = 50000;
}

    currentAccount.prototype=Object.create(BanckAccount.prototype);

// currentAccount.prototype.takeBusinessLoan = function (amount) {
//     console.log('Take Business Loan:' + " " + amount);
// };





// currentAccount.prototype.withdraw = function (amount) {
//     this.Balance -= amount;
// };

const rakeshAccount=new currentAccount('rk',5000);
console.log(rakeshAccount);
rakeshAccount.deposit(2000);
rakeshAccount.withdraw(500);
console.log(rakeshAccount);