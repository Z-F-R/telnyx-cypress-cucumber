@regression
Feature: Footer

  Background:
    Given I open the Telnyx homepage
    When I scroll to the footer

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
      | network  | url                                     |
      | LinkedIn | https://www.linkedin.com/company/telnyx |
      | Facebook | https://www.facebook.com/Telnyx/        |
      | X        | https://x.com/telnyx                    |

  @TC-010
  Scenario: Social media links open in a new tab
    Then the following footer social links should open in a new tab:
      | network  | url                                     |
      | LinkedIn | https://www.linkedin.com/company/telnyx |
      | Facebook | https://www.facebook.com/Telnyx/        |
      | X        | https://x.com/telnyx                    |
