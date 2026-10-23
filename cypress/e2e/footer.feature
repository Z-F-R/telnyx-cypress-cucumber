@regression
Feature: Footer

  Background:
    Given I open the Telnyx homepage

  @TC-008
  Scenario: Footer sections are displayed
    Then the footer should be visible
    And the footer should contain the following sections:
      | Social    |
      | Company   |
      | Resources |
      | Compare   |

  @TC-009
  Scenario: Social media links have expected destinations
    Then the footer should contain visible social links:
      | https://www.linkedin.com/company/telnyx |
      | https://www.facebook.com/Telnyx/        |
      | https://x.com/telnyx                    |

  @TC-010
  Scenario: Social media links open in a new tab
    Then the following footer social links should open in a new tab:
      | https://www.linkedin.com/company/telnyx |
      | https://www.facebook.com/Telnyx/        |
      | https://x.com/telnyx                    |
