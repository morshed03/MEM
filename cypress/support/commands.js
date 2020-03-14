// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
// File upload
import 'cypress-file-upload';
// Import page object
import LoginPage from '../support/pageObjects/LoginPage'
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
//Login method
const loginPage = new LoginPage()
Cypress.Commands.add("login", (userName, password) => 
{
    loginPage.getUserNameInputBox().type(userName)
    loginPage.getPasswordInputBox().type(password)
    loginPage.getEnterButton().click()
})
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
