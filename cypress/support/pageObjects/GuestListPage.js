class GuestListPage
{
    //Filter sections method
    getAddNewGuestButton()    // নতুন অতিথি যুক্তকরণ​ button
    {
        return cy.get('mat-card td .btn:eq(1)')
    }
    getFilterButton()    // Filter button
    {
        return cy.get('mat-card td .btn:eq(0)')
    }
    getFilterInputField()    // Filter input field 
    {
        return cy.get('.mat-form-field-flex input:eq(0)')
    }
    getOfficeInputField()    //  অফিস 
    {
        return cy.get('.mat-form-field-flex input:eq(1)')
    }
    getDivisionInputField()    // বিভাগ 
    {
        return cy.get('.mat-form-field-flex input:eq(2)')
    }
    getDesignationInputField()    // পদবী 
    {
        return cy.get('.mat-form-field-flex input:eq(3)')
    }
    getBanglaNameInputField()    // বাংলা নাম
    {
        return cy.get('.mat-form-field-flex input:eq(4)')
    }
    getEnglishNameInputField()    // ইংরেজি নাম
    {
        return cy.get('.mat-form-field-flex input:eq(5)')
    }
    getDropDownItem()    // Drop-down item 
    {
        return cy.get('mat-option > span.mat-option-text')
    }
    getFilterSearchField()    // Search icon
    {
        return cy.get('mat-card mat-card-actions .btn')
    }

    //pop-up methods
    getTitle()    //Pop-up title
    {
        return cy.get('mat-dialog-container h1.mat-dialog-title')
    }
    getBanglaNameField()    //বাংলা নাম
    {
        return cy.get('mat-dialog-container mat-form-field input[placeholder]:eq(0)')
    }
    getEnglishaNameField()    //ইংরেজি নাম
    {
        return cy.get('mat-dialog-container mat-form-field input[placeholder]:eq(1)')
    }
    getEnglishaNameField()    //ই-মেইল
    {
        return cy.get('mat-dialog-container mat-form-field input[placeholder]:eq(2)')
    }
    getEnglishaNameField()    //মোবাইল নাম্বার
    {
        return cy.get('mat-dialog-container mat-form-field input[placeholder]:eq(3)')
    }
    getEnglishaNameField()    //অফিস 
    {
        return cy.get('mat-dialog-container mat-form-field input[placeholder]:eq(4)')
    }
    getEnglishaNameField()    //বিভাগ 
    {
        return cy.get('mat-dialog-container mat-form-field input[placeholder]:eq(5)')
    }
    getEnglishaNameField()    //পদবী 
    {
        return cy.get('mat-dialog-container mat-form-field input[placeholder]:eq(6)')
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
    getTableRow()    // Search icon
    {
        return cy.get('tbody tr')
    }
    
}
export default GuestListPage;