// Common parts of every page on telnyx.com
export default class BasePage {
    constructor(readonly path: string) {}

    // Locators
    getHeading() {
        return cy.get("h1").filter(":visible").first();
    }

    // Actions
    visit() {
        cy.visit(this.path);
    }
}
