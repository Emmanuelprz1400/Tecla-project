const baseUrl = 'https://api.mercadolibre.com';

export const SITE_ID = 'MLM';

export const categories_ID = 'MLM1648';

export const trendsUrl = (SITE_ID, categories_ID) => `${baseUrl}/trends/${SITE_ID}/${categories_ID}`;

export const searchByNameUrl = (SITE_ID, NAME) => `${baseUrl}/sites/${SITE_ID}/search?q=${NAME}`;

export const getCategoriesUrl = (SITE_ID) => `${baseUrl}/sites/${SITE_ID}/categories`;