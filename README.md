# API Automation with Playwright JS - Workshop

Welcome to the **API Automation with Playwright JS** workshop!  
This workshop will introduce you to Playwright, a powerful automation tool, and how to use it for API testing.  

## 1. Introduction to Playwright and API Testing

**Playwright** is a modern automation framework designed for web testing. While it is primarily known for browser automation, it also provides a robust API testing feature, allowing testers to send HTTP requests and validate responses.  

API testing is crucial for verifying the functionality, reliability, and security of backend services. With Playwright, you can perform API requests, assert responses, and integrate these tests into your automation suite.

## 2. Setting Up the Environment

To get started, follow these steps to set up your environment:

### 2.1 Download VS Code
Download and install [Visual Studio Code](https://code.visualstudio.com/) as your code editor.

### 2.2 Download Node.js
Download and install [Node.js](https://nodejs.org/) (LTS version recommended).

### 2.3 Clone the Repository
Clone the workshop repository using the following command:
```sh
git clone https://github.com/DaliborQA/api-workshop.git
```

### 2.4 Install Playwright
Navigate to the project directory and install Playwright by running:
```sh
npm init playwright@latest
```
Follow the prompts to set up Playwright.

## 3. Introduction to API Automation with Playwright JS

Playwright’s `request` module allows us to perform API testing easily.  

Here’s a basic example:

- Create a test using Playwright’s `test` function.
- Use `request.newContext()` to create a new request context.
- Send a `GET` request and store the response.
- Validate the response status.
- Parse and log the JSON response.

Example:
```javascript
import { test, expect, request } from '@playwright/test';

const base_url = 'https://jsonplaceholder.typicode.com';

test('Get a resource', async () => {
    const context = await request.newContext();
    const response = await context.get(`${base_url}/posts/1`);

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    console.log(responseBody);
});
```

## 4. Examples of API Tests

Below are additional examples of API tests using Playwright:

### 4.1 Testing a POST Request
```javascript
test('Create a new resource', async () => {
    const context = await request.newContext();
    const response = await context.post(`${base_url}/posts`, {
        data: {
            title: 'New Post',
            body: 'This is a new post',
            userId: 1
        }
    });

    expect(response.status()).toBe(201);
    const responseBody = await response.json();
    console.log(responseBody);
});
```

### 4.2 Testing a PUT Request
```javascript
test('Update a resource', async () => {
    const context = await request.newContext();
    const response = await context.put(`${base_url}/posts/1`, {
        data: {
            id: 1,
            title: 'Updated Title',
            body: 'Updated body content',
            userId: 1
        }
    });

    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log(responseBody);
});
```

### 4.3 Testing a DELETE Request
```javascript
test('Delete a resource', async () => {
    const context = await request.newContext();
    const response = await context.delete(`${base_url}/posts/1`);

    expect(response.status()).toBe(200);
});
```

## Conclusion

By the end of this workshop, you should have a basic understanding of:
- Setting up Playwright for API automation.
- Writing API tests using Playwright’s `request` module.
- Performing GET, POST, PUT, and DELETE requests.

This repository contains sample test scripts to help you get started.  
Happy testing! 🚀
