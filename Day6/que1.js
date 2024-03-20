
// 1. Create a class BankAccount with properties balance and owner and methods deposit(), withdraw(), and displayBalance().

class BankAccount {
    constructor(balance,owner){
        this.balance = balance;
        this.owner = owner;
    }

    deposit(amount) {
        console.log("Depositing")
        this.balance += amount;
        console.log("Balance: " + this.balance)

    }

    withDraw(amount){
        console.log("withdraw")
        this.balance -= amount;
        console.log("Balance: " + this.balance)
    }


    displayBalance(){
        console.log( "Balance: "+ this.balance)
    }
}

const myAcc = new BankAccount(2500,"Anant") ;
myAcc.deposit(200) ;
myAcc.withDraw(20);
myAcc.displayBalance();
console.log("Owner : " + myAcc.owner);