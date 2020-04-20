/// <reference types="Cypress" />

import LoginPage from '../../support/pageObjects/LoginPage'

describe('Login Page Test Suite', function()
{
    beforeEach(function() {
      
      // runs once before all tests in the block
      cy.fixture('MEMTestData').then(function(data)
      {
        this.data = data
      })
    })

    const loginPage = new LoginPage()

    it.only('Login with valid Credential TC',function() 
    {
      cy.server()
      cy.route('POST', 'http://sqa.grp.gov.bd/global/api/auth-service/auth-service/sec/master/authentication/v1/login').as('login')

        cy.visit(Cypress.env('url'))
        loginPage.getUserNameInputBox().type(this.data.userName).should('have.value', this.data.userName)
        loginPage.getPasswordInputBox().type(this.data.password).should('have.value', this.data.password)
        loginPage.getEnterButton().should('contain','প্রবেশ করুন').click()
        cy.wait('@login')
      
      cy.get('@login').then(function (xhr) {
        expect(xhr.status).to.eq(200)
        expect(xhr.requestHeaders).to.have.property('Content-Type')
        expect(xhr.method).to.eq('POST')
      })  
        cy.logout()
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
  