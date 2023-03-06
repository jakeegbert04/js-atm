/*
OOP - ATM assignment
********************************************
Due: Mon 3/6
Virtual ATM Machine (OOP Project)
- Build a console app that mimics an atm machine
- Persitent balance (CRUDable)
- Main Menu that routes to other menus 
  *********
  Welcome
  1) view balance
   ..... etc
  *********
- Redirect back to the main menu
- Error handling for withdrawals 
- Deposit
- Withdrawal
- View Balance
- Exit the program via selection
- Receipt 
- BONUS:
  - Include pin number for users
  - Easter Egg code for FBI Lockout


HAVE FUN
*/

class User {
  constructor(firstName, lastName, email, password, balance = 0, deposit = 0, withdraw = 0) {
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.password = password
    this.balance = balance
    this.deposit = deposit
    this.withdraw = withdraw
  }
}

function showBalance() {
  alert(`Your balance is ${jake.balance}`)
}

function depositCash() {
  let depositAmount = Number(prompt("How much would you like to deposit?"))
  jake.deposit = depositAmount
  jake.balance = jake.balance + depositAmount
  alert(`
  you have deposited $${depositAmount} amount of money 
  
  Your new balance is $${jake.balance}
  `)
}

function withdrawCash() {
  let withdrawAmount = Number(prompt("How much would you like to withdraw?"))
  jake.withdraw = withdrawAmount
  jake.balance = jake.balance - withdrawAmount
  alert(`
  you have have withdrawed $${withdrawAmount} amount of money 
  
  Your new balance is $${jake.balance}
  `)
}
function receiptAmount() {
  alert(`
  You've deposited $${jake.deposit}
  You've withdrawn $${jake.withdraw}
  `)
}

// const isRequired = () => { 
//     throw new Error(`Missing Parameter`)
// }
// const money = prompt("money?")
// function newUser() {
//   const userFName = prompt("What is your first name?")
//   const userLName = prompt("What is your last name?")
//   const userEmail = prompt("What is your email")
//   const userPassword = prompt("What would you like your password to be?")
//   new User[userFName] =(userFName,userLName,userEmail,userPassword)
// }
const jake = new User("Jake", "egbert", "Jake@devpipeline.com", "1234")

console.log(jake)

function login() {
  const email = prompt("Please enter your email")
  const password = prompt("Please enter your password")
  if (email === jake.email && password === jake.password) {
    menu()
  } else{
    alert("Invaild email or password")
  }
}
// login()

function menu() {
  while(true) {
  const menuInput = prompt(`
  [1] View Balance
  [2] Deposit Money
  [3] Withdraw Money
  [4] Quit (Or Cancel)
  `)
  if (menuInput === null) {
    return
  } else if (menuInput === "1") {
    showBalance()
  } else if (menuInput === "2") {
    depositCash()
  } else if (menuInput === "3") {
    withdrawCash()
  } else if (menuInput === "4") {
    receiptAmount()
    return false;
  }
}
}

// menu()
console.log(jake)


// function viewBalance() {
//   jake.showBalance()
// }

// function depositCash() {

// }

// function withdrawCash() {

// }

// console.log(jake.balance)
