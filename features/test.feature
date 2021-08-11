Feature: gla-test

Background:
    Given disable the waiting for Angular
    Given we open "https://www.epam.com/careers" page
    
Scenario: verify that page is epam
    When page should be "https://www.epam.com/careers"

    