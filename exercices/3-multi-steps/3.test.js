import { describe, test, expect, vi } from 'vitest';
import importedFunction from './3.js';

describe('Multi steps', () => {
	test('La fonction devrait effectuer correctement la chaine', async () => {
		const result = await importedFunction();
		expect(result).toBe(30); // 5 * 2 * 3
	});
});
