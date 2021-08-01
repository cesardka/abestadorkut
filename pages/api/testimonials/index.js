import { SiteClient } from "datocms-client";
import { DATO_API_TOKEN, datoModelId } from "../../../src/constants";

const datoCmsClient = new SiteClient(DATO_API_TOKEN);

const getAll = async ({ limit = 0 }) => {
  const pageLimit = limit ? { "page[limit]": limit } : {};
  const data = await datoCmsClient.items.all(
    {
      "filter[type]": "testimonial",
      ...pageLimit,
    },
    !limit ? { allPages: true } : {}
  );

  return data;
};

const create = async ({ title, description = "", imageUrl, url }) => {
  try {
    return await datoCmsClient.items.create({
      itemType: datoModelId["testimonial"],
      title,
      description,
      imageUrl,
      url,
    });
  } catch (e) {
    console.error(
      `Failed to create new testimonial! Error: [${JSON.stringify(e)}]`
    );
  }
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
    default:
      return res.status(404);
  }

  res.status(200).json(fetchResponse);
};

export default handler;
