
class User {
  constructor(firstName, lastName, email, password, balance = 0.00, deposit = 0.00, withdraw = 0.00) {
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.password = password
    this.balance = balance
    this.deposit = deposit
    this.withdraw = withdraw
  }
}

const jake = new User("Jake", "egbert", "j.com", "1234")

function showBalance() {
  alert(`Your balance is $${jake.balance}`)
}

function depositCash() {
  let depositAmount = parseFloat(prompt("How much would you like to deposit?"))
  if(depositAmount <= 0) {
    alert("Can't deposit negative amount")
  } else {
    jake.deposit = depositAmount
    jake.balance = jake.balance + depositAmount
    alert(`
    you have deposited $${depositAmount} amount of money 
    
    Your new balance is $${jake.balance}
    `)
  }
}

function withdrawCash() {
  let withdrawAmount = parseFloat(prompt("How much would you like to withdraw?"))
  if (withdrawAmount > jake.balance) {
    alert("Balance can't be become negative")
  } else {
    jake.withdraw = withdrawAmount
    jake.balance = jake.balance - withdrawAmount
    alert(`
    you have have withdrawed $${withdrawAmount} amount of money 
    
    Your new balance is $${jake.balance}
    `)
  }
}

function receiptAmount() {
  alert(`
  You've deposited $${jake.deposit}
  You've withdrawn $${jake.withdraw}
  `)
}

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


function login() {
  const email = prompt("Please enter your email")
  const password = prompt("Please enter your password")

  if (email === jake.email && password === jake.password) {
    menu()
  } else{
    alert("Invaild email or password")
  }
}