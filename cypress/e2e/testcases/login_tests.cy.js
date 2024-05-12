/// <reference types="cypress" />
import 'cypress-xpath';

import loginPage from '../webElements/login_elemennts.js';


describe('Login testing', () => {

    let userData;
    beforeEach(() => {
        
        //visiting site , base url
        cy.visit('/')

        cy.fixture('userdata.json').then((data) => {
            userData = data.user;
          });
    })
  
    it('Verifying login page',()=>{
        const lgn = new loginPage();
        const user1=userData[0]
        lgn.visitLogin();
        userData.forEach((element, index )=> {
            lgn.login(element.email,element.password);
            lgn.submit();

        });
        //custome command for login code
        //lgn.login(user1.email,user1.name);
        //lgn.submit();

    })



    // it.skip('Verifying Login page', () => {

     
    //     //xpath for login button
    //     cy.xpath("//li//a[text()='Log In']").click()
        
    //     // Verifying header and logo on login after lanndinng
    //     cy.get('.form-heading').should('contain','Log in to your store')
    //     cy.get('img').should('exist')

    //     //username field
    //     cy.get('#user_email').type("Usernname")

    //     //password field
    //     cy.get('#user_password').type("password")

    //     //login button 
    //     cy.get('#login_submit_button').click()
    // })

  })
  