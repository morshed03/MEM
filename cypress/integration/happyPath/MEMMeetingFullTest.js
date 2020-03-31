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
        cy.wait(3000)
        //goto MEM
        dashboardPage.getMEMAvatar().click()
        cy.wait(2000)
        //mem-list তালিকা page
        meetingListPage.getListNavLink().click()
        cy.wait(3000)
               
        //create-meeting
        meetingListPage.getCreateNewButton().click()
        cy.wait(1000)
        //goto-basic-info
        createNewMeetingPage.getBasicInfoTab().contains(this.data.basicInfoTab).click()
        cy.wait(1000)

        //entry-basic-info
        createNewMeetingPage.getMeetingTitleField().click().type(this.data.meetingName)
        cy.wait(1000)
        createNewMeetingPage.getReferenceNoField().click().type(this.data.referenceNo)
        cy.wait(1000)

        createNewMeetingPage.getMeetingTypeField().click()
        createNewMeetingPage.getMeetingDropDownItem().contains(this.data.meetingType).click()
        cy.wait(1000)

        createNewMeetingPage.getMeetingRoomField().click()
        createNewMeetingPage.getMeetingDropDownItem().contains(this.data.meetingRoom).click()
        cy.wait(1000)

        createNewMeetingPage.getMeetingDateCalendar().click()
        createNewMeetingPage.getMeetingCalendarYearView().click()
        createNewMeetingPage.getMeetingYear().contains(this.data.meetingYear).click()
        createNewMeetingPage.getMeetingMonth().contains(this.data.meetingMonth).click()
        createNewMeetingPage.getMeetingDate().contains(this.data.meetingDay).click()
        cy.wait(1000)

        createNewMeetingPage.getMeetingStartTimeField().click()
        createNewMeetingPage.getMeetingStartTimeHour().contains(this.data.startTimeHour).click()
        cy.wait(2000)
        createNewMeetingPage.getMeetingStartTimeMinute().contains(this.data.startTimeMinute).click({force: true})
        createNewMeetingPage.getMeetingStartTimeAMPM().contains(this.data.startTimeAmpm).click()
        createNewMeetingPage.getMeetingStartOKButton().contains('Ok').click()
        cy.wait(1000)

        createNewMeetingPage.getMeetingEndTimeField().click()
        createNewMeetingPage.getMeetingEndTimeHour().contains(this.data.endTimeHour).click()
        cy.wait(3000)
        createNewMeetingPage.getMeetingEndTimeMinute().contains(this.data.endTimeMinute).click({force: true})
        createNewMeetingPage.getMeetingEndTimeAMPM().contains(this.data.endTimeAmpm).click()
        createNewMeetingPage.getMeetingEndOKButton().contains('Ok').click()
        cy.wait(1000)
        
        //goto key personnel
        createNewMeetingPage.getKeyPersonTab().contains(this.data.keyPersonTab).click()
        cy.wait(1000)

        //entry key personnel data
        createNewMeetingPage.getMemberSecretaryField().click().type(this.data.memberSecretaryName)
        createNewMeetingPage.getMemberSecretaryDropDownItem().contains(this.data.memberSecretaryWithDesignation).click()
        cy.wait(1000)

        createNewMeetingPage.getChairpersonType().contains(this.data.chairpersonType).click()
        createNewMeetingPage.getChairpersonField().click().type(this.data.chairpersonName)
        createNewMeetingPage.getChairpersonDropDownItem().contains(this.data.chairpersonWithDesignation).click()
        cy.wait(1000)

        createNewMeetingPage.getChiefGuestType().contains(this.data.chiefGuestType).click()
        createNewMeetingPage.getChiefGuestField().click().type(this.data.chiefGuestName)
        createNewMeetingPage.getChiefGuestDropDownItem().contains(this.data.chiefGuestWithDesignation).click()
        cy.wait(1000)
        
       //goto agenda tab
       createNewMeetingPage.getAgendaTab().contains(this.data.agendaTab).click()
       cy.wait(1000)
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
       cy.wait(1000)
       const fileName = 'TestFile.pdf';

        cy.fixture(fileName).then(fileContent => {
            createNewMeetingPage.getAttachmentUploadButton().upload({ fileContent, fileName, mimeType: 'application/json' });
        });
        cy.wait(1000)
        createNewMeetingPage.getAttachmentSubmitButton().click()
        cy.wait(2000)
        createNewMeetingPage.getSaveMeetingButton().click()                 //Save the meeting
        cy.wait(5000)

        //cy.xpath('/html/body/app-dashboard/div/main/div/ng-component/div/div/table/tbody/tr[1]/td[2]').click()

        //goto-attendee
        meetingDetailsPage.getAttendeeTab().contains(this.data.attendeeTab).click()
        cy.wait(2000)

        //entry attendee
        meetingDetailsPage.getAddAttendeeButton().click()              //সদস্য যোগ করুন button
        cy.wait(4000)
        meetingDetailsPage.getAttendeeTypeTab().contains(this.data.attendeeTypeTab1).click()          //Attendee tabs
        meetingDetailsPage.getAttendeeFilterButton().click()            //Filter icon on pop-over page
        cy.wait(1000)
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
        meetingDetailsPage.getAllAttendeeCheckbox().click()               //Select attendee from the search result page
        cy.wait(2000)
        meetingDetailsPage.getAttendeeSubmitButton().click()              // সদস্য হিসেবে অন্তর্ভুক্ত করুন button
        cy.wait(4000)
        meetingDetailsPage.getCommentButton().click()                     // Comment button মন্তব্য plus icon
        cy.wait(1000)
        meetingDetailsPage.getEntryCommentField().type(this.data.Comment).should('have.value', this.data.Comment)
        meetingDetailsPage.getSubmitCommentButton().click()               //Submit Comment from the (মন্তব্য যোগ করুন) pop-op 
        cy.wait(3500)
        meetingDetailsPage.getEditButton().click()                         // সম্পাদনা করুন button
        cy.wait(2000)
        meetingDetailsPage.getAcknowledgementCheckbox().click()            // অবগতি
        cy.wait(1500)
        meetingDetailsPage.getNameInclusionCheckbox().click()              // নাম অন্তর্ভুক্তি
        cy.wait(1500)
        meetingDetailsPage.getSignatoryCheckbox().click()                  // কার্যবিবরণী সাক্ষরকারী
        cy.wait(1500)
        meetingDetailsPage.getWorkingPaperCheckbox().click()               // কার্যপত্র
        cy.wait(1500)
        meetingDetailsPage.getSaveButton().click()                          //  সংরক্ষণ করুন
        cy.wait(3000)

        //generate-notice 
        meetingDetailsPage.getActionButton().click()            //অ্যাকশনসমূহ
        cy.wait(1500)
        generateNotice.getMakeNoticeIcon().click()          // নোটিশ তৈরি করুন
        cy.wait(4000)
        generateNotice.getTamplateField().click()           // টেমপ্লেট বাছাই করুন
        generateNotice.getTamplateDropDown().contains(this.data.noticeTemplate).click() //Select tamplate
        cy.wait(2000)
        generateNotice.getTamplateSubmitButton().click()
        cy.wait(5000)
        generateNotice.getTamplateSendToApproveButton().click()
        cy.wait(6000)
        //Move to dashboard 
        cy.GRPDashboard()
        cy.wait(1000)
        //Logout 
        cy.logout()


        //Approve the Notice as member Secretary
        //Login 
        cy.login(this.data.memberSecretaryUserName, this.data.memberSecretaryPassword)
        cy.wait(3000)
        //goto MEM
        dashboardPage.getMEMAvatar().click()
        cy.wait(3000)
        meetingTodosPage.getTodosLink().click()
        cy.wait(3000)
        meetingTodosPage.getNoticeLink().click()      //নোটিশ tab
        cy.wait(2000)
        cy.selectMeetingFromTodos(this.data.meetingName)
        cy.wait(3000)
        meetingTodosPage.getCommentField().click().type(this.data.approveComment)
        meetingTodosPage.getYesButton().click()
        cy.wait(5000)
        //Move to dashboard 
        cy.GRPDashboard()
        cy.wait(1000)
        //Logout 
        cy.logout()
       

        //Notice circulate as Meeting Creator
        //Login 
        cy.login(this.data.userName, this.data.password)
        cy.wait(3000)
        //goto MEM
        dashboardPage.getMEMAvatar().click()
        cy.wait(3000)
        //mem-list তালিকা 
        meetingListPage.getListNavLink().click()
        cy.wait(5000)

        cy.selectMeetingFromList(this.data.meetingName)
        cy.wait(2000)
        meetingDetailsPage.getActionButton().click()
        cy.wait(1000)
        meetingDetailsPage.getNoticeCirculate().click()
        cy.wait(5000)
        //Move to dashboard 
        cy.GRPDashboard()
        cy.wait(1000)
        //Logout 
        cy.logout()

    /*    
        //সাড়া Confirm attend the meeting as a participant
        //Login 
        cy.login(this.data.secretaryUserName, this.data.secretaryPassword)
        cy.wait(3000)
        //goto MEM
        dashboardPage.getMEMAvatar().click()
        cy.wait(2000)
        //Todos list করণীয়​ 
        meetingTodosPage.getTodosLink().click()
        cy.wait(2000)
        meetingTodosPage.getRespondTab().click()
        cy.selectMeetingFromRespond(this.data.meetingName)
        cy.wait(1000)
        meetingTodosPage.getYesButton().click()
        cy.wait(5000)
        //Move to dashboard 
        cy.GRPDashboard()
        cy.wait(1000)
        //Logout 
        cy.logout()

        //সাড়া Confirm attend the meeting as a participant
        //Login 
        cy.login(this.data.memberSecretaryUserName, this.data.memberSecretaryPassword)
        cy.wait(3000)
        //goto MEM
        dashboardPage.getMEMAvatar().click()
        cy.wait(2000)
        //Todos list করণীয়​ 
        meetingTodosPage.getTodosLink().click()
        cy.wait(2000)
        meetingTodosPage.getRespondTab().click()
        cy.selectMeetingFromRespond(this.data.meetingName)
        cy.wait(1000)
        meetingTodosPage.getYesButton().click()
        cy.wait(5000)
        //Move to dashboard 
        cy.GRPDashboard()
        cy.wait(1000)
        //Logout 
        cy.logout()
    */

        //উপস্থিত নিন as a meeting creator
        //Login 
        cy.login(this.data.userName, this.data.password)
        cy.wait(3000)
        //goto MEM
        dashboardPage.getMEMAvatar().click()
        cy.wait(3000)
        //mem-list তালিকা 
        meetingListPage.getListNavLink().click()
        cy.wait(5000)
        meetingListPage.getSearchField().click().type(this.data.meetingName)
        meetingListPage.getSearchMagnifierIcon().click()
        cy.wait(1000)
        cy.selectMeetingFromList(this.data.meetingName)
        //cy.get(':nth-child(2) > .cdk-column-meetingTitle').click()
        cy.wait(2000)
        meetingDetailsPage.getAttendeeTab().contains(this.data.attendeeTab).click()
        cy.wait(3000)
        meetingDetailsPage.getActionButton().click()
        cy.wait(1000)
        meetingDetailsPage.getPresentIcon().click()
        cy.wait(2000)
        meetingDetailsPage.getPresenceToggle().click()
        cy.wait(2000)
        cy.selectAbsenceAttendee(this.data.absenceAttendee)
        cy.wait(1000)
        meetingDetailsPage.getDefaultHonorariumField().click().type(this.data.defaultHonorarium)
        cy.wait(1000)

      /*  this.data.differentHonorarium.forEach(function(element) 
        {
          cy.selectDifferentHonorariumAttendee(element)
        });
      
        //meetingDetailsPage.getPageHeader().click()
      */  
        meetingDetailsPage.getHonorariumField().type('{del}{selectall}{backspace}').type(this.data.differentHonorariumAttendeeAmount)
        cy.wait(3000)
        meetingDetailsPage.getHonorariumSaveButton().click()
        cy.wait(3000)
        meetingDetailsPage.getHonorariumCloseButton().click()

        //Document sheet নথি পত্র
        meetingDetailsPage.getDocumentSheetTab().contains(this.data.documentSheetTab).click()
        cy.wait(1500)
        meetingDetailsPage.getDocumentSheetRows().contains(this.data.meetingNotesRow).click()
        cy.wait(2000)
        cy.addMeetingNote(this.data.agenda1, this.data.spicker1, this.data.note1)
        cy.wait(2000)
        cy.addMeetingNote(this.data.agenda2, this.data.spicker2, this.data.note2)
        cy.wait(2000)
        cy.addMeetingNote(this.data.agenda3, this.data.spicker3, this.data.note3)
       
        meetingDetailsPage.getcollapseButton().contains(this.data.meetingNotesRow).click()
        cy.wait(3000)
      
        //agenda-followup (resolution) কার্যবিবরণী 
        //meetingDetailsPage.getDocumentSheetTab().contains(this.data.documentSheetTab).click()
        meetingDetailsPage.getResolutionRow().click()
        cy.wait(2000)
        cy.addMeetingResolution(this.data.agenda1, this.data.discussion1, this.data.decision1)
        cy.wait(2000)
        //cy.addMeetingResolution(this.data.agenda2, this.data.discussion2, this.data.decision2)
        //cy.wait(2000)
        cy.addMeetingResolution(this.data.agenda7, this.data.discussion3, this.data.decision3)
        cy.wait(2000)
        cy.addMeetingResolution(this.data.agenda7, this.data.discussion4, this.data.decision4)
        cy.wait(2000)
        cy.addMeetingResolution(this.data.agenda7, this.data.discussion5, this.data.decision5)
        cy.wait(2000)
        cy.addMeetingResolution(this.data.agenda7, this.data.discussion6, this.data.decision6)
        cy.wait(2000)
        cy.addMeetingResolution(this.data.agenda7, this.data.discussion7, this.data.decision7)
        cy.wait(2000)
        cy.addMeetingResolution(this.data.agenda7, this.data.discussion8, this.data.decision8)
        cy.wait(2000)
        cy.addMeetingResolution(this.data.agenda7, this.data.discussion9, this.data.decision9)
        cy.wait(2000)
        cy.addMeetingResolution(this.data.agenda7, this.data.discussion10, this.data.decision10)
        cy.wait(2000)
        cy.addMeetingResolution(this.data.agenda7, this.data.discussion11, this.data.decision11)
        cy.wait(2000)
        meetingDetailsPage.getcollapseButton().contains(this.data.resolution).click()
        cy.wait(5000)
        //Move to dashboard 
        cy.GRPDashboard()
        cy.wait(1000)
        //Logout 
        cy.logout()


        //কার্যবিবরণী preparation
        //Login 
        cy.login(this.data.userName, this.data.password)
        cy.wait(3000)
        //goto MEM
        dashboardPage.getMEMAvatar().click()
        cy.wait(2000)
        //mem-list তালিকা 
        meetingListPage.getListNavLink().click()
        cy.wait(6000)
        meetingListPage.getSearchField().click().type(this.data.meetingName)
        meetingListPage.getSearchMagnifierIcon().click()
        cy.wait(1000)
        cy.selectMeetingFromList(this.data.meetingName)
        cy.wait(2000)
        //cy.get(':nth-child(2) > .cdk-column-meetingTitle').click()

        meetingDetailsPage.getActionButton().click()
        cy.wait(1000)
        meetingDetailsPage.getWorkingPaperIcon().click()
        cy.wait(2000)
        meetingDetailsPage.getWorkingPaperTemplateField().click()
        meetingDetailsPage.getSelectDropDownItems().contains(this.data.workingPaperTemplate).click()
        cy.wait(1000)
        meetingDetailsPage.getWorkingPaperReferenceNoField().click().type(this.data.referenceNo)
        meetingDetailsPage.getWorkingPaperSaveButton().click()
        cy.wait(5000)
        meetingDetailsPage.getWorkingPaperApprovalButton().click()
        cy.wait(5000)
      
        //Move to dashboard 
        cy.GRPDashboard()
        cy.wait(1000)
        //Logout 
        cy.logout()


        //Approve the working paper as a member Secretary
        //Login 
        cy.login(this.data.memberSecretaryUserName, this.data.memberSecretaryPassword)
        cy.wait(3000)
        //goto MEM
        dashboardPage.getMEMAvatar().click()
        cy.wait(3000)
        meetingTodosPage.getTodosLink().click()
        cy.wait(2000)
        meetingTodosPage.getWorkingPaperink().click()      //নোটিশ tab
        cy.wait(1500)
        cy.selectMeetingFromTodos(this.data.meetingName)
        cy.wait(3000)
        meetingTodosPage.getWorkingPaperCommentField().click().type(this.data.workingPaperComment)
        meetingTodosPage.getYesButton().click()
        cy.wait(5000)
        //Move to dashboard 
        cy.GRPDashboard()
        cy.wait(1000)
        //Logout 
        cy.logout()
    

        //কার্যবিবরণী প্রচার করুন  as a meeting creator
        //Login 
        cy.login(this.data.userName, this.data.password)
        cy.wait(3000)
        //goto MEM
        dashboardPage.getMEMAvatar().click()
        cy.wait(3000)
        //mem-list তালিকা 
        meetingListPage.getListNavLink().click()
        cy.wait(6000)
        meetingListPage.getSearchField().click().type(this.data.meetingName)
        meetingListPage.getSearchMagnifierIcon().click()
        cy.wait(1000)
        cy.selectMeetingFromList(this.data.meetingName)
        cy.wait(2000)
        //cy.get(':nth-child(2) > .cdk-column-meetingTitle').click()

        meetingDetailsPage.getActionButton().click()
        meetingDetailsPage.getWorkingPaperCirculateIcon().click()
        cy.wait(4000)
        meetingDetailsPage.getActivityTab().contains(this.data.activityTab).click()
        cy.wait(5000)

        //Move to dashboard 
        cy.GRPDashboard()
        cy.wait(1000)
        //Logout 
        cy.logout()
        
    })
})
  