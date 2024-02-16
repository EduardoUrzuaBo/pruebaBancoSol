class InboxPage {
    visit() {
        cy.visit('https://todo.ly/');
    }

    createTask(taskName) {
        cy.get('#NewItemContentInput').type(taskName);
        cy.get('#NewItemAddButton').click();
    }
    assertCreateSuccess() {
        // Adding assertion for task creation success
        cy.xpath('//div[contains(@class, "ItemContentDiv") and contains(text(), "15022024")]').should('be.visible');
    }

    updateTask(taskName) {
        cy.xpath('//div[contains(@class, "ItemContentDiv") and contains(text(), "15022024")]').click().type(taskName);
        cy.get('#NewItemAddButton').click();
    }
    assertUpdateSuccess() {
        // Adding assertion for task update success
        cy.xpath('(//div[@class="ItemContentDiv"])[6]').should('contain', '15022024');
    }

    deleteTask() {
        cy.xpath('(//*[contains(@id, "ItemId_")]//tr/td[2]//*[@id="ItemCheckDiv"])[6]').click();
        cy.wait(500)
        cy.get('#DoneItemsDeleteLink').click();
    }
    assertDeleteSuccess() {
        // Adding assertion for task delete success
        //cy.xpath('//*[contains(@id, "ItemId_")]//tr//td[contains(@class, "ItemContent")]').should('be.visible');
        cy.get('a#DoneItemsCount').should('contain', '0');
    }


}

export default new InboxPage();