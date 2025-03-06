import {test, expect, request} from '@playwright/test';

const base_url = 'https://jsonplaceholder.typicode.com'

test('Get a resource', async () => {
    const context = await request.newContext();

    const response = await context.get(`${base_url}/posts/1`)

    expect(response.status()).toBe(200);
    
    const responseBody = await response.json();
    console.log(responseBody);
})