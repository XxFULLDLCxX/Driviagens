import { errors } from '../errors/errors.js';

export function validateBody(schema) {
  return (req, res, next) => {
    const validation = schema.validate(req.body, { abortEarly: false });
    if (validation.error) {
      const messages = validation.error.details.reduce((message, detail) => message + detail.message + '\n ', '');
      console.log(validation.error);
      throw errors.schema(messages);
    }

    res.locals = validation.value;

    next();
  };
}

export function validateQuery(schema) {
  return (req, res, next) => {
    const validation = schema.validate(req.query, { abortEarly: false });
    if (validation.error) {
      const messages = validation.error.details.reduce((message, detail) => message + detail.message + '\n ', '');
      console.log(validation.error.details[0].type);
      if (validation.error.details[0].type === 'date.min' || validation.error.details[0].type === 'date.max')
        throw errors.badRequest(messages);
      else throw errors.schema(messages);
    }

    res.locals = validation.value;

    next();
  };
}
