const schema = (message) => ({
  type: 'joi-error', 
  message
});

const conflict = (message) => ({
  type: 'conflict',
  message
});

const unprocessableEntity = (message) => ({
  type: 'unprocessable-entity',
  message
});

const badRequest = (message) => ({
  type: 'bad-request',
  message
});

export const errors = {
  schema, conflict, unprocessableEntity, badRequest
};
