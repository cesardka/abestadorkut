import { DATO_API_TOKEN, URL_API_DATO } from "../../src/constants";

const queryAllCommunities = (limit = 0) => {
  return `query {
    allCommunities${limit ? `(first: ${limit})` : ""} {
      id,
      title,
      description,
      imageUrl,
      url,
    }
  }`;
};

const getCommunities = async (limit = 0) => {
  const { data } = await fetch(URL_API_DATO, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${DATO_API_TOKEN}`,
    },
    body: JSON.stringify({
      query: queryAllCommunities(),
    }),
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));

  return data.allCommunities;
};

export { getCommunities };
