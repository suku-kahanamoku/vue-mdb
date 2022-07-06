/**
 * Kotrola na absolutni url
 *
 * @export
 * @param {string} url
 * @returns {boolean}
 */
export function IS_ABSOLUTE_URL(url: string): boolean {
  return /^((f|ht)tps?:)?\/\//gm.test(url);
}

/**
 * Kontrola na protokol
 *
 * @export
 * @param {string} url
 * @returns {boolean}
 */
export function HAS_PROTOCOL(url: string): boolean {
  return /^(f|ht)tps?:\/\//gm.test(url);
}

/**
 * Kontrola, zda url je cesta na soubor
 *
 * @export
 * @param {string} url
 * @returns {boolean}
 */
export function IS_FILE_URL(url: string): boolean {
  // bere az od 2 pozice, pac muze existovat "./; ../"
  return url.split('?')[0].indexOf('.') > 1;
}

/**
 * Kontrola na nativni atribut
 *
 * @export
 * @param {string} url
 * @returns {boolean}
 */
export function IS_NATIVE_LINK(url: string): boolean {
  return /^(mailto|tel):/gm.test(url);
}
