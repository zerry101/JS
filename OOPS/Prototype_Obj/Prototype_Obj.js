function BanckAccount(customerName, Balance) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.Balance = Balance;
  // deposit function
  // deposit function will not be executed automatically it will be only  executed  by calling
  // Object_name.deposit(Enter_amount)
  // this.deposit = (amount) => {
  //   this.Balance += amount;
  // };
  // this.withdraw = (amount) => {
  //   this.Balance -= amount;
  // };
}

BanckAccount.prototype.deposit = function (amount) {
  this.Balance += amount;
};
/**above deposit method will not consume memory in every object rather will consume memory of only 
 BankAccount function this prototype code will be sharable among each object for data manipulation 
 with no memory consumption **/

//  dont use arrow function with prototype

BanckAccount.prototype.withdraw = function (amount) {
  this.Balance -= amount;
};
/**above withdraw method will not consume memory in every object rather will consume memory of only 
 BankAccount function this prototype code will be sharable among each object for data manipulation 
 with no memory consumption **/



const accountForm = document.querySelector("#accountForm");
const customerName = document.querySelector("#customerName");
const balance = document.querySelector("#balance");
const depositForm = document.querySelector("#depositForm");
const custaccountNumber = document.querySelector("#depoAccountNumber");
const depoAmount = document.querySelector("#depoAmount");
const withdrawAccountNumber = document.querySelector("#withdrawAccountNumber");
const withdrawAmount = document.querySelector("#withdrawAmount");
const withdrawForm = document.querySelector("#withdrawForm");
const accounts = [];

accountForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(customerName.value, balance.value);
  const account = new BanckAccount(customerName.value, Number(balance.value));
  accounts.push(account);
});
console.log(accounts);

depositForm.addEventListener("submit", (e) => {
  e.preventDefault();
  custDepoAccount = accounts.find(
    (a) => a.accountNumber == depoAccountNumber.value
  );
  custDepoAccount.deposit(Number(depoAmount.value));
  console.log(custDepoAccount);
  console.log(custDepoAccount.Balance);
});

withdrawForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const custWithdrawAccount = accounts.find(
    (a) => a.accountNumber == withdrawAccountNumber.value
  );
  custWithdrawAccount.withdraw(Number(withdrawAmount.value));
  console.log(custWithdrawAccount);
  console.log(custWithdrawAccount.Balance);
});
