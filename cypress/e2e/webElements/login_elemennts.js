class loginPage {

    elements = {
        //username field
        user : ()=>  cy.get('#user_email'),

        //password field
        password : ()=> cy.get('#user_password'),

        //login button 
        loginBtn : ()=> cy.get('#login_submit_button').click()
    }

    login(usernname, password){

        cy.xpath("//li//a[text()='Log In']").click()

        this.elements.user().clear()
        this.elements.user().type(usernname)

        this.elements.password().clear()
        this.elements.password().type(password)
    }

    submit(){
        this.elements.loginBtn()
    }
}

export default loginPage;