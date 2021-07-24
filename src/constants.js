const URL_API_GITHUB = "https://api.github.com";
const githubUser = "cesardka";

const URL_API_DATO = "https://graphql.datocms.com";
const DATO_API_TOKEN = "67fb84c3e7d7da492fa64e37cfb458";

const defaultCommunities = [
  {
    id: new Date().toISOString(),
    title: "A minha mãe me ama",
    image:
      "https://www.culturamix.com/wp-content/gallery/tiririca-humorista/tiririca-humorista-10.jpg",
    url: "https://www.youtube.com/watch?v=aU5Iyc8IEV8",
  },
];

const MAX_GRID_LIST = 6;

export {
  DATO_API_TOKEN,
  defaultCommunities,
  githubUser,
  MAX_GRID_LIST,
  URL_API_GITHUB,
  URL_API_DATO,
};
