import { describe, test, expect, vi, afterAll } from 'vitest';
import importedFunction from './7.js';

import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

export const handlers = [
	// Intercept "GET https://example.com/user" requests...
	http.get('https://jsonplaceholder.typicode.com/posts/1', () => {
		// ...and respond to them using this JSON response.
		return HttpResponse.json({
			userId: 1,
			id: 1,
			title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
			body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
		});
	}),
];

export const server = setupServer(...handlers);
server.listen();

describe('Fetch', () => {
	test("La fonction renvoie le titre de l'api", async () => {
		const result = await importedFunction();
		expect(result).toBe(
			'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
		);
	});

	afterAll(() => server.close());
});
