/// <reference types="cypress" />
describe('ZSL Login Page', () => {


    it('Without Entering ZSL Login Credentials', () => {

        cy.visit('https://dev.zsl-admin.pages.dev/')

        cy.get('.el-button').click()
    }) 

    it('Using Invalid ZSL Login Credentials', () => {

        cy.visit('https://dev.zsl-admin.pages.dev/')

        cy.xpath('//*[@placeholder="Username"]').type('invalidUser')
        cy.xpath('//*[@placeholder="Password"]').type('invalidPassword')
        cy.get('.el-button').click()

        // Check if the error message is displayed
        // cy.get('.error-message').should('be.visible')
        //     .and('contain', 'User not found')

    })
  
    it('Using Valid ZSL Login Credentials', () => {

        cy.visit('https://dev.zsl-admin.pages.dev/')

        cy.xpath('//*[@placeholder="Username"]').type('admin')
        cy.xpath('//*[@placeholder="Password"]').type('admin@admin.com')
        cy.get('.el-button').click()

        // Check if the title is correct
        // cy.title().should('eq', 'Expected Title')

    })
})