class PortalLoginPage {
    readonly url = "https://portal.telnyx.com";

    // Passed into cy.origin(), where Page Object methods are not available
    readonly titleSelector = '[data-testid="login.signin.title"]';
}

export default new PortalLoginPage();
