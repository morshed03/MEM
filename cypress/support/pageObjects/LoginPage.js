class LoginPage
{
    getUserNameInputBox()
    {
        return cy.get('input[name="username"]')
    }
    getPasswordInputBox()
    {
        return cy.get('input[name="password"]')
    }
    getEnterButton()
    {
        return cy.get('.col-6 > .btn')
    }
    getValidationMessage()
    {
        return cy.get('.mat-simple-snackbar > :nth-child(1)')
    }
}
export default LoginPage;