import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pages/HomePage";

Given("I open the Telnyx homepage", () => {
    HomePage.visit();
});

Then("I should be on the homepage", () => {
    cy.url().should("eq", `${Cypress.config("baseUrl")}/`);
});

Then("the URL should contain {string}", (path: string) => {
    cy.url().should("include", path);
});

Then("the page title should contain {string}", (expectedTitle: string) => {
    cy.title().should("contain", expectedTitle);
});

Then("the page heading should contain {string}", (text: string) => {
    cy.get("h1").should("be.visible").and("contain.text", text);
});
