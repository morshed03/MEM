class MeetingListPage
{
    getListNavLink()
    {
        return cy.get('a[href="/bcc/web/mem/meetings/list"]')
    }
    getCreateNewButton()
    {
        return cy.get('.float-right > .btn')
    }
}
export default MeetingListPage;