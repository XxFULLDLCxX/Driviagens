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

const internalServer = () => ({
  type: 'internal-server',
  message: 'Too many results'
})

export const errors = {
  schema, conflict, unprocessableEntity, badRequest, internalServer
};
