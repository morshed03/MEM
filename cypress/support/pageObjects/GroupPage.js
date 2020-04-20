class GroupPage
{
    //Filter sections method
    getAddNewGuestButton()    // নতুন গ্রুপ যোগ করুন button
    {
        return cy.get('mat-card td .btn:eq(1)')
    }
    getFilterButton()    // Filter button
    {
        return cy.get('mat-card td .btn:eq(0)')
    }
    getFilterInputField()    // Filter input box
    {
        return cy.get('.mat-form-field-flex input:eq(0)')
    }
    getGroupNameSearchField()    // গ্রুপের নাম
    {
        return cy.get('.mat-form-field-flex input:eq(1)')
    }
    getGroupDescriptionSearchField()    // বর্ণনা
    {
        return cy.get('.mat-form-field-flex input:eq(2)')
    }
    getFilterResetField()    // Reset icon
    {
        return cy.get('mat-card mat-card-actions .btn:eq(0)')
    }
    getFilterSearchField()    // Search icon
    {
        return cy.get('mat-card mat-card-actions .btn:eq(1)')
    }


    //pop-up methods
    getTitle()    //Pop-up title
    {
        return cy.get('mat-dialog-container h1.mat-dialog-title')
    }
    getGroupNameField()    //গ্রুপের নাম
    {
        return cy.get('mat-dialog-container textarea:eq(0)')
    }
    getDescriptionNameField()    //বর্ণনা 
    {
        return cy.get('mat-dialog-container textarea:eq(1)')
    }
    getCloseButton()    // বন্ধ​ করুন button
    {
        return cy.get('mat-dialog-container div[align="end"] button:eq(0)')
    }
    getSaveButton()    //  সংরক্ষণ করুন button
    {
        return cy.get('mat-dialog-container div[align="end"] button:eq(1)')
    }

    //Details table sections method
    getTableRow()    // Table row
    {
        return cy.get('tbody tr')
    }


    getAddMemberPlusButton()    // গ্রুপে নতুন সদস্য যোগ করুন button 
    {
        return cy.get('mat-card button')
    }
    getAllAttendeeCheckbox()   // Select All Addendee from search result listing
    {
        return cy.xpath('//table/thead/tr/th/mat-checkbox/label[@class="mat-checkbox-layout"]')
    }
    getGroupMemberDeleteButton()    // গ্রুপ সদস্য মুছে ফেলুন button
    {
        return cy.get('tr td > a:eq(0)')
    }
    getGroupMemberDeletePopupHeader()    // গ্রুপ সদস্য মুছে ফেলুন confirm pop-up header
    {
        return cy.get('mat-dialog-container h1')
    }
    getGroupMemberDeletePopupYesButton()    // গ্রুপ সদস্য মুছে ফেলুন confirm pop-up হ্যাঁ button
    {
        return cy.get('mat-dialog-container button:eq(1)')
    }
    
}
export default GroupPage;