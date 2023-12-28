
export class Register
{

    webLocators={
        firstName:'#input-firstname',
        lastName:'#input-lastname',
        continueBtn:"input[type='submit']"

    };

    openURL()
    {
        cy.visit(Cypress.env('url'));
    }

    fillingRegisterForm(firstname_text, lastname_text)
    {
            cy.get(this.webLocators.firstName).type(firstname_text).should("have.value",firstname_text);
            cy.get(this.webLocators.lastName).type(lastname_text);
            cy.get(this.webLocators.continueBtn).click();
    }


}