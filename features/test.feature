Feature: gla-test

    Background:
        * disable the waiting for Angular
        * we open "https://www.epam.com/careers" page

    Scenario Outline: positive & negative scenarios
        * page should be "https://www.epam.com/careers"
        * type <text> to Keyword field
        * click Find-button
        * text of searching result should be <expectedResult>

        Examples:
            | text         | expectedResult                                                            |
            | "JavaScript" | "WE FOUND 1 JOB OPENING RELATED TO "JAVASCRIPT""                          |
            | "123"        | "Sorry, your search returned no results. Please try another combination." |

