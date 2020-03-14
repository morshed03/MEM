/// <reference types="Cypress" />

import LoginPage from '../../support/pageObjects/LoginPage'

describe('Login Page Test Suite', function()
{
    beforeEach(function() {
      
      // runs once before all tests in the block
      cy.fixture('commonData').then(function(data)
      {
        this.data = data
      })
    })

    const loginPage = new LoginPage()

    it('Login with valid Credential TC',function() 
    {
        cy.visit(Cypress.env('url'))
        loginPage.getUserNameInputBox().type(this.data.userName).should('have.value', this.data.userName)
        loginPage.getPasswordInputBox().type(this.data.password).should('have.value', this.data.password)
        loginPage.getEnterButton().should('contain','প্রবেশ করুন').click()
       
        cy.get('.img-avatar').click({ force: true })
      /*
        cy.get('.img-avatar').trigger('mouseover')
        cy.wait(3000)
        cy.get('div[aria-labelledby=simple-dropdown]').should('be.visible')
        cy.get('div.col-sm-5 > button[type=button]').click()
      */
    })
  
    it('Blank Test Case',function() 
    {
      cy.visit(Cypress.env('url'))
  
      loginPage.getEnterButton().click()
      loginPage.getValidationMessage().then(function(element)
      {
          const actualText = element.text()
          expect(actualText.includes(this.data.validationMessage)).to.be.true
      })
      
    })
    it('Login with valid username but invalid pass TC',function() 
    {
        cy.visit(Cypress.env('url'))
        loginPage.getUserNameInputBox().type(this.data.userName)
        loginPage.getPasswordInputBox().type('123456')
        loginPage.getEnterButton().click()
        loginPage.getValidationMessage().then(function(element)
        {
            const actualText = element.text()
            expect(actualText.includes(this.data.validationMessage)).to.be.true
      })
      
    })
    it('Login with invalid username but valid pass TC',function() 
    {
        cy.visit(Cypress.env('url'))
        loginPage.getUserNameInputBox().type("abcdef")
        loginPage.getPasswordInputBox().type(this.data.password)
        loginPage.getEnterButton().click()
        loginPage.getValidationMessage().then(function(element)
        {
            const actualText = element.text()
            expect(actualText.includes(this.data.validationMessage)).to.be.true
      })
      
    })
})
  