import { describe, expect, it } from '@jest/globals';
import { indexTemplate } from './html';

describe('html', () => {
  describe('indexTemplate', () => {
    it.skip('should have a test', () => {
      // TODO laga þetta test
      expect(indexTemplate().length).toBeGreaterThan(1);
    });
  });
});
