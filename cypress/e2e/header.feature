@regression
Feature: Header navigation

  Background:
    Given I open the Telnyx homepage

  @smoke @TC-003
  Scenario: Primary header navigation items are visible
    Then the header navigation should contain the following items:
      | Products   |
      | Solutions  |
      | Pricing    |
      | Why Telnyx |
      | Resources  |
      | Developers |

  @TC-013
  Scenario: Opening another header dropdown closes the previous one
    Given the "Products" header dropdown is open
    When I open the "Solutions" header dropdown
    Then the "Solutions" header dropdown should be expanded
    And the "Products" header dropdown should be collapsed
