/// <reference types="Cypress" />
import DashboardPage from '../../support/pageObjects/DashboardPage'
import MeetingListPage from '../../support/pageObjects/MeetingListPage'
import CreateNewMeetingPage from '../../support/pageObjects/CreateNewMeetingPage'

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

    it('Create Meeting TC',function() 
    {
        //Login 
        cy.login(this.data.userName, this.data.password)
        //goto-mem
        dashboardPage.getMEMAvatar().click()
        //mem-list তালিকা 
        meetingListPage.getListNavLink().click()
        cy.get('tbody > :nth-child(1) > .cdk-column-meetingTitle').click()
        /*
        //create-meeting
        meetingListPage.getCreateNewButton().click()
        //goto-basic-info
        createNewMeetingPage.getBasicInfoTab().contains(this.data.basicInfoTab).click()
        //entry-basic-info
        
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
       const fileName = 'attachFile/TestFile.pdf';

        cy.fixture(fileName).then(fileContent => {
            createNewMeetingPage.getAttachmentUploadButton().upload({ fileContent, fileName, mimeType: 'application/json' });
        });
        createNewMeetingPage.getAttachmentSubmitButton().click()

        createNewMeetingPage.getSaveMeetingButton().click()
        cy.wait(3000)
*/
        //goto-attendee


        //entry attendee
        

    })
})
  