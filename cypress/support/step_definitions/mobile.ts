import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pages/HomePage";

Given("I open the Telnyx homepage on a {int}x{int} screen", (width: number, height: number) => {
    cy.viewport(width, height);
    HomePage.visit();
});

Then("the mobile menu button should be visible", () => {
    HomePage.getMobileMenuButton().should("be.visible");
});

Then("the mobile menu should be closed", () => {
    HomePage.getMobileMenuButton().should("have.attr", "aria-expanded", "false");
});

When("I tap the mobile menu button", () => {
    HomePage.openMobileMenu();
});

Then("the mobile menu should be open", () => {
    HomePage.getMobileMenuButton().should("have.attr", "aria-expanded", "true");
    cy.get("#main-menu-content").should("be.visible");
});
