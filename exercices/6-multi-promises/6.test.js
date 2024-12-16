import { describe, test, expect, vi } from 'vitest';
import importedFunction from './6.js';

describe('Multi promises', () => {
	test("La fonction devrait renvoyer une réponse dans l'odre de résolution", async () => {
		vi.useFakeTimers();
		const promise = importedFunction();
		vi.advanceTimersByTime(1000);
		const result = await promise;
		expect(result).toBe('Je Suis Une Promise');
		vi.useRealTimers();
	});
});
