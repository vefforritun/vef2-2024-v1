export function parseTeamsJson(data) {
  return JSON.parse(data);
}

/**
 * Tekur `gameday` gögn, staðfestir og hendir ólöglegum
 * færslum, skilar á normalizeseruðu formi.
 * @param {string} data Gögn lesin af disk
 * @returns {null | string[]} Gögn á flottara formi
 */
export function parseGameday(data) {
  let parsed;
  try {
    parsed = JSON.parse(data);
  } catch (e) {
    console.error('invalid data', e);
    return null;
  }

  if (!parsed) {
    console.warn('parsed data is not an object');
    return null;
  }

  if (!parsed.games) {
    console.warn('missing games array');
    return null;
  }

  if (!parsed.date) {
    console.warn('missing date string');
    return null;
  }

  return parsed;
}
