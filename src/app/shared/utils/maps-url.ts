import { Commune } from '../../features/department/model/commune.model';

/**
 * Builds a Google Maps search URL for a given commune.
 * Encodes the city name and postal codes to ensure a valid URL.
 *
 * @param commune - The commune object containing name and postal codes.
 * @returns A fully constructed Google Maps search URL, or an empty string if input is invalid.
 */
export function buildGoogleMapsUrl(commune: Commune | null): string {

  // Return empty string if the commune is undefined or null
  if (!commune) return '';

  // Encode the commune name to safely include it in the URL
  const name = encodeURIComponent(commune.nom ?? '');

  // Prepare postal code(s), joining arrays and encoding final result
  let postal = '';
  if (commune.codesPostaux) {
    postal = Array.isArray(commune.codesPostaux)
      ? encodeURIComponent(commune.codesPostaux.join('+')) // Join multiple codes with "+"
      : encodeURIComponent(commune.codesPostaux);          // Encode a single postal code
  }

  // Build the URL parts: name, optional postal code(s), and country
  const parts = [name];
  if (postal) parts.push(postal);
  parts.push('FR'); // Country code for France

  // Return the full Google Maps search URL
  return `https://www.google.com/maps/search/${parts.join('+')}`;
}
