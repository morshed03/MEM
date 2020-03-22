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
    getPresentIcon()   // উপস্থিত নিন icon
    {
        return cy.xpath('//button//span//i[contains(text(),"assignment_ind")]')
    }
    getWorkingPaperIcon()   // কার্যবিবরণী icon
    {
        return cy.xpath('(//button//span//i[contains(text(),"post_add")])[2]')
    }
    getWorkingPaperCirculateIcon()   // কার্যবিবরণী প্রচার করুন icon
    {
        return cy.xpath('(//button//span//i[contains(text(),"add_alert")])[2]')
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

    //মিটিংয়ের উপস্থিতি functions 
    getPageHeader()         //মিটিংয়ের উপস্থিতি pop-up header
    {
        cy.xpath('//h1[contains(text(),"মিটিংয়ের উপস্থিতি")]')
    }
    getPresenceToggle()   //  উপস্থিতি All toggle
    {
        return cy.get('th > mat-slide-toggle.mat-primary')
    }
    getAttendeeRow()   //  উপস্থিতি rows on মিটিংয়ের উপস্থিতি pop-up
    {
        return cy.get('.cdk-overlay-pane > mat-dialog-container > app-attendance-honorarium-dialog > div > table > tbody > tr')
    }
    getDefaultHonorariumField()   //  ডিফল্ট সম্মানী
    {
        //return cy.xpath('//label/mat-label[contains(text(),"ডিফল্ট সম্মানী")]')
        return cy.get('.cdk-overlay-pane > mat-dialog-container > app-attendance-honorarium-dialog > div > div > mat-form-field > div > div > .mat-form-field-infix > input[type="number"]')
    }
    getHonorariumField() // Last সম্মানী field
    {
        return cy.get('.cdk-overlay-pane > mat-dialog-container tr  input[type="number"]:last')
    }
    getHonorariumSaveButton() //  সংরক্ষন করুন button
    {
        return cy.get('[cdkfocusinitial] > .mat-button-wrapper')
    }
    getHonorariumCloseButton() //   বন্ধ​ করুন button
    {
        return cy.get('button[color="warn"] > .mat-button-wrapper')
    }


    //Meeting মিটিং নোটসমূহ function
    getDocumentSheetTab()            //নথি পত্র tab
    {
        return cy.get('div.mat-tab-label > .mat-tab-label-content')
    }
    getDocumentSheetRows()            //All tabs on নথি পত্র page
    {
        return cy.get('.mat-card-content mat-expansion-panel')
    }
    getAddNotePlusIcon()            //নোট যোগ করুন plus icon
    {
        return cy.get('button[mattooltip="নোট যোগ করুন"]')
    }
    getSelectAgendaField()            //আলোচ্য বিষয় input field
    {
        return cy.get('input[placeholder="আলোচ্য বিষয় বাছাই করুন"]')
    }
    getSelectDropDownItems()            //Drop-down items
    {
        return cy.get('mat-option > span.mat-option-text')
    }
    getSpickerField()            //বক্তা input field
    {
        return cy.get('input[placeholder="বক্তা বাছাই করুন"]')
    }
    getAddNotesField()            //নোট input field
    {
        return cy.get('textarea[placeholder="নোট যোগ করুন"]')
    }
    getSaveNotesButton()            // সংরক্ষন করুন button
    {
        return cy.get('[cdkfocusinitial] .mat-button-wrapper')
    }
    getcollapseButton()            // Collaps the expanded row
    {
        return cy.get('mat-expansion-panel-header.mat-expanded .mat-content')
    }
    

    //Meeting  কার্যবিবরণী  function
    getResolutionRow()            //কার্যবিবরণী row
    {
        //return cy.get('.mat-card-content mat-expansion-panel')
        return cy.xpath('//mat-panel-title[contains(text(),"কার্যবিবরণী")]')
    }
    getAddResolutionPlusIcon()            //আলোচনা ও সিদ্ধান্ত যোগ করুন plus icon
    {
        return cy.get('[mattooltip="আলোচনা ও সিদ্ধান্ত​ যোগ​ করুন"]')
    }
    getAddAgendaInputField()            //আলোচ্য বিষয় field
    {
        return cy.get('input[placeholder="আলোচ্য বিষয় বাছাই করুন"]')
    }
    getAddDiscussionInputField()            //আলোচনা লিখুন field
    {
        return cy.xpath('//textarea[contains(@placeholder,"আলোচনা লিখুন")]')
    }
    getAddDessionInputField()            //সিদ্ধান্ত লিখুন field
    {
        return cy.xpath('//textarea[contains(@placeholder,"সিদ্ধান্ত লিখুন")]')
    }
    getAddDiscussionSaveButton()            //সংরক্ষন করুন button
    {
        return cy.xpath('//button/span[contains(text(),"সংরক্ষন করুন")]')
    }

    
    //কার্যবিবরণী preparation functions
    getWorkingPaperTemplateField()            //কার্যবিবরণী template
    {
        //return cy.get('.cdk-overlay-pane mat-select[aria-label="টেমপ্লেট বাছাই করুন"]')
        return cy.xpath('//span[contains(text(),"টেমপ্লেট বাছাই করুন")]')
    }
    getWorkingPaperReferenceNoField()            //স্মারক নং
    {
        return cy.xpath('//input[contains(@placeholder,"কার্যবিবরণীর স্মারক নং লিখুন")]')
    }
    getWorkingPaperSaveButton()            //দাখিল button
    {
        return cy.xpath('//button/span[contains(text(),"দাখিল করুন​")]')
    }
    getWorkingPaperApprovalButton()            //দাখিল button
    {
        return cy.xpath('(//button/span[contains(@class,"mat-button-wrapper")])[5]')
    }

    //ঘটনা প্রবাহ​ tab functions
    getActivityTab()            //ঘটনা প্রবাহ tab
    {
        return cy.get('div.mat-tab-label > .mat-tab-label-content')
    }

}
export default MeetingDetailsPage;