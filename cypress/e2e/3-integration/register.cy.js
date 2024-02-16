import RegisterPage from '../../pages/RegisterPage';

describe('Register', () => {
  it('should register a new user', () => {
    RegisterPage.visit();
    RegisterPage.fillForm('password123');
    RegisterPage.assertRegisterSuccess();
  });
});