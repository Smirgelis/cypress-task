# QA Automation (Cypress) Developer Test
Task:
Create various automated Cypress tests for Dice on CSGORoll:
https://www.csgoroll.com/en/dice
Delivery:
Github, Gitlab, Bitbucket or any Git repository to share
Looking for usage (required):
Cypress
TypeScript
Important:
Clean/readable code and tests aren’t brittle (no XPath for instance)

Test ideas:
Bet +1 / +10 / 1/2 / X2 buttons work as expected
Roll under/over switch changes value
Dragging slider updates values inside inputs
Updating inputs makes other inputs update
Updating Rolls count in Spray mode updates button text
Intercept the bet list request (https://api-staging.csgoroll.com/graphql?operationName=DiceBets) and mock the response to have an empty list
of bets.
After that ensure that the list is not showing any bet.

P.S.: These test are automated:
Bet +1 / +10 / 1/2 / X2 buttons work as expected
Roll under/over switch changes value
Dragging slider updates values inside inputs
Updating inputs makes other inputs update
Updating Rolls count in Spray mode updates button text

P.S.S.: did not have time to refactor the test according to POM practices. 
Spent the time trying to complete graphQl task but still need more knowledge to complete.
