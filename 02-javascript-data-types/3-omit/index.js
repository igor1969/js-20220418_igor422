/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  const result = {};

<<<<<<< HEAD
  for (const [key, value] of Object.entries(obj)) {
    if (!fields.includes(key)) {
      result[key] = value;
=======
  for (const key of Object.keys(obj)) {
    if (!fields.includes(key)) {
      result[key] = obj[key];
>>>>>>> 8d9ac9f8a187baec113db88380c25e0a52be9df8
    }
  }

  return result;
};
