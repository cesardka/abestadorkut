import { URL_API_GITHUB } from "../../src/constants";

const getFollowers = async (user) => {
  const data = await fetch(`${URL_API_GITHUB}/users/${user}/followers`)
    .then((res) => res.json())
    .catch((err) => console.error(err));

  return data;
};

export { getFollowers };
