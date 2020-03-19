// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
// File upload
import 'cypress-file-upload';
// Import page object
import LoginPage from '../support/pageObjects/LoginPage'
import DashboardPage from '../support/pageObjects/DashboardPage'
import CreateNewMeetingPage from '../support/pageObjects/CreateNewMeetingPage'
import MeetingTodosPage from '../support/pageObjects/MeetingTodosPage'
import MeetingListPage from '../support/pageObjects/MeetingListPage'
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const createNewMeetingPage = new CreateNewMeetingPage()
const meetingTodosPage = new MeetingTodosPage()
const meetingListPage = new MeetingListPage()

//Login method
Cypress.Commands.add("login", (userName, password) => 
{
    loginPage.getUserNameInputBox().type(userName)
    loginPage.getPasswordInputBox().type(password)
    loginPage.getEnterButton().click()
})
//Log Out 
Cypress.Commands.add("logout", () => 
{
    dashboardPage.getUserAvatar().click()
    dashboardPage.getExitLink().click({force: true})
})
//Move to GRP Dashboard
Cypress.Commands.add("GRPDashboard", () => 
{   
    cy.wait(3000)
    dashboardPage.getUserCircle().click()
    cy.wait(1000)
    dashboardPage.getGRPDashbardLink().click()
})
//This is the add agenda function
Cypress.Commands.add("addAgenda", (agendaItem) => 
{
    createNewMeetingPage.getAddAgendaButton().click()
    createNewMeetingPage.getAgendaInputField().type(agendaItem)
    createNewMeetingPage.getAgendaSubmitButton().click()
})

//Select the desired meeting from Notice listing of todos করণীয়​
Cypress.Commands.add("selectMeetingFromTodos", (element) => 
{
    meetingTodosPage.getMeetingRow().each(($meeting, index, $list) => {
        const meetingName = $meeting.find('.cdk-column-meetingTitle').text()
        if(meetingName.includes(element))
        {
          $meeting.find('.cdk-column-actions > .mat-primary > .mat-button-wrapper > .mat-icon').click()
        }
    })
})

//Select the desired meeting from notice curculate on তালিকা page​
Cypress.Commands.add("selectMeetingFromList", (element) => 
{
    meetingListPage.getSelectMeeting().each(($meeting, index, $list) => {
        const meetingName = $meeting.text()
        if(meetingName.includes(element))
        {
          $meeting.click()
        }
    })
})

// This is the add attendee
Cypress.Commands.add("addAttendee", (attendeeType, attendee, office, department, designation) => 
{
    createNewMeetingPage.getAddAttendeeButton().click()                                         //সদস্য যোগ করুন button
    cy.wait(2000)
    createNewMeetingPage.getAttendeeTypeTab().contains(attendeeType).click()                    //Attendee tabs
    createNewMeetingPage.getAttendeeFilterButton().click()                                      //Filter icon on pop-over page
    createNewMeetingPage.getAttendeeOfficeFilterField().click()                                 // Office filter field (অফিস বাছাই করুন)
    createNewMeetingPage.getAttendeeOfficeDropDownItems().contains(office).click()
    createNewMeetingPage.getAttendeeDepartmentField().click()                                   // Department field বিভাগ 
    createNewMeetingPage.getAttendeeDepartmentDropDownItems().contains(department).click()
    createNewMeetingPage.getAttendeeDesignation().click()
    cy.wait(2000)
    createNewMeetingPage.getAttendeeDesignationDropDownItems().contains(designation).click()
    createNewMeetingPage.getAttendeeSearchButton().click()                                      // Search button 
    createNewMeetingPage.getAttendeeFilterButton().click()                                      //Filter icon
    createNewMeetingPage.getAttendeeNameFilter().type(attendee)                                 //Type name
    createNewMeetingPage.getAttendeeSelectCheckbox().click()                                    //Select attendee from the search result page
    createNewMeetingPage.getAttendeeSubmitButton().click()

})
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
