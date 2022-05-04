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
  }
}
