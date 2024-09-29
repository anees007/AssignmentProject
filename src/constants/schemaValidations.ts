import Joi from "joi";

export const getProductServers = Joi.object({
  providerId: Joi.number().required(),
  productId: Joi.string().required(),
});
