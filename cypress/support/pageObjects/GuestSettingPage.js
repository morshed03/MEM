class GuestSettingPage
{
    //Search sections methods
    getActionsButton()
    {
        return cy.get('button.fab-toggler') //All actions button
    }
    getAddOfficeButton()    //অফিস যোগ করুন
    {
        return cy.get('app-speed-dial-fab button.fab-secondary:eq(0)')
    }
    getAddDepartmentButton()    //বিভাগ যোগ করুন 
    {
        return cy.get('app-speed-dial-fab button.fab-secondary:eq(1)')
    }
    getAddDesignationButton()    //পদবি যোগ করুন 
    {
        return cy.get('app-speed-dial-fab button.fab-secondary:eq(2)')
    }

    //pop-up methods
    getTitle()    //Pop-up title
    {
        return cy.get('mat-dialog-container h1.mat-dialog-title')
    }
    getBanglaNameField()    //Enter Bangla 
    {
        return cy.get('mat-dialog-container input[placeholder="Enter Bangla "]')
    }
    getEnglishaNameField()    //Enter English 
    {
        return cy.get('mat-dialog-container input[placeholder="Enter English "]')
    }
    getCloseButton()    // বন্ধ​ করুন button
    {
        return cy.get('mat-dialog-container div[align="end"] button:eq(0)')
    }
    getSaveButton()    //  সংরক্ষণ করুন button
    {
        return cy.get('mat-dialog-container div[align="end"] button:eq(1)')
    }

    //Search sections method
    getFilterButton()    // Filter button
    {
        return cy.get('td .btn .fa-filter')
    }
    getFilterInputField()    // Filter input field 
    {
        return cy.get('.mat-form-field-flex input:eq(0)')
    }
    getFilterFieldTypeDropDown()    // ফিল্ড টাইপ বাছাই করুন 
    {
        return cy.get('.mat-form-field-flex mat-select[aria-label="ফিল্ড টাইপ বাছাই করুন"]')
    }
    getFilterBanglaNameInputField()    // বাংলা নাম field
    {
        return cy.get('.mat-form-field-flex input:eq(1)')
    }
    getFilterResetField()    // Reset icon
    {
        return cy.get('mat-card mat-card-actions .btn:eq(0)')
    }
    getFilterSearchField()    // Search icon
    {
        return cy.get('mat-card mat-card-actions .btn:eq(1)')
    }

    //Details table sections method
    getTableRow()    // Search icon
    {
        return cy.get('tbody tr')
    }
    
}
export default GuestSettingPage;