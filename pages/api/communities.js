import { DATO_API_TOKEN } from "../../src/constants";
import { SiteClient } from "datocms-client";

const datoCmsClient = new SiteClient(DATO_API_TOKEN);

const get = async () => {
  const data = await datoCmsClient.items.all();

  return data;
};

const getAll = async (limit = 0) => {
  const data = await datoCmsClient.items.all(
    limit ? { "page[limit]": limit } : {},
    !limit ? { allPages: true } : {}
  );

  return data;
};

const create = async ({ title, description = "", image_url, url }) => {
  return await datoCmsClient.items.create({
    title,
    description,
    image_url,
    url,
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

export { get, getAll, create, destroy };
