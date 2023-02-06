Feature: As a user I expect to be able to navigate the Amazon homepage

    Scenario: As a user I expect to be able to see the Amazon logo
        Given I am on the home page
        Then the logo should be displayed

    Scenario: As a user I expect to be able to search for a specific item
        Given I am on the home page
        When I search for an "Xbox Series X"
        Then the fist search result should include "Xbox Series X"

    Scenario: As a user I expect to be able to search for an item and see it's price
        Given I am on the home page
        When I search for an "Xbox One X Fallout 76 Console"
        Then the price is equal to "$559.99"

    Scenario: As a Spanish language user I expect to be able to change the homepage to be in Spanish
        Given I am on the home page
        When I click on the language header link
        And I chose to view the homepage in "español"
        Then the homepage location selector displays "Elige tu dirección"

    Scenario: As a user I expect to be able to login
        Given I am on the home page
        When I login with email "ltlife6477+test1@gmail.com" and password "test1234"
        Then I should see my username "TestUser" logged in on the homepage

    Scenario: As a user I expect to be able to remove a user profile
        Given I am on the home page
        And I login with email "ltlife6477+test1@gmail.com" and password "test1234"
        When I remove user profile "TestUser3"
        Then the "TestUser3" profile is not shown under user profiles
 
        