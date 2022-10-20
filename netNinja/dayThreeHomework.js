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
        this.acctNum = acctNum

    }
    deposit(depositNumber, balance){
        this.balance=this.balance+depositNumber;
        console.log("your balance is ", this.balance)
    }
    withdraw(withdrawNumber, balance){
        this.balance=this.balance - withdrawNumber;
        console.log("your balance is ", this.balance)
    }
}
class CheckingAccount extends BankAccounts{
    overdraftEnabled(){

    }
}
class SavingsAccount extends BankAccounts{
    withdraw(withdrawNumber,balance){
        if(this.balance-withdrawNumber){
            console.log("you don't have enough money")
        }
    }
}
 let bankAcctOne = new CheckingAccount('JOJO', 36, 'female')