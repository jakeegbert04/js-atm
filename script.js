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
  constructor(firstName, lastName, email, password, balance=0, deposit=0, withdraw=0) {
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.password = password
    this.balance = balance
    this.deposit = deposit
    this.withdraw = withdraw
  }
  showBalance() {
    alert(`Your balance is ${this.balance}`)
  }
}

// const isRequired = () => { 
//     throw new Error(`Missing Parameter`)
// }
// const money = prompt("money?")

const jake = new User("Jake", "egbert", "Jake@devpipeline.com", "1234")
const mitch = new User("mitch", "log", "mitch@devpipeline.com", "1234")

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
const menuInput = prompt(`
[1] View Balance
[2] Deposit Money
[3] Withdraw Money
[4] Quit (Or Cancel)
`)
while(true) {
  if (menuInput === "1") {
    viewBalance()
  } else if (menuInput === "2") {
    depositCash()
  } else if (menuInput === "3") {
    withdrawCash()
  } else if (menuInput === "4") {
    return false;
  } else {
    alert("Invaild Option")
    return false;
  }
}
}

menu()


function viewBalance() {
  jake.showBalance()
}

function depositCash() {

}

function withdrawCash() {

}

// console.log(jake.balance)
