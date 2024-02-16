import LoginPage from '../../pages/LoginPage';

describe('Login', () => {
  it('should login with valid credentials', () => {
    LoginPage.visit();
    LoginPage.fillForm('eurzua@bancosol.com', '12345');
    LoginPage.assertLoginSuccess();
  });
});