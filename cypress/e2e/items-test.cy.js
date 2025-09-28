const items = [
  'Sauce Labs Backpack',
  'Sauce Labs Bike Light',
  'Sauce Labs Bolt T-Shirt',
  'Sauce Labs Fleece Jacket',
  'Sauce Labs Onesie',
  'T-Shirt (Red)',
];

describe('Test button "add to cart" login standard_user', () => {
  it('Add to cart button  (All items)', () => {
    //Assert
    cy.visit('https://www.saucedemo.com/v1/');

    //Act
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[id="login-button"]').click();
    cy.url().should('include', '/inventory.html');
    //Arrange
    cy.get('.inventory_item').each(($product, index) => {
      cy.wrap($product).within(() => {
        cy.get('img')
          .should('be.visible')
          .and(($img) => {
            expect($img[0].naturalWidth).to.be.greaterThan(0);
          });
        cy.get('.inventory_item_name')
          .invoke('text')
          .should('eq', items[index]);
      });
    });
  });
});

describe('Test button "add to cart" login problem_user', () => {
  it('Add to cart button  (All items)', () => {
    //Assert
    cy.visit('https://www.saucedemo.com/v1/');

    //Act
    cy.get('[data-test="username"]').type('problem_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[id="login-button"]').click();
    cy.url().should('include', '/inventory.html');
    //Arrange
    cy.get('.inventory_item').each(($product, index) => {
      cy.wrap($product).within(() => {
        cy.get('img')
          .should('be.visible')
          .and(($img) => {
            expect($img[0].naturalWidth).to.be.greaterThan(0);
          });

        cy.get('.inventory_item_name')
          .invoke('text')
          .should('eq', items[index]);
      });
    });
  });
});
