describe('Contact Page Tests', () => {
  class ContactPage {
    /* 
      The functions getNavigationMenu() and selectNavigationMenu() might be in another file, such as homePage.js or header.js, where header related functions and selectors can be placed. 
      */
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
      cy.get('[name="agree"]').click();
    }

    selectHearOption(selectedOption) {
      cy.get('#hear').select(selectedOption);
      cy.get('#hear').should('have.value', selectedOption);
    }

    submitForm() {
      cy.get('[value="Send Message"]').click();
    }

    verifySuccessMessage(message) {
      cy.get('[class="alert alert-success"]')
        .contains(message)
        .should('be.visible');
    }
  }

  const contactPage = new ContactPage();

  const testData = {
    fullName: 'Ivan Ivanov',
    email: 'iivanov@mail.bg',
    subjectText: 'Subject Text',
    messages: 'QH Automation task',
  };

  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit('https://qualityhouse.com/');
  });

  it('should send contact message successfully with valid inputs', () => {
    contactPage.selectNavigationMenu('Contact Us');
    cy.url().should('include', '/contact-us');
    cy.contains('Our Offices').should('exist');
    contactPage.enterFullName(testData.fullName);
    contactPage.enterEmail(testData.email);
    contactPage.enterSubject(testData.subjectText);
    contactPage.enterMessages(testData.messages);
    contactPage.selectAgreeCheckBox();
    /*The test case did not include selecting from the dropdown menu, but the test cannot be completed without this step.*/
    contactPage.selectHearOption('LinkedIn');
    //  contactPage.submitForm();
    //  contactPage.verifySuccessMessage('Your message is sent successfully!');
  });
});
