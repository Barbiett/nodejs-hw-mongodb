import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  email: Joi.string().email().min(3).max(20).required(),
  phoneNumber: Joi.string().min(3).max(20).required(),
  contactType: Joi.string().valid('work', 'home', 'personal').required(),
  isFavourite: Joi.boolean().required(),
  photo: Joi.string(),
});
export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20),
  email: Joi.string().email().min(3).max(20),
  phoneNumber: Joi.string().min(3).max(20),
  contactType: Joi.string().valid('work', 'home', 'personal'),
  isFavourite: Joi.boolean(),
  photo: Joi.string(),
});
