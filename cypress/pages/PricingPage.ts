class PricingPage {
    // Locators
    getHeading() {
        return cy.get("h1");
    }

    getSection(name: string) {
        return cy.contains("h3", name);
    }

    // Actions
    visit() {
        cy.visit("/pricing");
    }
}

export default new PricingPage();
