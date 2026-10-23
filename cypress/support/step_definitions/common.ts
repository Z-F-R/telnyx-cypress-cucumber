import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pages/HomePage";
import Header from "../../pages/components/Header";

Given("I open the Telnyx homepage", () => {
    HomePage.visit();
});

Then("I should be on the homepage", () => {
    cy.url().should("eq", `${Cypress.config("baseUrl")}/`);
    // cy.visit() only proves the server answered, so check the page rendered
    Header.getHeader().should("be.visible");
    HomePage.getHeading().should("be.visible");
});

Then("the URL should contain {string}", (path: string) => {
    cy.url().should("include", path);
});

Then("the page title should contain {string}", (expectedTitle: string) => {
    cy.title().should("contain", expectedTitle);
});
