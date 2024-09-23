# Test Automation Project Using Playwright/Javascript
## 1. Overview

Basic automation tests using playwright and javascript to test out some functionalities of swag labs website.

## 2. Features

### 2.1 Page Object Models (POM) 

### 2.2 Testing done using data files

### 2.3 Result logging

## 3. Test Scenarios

### 3.1 Test login functionality

**Steps:**

1. Create POM Class for login page.
2. Retrieve test data from an external source.
3. Create Tests using Page class and its methods to login.
   - Log in.
   - Verify the success of login.
   - Log the results.

### 3.2 Test add to cart functionality


**Steps:**

1. Create POM for home page.
2. Create POM for add to cart page.
3. Retrieve product data from a json file.
5. Create test that preforms these actions:
   - Log in.
   - Add all products from the json file to cart.
   - Verify if the correct products are added.
   - Remove all products from cart.
   - Log the results.

### 3.3 Test check out functionality


**Steps:**

1. Create POM Class for checkout page.
2. Retrieve check out info from a json file.
3. Create test that preforms these actions:
   - Navigates to check out.
   - Fills out the needed infomation for check out form from json file.
   - Verify that the check out is sucessfull.
   - Log the results.
     
## 4. How to replicate
- copy the repository
- npm install
- npx playwright test --project=chromium
