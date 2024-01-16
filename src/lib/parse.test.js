import { describe, expect, it } from '@jest/globals';
import { parseTeamsJson } from './parse';

describe('parse', () => {
  describe.only('parseTeamsJson', () => {
    it('should have a test', () => {
      expect(parseTeamsJson('{}')).toEqual({});
    });
  });
});
