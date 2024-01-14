import { readFile as fsReadFile, mkdir, readdir, stat } from 'fs/promises';
import { join } from 'path';

/**
 * Check if a directory exists.
 * @param {string} dir Directory to check
 * @returns `true` if dir exists, `false` otherwise
 */
export async function direxists(dir) {
  if (!dir) {
    return false;
  }

  try {
    const info = await stat(dir);
    return info.isDirectory();
  } catch (e) {
    return false;
  }
}

export async function createDirIfNotExists(dir) {
  if (!(await direxists(dir))) {
    await mkdir(dir);
  }
}

/**
 * Read only files from a directory and returns as an array.
 * @param {string} dir Directory to read files from
 * @returns {Promise<string[]>} Array of files in dir with full path, empty if
 *   error or no files
 */
export async function readFilesFromDir(dir) {
  let files = [];
  try {
    files = await readdir(dir);
  } catch (e) {
    return [];
  }

  const mapped = files.map(async (file) => {
    const path = join(dir, file);
    const info = await stat(path);

    if (info.isDirectory()) {
      return null;
    }

    return path;
  });

  const resolved = await Promise.all(mapped);

  // Remove any directories that will be represented by `null`
  const filtered = [];
  for (const file of resolved) {
    if (file) {
      filtered.push(file);
    }
  }

  return filtered;
}

/**
 * Read a file and return its content.
 * @param {string} file File to read
 * @param {object} options.encoding asdf
 * @returns {Promise<string | null>} Content of file or `null` if unable to read.
 */
export async function readFile(file, { encoding = 'utf8' } = {}) {
  try {
    const content = await fsReadFile(file, { encoding });

    return content.toString(encoding);
  } catch (e) {
    return null;
  }
}
