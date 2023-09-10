import httpStatus from 'http-status';

export function errorHandler(error, req, res, next) {
  console.log(error);

  if (error.code === '23505' && 'cities_name_key')
    return res.status(httpStatus.CONFLICT).send('Está cidade já foi adicionada!');
  if (error.type === 'joi-error')
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);

  return res.status(httpStatus.INTERNAL_SERVER_ERROR).send('Ocorreu um erro desconhecido!');
}
