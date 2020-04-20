/// <reference types="Cypress" />

import DashboardPage from '../../support/pageObjects/DashboardPage'
import LeftNavMenu from '../../support/pageObjects/LeftNavMenu'
import MeetingListPage from '../../support/pageObjects/MeetingListPage'
import CreateNewMeetingPage from '../../support/pageObjects/CreateNewMeetingPage'
import MeetingDetailsPage from '../../support/pageObjects/MeetingDetailsPage'
import GenerateNotice from '../../support/pageObjects/GenerateNotice'
import MeetingTodosPage from '../../support/pageObjects/MeetingTodosPage'
import GuestSettingPage from '../../support/pageObjects/GuestSettingPage'
import GroupPage from '../../support/pageObjects/GroupPage'

//This is before Suite 
beforeEach(function() 
{
    cy.fixture('MEMTestData').then(function(data)
    {
        this.data = data
    })
})

describe('MEM Regression Test Suite', function()
{
    beforeEach(function() 
    {
        cy.visit(Cypress.env('url'))
    })
/*
    afterEach(function()
    {
        //Move to dashboard 
        cy.GRPDashboard()
        cy.wait(1000)
        //Logout 
        cy.logout()
    })
    
*/    
    const dashboardPage = new DashboardPage()
    const leftNavMenu = new LeftNavMenu()
    const meetingListPage = new MeetingListPage()
    const createNewMeetingPage = new CreateNewMeetingPage()
    const meetingDetailsPage = new MeetingDetailsPage()
    const generateNotice = new GenerateNotice()
    const meetingTodosPage = new MeetingTodosPage()
    const guestSettingPage = new GuestSettingPage()
    const groupPage = new GroupPage()

    //অতিথি page (তালিকা and সেটিংস​) tests --------------------------------------------------------
    it.only('Create a Office TC',function() 
    { 
        cy.login(this.data.userName, this.data.password)    //Login 
        cy.wait(3000)
        
        dashboardPage.getMEMAvatar().click()    //goto MEM
        cy.wait(2000)
        
        leftNavMenu.getGuestMenu().should('include.text', 'অতিথি').click()
        cy.wait(1000)
        leftNavMenu.getGuesSettingMenu().should('include.text', 'সেটিংস').click()
        cy.wait(3000)

        guestSettingPage.getActionsButton().click()
        cy.wait(1000)
        guestSettingPage.getAddOfficeButton().click()

        guestSettingPage.getTitle().should('include.text', 'অফিস যোগ করুন')
        guestSettingPage.getBanglaNameField().should('have.attr', 'maxlength', '128').type(this.data.officeBanglaName).should('have.value', this.data.officeBanglaName)
        cy.wait(1000)
        guestSettingPage.getEnglishaNameField().should('have.attr', 'maxlength', '128').type(this.data.officeEnglishName).should('have.value', this.data.officeEnglishName)
        cy.wait(1000)
        guestSettingPage.getSaveButton().should('include.text', 'সংরক্ষণ করুন')
    })

    it(' TC',function() 
    { 
        cy.login(this.data.userName, this.data.password)    //Login 
        cy.wait(3000)
        
        dashboardPage.getMEMAvatar().click()    //goto MEM
        cy.wait(2000)
        
        leftNavMenu.getGuestMenu().should('include.text', 'অতিথি').click()
        cy.wait(1000)
        leftNavMenu.getGuestListMenu().should('include.text', 'তালিকা').click()
        cy.wait(2000)
    })


    //গ্রুপ page tests --------------------------------------------------------
    it('Create a Group TC',function() 
    { 
        cy.login(this.data.userName, this.data.password)    //Login 
        cy.wait(3000)
        
        dashboardPage.getMEMAvatar().click()    //goto MEM
        cy.wait(2000)
        
        leftNavMenu.getGroupMenu().should('include.text', 'গ্রুপ').click()
        cy.wait(3000)

        groupPage.getAddNewGuestButton().should('have.class', 'btn-primary').click()
        cy.wait(1000)
        groupPage.getTitle().should('include.text', 'গ্রুপের তথ্য লিখুন')
        groupPage.getGroupNameField().click().type(this.data.groupName).should('have.value', this.data.groupName)
        cy.wait(1000)
        groupPage.getDescriptionNameField().click().type(this.data.groupDescription).should('have.value', this.data.groupDescription)
        cy.wait(1000)
        groupPage.getSaveButton().should('include.text', 'সংরক্ষণ করুন').click()
        cy.wait(3000)
    })
    it('Perform Group Search TC',function() 
    { 
        cy.login(this.data.userName, this.data.password)    //Login 
        cy.wait(3000)
        
        dashboardPage.getMEMAvatar().click()    //goto MEM
        cy.wait(2000)
        
        leftNavMenu.getGroupMenu().should('include.text', 'গ্রুপ').click()
        cy.wait(3000)

        groupPage.getFilterInputField().click().type(this.data.groupName).should('have.value', this.data.groupName) //Filter by group name
        cy.wait(3000)
        groupPage.getFilterInputField().type('{del}{selectall}{backspace}') //Delete or reset inputed text
        cy.wait(3000)

        groupPage.getFilterInputField().click().type(this.data.groupDescription).should('have.value', this.data.groupDescription) //Filter by group description
        cy.wait(3000)
        groupPage.getFilterInputField().type('{del}{selectall}{backspace}') //Delete or reset inputed text
        cy.wait(3000)

        groupPage.getFilterButton().should('have.class', 'btn-secondary').click()
        cy.wait(1000)

        groupPage.getGroupNameSearchField().click().type(this.data.groupName).should('have.value', this.data.groupName)
        cy.wait(1000)
        groupPage.getFilterSearchField().should('have.class', 'btn-primary').click()
        cy.wait(3000)
        groupPage.getFilterResetField().should('have.class', 'btn-filter-reset').click()
        cy.wait(3000)
        groupPage.getFilterSearchField().click()    //Its bug, no need to hard refresh
        cy.wait(3000)

        groupPage.getGroupDescriptionSearchField().click().type(this.data.groupDescription).should('have.value', this.data.groupDescription)
        cy.wait(1000)
        groupPage.getFilterSearchField().should('have.class', 'btn-primary').click()
        cy.wait(3000)
        groupPage.getFilterResetField().should('have.class', 'btn-filter-reset').click()
        cy.wait(3000)
        groupPage.getFilterSearchField().click()    //Its bug, no need to hard refresh
        cy.wait(3000)
    })
    it('Add members on a Group TC',function() 
    { 
        cy.login(this.data.userName, this.data.password)    //Login 
        cy.wait(3000)
        
        dashboardPage.getMEMAvatar().click()    //goto MEM
        cy.wait(2000)
        
        leftNavMenu.getGroupMenu().should('include.text', 'গ্রুপ').click()    //Left menu
        cy.wait(3000)

        groupPage.getTableRow().each(($el, index, $list) =>     //Clicks the desired group name 
        {
            const textVeg=$el.find('td.mat-column-groupName').text()
            if(textVeg.includes(this.data.groupName))
            {
                $el.click()
            }
        })
        cy.wait(2000)
        groupPage.getAddMemberPlusButton().should('have.class', 'btn-primary').click()
        cy.wait(3000)
        //The add member pop-up same as meeting details, so re-use the methods
        meetingDetailsPage.getAttendeeTypeTab().contains(this.data.attendeeTypeTab1).click()
        meetingDetailsPage.getAttendeeFilterButton().should('have.class', 'btn-secondary').click()
        meetingDetailsPage.getAttendeeOfficeFilterField().click()       // Office filter field (অফিস বাছাই করুন)
        meetingDetailsPage.getAttendeeOfficeDropDownItems().contains(this.data.attendeeOffice).click()
        cy.wait(2000)
        meetingDetailsPage.getAttendeeDepartmentField().click()          // Department field বিভাগ 
        meetingDetailsPage.getAttendeeDepartmentDropDownItems().contains(this.data.attendeeDepartment).click()
        cy.wait(2000)
        meetingDetailsPage.getAttendeeSearchButton().click()              // Search button
        cy.wait(2000) 
        meetingDetailsPage.getAttendeeFilterButton().click()              //Filter icon
        cy.wait(1000)
        groupPage.getAllAttendeeCheckbox().click()               //Select attendee from the search result page
        cy.wait(2000)
        meetingDetailsPage.getAttendeeSubmitButton().click()              // সদস্য হিসেবে অন্তর্ভুক্ত করুন button
        cy.wait(4000)
        
    })
    it('Delete a members from a Group TC',function() 
    { 
        cy.login(this.data.userName, this.data.password)    //Login 
        cy.wait(3000)
        
        dashboardPage.getMEMAvatar().click()    //goto MEM
        cy.wait(2000)
        
        leftNavMenu.getGroupMenu().should('include.text', 'গ্রুপ').click()    //Left menu
        cy.wait(3000)

        groupPage.getTableRow().each(($el, index, $list) =>     //Clicks the desired group name 
        {
            const textGroupName=$el.find('td.mat-column-groupName').text()
            if(textGroupName.includes(this.data.groupName))
            {
                $el.click()
            }
        })
        cy.wait(2000)
        groupPage.getGroupMemberDeleteButton().should('have.class', 'btn-danger').click()
        cy.wait(2000)
        groupPage.getGroupMemberDeletePopupHeader().should('include.text', 'নিশ্চিত করুন')
        groupPage.getGroupMemberDeletePopupYesButton().should('include.text', 'হ্যাঁ').click()
    })
    it('Edit a Group TC',function() 
    { 
        cy.login(this.data.userName, this.data.password)    //Login 
        cy.wait(3000)
        
        dashboardPage.getMEMAvatar().click()    //goto MEM
        cy.wait(2000)
        
        leftNavMenu.getGroupMenu().should('include.text', 'গ্রুপ').click()    //Left menu
        cy.wait(3000)

        groupPage.getTableRow().each(($el, index, $list) =>     //Clicks the desired group name 
        {
            const textGroupName=$el.find('td.mat-column-groupName').text()
            if(textGroupName.includes(this.data.groupName))
            {
                $el.find('td > a .fa-edit').click()
            }
        }) 
        cy.wait(2000)
        groupPage.getTitle().should('include.text', 'গ্রুপের তথ্য সম্পাদনকরণ')
        cy.wait(2000)
        groupPage.getGroupNameField().type('{del}{selectall}{backspace}').type(this.data.groupNameUpdate).should('have.value', this.data.groupNameUpdate)
        cy.wait(2000)
        groupPage.getDescriptionNameField().type('{del}{selectall}{backspace}').type(this.data.groupDescriptionUpdate).should('have.value', this.data.groupDescriptionUpdate)
        cy.wait(2000)
        groupPage.getSaveButton().should('include.text', 'সংরক্ষণ করুন').click()
    })
    it('Delete a Group TC',function() 
    { 
        cy.login(this.data.userName, this.data.password)    //Login 
        cy.wait(3000)
        
        dashboardPage.getMEMAvatar().click()    //goto MEM
        cy.wait(2000)
        
        leftNavMenu.getGroupMenu().should('include.text', 'গ্রুপ').click()    //Left menu
        cy.wait(3000)

        groupPage.getTableRow().each(($el, index, $list) =>     //Clicks the desired group name 
        {
            const textGroupName=$el.find('td.mat-column-groupName').text()
            if(textGroupName.includes(this.data.groupName))
            {
                $el.find('td > a .fa-trash').click()
            }
        }) 
        cy.wait(2000)
        groupPage.getGroupMemberDeletePopupHeader().should('include.text', 'নিশ্চিত করুন')
        groupPage.getGroupMemberDeletePopupYesButton().should('include.text', 'হ্যাঁ').click()
    })

    //রিপোর্ট page tests --------------------------------------------------------

})