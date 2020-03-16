class CreateNewMeetingPage
{
    //Basic info tab functions (মৌলিক তথ্য)
    getBasicInfoTab()
    {
        return cy.get('#mat-tab-label-0-1 > .mat-tab-label-content')
    }
    getMeetingTitleField()
    {
        return cy.get('#mat-input-9')
    }
    getReferenceNoField()
    {
        return cy.get('#mat-input-10')
    }
    getMeetingTypeField()
    {
        return cy.get('#mat-input-14')
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
        return cy.get('div.mat-form-field-infix > input[placeholder="মেম্বার সেক্রেটারি বাছাই করুন"]')
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
        return cy.get('div.mat-form-field-infix > input[placeholder="চেয়ারপারসন বাছাই করুন"]')
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
        return cy.get('div.mat-form-field-infix > input[placeholder="প্রধান অতিথি বাছাই করুন"]')
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

    
}
export default CreateNewMeetingPage;