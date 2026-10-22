import { When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pages/HomePage";

Then("the header navigation should contain the following items:", (dataTable: DataTable) => {
    HomePage.getHeaderMenu().should("be.visible");
    dataTable.raw().forEach(([item]) => {
        HomePage.getMenuButton(item).should("be.visible");
    });
});

When("I open the {string} header dropdown", (name: string) => {
    HomePage.openMenu(name);
});

Then("the {string} header dropdown should be expanded", (name: string) => {
    HomePage.getMenuButton(name).should("have.attr", "aria-expanded", "true");
});

Then("the {string} header dropdown should be collapsed", (name: string) => {
    HomePage.getMenuButton(name).should("have.attr", "aria-expanded", "false");
});
