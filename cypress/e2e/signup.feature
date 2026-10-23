@regression
Feature: Sign up form validation

  Background:
    Given I open the sign up page

  @TC-014
  Scenario: Required-field validation
    When I submit the sign up form
    Then the email error "Please enter an email address." should be displayed
    And the terms error "You must accept the Terms and Conditions." should be displayed

  @TC-015
  Scenario: Invalid email validation
    Given I accept the terms and conditions
    When I enter "test@examplecom" as the work email
    And I submit the sign up form
    Then the email error "Please enter a valid email address." should be displayed
