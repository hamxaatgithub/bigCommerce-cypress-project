
import homePage from "../webElements/home_elemennts"

describe("Landing Page test cases",()=>{

    const home = new homePage();

    beforeEach(()=>{
        cy.visit('/');

        
    })
    context("01 - Business types tab : Enterprise",()=>{
    //01 - testcases for header section

        //verifying logo
        it("Verifying Logo",()=>{
            const logo = home.verifylogo();
            logo.should('be.visible')
        })
        
        //verifying Platform > Features
        it.skip("verifying Platform > Features",()=>{
            cy.visit('/features').should('exist');

        })

        //verifying Prices
        it.skip("verifying Prices",()=>{

        })

        //verifying Demo button
        it.skip("Verifying Demo button",()=>{

        })
    })

    // context("02 - Business types tab : Essentials",()=>{


    // })


})