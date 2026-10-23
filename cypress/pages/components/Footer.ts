// Site footer, shown on every page
class Footer {
    // Locators
    getFooter() {
        return cy.get("#site-footer").scrollIntoView();
    }

    // The footer also contains a hidden alternative layout with the same
    // content, so only visible elements are taken into account
    getSection(name: string) {
        return this.getFooter().find("p").filter(":visible").contains(name);
    }

    getSocialLink(url: string) {
        return this.getFooter().find(`a[href="${url}"]`).filter(":visible");
    }
}

export default new Footer();
