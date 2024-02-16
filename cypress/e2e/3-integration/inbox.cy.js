import InboxPage from '../../pages/InboxPage';
import LoginPage from '../../pages/LoginPage';

describe('Inbox', () => {
  const currentDate = new Date();
  const timestamp = currentDate.getTime()
  before(() => {
    cy.visit('https://todo.ly/');
    LoginPage.fillForm('eurzua@bancosol.com', '12345');
  });

  it('Crear una tarea, Actualizar, y Borrar', () => {
    //InboxPage.visit();
    InboxPage.createTask("15022024");
    InboxPage.assertCreateSuccess();
    InboxPage.updateTask(timestamp);
    InboxPage.assertUpdateSuccess();
    InboxPage.deleteTask();
    InboxPage.assertDeleteSuccess();
  });
});