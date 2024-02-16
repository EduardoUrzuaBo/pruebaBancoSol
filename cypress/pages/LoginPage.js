class LoginPage {
    visit() {
      cy.visit('https://todo.ly/');
    }
  
    fillForm(username, password) {
      cy.get('.HPHeaderLogin > a > img').click();
      cy.get('#ctl00_MainContent_LoginControl1_TextBoxEmail').type(username);
      cy.get('#ctl00_MainContent_LoginControl1_TextBoxPassword').type(password);
      cy.get('#ctl00_MainContent_LoginControl1_ButtonLogin').click();
    }
  
    assertLoginSuccess() {
        cy.get('#ctl00_HeaderTopControl1_LinkButtonLogout').should('be.visible');
    }
  }
  
  export default new LoginPage();