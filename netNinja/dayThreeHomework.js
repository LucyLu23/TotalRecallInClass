class Governor{
    constructor(num,age){
    this.num = num;
    this.age = age;
    }
    speak(){
        console.log('Hello, nice work！')
    }

}
console.log(Governor);
console.log(Governor.age);

class Person{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender
         
    }
}
class PostalWorker extends Person {
    sayhello(){
        console.log(this.name, ' says "good morning, guy!"')
    }
    drive(){
        console.log(this.name, ' drive safely!')
    }
    
}
class Chef extends Person{
    cook(){
        console.log(this.name, ' says "yummy food!"')
    }
    clean(){
        console.log(this.name, ' is washing cookers')
    }
}
let postWorker1 = new PostalWorker('Mike',23, 'male');
console.log(postWorker1);
let postWorker2 = new PostalWorker('Mary', 36, 'female');
console.log(postWorker2);
let chef1 = new Chef('Joe',74,'female');
console.log(chef1);
let chef2 = new Chef('Jacob',14, 'male');
console.log(chef2);
console.log(postWorker1.drive());


//Bank Accounts 
class BankAccounts {
    constructor(ownerName, balance, acctNum){
        this.ownerName = ownerName;
        this.balance = balance;
        this.acctNum = acctNum;
    }
    deposit(depositNumber, balance){
        this.depositNumber = depositNumber;
        this.balance = balance;
        //let balanceAll = this.balance+this.depositNumber;
        console.log("your balance is ", this.depositNumber+this.balance, " after depositing.")
    }
    withdraw(withdrawNumber, balance){
        this.withdrawNumber = withdrawNumber;
        this.balance = balance;
        //let balanceWithdraw=this.balance - this.withdrawNumber;
        console.log("your balance is ", this.withdrawNumber+this.balance, " after withdrawing.")
    }
}

var bankAcctOne = new BankAccounts('JOJO', 36, 6669992323)
console.log(bankAcctOne);
bankAcctOne.deposit(200,369);
bankAcctOne.withdraw(2100,3600);
  
console.log('------------')


class SavingsAccount extends BankAccounts{
    withdraw1(withdrawNumber,balance){
        this.withdrawNumber =withdrawNumber;
        this.balance = balance;
        if(this.balance < this.withdrawNumber){
            console.log("you don't have enough money");
        }
        else if(this.balance >= this.withdrawNumber){
            console.log("you have ", this.balance-this.withdrawNumber, " $ left");
        }
        }
    }
   
class CheckingAccount extends BankAccounts{
    overdraftEnabled(withdrawnumber, balance){
        this.withdrawNumber = withdrawnumber;
        this.balance = balance;
        if (this.balance < this.withdrawNumber){
            console.log("not enough money, but you need pay back soon")
        }

    }
}
 
var savingAccountOne = new SavingsAccount("Joes", 366, 36965412358);
console.log(savingAccountOne);
savingAccountOne.withdraw1(690,366);
savingAccountOne.withdraw1(102,366);
var checkingAcctOne = new CheckingAccount("Luvivi", 1000, 1256669965512);
checkingAcctOne.overdraftEnabled(230,120);



