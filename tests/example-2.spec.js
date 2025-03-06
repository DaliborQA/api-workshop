import {test, expect, request} from '@playwright/test';

const base_url = 'https://jsonplaceholder.typicode.com'

test('Create a new resource', async () => {
    const context = await request.newContext();

    const response = await context.post(`${base_url}/posts`, {
        data: {
            title: 'Testing post request',
            body: 'Dalibor',
            userId: 1,
        }
    })

    expect(response.status()).toBe(201);

    const jsonResponse = await response.json();
    const resourceId = jsonResponse.id;

    console.log(jsonResponse, '\n');
    console.log('The Id of the added object is: ', resourceId, '\n');
})

test('Update a resource', async () => {
    const context = await request.newContext();

    const response = await context.patch(`${base_url}/posts/1`, {
        data: {
            title: 'Updated object',
            body: 'New body updated by the patch request',
            userId: 1,
        }
    })

    expect(response.status()).toBe(200);

    const jsonResponse = await response.json();

    console.log(jsonResponse, '\n');
    expect(jsonResponse.body).toBe('New body updated by the patch request');
    expect(jsonResponse.title).toBe('Updated object');
})

test('Delete a resource', async () =>{
    const context = await request.newContext();

    const response = await context.delete(`${base_url}/posts/1`)
    
    expect(response.status()).toBe(200);
})