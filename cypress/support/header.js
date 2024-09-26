class Header {

  getLogoBanner() {
     return cy.get('[href="https://ict-strypes.eu/"]');
  }

  getNavigationMenu() {
     return cy.get('#mainNav');
  }

  getSmallNavigationMenu() {
     return cy.get('[aria-label="Menu"]').eq(0);
  }

  getSearchMenu() {
     return cy.get('[role="search"]').eq(0);
  }

  selectNavigationMenu(text) {
   this.getNavigationMenu().contains(text).click();
  }

  sellectSmallNavigationMenu(text) {
    return cy.get('[aria-label="Menu"]').eq(0).find('li').contains(text).click();
 }

}

export default Header;