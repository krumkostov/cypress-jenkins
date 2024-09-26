class ContactPage {
/* The functions getNavigationMenu() and selectNavigationMenu() might be in another file, such as homePage.js or header.js, where all functions and selectors can be placed. */

   getNavigationMenu() {
      return cy.get('#mainNav');
   }
   
  selectNavigationMenu(text) {
   this.getNavigationMenu().contains(text).click();
  }

  enterFullName(fullName) {
     cy.get('#name').type(fullName);
  }


  enterEmail(email) {
     cy.get('#email').type(email);
  }

  enterSubject(subjectText) {
     cy.get('#subject').type(subjectText);
  }

  enterMessages(messages) {
     cy.get('#message').type(messages);
  }

  selectAgreeCheckBox() {
     cy.get('[name="agree"]').click()
  }

  selectHearOption(selectedOption){
   cy.get('#hear').select(selectedOption);
   cy.get('#hear').should('have.value', selectedOption);
  }

  submitForm() {
     cy.get('[value="Send Message"]').click();
  }

  verifySuccessMessage(message) {
     cy.get('[class="alert alert-success"]').contains(message).should('be.visible');
  }

}


export default ContactPage;
