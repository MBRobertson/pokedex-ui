/**
 * Capitilize the first letter of a string
 * @param text 
 * @returns Original parameter with the first letter capitalized
 */
export const capitalize = (text: string) => text.charAt(0).toLocaleUpperCase() + text.slice(1);