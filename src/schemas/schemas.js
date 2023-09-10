import JoiDate from '@joi/date';
import JoiBase from 'joi';

const Joi = JoiBase.extend(JoiDate);

const string = (field, min, max) => ({
  'string.base': `"${field}" é do tipo texto`,
  'string.empty': `"${field}" deve ter non mínimo ${min} caracteres`,
  'string.min': `"${field}" deve ter no mínimo ${min} caracteres`,
  'string.max': `"${field}" deve ter no máximo ${max} caracteres`,
  'any.required': `"${field}" é obrigatório`
});

const passengers = Joi.object({
  firstName: Joi.string().min(2).max(100).required().messages(string('O primeiro nome', 2, 100)),
  lastName: Joi.string().min(2).max(100).required().messages(string('O último nome', 2, 100))
});

const cities = Joi.object({
  name: Joi.string().min(2).max(50).required().messages(string('O nome da cidade', 2, 50))
});

const flights = Joi.object({
  origin: Joi.number().integer().greater(0).required().messages({
    'number.integer': `A origem é um id, inteiro maior que zero`,
    'number.greater': `A origem é um id, inteiro maior que zero`,
    'any.required': `A origem do voo é obrigatória`
  }),
  destination: Joi.number().integer().greater(0).required().messages({
    'number.integer': `A origem é um id, inteiro maior que zero`,
    'number.greater': `A origem é um id, inteiro maior que zero`,
    'any.required': `O destino do voo é obrigatório`
  }),
  date: Joi.date().min('now').format('DD-MM-YYYY').required().messages({
    'date.base': `A data do voo deve ser uma data válida (DD-MM-AAAA)`,
    'date.min': `A data do voo deve ser maior do que a data atual`,
    'date.format': `O formatdo da data deve ser: DD-MM-AAAA`,
    'any.required': `A data do voo é obrigatória`
  })
});

const travels = Joi.object({
  passengerId: Joi.number().integer().greater(0).required().messages({
    'number.integer': `"passengerId" é um id, inteiro maior que zero`,
    'number.greater': `"passengerId" é um id, inteiro maior que zero`,
    'any.required': `"passengerId" é obrigatório`
  }),
  flightId: Joi.number().integer().greater(0).required().messages({
    'number.integer': `"flightId" é um id, inteiro maior que zero`,
    'number.greater': `"flightId" é um id, inteiro maior que zero`,
    'any.required': `"flightId" é obrigatório`
  })
});

export const schemas = {
  passengers, cities, flights, travels
};
