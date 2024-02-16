class RegisterPage {

  
    visit() {
      cy.visit('https://todo.ly/');
    }

    
  
    fillForm(password) {
      const currentDate = new Date();
      const timestamp = currentDate.getTime(); // Get current timestamp
      const dynamicUsername = 'user_' + timestamp;
      const dynamicEmial = timestamp +'@gmail.com'

      cy.get('.HPHeaderSignup > a > img').click();
      cy.get('#ctl00_MainContent_SignupControl1_TextBoxFullName').type(dynamicUsername);
      cy.get('#ctl00_MainContent_SignupControl1_TextBoxEmail').type(dynamicEmial);
      cy.get('#ctl00_MainContent_SignupControl1_TextBoxPassword').type(password);
      cy.get('#ctl00_MainContent_SignupControl1_CheckBoxTerms').click();
      cy.get('#ctl00_MainContent_SignupControl1_ButtonSignup').click();
    }
  
    assertRegisterSuccess() {
      cy.get('#ctl00_HeaderTopControl1_LinkButtonLogout').should('be.visible');;
    }
  }
  
  export default new RegisterPage();