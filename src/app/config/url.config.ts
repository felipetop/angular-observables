const isMock = true;  // Controle único de ativação do mock
const baseUrl = isMock ? 'http://localhost:3000' : 'https://rickandmortyapi.com';
export const URL_CONFIG = Object.freeze({
  urlCharacters: isMock ? `${baseUrl}/characters` : `${baseUrl}/graphql`,
  urlCharacter: isMock ? `${baseUrl}/character` : `${baseUrl}/graphql`,
});
