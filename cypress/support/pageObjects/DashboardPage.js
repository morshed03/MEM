class DashboardPage
{
    getMEMAvatar()
    {
        return cy.get('img[src="assets/img/brand/mem.svg"]')
    }
    getUserAvatar() // The user avatar from dashboard page 
    {
        return cy.get('img.img-avatar')
    }
    getExitLink() // The বাহির button from dashboard page 
    {
        return cy.xpath('//button[contains(text(),"বাহির") and @type="button"]')
    }
    getUserCircle()     //User icon from any page
    {
        return cy.get('li[placement="bottom right"] > a > i.fa.fa-user-circle.fa-lg"]')
    }
    getGRPDashbardLink() //জিআরপি ড্যাশবোর্ড​ link
    {
        return cy.xpath('//a[contains(text(),"জিআরপি ড্যাশবোর্ড​")]')
    }
}
export default DashboardPage;