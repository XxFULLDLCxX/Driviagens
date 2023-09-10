const schema = (message) => ({
  type: 'joi-error',
  message
});

const conflict = (message) => ({
  type: 'conflict',
  message
});

export const errors = {
  schema, conflict
};
