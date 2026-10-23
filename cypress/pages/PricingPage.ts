import BasePage from "./BasePage";

class PricingPage extends BasePage {
    constructor() {
        super("/pricing");
    }

    // Locators
    getSection(name: string) {
        return cy.contains("h3", name);
    }
}

export default new PricingPage();
