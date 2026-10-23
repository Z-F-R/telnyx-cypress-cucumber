import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pages/HomePage";
import PortalLoginPage from "../../pages/PortalLoginPage";

When("I click the Sign up link in the header", () => {
    HomePage.clickSignUp();
});

Then("the Log in link should point to {string}", (url) => {
    HomePage.getLogInLink().should("be.visible").and("have.attr", "href", url);
});

When("I click the Log in link in the header", () => {
    HomePage.clickLogIn();
});

Then("the Telnyx portal sign in page should be opened", () => {
    cy.origin(
        PortalLoginPage.url,
        { args: { selector: PortalLoginPage.titleSelector } },
        ({ selector }: { selector: string }) => {
            // The portal throws its own error with an empty message while loading.
            // Handlers from support/e2e.js do not apply to another origin.
            Cypress.on("uncaught:exception", (err: Error) => {
                if (!err.message || err.message === "null") {
                    return false;
                }
            });
            cy.url().should("include", "portal.telnyx.com");
            cy.get(selector).should("be.visible");
        },
    );
});
