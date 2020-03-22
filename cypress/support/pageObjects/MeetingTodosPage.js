class MeetingTodosPage
{
    getTodosLink()    //করণীয়​ link from left nav
    {
        return cy.get('a[href="/bcc/web/mem/meetings/todos/0"]')
    }
    getNoticeLink()    //নোটিশ tab
    {
        return cy.xpath('//span[contains(text(),"নোটিশ")]')
    }
    getRespondTab()    //সাড়া tab
    {
        return cy.xpath('//span[contains(text(),"সাড়া")]')
    }
    getMeetingRow()    //Select the meeting
    {
        return cy.get('tbody > tr')
    }
    getApproveButton()    //অনুমোদন করুন button
    {
        return cy.xpath('//td//button//span//mat-icon[contains(text(),"check_circle")]')
    }
    getCommentField()    //মন্তব্য input field
    {
        return cy.xpath('//textarea[contains(@placeholder,"য়া করে মন্তব্য লিখুন")]')
    }
    getYesButton()    // হ্যাঁ  button
    {
        return cy.get('[cdkfocusinitial=""] > .mat-button-wrapper')
    }

    getWorkingPaperink()    //কার্যবিবরনী tab
    {
        return cy.xpath('//span[contains(text(),"কার্যবিবরনী")]')
    }
    getWorkingPaperCommentField()    //কার্যবিবরনী মন্তব্য input field
    {
        return cy.xpath('//textarea[contains(@placeholder,"Please Write Your Comments")]')
    }
}
export default MeetingTodosPage;