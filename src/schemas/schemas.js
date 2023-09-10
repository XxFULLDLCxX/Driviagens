import Joi from 'joi';

const name = (field, min, max) => ({
  'string.base': `"${field}" é um campo do tipo texto`,
  'string.empty': `"${field}" deve ter non mínimo ${min} caracteres`,
  'string.min': `"${field}" deve ter non mínimo ${min} caracteres`,
  'string.max': `"${field}" deve ter no máximo ${max} caracteres`,
  'any.required': `O campo "${field}" é obrigatório`
});


const passengers = Joi.object({
  firstName: Joi.string().min(2).max(100).required().messages(name('firstName', 2, 100)),
  lastName: Joi.string().min(2).max(100).required().messages(name('lastName', 2, 100))
});

const cities = Joi.object({
  name: Joi.string().min(2).max(50).required().messages(name('name', 2, 50))
});



export const schemas = {
  passengers, cities
};