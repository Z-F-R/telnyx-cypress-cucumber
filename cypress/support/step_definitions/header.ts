import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import Header from "../../pages/components/Header";

Given("the Telnyx logo is visible in the header", () => {
    Header.getLogo().should("be.visible");
});

When("I click the Telnyx logo", () => {
    Header.clickLogo();
});

Then("the header navigation should contain the following items:", (dataTable: DataTable) => {
    Header.getMenu().should("be.visible");
    dataTable.raw().forEach(([item]) => {
        Header.getMenuButton(item).should("be.visible");
    });
});

Given("the {string} header dropdown is open", (name: string) => {
    Header.openMenu(name);
    Header.getMenuButton(name).should("have.attr", "aria-expanded", "true");
});

When("I open the {string} header dropdown", (name: string) => {
    Header.openMenu(name);
});

Then("the {string} header dropdown should be expanded", (name: string) => {
    Header.getMenuButton(name).should("have.attr", "aria-expanded", "true");
});

Then("the {string} header dropdown should be collapsed", (name: string) => {
    Header.getMenuButton(name).should("have.attr", "aria-expanded", "false");
});
