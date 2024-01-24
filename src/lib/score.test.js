import { describe, expect, it } from '@jest/globals';
import { calculateStandings } from './score';

describe('score', () => {
  describe.only('calculateStandings', () => {
    it('should have a test', () => {
      expect(calculateStandings([])).toBe(0);
    });
  });
});
