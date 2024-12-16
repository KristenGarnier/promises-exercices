import { describe, test, expect, vi } from 'vitest';
import importedFunction from './1.js';

describe('Simple promise', () => {
	test('Au bout de deux secondes la fonction devrait retourner un resolve avec "Bonjour !"', async () => {
		vi.useFakeTimers();
		const promise = importedFunction();
		vi.advanceTimersByTime(1000);
		const result = await promise;
		expect(result).toBe('Bonjour !');
		vi.useRealTimers();
	});
});
