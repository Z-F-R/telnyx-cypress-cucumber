import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Header from "../../pages/components/Header";
import PortalLoginPage from "../../pages/PortalLoginPage";

When("I start the sign up", () => {
    Header.getSignUpLink().should("have.attr", "href", "/sign-up");
    Header.clickSignUp();
});

Given("the Log in link points to {string}", (url: string) => {
    Header.getLogInLink().should("be.visible").and("have.attr", "href", url);
});

When("I go to log in", () => {
    Header.clickLogIn();
});

Then("the Telnyx portal sign in page should be opened", () => {
    cy.origin(
        PortalLoginPage.url,
        { args: { selector: PortalLoginPage.titleSelector } },
        ({ selector }: { selector: string }) => {
            // The portal throws its own error with an empty message while loading.
            // Handlers from support/e2e.ts do not apply to another origin.
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
