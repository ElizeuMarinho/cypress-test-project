describe('Login Test success', () => {
  it('Visits the login page and logs in', () => {
    //Assert
    cy.visit('https://www.saucedemo.com/v1/');

    //Act
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[id="login-button"]').click();

    //Arrange
    cy.url().should('include', '/inventory.html');
    cy.pause();
  });
});

describe('Login Test using user Locked Out', () => {
  it('Visits the login page and fails to log in', () => {
    //Assert
    cy.visit('https://www.saucedemo.com/v1/');
    //Act
    cy.get('[data-test="username"]').type('locked_out_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[id="login-button"]').click();
    //Arrange
    cy.get('[data-test="error"]')
      .should('be.visible')
      .contains('Epic sadface: Sorry, this user has been locked out.');
    cy.pause();
  });
});
describe('Login Test using wrong user or password', () => {
  it('Visits the login page and fails to log in', () => {
    //Assert
    cy.visit('https://www.saucedemo.com/v1/');
    //Act
    cy.get('[data-test="username"]').type('test_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[id="login-button"]').click();
    //Arrange
    cy.get('[data-test="error"]')
      .should('be.visible')
      .contains(
        'Epic sadface: Username and password do not match any user in this service'
      );
    cy.pause();
  });
});
