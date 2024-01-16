import { describe, expect, it } from '@jest/globals';
import { indexTemplate } from './html';

describe('html', () => {
  describe.only('indexTemplate', () => {
    it('should have a test', () => {
      expect(indexTemplate()).toBe('html');
    });
  });
});
