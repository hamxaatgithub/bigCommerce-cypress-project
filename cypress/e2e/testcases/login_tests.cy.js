/// <reference types="cypress" />
import 'cypress-xpath';

import loginPage from '../webElements/login_elemennts.js';


describe('Login testing', () => {
    beforeEach(() => {
        
        //visiting site , base url
        cy.visit('/')
    })
  
    it('Verifying login page',()=>{
        const lgn = new loginPage();

        lgn.login('usernname','password');
        lgn.submit();

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
  