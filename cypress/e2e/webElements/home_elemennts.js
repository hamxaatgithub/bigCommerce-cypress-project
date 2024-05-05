class homePage{


    elements = {

        logo : ()=> cy.xpath("//img[@alt='BigCommerce logo'][1]"),


    }


    verifylogo (){
        return this.elements.logo();
    }

}

export default homePage;