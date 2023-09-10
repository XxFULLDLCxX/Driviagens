import { errors } from '../errors/errors.js';

export function validateSchema(schema) {
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
