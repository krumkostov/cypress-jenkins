class HomePage {
    visit() {
        cy.visit('https://strypes.eu');
    }
  
    getTitle() {
      return cy.title();
    }

    selectFromPopupWindow(button) {
       cy.contains(button).should('be.visible', { timeout: 10000 }).click();
      }

  }
  
  export default HomePage;