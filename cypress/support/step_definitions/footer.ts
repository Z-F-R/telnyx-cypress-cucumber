import { Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import Footer from "../../pages/components/Footer";

Then("the footer should be visible", () => {
    Footer.getFooter().should("be.visible");
});

Then("the footer should contain the following sections:", (dataTable: DataTable) => {
    dataTable.raw().forEach(([section]) => {
        Footer.getSection(section).should("be.visible");
    });
});

Then("the footer should contain visible social links:", (dataTable: DataTable) => {
    dataTable.raw().forEach(([url]) => {
        Footer.getSocialLink(url).should("be.visible");
    });
});

Then("the following footer social links should open in a new tab:", (dataTable: DataTable) => {
    dataTable.raw().forEach(([url]) => {
        Footer.getSocialLink(url).should("have.attr", "target", "_blank");
    });
});
