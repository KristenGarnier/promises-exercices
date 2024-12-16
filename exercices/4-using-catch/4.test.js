import { describe, test, expect, vi } from 'vitest';
import importedFunction from './4.js';

describe('Using Catch', () => {
	test('La fonction devrait renvoyer le mot qui est fait passé', async () => {
		const result = await importedFunction('Piston');
		expect(result).toBe('Piston');
	});

	test('La fonction devrait renvoyer le mot qui est fait passé 2', async () => {
		const result = await importedFunction('Vettel');
		expect(result).toBe('Vettel');
	});

	test('La fonction devrait renvoyer le mot qui est fait passé 3', async () => {
		const result = await importedFunction('Honda');
		expect(result).toBe('Honda');
	});

	test('La fonction devrait renvoyer comme quoi il y a eu une erreur', async () => {
		const result = await importedFunction('Artichaud');
		expect(result).toBe('Le mot Artichaud est interdit');
	});
});
