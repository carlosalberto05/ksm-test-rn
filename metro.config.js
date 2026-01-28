const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

/**
 * Forzamos a Metro a ignorar las condiciones de "import" que traen archivos .mjs con import.meta.
 * Esto asegura que usemos las versiones CommonJS/Browser compatibles con Expo Web.
 */
config.resolver.unstable_conditionNames = ['browser', 'require', 'react-native'];

module.exports = config;
