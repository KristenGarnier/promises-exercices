import { describe, test, expect, vi } from 'vitest';
import importedFunction from './5.js';

describe('Transform steps', () => {
	test('La fonction devrait renvoyer la longeur et le nombre de caracteres en majuscules au format mot:longueur:caracteresEnMajuscule : minuscules et majuscules', async () => {
		const result = await importedFunction('PisTon');
		expect(result).toBe('PisTon:6:2');
	});

	test('La fonction devrait renvoyer la longeur et le nombre de caracteres en majuscules au format mot:longueur:caracteresEnMajuscule : uniquement minuscules', async () => {
		const result = await importedFunction('dirtbag');
		expect(result).toBe('dirtbag:7:0');
	});

	test('La fonction devrait renvoyer la longeur et le nombre de caracteres en majuscules au format mot:longueur:caracteresEnMajuscule : Uniquement majuscules', async () => {
		const result = await importedFunction('CHIPS');
		expect(result).toBe('CHIPS:5:5');
	});

	test('La fonction devrait renvoyer la longeur et le nombre de caracteres en majuscules au format mot:longueur:caracteresEnMajuscule : Devrait fonctionner avec des espaces', async () => {
		const result = await importedFunction('M iHe Leo ZHo');
		expect(result).toBe('MiHeLeoZHo:10:5');
	});
});
