import { Then, Given, When, when, and, And } from 'cypress-cucumber-preprocessor/steps'

const data = require('../../fixtures/seed_data/data.json');


const destinationField = '#s2id_autogen16';
const buttonSearech = '#hotels > .tab-inner > .form-search-main-01 > form > .form-inner > .gap-10 > .col-lg-2 > .btn';



    Given('I go to Web php travels login', () => {
     cy.visit(Cypress.env('PHPTRAVEL_URL'))
    
      Cypress.on('uncaught:exception', (err, runnable) => {
          // returning false here prevents Cypress from
          // failing the test
          return false
        })  
        
    })

    When('I click login button', () => {
        cy.get(':nth-child(3) > .dropdown > #dropdownCurrency').click();
        cy.get('.dropdown-menu > div > .active').click();
    })

    And('I fill username field', () => {
        cy.get(':nth-child(1) > .pure-material-textfield-outlined > span').type('​user@phptravels.com');
       
      })

      And('I fill password field', () => {
        cy.get(':nth-child(2) > .pure-material-textfield-outlined > span').type('demouser');
       
      })

      And('I submit login button', () => {
        cy.get('#loginfrm > .btn-primary').click();
      })
     