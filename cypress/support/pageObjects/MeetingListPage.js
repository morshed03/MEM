class MeetingListPage
{
    getListNavLink()    //তালিকা link from left nav
    {
        return cy.get('a[href="/bcc/web/mem/meetings/list"]')
    }
    getCreateNewButton() // নতুন মিটিং button
    {
        return cy.get('.float-right > .btn')
    }
    getSelectMeeting() // Select a meeting
    {
        return cy.get('tbody > tr > td')
    }
    getSearchField() // Meeting Search input field 
    {
        return cy.get('[width="75%"] > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
    }
    getSearchMagnifierIcon() // Search magnifier icon 
    {
        return cy.get('.float-left > button > .fa.fa-search')
    }
}
export default MeetingListPage;