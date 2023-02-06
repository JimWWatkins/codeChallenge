# codeChallenge

## How to run tests:
    1.  Clone repro
    2.  cd to repro location
    3.  cd codeChallenge/e2e
    4.  yarn run cucumber

## Thought process:
    My strategy for automation is that the tests should be clear, as concise as possible, and reliable. In this case 
    I decided to use Cucumber with Gherkin syntax for clarity of each tests purpose. In general I try and think as 
    automation being a benefit to the end user. In this way I think it's important to automation user flows which 
    would most greatly impact the user experience. For example, login flows, basic site navigation, etc.  Automated 
    tests can also be very useful in protecting against regression as when bugs are found a test can be created 
    immediately.  This not only will protect against it showing up in the future, but also allows the developer to 
    practice TDD.

## Things I would change from this code:
    1. Create helper functions to reduce the need for waits/timeouts/etc. and ensure tests reliability
    2. With more tests employ the page object pattern and have Given/When/Then methods on each corresonding page.
    3. Add tags to the tests so groups of tests could be run separately
    4. Adding further browsers (Safari, Firefox, Edge) and browser capabilities (ability to run headless, in
    parallel, etc.).
    5. Side note: When I know a developer is going to review my work I typically make granular commits to make
    it easier.  In this case I committed all the code at the end.
