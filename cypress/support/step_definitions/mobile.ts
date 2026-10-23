import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pages/HomePage";
import Header from "../../pages/components/Header";

Given("I open the Telnyx homepage on a mobile device", () => {
    // iPhone X, 375 × 812
    cy.viewport("iphone-x");
    HomePage.visit();
});

Given("the mobile menu is closed", () => {
    Header.getMobileMenuButton().should("be.visible").and("have.attr", "aria-expanded", "false");
});

When("I open the mobile menu", () => {
    Header.openMobileMenu();
});

Then("the mobile menu should be open", () => {
    Header.getMobileMenuButton().should("have.attr", "aria-expanded", "true");
    Header.getMobileMenuContent().should("be.visible");
});
