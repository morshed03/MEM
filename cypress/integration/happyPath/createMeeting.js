/// <reference types="Cypress" />
import DashboardPage from '../../support/pageObjects/DashboardPage'
import MeetingListPage from '../../support/pageObjects/MeetingListPage'
import CreateNewMeetingPage from '../../support/pageObjects/CreateNewMeetingPage'
import MeetingDetailsPage from '../../support/pageObjects/MeetingDetailsPage'
import GenerateNotice from '../../support/pageObjects/GenerateNotice'
import MeetingTodosPage from '../../support/pageObjects/MeetingTodosPage'

describe('Create Meeting Test Suite', function()
{
    beforeEach(function() 
    {
      cy.fixture('MEMTestData').then(function(data)
      {
        this.data = data
      })
      cy.visit(Cypress.env('url'))
    })
    

    const dashboardPage = new DashboardPage()
    const meetingListPage = new MeetingListPage()
    const createNewMeetingPage = new CreateNewMeetingPage()
    const meetingDetailsPage = new MeetingDetailsPage()
    const generateNotice = new GenerateNotice()
    const meetingTodosPage = new MeetingTodosPage()

    it('Create Meeting TC',function() 
    { 
        //Login 
        cy.login(this.data.userName, this.data.password)
        //goto MEM
        dashboardPage.getMEMAvatar().click()
        //mem-list তালিকা 
        meetingListPage.getListNavLink().click()
        cy.wait(2000)
               
        //create-meeting
        meetingListPage.getCreateNewButton().click()
        //goto-basic-info
        createNewMeetingPage.getBasicInfoTab().contains(this.data.basicInfoTab).click()
        //entry-basic-info
      /*  
        createNewMeetingPage.getMeetingTitleField().click().type(this.data.meetingName)
        createNewMeetingPage.getReferenceNoField().click().type(this.data.referenceNo)

        createNewMeetingPage.getMeetingTypeField().click()
        createNewMeetingPage.getMeetingDropDownItem().contains(this.data.meetingType).click()

        createNewMeetingPage.getMeetingRoomField().click()
        createNewMeetingPage.getMeetingDropDownItem().contains(this.data.meetingRoom).click()

        createNewMeetingPage.getMeetingDateCalendar().click()
        createNewMeetingPage.getMeetingCalendarYearView().click()
        createNewMeetingPage.getMeetingYear().contains(this.data.meetingYear).click()
        createNewMeetingPage.getMeetingMonth().contains(this.data.meetingMonth).click()
        createNewMeetingPage.getMeetingDate().contains(this.data.meetingDay).click()

        createNewMeetingPage.getMeetingStartTimeField().click()
        createNewMeetingPage.getMeetingStartTimeHour().contains(this.data.startTimeHour).click()
        createNewMeetingPage.getMeetingStartTimeMinute().contains(this.data.startTimeMinute).click({force: true})
        createNewMeetingPage.getMeetingStartTimeAMPM().contains(this.data.startTimeAmpm).click()
        createNewMeetingPage.getMeetingStartOKButton().contains('Ok').click()

        createNewMeetingPage.getMeetingEndTimeField().click()
        createNewMeetingPage.getMeetingEndTimeHour().contains(this.data.endTimeHour).click()
        cy.wait(3000)
        createNewMeetingPage.getMeetingEndTimeMinute().contains(this.data.endTimeMinute).click({force: true})
        createNewMeetingPage.getMeetingEndTimeAMPM().contains(this.data.endTimeAmpm).click()
        createNewMeetingPage.getMeetingEndOKButton().contains('Ok').click()
        
        //goto key personnel
        createNewMeetingPage.getKeyPersonTab().contains(this.data.keyPersonTab).click()

        //entry key personnel data
        createNewMeetingPage.getMemberSecretaryField().click().type(this.data.memberSecretaryName)
        createNewMeetingPage.getMemberSecretaryDropDownItem().contains(this.data.memberSecretaryWithDesignation).click()

        createNewMeetingPage.getChairpersonType().contains(this.data.chairpersonType).click()
        createNewMeetingPage.getChairpersonField().click().type(this.data.chairpersonName)
        createNewMeetingPage.getChairpersonDropDownItem().contains(this.data.chairpersonWithDesignation).click()

        createNewMeetingPage.getChiefGuestType().contains(this.data.chiefGuestType).click()
        createNewMeetingPage.getChiefGuestField().click().type(this.data.chiefGuestName)
        createNewMeetingPage.getChiefGuestDropDownItem().contains(this.data.chiefGuestWithDesignation).click()
        
       //goto agenda tab
       createNewMeetingPage.getAgendaTab().contains(this.data.agendaTab).click()
       //entry agenda
       this.data.agendaList.forEach(function(element) 
       {
        cy.addAgenda(element)
       });

       //goto Attachment Tab সংযুক্তি
       createNewMeetingPage.getAttachmentTab().contains(this.data.attachmentTab).click()
       cy.wait(3000)
       //entry attachment 
       createNewMeetingPage.getAddAttachmentButton().click()
       const fileName = 'TestFile.pdf';

        cy.fixture(fileName).then(fileContent => {
            createNewMeetingPage.getAttachmentUploadButton().upload({ fileContent, fileName, mimeType: 'application/json' });
        });
        createNewMeetingPage.getAttachmentSubmitButton().click()
        cy.wait(2000)
        createNewMeetingPage.getSaveMeetingButton().click()                 //Save the meeting
        cy.wait(5000)

        //goto-attendee
        meetingDetailsPage.getAttendeeTab().contains(this.data.attendeeTab).click()
        cy.wait(1000)

        //entry attendee
        meetingDetailsPage.getAddAttendeeButton().click()                                         //সদস্য যোগ করুন button
        cy.wait(2000)
        meetingDetailsPage.getAttendeeTypeTab().contains(this.data.attendeeTypeTab1).click()                    //Attendee tabs
        meetingDetailsPage.getAttendeeFilterButton().click()                                      //Filter icon on pop-over page
        meetingDetailsPage.getAttendeeOfficeFilterField().click()                                 // Office filter field (অফিস বাছাই করুন)
        meetingDetailsPage.getAttendeeOfficeDropDownItems().contains(this.data.attendeeOffice).click()
        meetingDetailsPage.getAttendeeDepartmentField().click()                                   // Department field বিভাগ 
        meetingDetailsPage.getAttendeeDepartmentDropDownItems().contains(this.data.attendeeDepartment).click()
        meetingDetailsPage.getAttendeeSearchButton().click()                                      // Search button 
        meetingDetailsPage.getAttendeeFilterButton().click()                                      //Filter icon
        meetingDetailsPage.getAllAttendeeCheckbox().click()                                       //Select attendee from the search result page
        meetingDetailsPage.getAttendeeSubmitButton().click()                                      // সদস্য হিসেবে অন্তর্ভুক্ত করুন button
        cy.wait(3000)
        meetingDetailsPage.getCommentButton().click()                                             // Comment button মন্তব্য plus icon
        meetingDetailsPage.getEntryCommentField().type(this.data.Comment).should('have.value', this.data.Comment)
        meetingDetailsPage.getSubmitCommentButton().click()                                       //Submit Comment from the (মন্তব্য যোগ করুন) pop-op 
        cy.wait(3000)
        meetingDetailsPage.getEditButton().click()                                                // সম্পাদনা করুন button
        meetingDetailsPage.getAcknowledgementCheckbox().click()                                  // অবগতি
        meetingDetailsPage.getNameInclusionCheckbox().click()                                     // নাম অন্তর্ভুক্তি
        meetingDetailsPage.getSignatoryCheckbox().click()                                         // কার্যবিবরণী সাক্ষরকারী
        meetingDetailsPage.getWorkingPaperCheckbox().click()                                      // কার্যপত্র
        meetingDetailsPage.getSaveButton().click()                                              //  সংরক্ষণ করুন
     
        //generate-notice
        cy.wait(2000)
        meetingDetailsPage.getActionButton().click()            //অ্যাকশনসমূহ
        generateNotice.getMakeNoticeIcon().click()          // নোটিশ তৈরি করুন
        cy.wait(2000)
        generateNotice.getTamplateField().click()           // টেমপ্লেট বাছাই করুন
        generateNotice.getTamplateDropDown().contains(this.data.noticeTemplate).click() //Select tamplate
        cy.wait(4000)
        generateNotice.getTamplateSubmitButton().click()
        generateNotice.getTamplateSendToApproveButton().click()
      
        //Move to dashboard 
        cy.GRPDashboard()
        //Logout 
        cy.logout()


        //Approve the Notice as member Secretary
        //Login 
        cy.login(this.data.memberSecretaryUserName, this.data.memberSecretaryPassword)
        //goto MEM
        cy.wait(3000)
        dashboardPage.getMEMAvatar().click()
        cy.wait(1000)
        meetingTodosPage.getTodosLink().click()
        cy.wait(2000)
        meetingTodosPage.getNoticeLink().click()      //নোটিশ tab
        cy.selectMeetingFromTodos(this.data.meetingName1)
        cy.wait(3000)
        meetingTodosPage.getCommentField().click().type(this.data.approveComment)
        meetingTodosPage.getYesButton().click()
        cy.wait(1000)
        //Move to dashboard 
        cy.GRPDashboard()
        //Logout 
        cy.logout()
       

        //Notice circulate as Meeting Creator
        //Login 
        cy.login(this.data.userName, this.data.password)
        cy.wait(2000)
        //goto MEM
        dashboardPage.getMEMAvatar().click()
        cy.wait(1000)
        //mem-list তালিকা 
        meetingListPage.getListNavLink().click()
        cy.wait(2000)

        cy.selectMeetingFromList(this.data.meetingName1)
        cy.wait(2000)
        meetingDetailsPage.getActionButton().click()
        cy.wait(1000)
        meetingDetailsPage.getNoticeCirculate().click()
      */  cy.wait(2000)
        //Move to dashboard 
        cy.GRPDashboard()
        //Logout 
        cy.logout()
/*
        //সাড়া Confirm attend the meeting as a participant
        //Login 
        cy.login(this.data.secretaryUserName, this.data.secretaryPassword)
        cy.wait(2000)
        //goto MEM
        dashboardPage.getMEMAvatar().click()
        cy.wait(2000)
        //Todos list করণীয়​ 
        meetingTodosPage.getTodosLink().click()
        cy.wait(2000)
        meetingTodosPage.getRespondTab().click()
        cy.selectMeetingFromRespond(this.data.meetingName1)
        cy.wait(1000)
        meetingTodosPage.getYesButton().click()
        cy.wait(2000)
        //Move to dashboard 
         cy.GRPDashboard()
         //Logout 
         cy.logout()

        //সাড়া Confirm attend the meeting as a participant
        //Login 
        cy.login(this.data.memberSecretaryUserName, this.data.memberSecretaryPassword)
        cy.wait(2000)
        //goto MEM
        dashboardPage.getMEMAvatar().click()
        cy.wait(2000)
        //Todos list করণীয়​ 
        meetingTodosPage.getTodosLink().click()
        cy.wait(2000)
        meetingTodosPage.getRespondTab().click()
        cy.selectMeetingFromRespond(this.data.meetingName1)
        cy.wait(1000)
        meetingTodosPage.getYesButton().click()
        cy.wait(2000)
        //Move to dashboard 
         cy.GRPDashboard()
         //Logout 
         cy.logout()
    */
        //উপস্থিত নিন as a meeting creator
        //Login 
        cy.login(this.data.userName, this.data.password)
        cy.wait(2000)
        //goto MEM
        dashboardPage.getMEMAvatar().click()
        cy.wait(2000)
        //mem-list তালিকা 
        meetingListPage.getListNavLink().click()
        cy.wait(2000)
        //meetingListPage.getSearchField().click().type(this.data.meetingName1)
        //meetingListPage.getSearchMagnifierIcon().click()
        cy.wait(1000)
        //cy.selectMeetingFromList(this.data.meetingName1)
        cy.get(':nth-child(2) > .cdk-column-meetingTitle').click()
        cy.wait(2000)
        meetingDetailsPage.getAttendeeTab().contains(this.data.attendeeTab).click()
        cy.wait(3000)
        meetingDetailsPage.getActionButton().click()
        cy.wait(1000)
        meetingDetailsPage.getPresentIcon().click()
        meetingDetailsPage.getPresenceToggle().click()
        cy.wait(2000)
        cy.selectAbsenceAttendee(this.data.absenceAttendee)
        


    })
})
  