class LeftNavMenu
{
    getGuestMenu()
    {
        return cy.get('app-sidebar app-sidebar-nav-dropdown:eq(1)') //অতিথি
    }
    getGuestListMenu()
    {
        return cy.get('app-sidebar app-sidebar-nav-dropdown a.nav-link.ng-star-inserted:eq(2)') //অতিথি তালিকা 
    }
    getGuesSettingMenu()
    {
        return cy.get('app-sidebar app-sidebar-nav-dropdown a.nav-link.ng-star-inserted:eq(3)') //অতিথি সেটিংস​  
    }
    getGroupMenu()
    {
        return cy.get('app-sidebar app-sidebar-nav-link:eq(5)') //গ্রুপ
    }
    
}
export default LeftNavMenu;