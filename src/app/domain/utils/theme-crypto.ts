import { THEME_ENCRYPTION_KEY } from "../constants";

const HEX_RADIX = 16;
const HEX_BYTE_LENGTH = 2;
const AES_GCM_IV_LENGTH = 12;

/**
 * @description Convierte una cadena en bytes compatibles con Web Crypto.
 *
 * @param {string} value Valor a convertir
 * @returns {Uint8Array<ArrayBuffer>} Bytes del valor
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
function encode(value: string): Uint8Array<ArrayBuffer> {
  const encodedValue = new TextEncoder().encode(value);
  const buffer = new ArrayBuffer(encodedValue.byteLength);

  new Uint8Array(buffer).set(encodedValue);

  return new Uint8Array(buffer);
}

/**
 * @description Convierte bytes a una cadena hexadecimal.
 *
 * @param {Uint8Array} bytes Bytes a convertir
 * @returns {string} Representación hexadecimal
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
function toHex(bytes: Uint8Array): string {
  return Array.from(bytes)
    .map((byte: number): string =>
      byte.toString(HEX_RADIX).padStart(HEX_BYTE_LENGTH, "0"),
    )
    .join("");
}

/**
 * @description Convierte una cadena hexadecimal a bytes.
 *
 * @param {string} hex Valor hexadecimal
 * @returns {Uint8Array<ArrayBuffer>} Bytes
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
function fromHex(hex: string): Uint8Array<ArrayBuffer> {
  const buffer = new ArrayBuffer(hex.length / HEX_BYTE_LENGTH);
  const bytes = new Uint8Array(buffer);

  for (let index = 0; index < hex.length; index += HEX_BYTE_LENGTH) {
    bytes[index / HEX_BYTE_LENGTH] = Number.parseInt(
      hex.slice(index, index + HEX_BYTE_LENGTH),
      HEX_RADIX,
    );
  }

  return bytes;
}

/**
 * @description Genera una clave AES-GCM a partir de una clave base.
 *
 * @returns {Promise<CryptoKey>} Clave criptográfica
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
async function getEncryptionKey(): Promise<CryptoKey> {
  const keyMaterial = await crypto.subtle.digest(
    "SHA-256",
    encode(THEME_ENCRYPTION_KEY),
  );

  return crypto.subtle.importKey(
    "raw",
    keyMaterial,
    {
      name: "AES-GCM",
    },
    false,
    ["encrypt", "decrypt"],
  );
}

/**
 * @description Cifra un valor utilizando AES-GCM.
 *
 * @param {string} value Valor a cifrar
 * @returns {Promise<string>} Valor cifrado
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export async function encryptTheme(value: string): Promise<string> {
  const key = await getEncryptionKey();

  const initializationVector = crypto.getRandomValues(
    new Uint8Array(AES_GCM_IV_LENGTH),
  );

  const encryptedValue = await crypto.subtle.encrypt(
    {
      name: "AES-GCM",
      iv: initializationVector,
    },
    key,
    encode(value),
  );

  return `${toHex(initializationVector)}:${toHex(
    new Uint8Array(encryptedValue),
  )}`;
}

/**
 * @description Descifra un valor previamente cifrado.
 *
 * @param {string} value Valor cifrado
 * @returns {Promise<string | null>} Valor descifrado o null
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export async function decryptTheme(value: string): Promise<string | null> {
  try {
    const [ivHex, encryptedHex] = value.split(":");

    if (!ivHex || !encryptedHex) {
      return null;
    }

    const key = await getEncryptionKey();

    const initializationVector = fromHex(ivHex);
    const encryptedValue = fromHex(encryptedHex);

    const decryptedValue = await crypto.subtle.decrypt(
      {
        name: "AES-GCM",
        iv: initializationVector,
      },
      key,
      encryptedValue,
    );

    return new TextDecoder().decode(decryptedValue);
  } catch {
    return null;
  }
}
