Feature: gla-test

    Background:
        Given disable the waiting for Angular
        Given we open "https://www.epam.com/careers" page

    Scenario Outline: positive & negative scenarios
        When page should be "https://www.epam.com/careers"
        And type <text> to Keyword field
        And choose location
            | country | city  |
            | Belarus | Minsk |
        And choose skills
            | skill                     |
            | Software Test Engineering |
        Then click Find-button
        When text of searching result should be <expectedResult>
        Examples:
            | text         | expectedResult                                                            |
            | "JavaScript" | "WE FOUND 12 JOB OPENING RELATED TO "JAVASCRIPT" waiting for fail"        |
            | "123"        | "Sorry, your search returned no results. Please try another combination." |

