class User {
  constructor(firstName, lastName, email, password, balance=0) {
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.password = password
    this.balance = balance
  }
}

const jake = new User("Jake", "egbert", "Jake@devpipeline.com")

console.log(jake)

// function checkBalance() {

// }