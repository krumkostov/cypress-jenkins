import HomePage from '../support/homePage';
import Header from '../support/header';


describe('Home Page Tests', () => {
   const homePage = new HomePage();
   const header = new Header();

   beforeEach(() => {
      cy.viewport(1920, 1080)
      cy.visit('https://strypes.eu');
   });


   it('should have the correct title', () => {
      homePage.getTitle().should('eq', 'ICT Strypes | End-to-end software solutions');
   });

   it('should have logo banner', () => {
      header.getLogoBanner().should('be.visible');
   });

   it('should check main navigation menus', () => {

      cy.contains('Accept All').should('be.visible').click();

      header.getNavigationMenu().should('be.visible');

      /* verify that all navigation options are there and visible -> "headerNavigationOptions":  ["About", "Services", "Customers", "Nearsurance", "Resources", "Careers"] */
      cy.fixture('header.common').then(headerCommon => {
         const headerNavigationOptions = headerCommon.headerNavigationOptions;
         headerNavigationOptions.forEach(headerNavigationOption => {
            header.getNavigationMenu().find("li").contains(headerNavigationOption).should('be.visible');
         });
      });
   });

   it('should check small navigation menus', () => {

      homePage.selectFromPopupWindow('Accept All')

      header.getSmallNavigationMenu().should('be.visible');

      /* Other navigation menus are there and visible ->  "headerSmallOptions": ["About ICT Group",  "Contact"] */
      cy.fixture('header.common').then(headerCommon => {
         const headerSmallOptions = headerCommon.headerSmallOptions;
         headerSmallOptions.forEach(headerSmallOption => {
            header.getSmallNavigationMenu().find("li").contains(headerSmallOption).should('be.visible');
         });
      });
   });

   it('should check Search menu', () => {

    homePage.selectFromPopupWindow('Accept All')
    header.getSearchMenu().should('be.visible');
   });

});