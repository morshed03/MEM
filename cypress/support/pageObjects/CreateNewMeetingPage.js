class CreateNewMeetingPage
{
    //Basic info tab functions (মৌলিক তথ্য)
    getBasicInfoTab()                                                   //মৌলিক তথ্য tab
    {
        return cy.get('div.mat-tab-label > .mat-tab-label-content')
    }
    getMeetingTitleField()                                              //মিটিংয়ের শিরোনাম
    {
        return cy.get('input[formcontrolname="meetingTitle"]')
    }
    getReferenceNoField()                                               //স্মারক নং
    {
        return cy.get('input[formcontrolname="memorandumNo"]')
    }
    getMeetingTypeField()                                               //মিটিংয়ের ধরন
    {
        return cy.xpath('(//div/input)[3]')
    }
    getMeetingDropDownItem()
    {
        return  cy.get('mat-option > span.mat-option-text')
    }
    getMeetingRoomField()                                               //মিটিং রুম
    {
        return cy.get('input[placeholder="মিটিং রুম বাছাই করুন"]')
    }
    getMeetingDateCalendar()                                                // তারিখ​ 
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
    getMeetingStartTimeField()                                              // মিটিং শুরুর সম​য় ​
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
    getMeetingEndTimeField()                                                    // মিটিং শেষের​ সম​য় ​
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

    getKeyPersonTab()                                                       //গুরুত্বপূর্ণ ব্যক্তি tab
    {
        return cy.get('div.mat-tab-label > .mat-tab-label-content')
    }
    getMemberSecretaryField()                                               //সদস্য সচিব field
    {
        return cy.get('input[formcontrolname="signatory"]')
    }
    getMemberSecretaryDropDownItem()
    {
        return cy.get('mat-option.mat-option > span.mat-option-text')
    }
    getChairpersonType()                                                // কর্মকর্তা/কর্মচারী radio button
    {
        return cy.get('mat-radio-group[formcontrolname="chairpersonType"] > mat-radio-button > label > div')
    }
    getChairpersonField()                                   // সভাপতি  field
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
    getChiefGuestField()                                        //প্রধান অতিথি field
    {
        return cy.get('input[formcontrolname="chiefGuest"]')
    }
    getChiefGuestDropDownItem()
    {
        return cy.get('mat-option.mat-option > span.mat-option-text')
    }

    //Agenda tab functions আলোচ্যসূচী 

    getAgendaTab()                              //আলোচ্যসূচী tab
    {
        return cy.get('div.mat-tab-label > .mat-tab-label-content')
    }
    getAddAgendaButton()                        //Plus icon
    {
        return cy.get('button > span > mat-icon[role="img"]')
    }
    getAgendaInputField()                       //আলোচ্য বিষয় লিখুন input field
    {
        return cy.get('textarea[placeholder="আলোচ্য বিষয় লিখুন"]')
    }
    getAgendaSubmitButton()                     //সংরক্ষন করুন button
    {
        return cy.xpath('//button/span[contains(text(),"সংরক্ষন করুন")]')
    }

    //Attachment Tab function সংযুক্তি
    getAttachmentTab()                          //সংযুক্তি tab
    {
        return cy.get('div.mat-tab-label > .mat-tab-label-content')
    }
    getAddAttachmentButton()                    //সংযুক্তি আপলোড করুন button
    {
        return cy.xpath('//mat-icon[contains(text(), "cloud_upload")]')
    }
    getAttachmentUploadButton()                 //Choose Files 
    {
        return cy.get('div.mat-dialog-content > input[type="file"]')
    }
    getAttachmentSubmitButton()                   // সংরক্ষণ করুন button on pop-over
    {
        return cy.get('.mat-dialog-actions > .mat-primary > span')
    }
    getSaveMeetingButton()                          //সংরক্ষণ করুন button from সংযুক্তি page
    {
        return cy.xpath('(//button//span[contains(text(),"সংরক্ষণ করুন")])[1]')
    }


}
export default CreateNewMeetingPage;