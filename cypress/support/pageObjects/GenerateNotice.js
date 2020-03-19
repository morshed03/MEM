class GenerateNotice
{
    //generate-notice
    getActionButton()   // অ্যাকশনসমূহ icon
    {
        return cy.get('div.fab-container > button[mattooltip]')
    }
    getMakeNoticeIcon()   // নোটিশ তৈরি করুন
    {
        return cy.xpath('(//button//span//i[contains(text(),"post_add")])[1]')
    }
    getTamplateField()   // টেমপ্লেট বাছাই করুন field
    {
        return cy.get('div > mat-select[aria-label="টেমপ্লেট বাছাই করুন"]')
    }
    getTamplateDropDown()   // টেমপ্লেট drop-down items
    {
        return cy.get('mat-option > span.mat-option-text')
    }
    getTamplateSubmitButton()   // দাখিল করুন​ button
    {
        return cy.xpath('//button//span[contains(text(),"দাখিল করুন​")]')
    }
    getTamplateSendToApproveButton()   // দাখিল করুন​ button
    {
        return cy.xpath('//button[./span[contains(text(),"অনুমোদনের জন্য প্রেরণ করুন")]]')
    }
}
export default GenerateNotice;