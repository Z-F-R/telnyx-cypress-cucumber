import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pages/HomePage";

Then("the Telnyx logo should be visible and link to the homepage", () => {
    HomePage.getLogo().should("be.visible").and("have.attr", "href", "/");
});

When("I click the Telnyx logo", () => {
    HomePage.clickLogo();
});
