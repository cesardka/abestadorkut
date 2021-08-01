import { SiteClient } from "datocms-client";
import { DATO_API_TOKEN, datoModelId } from "../../../src/constants";

const datoCmsClient = new SiteClient(DATO_API_TOKEN);

const get = async (id) => {
  return await datoCmsClient.items.find(id).catch((err) => {
    console.error(`Error finding community [${id}]: ${JSON.stringify(err)}`);
  });
};

const destroy = async ({ id }) => {
  return await datoCmsClient.items
    .destroy(id)
    .then((deletedCommunity) => {
      console.log(deletedCommunity);
    })
    .catch((err) => {
      console.error(err);
    });
};

const handler = async (req, res) => {
  const { id } = req.query;
  if (!id) {
    return res.status(400).json({
      error: "Community ID is invalid",
    });
  }

  let fetchResponse = {};
  switch (req.method) {
    case "GET":
      fetchResponse = await get(id);
      break;
    case "DELETE":
      fetchResponse = await destroy(id);
      break;
    default:
      return res.status(404);
  }
  res.status(200).json(fetchResponse);
};

export default handler;
