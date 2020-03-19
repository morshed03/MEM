class MeetingDetailsPage
{
    getActionButton()   // অ্যাকশনসমূহ icon
    {
        return cy.get('div.fab-container > button[mattooltip]')
    }
    getNoticeCirculate()   // নোটিশ প্রচার করুন icon
    {
        return cy.xpath('(//button//span//i[contains(text(),"add_alert")])[1]')
    }

    //Attendee tab function সদস্যগণ
    getAttendeeTab()            //সদস্যগণ tab
    {
        return cy.get('div.mat-tab-label > .mat-tab-label-content')
    }
    getAddAttendeeButton() //সদস্য যোগ করুন button
    {
        return cy.xpath('//button//span[contains(text(), "সদস্য যোগ করুন")]')
    }
    getAttendeeTypeTab()        //Attendee tabs
    {
        return cy.get('div.mat-tab-label > .mat-tab-label-content')
    }
    getAttendeeFilterButton()   //Filter icon on pop-over page
    {
        return cy.get('.float-right > .btn')
    }
    getAttendeeNameFilter()   //Type Attendee name
    {
        return cy.get('div.mat-form-field-infix > input[placeholder="Filter"]')
    }
    getAttendeeOfficeFilterField()   // Office filter field (অফিস বাছাই করুন)
    {
        return cy.get('mat-select[aria-label="অফিস বাছাই করুন"]')
    }
    getAttendeeOfficeDropDownItems()   // Office drop down list
    {
        return cy.get('mat-option > span.mat-option-text')
    }
    getAttendeeDepartmentField()   // Department field বিভাগ 
    {
        return cy.xpath('//mat-select[contains(@aria-label,"বিভাগ")]')
    }
    getAttendeeDepartmentDropDownItems()   // Department বিভাগ Drop-down items 
    {
        return cy.get('mat-option > span.mat-option-text')
    }
    getAttendeeDesignation()   // designation field পদবী 
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
    getAllAttendeeCheckbox()   // Select All Addendee from search result listing
    {
        return cy.xpath('(//table/thead/tr/th/mat-checkbox/label[@class="mat-checkbox-layout"])[2]')
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
    getEntryCommentField()   // Comment Input box on the (মন্তব্য যোগ করুন) pop-op
    {
        return cy.get('textarea[placeholder ="মন্তব্য লিখুন"]')
    }
    getSubmitCommentButton()   // Submit Comment from the (মন্তব্য যোগ করুন) pop-op 
    {
        //return cy.xpath('//app-remarks[./h1[contains(text(),"মন্তব্য যোগ করুন")]]/div/button/span[contains(text(),"সংরক্ষণ করুন")]')
        return cy.xpath('(//div/button/span[contains(text(),"সংরক্ষণ করুন")])[3]')
    }
    getEditButton()   // সম্পাদনা করুন button
    {
        return cy.xpath('//button//span[contains(text(),"সম্পাদনা করুন")]')
    }
    getAcknowledgementCheckbox()   // অবগতি checkbox 
    {
        return cy.xpath('//tbody/tr[last()-1]/td[contains(@class,"acknowledgement")]/mat-checkbox')
    }
    getNameInclusionCheckbox()   // নাম অন্তর্ভুক্তি checkbox 
    {
        //return cy.xpath('//tbody/tr[last()-1]/td[contains(@class,"include")]/mat-checkbox')
        return cy.xpath('//tbody/tr[last()-3]/td[contains(@class,"include")]/mat-checkbox')
    }
    getSignatoryCheckbox()   // কার্যবিবরণী সাক্ষরকারী checkbox 
    {
        //return cy.xpath('//tbody/tr[last()-1]/td[contains(@class,"signatory")]/mat-checkbox')
        return cy.xpath('//tbody/tr[last()-5]/td[contains(@class,"signatory")]/mat-checkbox')
    }
    getWorkingPaperCheckbox()   // কার্যপত্র checkbox 
    {
        //return cy.xpath('//tbody/tr[last()-1]/td[contains(@class,"workingPaper")]/mat-checkbox')
        return cy.xpath('//tbody/tr[last()-7]/td[contains(@class,"workingPaper")]/mat-checkbox')
    }
    getSaveButton()   //  সংরক্ষণ করুন button 
    {
        return cy.xpath('//button//span//mat-icon[contains(text(),"save")]')
    }
}
export default MeetingDetailsPage;