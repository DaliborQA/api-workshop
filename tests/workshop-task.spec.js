import {test, expect, request} from '@playwright/test';

// Task:
// Use the free API's from: https://github.com/15Dkatz/official_joke_api
// 1. Write a test using a get request to get a joke
// 2. Validate the body of the response

// Explore the API's
// What can be done using this API:
// - Get a random joke
// - Get joke types
// - Get any number of random jokes
// - Get jokes by type
// - Get jokes by Id