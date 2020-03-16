class CreateNewMeetingPage
{
    //Basic info tab functions (মৌলিক তথ্য)
    getBasicInfoTab()
    {
        return cy.get('div.mat-tab-label > .mat-tab-label-content')
    }
    getMeetingTitleField()
    {
        return cy.get('input[formcontrolname="meetingTitle"]')
    }
    getReferenceNoField()
    {
        return cy.get('input[formcontrolname="memorandumNo"]')
    }
    getMeetingTypeField()
    {
        return cy.xpath('(//div/input)[3]')
    }
    getMeetingDropDownItem()
    {
        return  cy.get('mat-option > span.mat-option-text')
    }
    getMeetingRoomField()
    {
        return cy.get('input[placeholder="মিটিং রুম বাছাই করুন"]')
    }
    getMeetingDateCalendar()
    {
        return cy.get('svg.mat-datepicker-toggle-default-icon')
    }
    getMeetingCalendarYearView()
    {
        return cy.get('button > span > div.mat-calendar-arrow')
    }
    getMeetingYear()
    {
        return cy.get('td > div.mat-calendar-body-cell-content')
    }
    getMeetingMonth()
    {
        return cy.get('td > div.mat-calendar-body-cell-content')
    }
    getMeetingDate()
    {
        return cy.get('td > div.mat-calendar-body-cell-content')
    }
    getMeetingStartTimeField()
    {
        return cy.get('input[formcontrolname="startTime"]')
    }
    getMeetingStartTimeHour()
    {
        return cy.get('div > div.clock-face__number > span')
    }
    getMeetingStartTimeMinute()
    {
        return cy.get('div > div.clock-face__number > span')
    }
    getMeetingStartTimeAMPM()
    {
        return cy.get('.timepicker-period > button.timepicker-dial__item')
    }
    getMeetingStartOKButton()
    {
        return cy.get('button.timepicker-button > span')
    }
    getMeetingEndTimeField()
    {
        return cy.get('input[formcontrolname="endTime"]')
    }
    getMeetingEndTimeHour()
    {
        return cy.get('div > div.clock-face__number > span')
    }
    getMeetingEndTimeMinute()
    {
        return cy.get('div > div.clock-face__number > span')
    }
    getMeetingEndTimeAMPM()
    {
        return cy.get('.timepicker-period > button.timepicker-dial__item')
    }
    getMeetingEndOKButton()
    {
        return cy.get('button.timepicker-button > span')
    }

    //Key person tab functions গুরুত্বপূর্ণ ব্যক্তি 

    getKeyPersonTab()
    {
        return cy.get('div.mat-tab-label > .mat-tab-label-content')
    }
    getMemberSecretaryField()
    {
        return cy.get('input[formcontrolname="signatory"]')
    }
    getMemberSecretaryDropDownItem()
    {
        return cy.get('mat-option.mat-option > span.mat-option-text')
    }
    getChairpersonType()
    {
        return cy.get('mat-radio-group[formcontrolname="chairpersonType"] > mat-radio-button > label > div')
    }
    getChairpersonField()
    {
        return cy.get('input[formcontrolname="chairperson"]')
    }
    getChairpersonDropDownItem()
    {
        return cy.get('mat-option.mat-option > span.mat-option-text')
    }
    getChiefGuestType()
    {
        return cy.get('mat-radio-group[formcontrolname="chiefGuestType"] > mat-radio-button > label > div')
    }
    getChiefGuestField()
    {
        return cy.get('input[formcontrolname="chiefGuest"]')
    }
    getChiefGuestDropDownItem()
    {
        return cy.get('mat-option.mat-option > span.mat-option-text')
    }

    //Agenda tab functions আলোচ্যসূচী 

    getAgendaTab()
    {
        return cy.get('div.mat-tab-label > .mat-tab-label-content')
    }
    getAddAgendaButton()
    {
        return cy.get('button > span > mat-icon[role="img"]')
    }
    getAgendaInputField()
    {
        return cy.get('textarea[placeholder="আলোচ্য বিষয় লিখুন"]')
    }
    getAgendaSubmitButton()
    {
        return cy.xpath('//button/span[contains(text(),"সংরক্ষন করুন")]')
    }

    //Attachment Tab function সংযুক্তি
    getAttachmentTab()
    {
        return cy.get('div.mat-tab-label > .mat-tab-label-content')
    }
    getAddAttachmentButton()
    {
        return cy.xpath('//mat-icon[contains(text(), "cloud_upload")]')
    }
    getAttachmentUploadButton()
    {
        return cy.get('div.mat-dialog-content > input[type="file"]')
    }
    getAttachmentSubmitButton()
    {
        return cy.get('.mat-dialog-actions > .mat-primary > span')
    }
    getSaveMeetingButton()
    {
        return cy.xpath('//button//span[contains(text(),"সংরক্ষণ করুন")]')
    }

    //Attendee tab function সদস্যগণ
    getAttendeeTab()
    {
        return cy.get('div.mat-tab-label > .mat-tab-label-content')
    }
    getAddAttendeeButton()
    {
        return cy.xpath('//button//span[contains(text(), "সদস্য যোগ করুন")]')
    }
    getAttendeeTab()        //Attendee tabs
    {
        return cy.get('div.mat-tab-label > .mat-tab-label-content')
    }
    getAttendeeFilterButton()   //Filter icon
    {
        return cy.get('.float-right > .btn')
    }
    getAttendeeOfficeFilter()   // Office filter field
    {
        return cy.get('mat-select[aria-label="অফিস বাছাই করুন"]')
    }
    getAttendeeOfficeDropDownItems()   // Office drop down list
    {
        return cy.get('mat-option > span.mat-option-text')
    }
    getAttendeeDepartment()   // Department বিভাগ
    {
        return cy.xpath('//mat-select[contains(@aria-label,"বিভাগ")]')
    }
    getAttendeeDepartmentDropDownItems()   // Department বিভাগ Drop-down items 
    {
        return cy.get('mat-option > span.mat-option-text')
    }
    getAttendeeDesignation()   // designation পদবী 
    {
        return cy.xpath('//mat-select[@aria-label="পদবী বাছাই করুন"]')
    }
    getAttendeeDesignationDropDownItems()   // designation পদবী Drop-down items 
    {
        return cy.get('mat-option > span.mat-option-text')
    }
    getAttendeeSearchButton()   // Search button 
    {
        return cy.get('a.btn-primary > i.fa-search')
    }
    getAttendeeSelectCheckbox()   // Select Addendee from search result listing
    {
        return cy.xpath('//app-member-management//tbody/tr/td/mat-checkbox')
    }
    getAttendeeSubmitButton()   // সদস্য হিসেবে অন্তর্ভুক্ত করুন button
    {
        return cy.xpath('//button[./span[contains(text(), "সদস্য হিসেবে অন্তর্ভুক্ত করুন")]]')
    }
    getCommentButton()   // Comment button মন্তব্য plus icon
    {
        return cy.xpath('//tbody/tr[last()-1]/td/button')
    }
    getEntryCommentField()   // Comment Input box on the pop-op
    {
        return cy.get('textarea[placeholder ="মন্তব্য লিখুন"]')
    }
    getSubmitCommentButton()   // Submit Comment from the pop-op
    {
        return cy.xpath('//app-remarks[./h1[contains(text(),"মন্তব্য যোগ করুন")]]/div/button/span[contains(text(),"সংরক্ষণ করুন")]')
    }
    getEditButton()   // সম্পাদনা করুন button
    {
        return cy.xpath('//button//span[contains(text(),"সম্পাদনা করুন")]')
    }
    getAcknowledgementCheckbox()   // অবগতি checkbox 
    {
        return cy.xpath('//tbody/tr[last()-1]/td[contains(@class,"acknowledgement")]/mat-checkbox')
    }



}
export default CreateNewMeetingPage;