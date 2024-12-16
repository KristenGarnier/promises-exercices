import { describe, test, expect, vi, afterAll } from 'vitest';
import importedFunction from './9.js';

import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

export const handlers = [
	// Intercept "GET https://example.com/user" requests...
	http.get('https://jsonplaceholder.typicode.com/posts/1', () => {
		// ...and respond to them using this JSON response.
		return HttpResponse.error(400, 'Payload not conform');
	}),
];

export const server = setupServer(...handlers);
server.listen();

describe('Fetch error', () => {
	test("La fonction devrait gérer correctement le fait qu'elle reçoit une erreur 400", async () => {
		const result = await importedFunction();
		expect(result).toEqual('Oh non une erreur !');
	});

	test("La fonction devrait gérer correctement le fait qu'elle reçoit une erreur 500", async () => {
		server.use(
			http.get('https://jsonplaceholder.typicode.com/posts/1', () => {
				// ...and respond to them using this JSON response.
				return HttpResponse.error(500, 'Internal server error');
			})
		);
		const result = await importedFunction();
		expect(result).toEqual('Oh non une erreur !');
	});

	afterAll(() => server.close());
});
