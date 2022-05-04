export class ES6Class {
  someMethod() {
    return 'something';
  }
  otherMethod() {
    return 'whatever';
  }
  validEmail(email) {
    if (
      email.indexOf("@") !== -1 &&
      email.indexOf(".") !== -1 &&
      email.indexOf('@') !== 0
    ) {
      return true
    }
    return false
  }
  validName(firstLastName) {
    if (
      firstLastName !== "" &&
      /[A-Za-z\s]{4,255}/.test(firstLastName)
    ) {
      return true
    } else {
      return false
    }
  }
}
