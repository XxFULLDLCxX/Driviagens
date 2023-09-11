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
  firstName: Joi.string().min(2).max(100).required().messages(string('firstName', 2, 100)),
  lastName: Joi.string().min(2).max(100).required().messages(string('lastName', 2, 100))
});

const cities = Joi.object({
  name: Joi.string().min(2).max(50).required().messages(string('name', 2, 50))
});

const date = (field) => ({
  'date.base': `"${field}" deve ser uma data válida (DD-MM-AAAA)`,
  'date.format': `"${field}" deve ter o formato: DD-MM-AAAA`
});

const flights = Joi.object({
  origin: Joi.number().integer().greater(0).required().messages({
    'number.integer': `"origin" é um id, inteiro maior que zero`,
    'number.greater': `"origin" é um id, inteiro maior que zero`,
    'any.required': `"origin" é obrigatória`
  }),
  destination: Joi.number().integer().greater(0).required().messages({
    'number.integer': `"destination" é um id, inteiro maior que zero`,
    'number.greater': `"destination" é um id, inteiro maior que zero`,
    'any.required': `"destination" é obrigatório`
  }),
  date: Joi.date().min('now').format('DD-MM-YYYY').required().messages({
    ...date('date'),
    'date.min': `"date" deve ser maior do que a data atual`,
    'any.required': `"date" é obrigatório`
  }),
});

const query_flights = Joi.object({
  'bigger-date': Joi.alternatives().conditional('smaller-date', {
    is: Joi.exist(),

    then: Joi.date().format('DD-MM-YYYY'),
    otherwise: Joi.forbidden()
  }).messages({
    ...date('bigger-date'),
    'any.unknown': `"bigger_date" não pode ser definido sem "smaller_date"`
  }),
  'smaller-date': Joi.alternatives().conditional('bigger-date', {
    is: Joi.exist(),
    then: Joi.date().max(Joi.ref('bigger-date')).format('DD-MM-YYYY'),
    otherwise: Joi.forbidden()
  }).messages({
    ...date('bigger-date'),
    'date.max': `"smaller-date" deve ser menor do que "bigger-date"`,
    'any.unknown': `"smaller_date" não pode ser definido sem "bigger_date"`
  }),
  'origin': Joi.string().messages({ 'string.empty': `"origin" deve ser um nome de uma cidade` }),
  'destination': Joi.string().messages({ 'string.empty': `"destination" deve ser um nome de uma cidade` }),
  'page': Joi.number().integer().greater(0)
});

const query_passengers = Joi.object({
  'name': Joi.string(),
  'page': Joi.number().integer().greater(0).messages({
    'number.greater': 'Invalid page value'
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
  passengers, cities, flights, travels, query_flights, query_passengers
};
