import { URL_API_GITHUB } from "../../../src/constants";

const getAll = async (userId) => {
  const data = await fetch(`${URL_API_GITHUB}/users/${userId}/followers`)
    .then((res) => res.json())
    .catch((err) => console.error(err));

  return data;
};

async function handler(req, res) {
  const { username } = req.query;
  if (!username) {
    return res.status(400).json({
      error: "Username is invalid",
    });
  }

  let fetchResponse = {};
  switch (req.method) {
    case "GET":
      fetchResponse = await getAll(username);
      break;
    default:
      return res.status(500);
  }
  res.status(200).json(fetchResponse);
}

export default handler;
