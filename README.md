# Cypress e-Commerce Testing framework using (POM)

This project automates the end-to-end testing of an e-commerce application using Cypress with a Page Object Model (POM) design pattern. It covers all major functional flows including negative test cases with assertions.

## 🚀 Features

- **Complete E-Commerce Flow Automation** - From login/registration to checkout
- **Page Object Model** - Design pattern for maintainable and scalable tests
- **Comprehensive Test Coverage** - Including negative test cases
- **GitHub Actions CI/CD** - Integration for automated testing on push
- **Data-Driven Testing** - Using JSON fixtures
- **Cross-Browser Testing** - Using Scripts

## ✅ What’s Covered

The automation suite includes the following modules:

1. **Login** – Valid & invalid login and validation errors  
2. **Registration** – New user sign-up and validation errors  
3. **Header** – Logo, navigation links, redirection  
4. **Search & Add to Cart** – Search for products and add to cart  
5. **Cart Page** – Verify items, quantity, price  
6. **Checkout** – Complete checkout process  

## Testing Types:  
- End-to-End Testing 
- Sanity Testing
- Regression Testing 
- Assertions for validation  
- Negative Testing  


## 📂 Project Structure
  
**e2e/**

├── **PageObjectFiles/**  #All Page Object classes | Contains locators | Test Methods

    │ ├── Auth 
        │ ├── loginPage.js
        │ ├── registerPage.js
        
    │ ├── headerPage.js
    │ ├── AddToCartPage.js
    │ ├── CartPage.js
    │ └── CheckoutPage.js    
    │ └── GeneralPage.js
    
├── **TestScriptFiles/**     #All test files | Calling test methods | Passing test data from fixtures | Validating Assertions 

    │ ├── LoginTest.spec.js
    │ ├── RegisterTest.spec.js
    │ ├── header.spec.js
    │ ├── AddToCartTest.spec.js
    │ ├── CartTest.spec.js
    │ └── CheckoutTest.spec.js
    
**fixtures/**

    ├── header.json # Contains menu name & path parameter
    ├── loginData.json # Contains valid & invalid user credentials & error messages for assertions
    ├── productData.json # Contains product details & success/error messages for assertions 
    ├── registerData.json # Contains new user data & success/error messages for assertions
    ├── shipmentData.json # Contains user shipping address

**support/** 
 
    │ ├── command.js    #defined login method
    
**cypress.config.js**     #Cypress configuration & includes BaseUrl, Env Variable for page links

**package.json**   #Project dependencies & scripts
 


## 🧪 Test Coverage

### 1. Login Page
- Valid login 
- Invalid login attempts (negative testing)
- Assertions


### 2. Registration Page
- New user registration
- Validation of mandatory fields
- Existing user validation
- Assertions

### 3. Header Section
- Logo verification
- Navigation links validation
- Search functionality



### 4. Search & Add to Cart
- Product search functionality
- Search results validation
- Adding products to cart


### 5. Cart Page
- Verify product is added into cart
- Verify product details Name/price/Quantity
- Product removal from cart


### 6. Checkout Process
- Add Address details
- Payment method selection
- Order confirmation

## 🚀 GitHub Actions (CI/CD)

- Integrated with GitHub Actions

- Runs Cypress tests automatically whenever new code is pushed

- Workflows (.github/workflows/build.yml):

## 👨‍💻 Author
### Waleed Hassan | Senior QA Engineer 


