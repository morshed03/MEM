// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
// File upload
import 'cypress-file-upload';
// Import page object
import LoginPage from '../support/pageObjects/LoginPage'
import CreateNewMeetingPage from '../support/pageObjects/CreateNewMeetingPage'
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

//Login method
const loginPage = new LoginPage()
const createNewMeetingPage = new CreateNewMeetingPage()

Cypress.Commands.add("login", (userName, password) => 
{
    loginPage.getUserNameInputBox().type(userName)
    loginPage.getPasswordInputBox().type(password)
    loginPage.getEnterButton().click()
})

//This is the add agenda function
Cypress.Commands.add("addAgenda", (agendaItem) => 
{
    createNewMeetingPage.getAddAgendaButton().click()
    createNewMeetingPage.getAgendaInputField().type(agendaItem)
    createNewMeetingPage.getAgendaSubmitButton().click()
})
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
