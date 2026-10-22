import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pages/HomePage";
import PricingPage from "../../pages/PricingPage";

Given("I open the pricing page", () => {
    PricingPage.visit();
});

When("I click the link to view all pricing", () => {
    HomePage.clickViewAllPricing();
});

Then("the pricing page heading should be displayed", () => {
    PricingPage.getHeading().should("be.visible").and("not.be.empty");
});

Then("the following pricing sections should be displayed:", (dataTable: DataTable) => {
    dataTable.raw().forEach(([section]) => {
        PricingPage.getSection(section).scrollIntoView().should("be.visible");
    });
});
