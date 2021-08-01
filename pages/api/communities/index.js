import { SiteClient } from "datocms-client";
import { DATO_API_TOKEN, datoModelId } from "../../../src/constants";

const datoCmsClient = new SiteClient(DATO_API_TOKEN);

const getAll = async ({ limit = 0 }) => {
  const pageLimit = limit ? { "page[limit]": limit } : {};

  const data = await datoCmsClient.items.all(
    {
      "filter[type]": "community",
      ...pageLimit,
    },
    !limit ? { allPages: true } : {}
  );

  return data;
};

const create = async ({ title, description = "", imageUrl, url }) => {
  try {
    return await datoCmsClient.items.create({
      itemType: datoModelId["community"],
      title,
      description,
      imageUrl,
      url,
    });
  } catch (e) {
    console.error(
      `Failed to create new community! Error: [${JSON.stringify(e)}]`
    );
  }
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
  let fetchResponse = {};
  switch (req.method) {
    case "GET":
      fetchResponse = await getAll(req.body);
      break;
    case "POST":
      fetchResponse = await create(req.body);
      break;
    case "DELETE":
      fetchResponse = await destroy(req.body);
      break;
    default:
      return res.status(500);
  }

  res.status(200).json(fetchResponse);
};

export default handler;
