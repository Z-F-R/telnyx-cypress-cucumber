// Errors thrown by telnyx.com itself, not by the tests:
// - document.modelContext: the browser rejects it with a SecurityError because
//   Cypress enables document.domain.
// - "Script error.": third-party cross-origin scripts (analytics, trackers);
//   the browser hides their real message.
const IGNORED_APP_ERRORS = ["document.modelContext", "Script error."];

Cypress.on("uncaught:exception", (err: Error) => {
    if (IGNORED_APP_ERRORS.some((text) => err.message.includes(text))) {
        return false;
    }
});

// The OneTrust cookie banner overlaps page elements and does not show up in
// every region. These cookies tell OneTrust the visitor has already answered
// it, accepting only the strictly necessary group (C0001), so the banner is
// not rendered and analytics scripts stay off.
const CONSENT = new URLSearchParams({
    isGpcEnabled: "0",
    datestamp: new Date().toString(),
    isIABGlobal: "false",
    hosts: "",
    interactionCount: "1",
    landingPath: "NotLandingPage",
    groups: "C0001:1,C0002:0,C0003:0,C0004:0",
    AwaitingReconsent: "false",
}).toString();

beforeEach(() => {
    cy.setCookie("OptanonAlertBoxClosed", new Date().toISOString(), { domain: ".telnyx.com" });
    cy.setCookie("OptanonConsent", CONSENT, { domain: ".telnyx.com" });
});
