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
}
export default MeetingListPage;