/// <reference types="Cypress" />
import DashboardPage from '../../support/pageObjects/DashboardPage'

describe('Create Meeting Test Suite', function()
{
    beforeEach(function() 
    {
      cy.fixture('commonData').then(function(data)
      {
        this.data = data
      })
      cy.visit(Cypress.env('url'))
    })

    const dashboardPage = new DashboardPage()

    it('Create Meeting TC',function() 
    {
        //cy.visit(Cypress.env('url'))
        cy.login(this.data.userName, this.data.password)
        dashboardPage.getMEMAvatar().click()
    })
})
  