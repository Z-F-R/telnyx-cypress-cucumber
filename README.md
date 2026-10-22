# Telnyx Cypress Cucumber Automation

UI automation project for testing the [Telnyx](https://telnyx.com/) website using Cypress, TypeScript, Cucumber (Gherkin), GitHub Actions and GitHub Pages.

* Test plan with 15 test cases: [docs/telnyx-test-plan.xlsx](docs/telnyx-test-plan.xlsx)
* Latest test report: https://z-f-r.github.io/telnyx-cypress-cucumber/

## Tech Stack

* **Cypress** — UI test automation framework
* **Cucumber (Gherkin)** — BDD scenarios via `@badeball/cypress-cucumber-preprocessor`
* **esbuild** — bundler for feature files and step definitions
* **TypeScript** — programming language
* **Cucumber HTML Report** — test reporting
* **GitHub Actions** — CI pipeline
* **GitHub Pages** — report hosting

## Project Structure

```text
telnyx-cypress-cucumber/
├── .github/
│   └── workflows/
│       └── e2e.yml
├── cypress/
│   ├── e2e/
│   │   ├── auth.feature
│   │   ├── footer.feature
│   │   ├── header.feature
│   │   ├── homepage.feature
│   │   ├── mobile.feature
│   │   ├── pricing.feature
│   │   └── signup.feature
│   ├── pages/
│   │   ├── HomePage.ts
│   │   ├── PortalLoginPage.ts
│   │   ├── PricingPage.ts
│   │   └── SignUpPage.ts
│   └── support/
│       ├── e2e.ts
│       └── step_definitions/
│           ├── auth.ts
│           ├── common.ts
│           ├── footer.ts
│           ├── header.ts
│           ├── homepage.ts
│           ├── mobile.ts
│           ├── pricing.ts
│           └── signup.ts
├── docs/
│   └── telnyx-test-plan.xlsx
├── .gitignore
├── cypress.config.ts
├── cypress.ci.config.ts
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json
```

## Installation

### Prerequisites

* Node.js 24+
* npm
* Google Chrome

Install project dependencies:

```bash
npm ci
```

## Running Tests

### Run all tests in Chrome

```bash
npm test
```

### Run smoke tests

```bash
npm run test:smoke
```

### Run tests with the CI config

```bash
npm run test:ci
```

### Check types

```bash
npm run typecheck
```

### Open Cypress UI

```bash
npm run cy:open
```

### Run a single test case

```bash
npx cypress run --browser chrome --expose tags=@TC-005
```

## Tags

Every scenario is tagged, so any subset of the suite can be run with `--expose tags=...`:

* `@TC-001` ... `@TC-015` — test case ID from the test plan
* `@smoke` — critical checks (6 scenarios)
* `@regression` — the full suite

Cypress 16 passes plugin settings through `expose`, so tags are set with `--expose tags=...`, not `--env`.

## Configurations

* `cypress.config.ts` — base config for local runs: base URL, viewport, timeouts, retries and the Cucumber preprocessor.
* `cypress.ci.config.ts` — config for GitHub Actions. It extends the base config with longer timeouts for the slower shared runner and turns videos off.

The config is selected with `--config-file`:

```bash
npx cypress run --config-file cypress.ci.config.ts
```

## Cucumber Report

After every run the Cucumber HTML report is generated at:

```text
reports/index.html
```

Open it in a browser to see each feature, scenario and step with its status and duration.

## CI/CD

The project uses GitHub Actions for automated test execution on every push and pull request to `main`, and on manual start.

The workflow:

1. Checks out the repository.
2. Installs dependencies.
3. Checks TypeScript types.
4. Runs the test suite in Chrome with `cypress.ci.config.ts`.
5. Uploads screenshots of failed tests as an artifact.
6. Publishes the Cucumber HTML report to GitHub Pages (also when tests fail).

The workflow is located at:

```text
.github/workflows/e2e.yml
```

## Test Coverage

The test suite contains **15 UI test cases** covering:

* Home page loading and page title
* Logo navigation
* Header navigation menu
* Header dropdown behavior
* Sign-up navigation
* Login navigation to the Telnyx portal
* Pricing page and pricing plans
* Footer sections
* Social media links
* Responsive/mobile navigation
* Sign-up form required field validation
* Email validation

## Page Object Model

The project follows the **Page Object Model (POM)** pattern.

Page-specific locators and actions are encapsulated inside dedicated page classes. Step definitions use these classes, so feature files describe business behavior and locators live in one place.

## Site Specifics

* **Cookie banner** — before each test the OneTrust consent cookies are set (strictly necessary cookies only), so the banner is not rendered and does not overlap page elements.
* **Known site errors** — errors thrown by telnyx.com itself (`document.modelContext`, third-party `Script error.`) are ignored, so they do not fail the tests.
* **Portal** — the Log in link leads to `portal.telnyx.com`, which is checked inside `cy.origin`.
