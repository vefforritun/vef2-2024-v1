import { describe, expect, it } from '@jest/globals';
import { direxists, readFile, readFilesFromDir } from './file';

// Hér ættum við að nota mock, en þau eru erfið með Jest + ESM
// https://jestjs.io/docs/ecmascript-modules#module-mocking-in-esm

/** Directory that contains test data, relative to the project root. */
const testDir = './src/test/data';

describe('file', () => {
  describe('direxists', () => {
    it('returns false if dir does not exist', async () => {
      const result = await direxists('./does-not-exist');
      expect(result).toBe(false);
    });

    it('returns true if dir does exist', async () => {
      const result = await direxists(testDir);
      expect(result).toBe(true);
    });

    it('returns false if no input', async () => {
      const result = await direxists('');
      expect(result).toBe(false);
    });
  });

  describe('readFilesFromDir', () => {
    it('should return empty array for dir that does not exist', async () => {
      const result = await readFilesFromDir('./does-not-exist');

      expect(result).toEqual([]);
    });

    it('should return array of known files for dir that does exist', async () => {
      const result = await readFilesFromDir(testDir);

      expect(result).toEqual(['src/test/data/1', 'src/test/data/2']);
    });
  });

  describe('readFile', () => {
    it('should return null for file that does not exist', async () => {
      const result = await readFile('./does-not-exist');

      expect(result).toEqual(null);
    });

    it('should return content of known file that does exist', async () => {
      const result = await readFile(`${testDir}/1`);
      expect(result).toEqual('asdf\n');
    });
  });
});
