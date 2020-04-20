// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
// File upload
import 'cypress-file-upload';
// Import page object import
import LoginPage from '../support/pageObjects/LoginPage'
import DashboardPage from '../support/pageObjects/DashboardPage'
import CreateNewMeetingPage from '../support/pageObjects/CreateNewMeetingPage'
import MeetingTodosPage from '../support/pageObjects/MeetingTodosPage'
import MeetingListPage from '../support/pageObjects/MeetingListPage'
import MeetingDetailsPage from '../support/pageObjects/MeetingDetailsPage'
import GroupPage from '../support/pageObjects/GroupPage'
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

// -- This is the create page object --
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const createNewMeetingPage = new CreateNewMeetingPage()
const meetingTodosPage = new MeetingTodosPage()
const meetingListPage = new MeetingListPage()
const meetingDetailsPage = new MeetingDetailsPage()
const groupPage = new GroupPage()

//Login method
Cypress.Commands.add("login", (userName, password) => 
{
    loginPage.getUserNameInputBox().type(userName).should('have.value', userName)
    loginPage.getPasswordInputBox().type(password).should('have.value', password)
    loginPage.getEnterButton().click().should('have.text', 'প্রবেশ করুন')
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

//Select the desired meeting from Respond (সাড়া) listing of todos করণীয়​
Cypress.Commands.add("selectMeetingFromRespond", (element) => 
{
    meetingTodosPage.getMeetingRow().each(($meeting, index, $list) => {
        const meetingName = $meeting.find('.cdk-column-meetingTitle').text()
        if(meetingName.includes(element))
        {
          $meeting.find('.cdk-column-actions > .mat-primary > .mat-button-wrapper > .mat-icon').click()
        }
    })
})

//Find অনুপস্থিতি attendee 
Cypress.Commands.add("selectAbsenceAttendee", (element) => 
{
    meetingDetailsPage.getAttendeeRow().each(($attendee, index, $list) => {
        const AttendeeName = $attendee.find('td.mat-column-member').text()
        if(AttendeeName.includes(element))
        {
          $attendee.find('td > mat-slide-toggle > label').click()
        }
    })
})

// Different Honorarium for a specific attendee 
Cypress.Commands.add("selectDifferentHonorariumAttendee", (dAttendeeName, dAmount) => 
{
    meetingDetailsPage.getAttendeeRow().each(($dattendee, index, $list) => {
        const AttendeeName = $dattendee.find('td.mat-column-member').text()
        if(AttendeeName.includes(dAttendeeName))
        {
          $dattendee.find('input[type="number"]').click().type(dAmount)  //সম্মানী input box
          //cy.wait(1000)
          //$attendee.find('td.cdk-column-honorarium > mat-form-field > div > div > div > input[type="number"]').type('5000')
        }
        //$attendee.find('td.cdk-column-honorarium > mat-form-field > div > div > div > input[type="number"]').type('{del}{selectall}{backspace}')
    })
})

//This is the add meeting note function
Cypress.Commands.add("addMeetingNote", (agenda, spicker, note) => 
{
    meetingDetailsPage.getAddNotePlusIcon().click()
    meetingDetailsPage.getSelectAgendaField().click()
    meetingDetailsPage.getSelectDropDownItems().contains(agenda).click()
    meetingDetailsPage.getSpickerField().click()
    meetingDetailsPage.getSelectDropDownItems().contains(spicker).click()
    meetingDetailsPage.getAddNotesField().click().type(note)
    meetingDetailsPage.getSaveNotesButton().click()
})

//This is the add meeting resolution function
Cypress.Commands.add("addMeetingResolution", (agenda, discussion, decision) => 
{
    meetingDetailsPage.getAddResolutionPlusIcon().click()
    meetingDetailsPage.getAddAgendaInputField().click()
    meetingDetailsPage.getSelectDropDownItems().contains(agenda).click()
    meetingDetailsPage.getAddDiscussionInputField().click().type(discussion)
    meetingDetailsPage.getAddDessionInputField().click().type(decision)
    meetingDetailsPage.getAddDiscussionSaveButton().click()

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

//Select গ্রুপের নাম from the listing

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
