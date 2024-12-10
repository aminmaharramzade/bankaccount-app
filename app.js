const bankAccount = {
    balance: 50,
    history: [],
    deposit: function(amount){
      
      this.balance += amount;
      this.history.push(`+${amount}`)

      alert(`+${amount}
Your balance is ${this.balance}`);
      
    } ,
    withdraw: function(amount){
      
      this.balance -= amount;
      this.history.push(`-${amount}`)

      alert(`-${amount}
Your balance is ${this.balance}`);
    } ,
    checkBalance: function(){
        alert(`Your balance is ${this.balance}`);
        
    } ,
    viewTransactionHistory: function (){
        alert(this.history);
    }
}


function greet(){
    const greetCustomer = prompt(`Welcome to the Bank App!
   What would you like to do?
   1.Deposit
   2.Withdraw
   3.Check Balance
   4.View Transaction History
   5.Exit`)
   const greetNum = Number(greetCustomer)
   
if(greetNum == 1){
    const userDeposit = prompt(`Enter the amount`);
    let depositNumber = Number(userDeposit)
    bankAccount.deposit(depositNumber);
    greet()
    
}else if(greetCustomer == 2){
    const userWithdraw = prompt(`Enter the amount`);
    let withdrawNumber = Number(userWithdraw)
    bankAccount.withdraw(withdrawNumber)
    greet()
}else if(greetNum == 3){
    let checkNumber = Number()
      bankAccount.checkBalance()
      greet()
    
}else if(greetNum == 4){
      bankAccount.viewTransactionHistory()
      greet()


}else if(isNaN(greetNum)){
    alert("Give the value,not a letter.")
    greet()
}else if(greetNum > 5){
    alert("Select only from 1-5.")
    greet()
}
}
greet()