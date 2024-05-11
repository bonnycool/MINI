// utils.js

/**
 * Generates random bytes in the browser.
 * @param {number} length - The number of bytes to generate.
 * @returns {Array<number>} An array of random bytes.
 */
export const randomBytes = (length) => {
    const values = new Uint8Array(length);
    window.crypto.getRandomValues(values);
    return Array.from(values);
  };
  