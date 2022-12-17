const { I, expectedAssertionsPage } = inject();

module.exports = {
  //Elements---------------------------

  txtEmail: "//input[@id='email']",
  txtPassword: "//input[@id='password']",
  btnSignIn: "//a[@class='link template-button']",
  btnLogin: "//button[@type='submit']",
  veryMyAccount: "//h1[text()='Library']",

  //Method-------------------------------
  clickOnSignInTab() {
    I.waitForVisible(this.btnSignIn, 10);
    I.click(this.btnSignIn);
  },
  setEmail(email) {
    I.fillField(this.txtEmail, email);
  },
  setPassword(password) {
    I.fillField(this.txtPassword, password);
  },
  clickOnBtnSignIn() {
    I.click(this.btnLogin);
  },
  loginUserforallfeatures(email, password) {
    //I.click(this.btnSignIn)
    I.fillField(this.txtEmail, email);
    I.fillField(this.txtPassword, password);
    I.click(this.btnLogin)
  }
}
