class HomePage {
    // Locators
    getLogo() {
        return cy.get('#site-header a[href="/"]').filter(":visible").first();
    }

    getHeaderMenu() {
        return cy.get("#main-menu");
    }

    getMenuButton(name: string) {
        return this.getHeaderMenu().contains("button", name);
    }

    getSignUpLink() {
        return cy.get('#site-header a[href="/sign-up"]').filter(":visible").first();
    }

    getLogInLink() {
        return cy.get('#site-header a[href="https://portal.telnyx.com"]').filter(":visible").first();
    }

    getViewAllPricingLink() {
        return cy.get('#main-menu a[href="/pricing"]').filter(":visible").first();
    }

    getFooter() {
        return cy.get("#site-footer");
    }

    // The footer also contains a hidden alternative layout with the same
    // content, so only visible elements are taken into account
    getFooterSection(name: string) {
        return this.getFooter().find("p").filter(":visible").contains(name);
    }

    getSocialLink(url: string) {
        return this.getFooter().find(`a[href="${url}"]`).filter(":visible");
    }

    getMobileMenuButton() {
        return cy.get('button[aria-controls="main-menu-content"]');
    }

    // Actions
    visit() {
        cy.visit("/");
    }

    clickLogo() {
        this.getLogo().click();
    }

    openMenu(name: string) {
        this.getMenuButton(name).click();
    }

    clickSignUp() {
        this.getSignUpLink().click();
    }

    clickLogIn() {
        // The portal opens in a new tab, which Cypress cannot follow
        this.getLogInLink().invoke("removeAttr", "target").click();
    }

    clickViewAllPricing() {
        this.getViewAllPricingLink().click();
    }

    openMobileMenu() {
        this.getMobileMenuButton().click();
    }
}

export default new HomePage();
