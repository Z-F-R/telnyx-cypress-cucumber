import { When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pages/HomePage";

When("I scroll to the footer", () => {
    HomePage.getFooter().scrollIntoView();
});

Then("the footer should be visible", () => {
    HomePage.getFooter().should("be.visible");
});

Then("the footer should contain the following sections:", (dataTable: DataTable) => {
    dataTable.raw().forEach(([section]) => {
        HomePage.getFooterSection(section).should("be.visible");
    });
});

Then("the footer should contain visible social links:", (dataTable: DataTable) => {
    dataTable.hashes().forEach(({ url }) => {
        HomePage.getSocialLink(url).should("be.visible");
    });
});

Then("the following footer social links should open in a new tab:", (dataTable: DataTable) => {
    dataTable.hashes().forEach(({ url }) => {
        HomePage.getSocialLink(url).should("have.attr", "target", "_blank");
    });
});
