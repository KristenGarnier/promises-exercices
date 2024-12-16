import { describe, test, expect, vi } from 'vitest';
import importedFunction from './2.js'

describe('Catching errors', () => {
  test('Au bout d une seconde la fonction devrait retourner un reject avec "Une erreur est survenue"', async () => {
    vi.useFakeTimers();
    const promise = importedFunction();
    vi.advanceTimersByTime(1000);
    expect(async () => await promise).rejects.toThrow("Une erreur est survenue");
    vi.useRealTimers();
  });
});
