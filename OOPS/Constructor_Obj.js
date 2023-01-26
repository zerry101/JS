function BanckAccount(customerName, Balance) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.Balance = Balance;
  // deposit function
  // deposit function will not be executed automatically it will be only  executed  by calling
  // Object_name.deposit(Enter_amount)
  this.deposit = (amount) => {
    this.Balance += amount;
  };
  this.withdraw = (amount) => {
    this.Balance -= amount;
  };
}

// const zaccount=new BanckAccount('z',102);//This object will take different Memory and data
// const daccount=new BanckAccount('d',122);//This object will take different Memory and data

// daccount.deposit(5000);
// daccount.withdraw(1000);

// console.log(zaccount);
// console.log(daccount);

// BanckAccount();

const accountForm = document.querySelector("#accountForm");
const customerName=document.querySelector("#customerName");
const balance = document.querySelector("#balance");

const accounts=[];

accountForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(customerName.value,balance.value);
    const account = new BanckAccount(customerName.value,balance.value);
    accounts.push(account);
})
console.log(accounts);