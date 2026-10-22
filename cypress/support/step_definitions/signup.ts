import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SignUpPage from "../../pages/SignUpPage";

Given("I open the sign up page", () => {
    SignUpPage.visit();
    SignUpPage.getEmailInput().should("be.visible");
});

When("I enter {string} as the work email", (email: string) => {
    SignUpPage.typeEmail(email);
});

When("I accept the terms and conditions", () => {
    SignUpPage.acceptTerms();
});

When("I click Create account", () => {
    SignUpPage.clickCreateAccount();
});

Then("the email error {string} should be displayed", (message: string) => {
    // The message element also holds an "error" icon, so the text is not exact
    SignUpPage.getEmailError().should("be.visible").and("contain.text", message);
});

Then("the terms error {string} should be displayed", (message: string) => {
    SignUpPage.getTermsError().should("be.visible").and("contain.text", message);
});
