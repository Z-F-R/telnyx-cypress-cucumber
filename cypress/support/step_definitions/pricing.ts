import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import Header from "../../pages/components/Header";
import PricingPage from "../../pages/PricingPage";

Given("I open the pricing page", () => {
    PricingPage.visit();
});

When("I choose to view all pricing", () => {
    Header.getViewAllPricingLink().should("have.attr", "href", "/pricing");
    Header.clickViewAllPricing();
});

Then("the pricing page heading should be displayed", () => {
    PricingPage.getHeading().should("be.visible").and("not.be.empty");
});

Then("the following pricing sections should be displayed:", (dataTable: DataTable) => {
    dataTable.raw().forEach(([section]) => {
        PricingPage.getSection(section).scrollIntoView().should("be.visible");
    });
});
