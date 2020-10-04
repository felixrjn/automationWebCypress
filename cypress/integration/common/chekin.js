import { Then, Given, When, when, and, And } from 'cypress-cucumber-preprocessor/steps'

const data = require('./../../fixtures/seed_data/data.json');


const destinationField = '#s2id_autogen16';
const buttonSearech = '#hotels > .tab-inner > .form-search-main-01 > form > .form-inner > .gap-10 > .col-lg-2 > .btn';



Given('I go to Web php travels', () => {

  cy.visit(Cypress.env('PHPTRAVEL_URL'))
    
      Cypress.on('uncaught:exception', (err, runnable) => {
          // returning false here prevents Cypress from
          // failing the test
          return false
        })  
        
    })

    When('I fill destination field', () => {
      cy.get(destinationField).type(data.location);
      cy.get('.select2-results-dept-1 > .select2-result-label').contains('Bandung, Indonesia').click()
     
    })

    And('I chose chekin date', () => {
      cy.get('#checkin').click()
      cy.get('#checkin').clear()
      cy.get('#checkin').type('09/10/2020')
       
      })

      And('I chose checkout date', function() {
        cy.get('#checkout').click()
        cy.get('#checkout').clear()
        cy.get('#checkout').type('12/10/2020')
      })

      And('I chose guest', function() {
        cy.get('button').contains('-').click({ multiple: true })
        cy.get('button').contains('+').click({ multiple: true })
      })

      And('I submit form search', function() {
        cy.get(buttonSearech).click()
      })

     