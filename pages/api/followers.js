import { URL_API_GITHUB } from "../../src/constants";

const getAll = async (user) => {
  const data = await fetch(`${URL_API_GITHUB}/users/${user}/followers`)
    .then((res) => res.json())
    .catch((err) => console.error(err));

  return data;
};

export { getAll };
