Feature: gla-test

    Background:
        Given disable the waiting for Angular
        Given we open "https://www.epam.com/careers" page

    Scenario Outline: positive & negative scenarios
        When page should be "https://www.epam.com/careers"
        When type <text> to Keyword field

        Examples:
            | text         |
            | "JavaScript" |
            | "123"        |

