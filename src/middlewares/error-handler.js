import httpStatus from 'http-status';

export function errorHandler(error, req, res, next) {
  console.log(error);

  if (error.type === 'conflict')
    return res.status(httpStatus.CONFLICT).send(error.message);
  if (error.type === 'joi-error')
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);

  if (error.code === '23505' && error.constraint === 'cities_name_key')
    return res.status(httpStatus.CONFLICT).send('Está cidade já foi adicionada!');
  if (error.code === '23503') {
    if (error.constraint === 'flights_origin_fkey')
      return res.status(httpStatus.NOT_FOUND).send('A origem não é uma cidade conhecida');
    if (error.constraint === 'flights_destination_fkey')
      return res.status(httpStatus.NOT_FOUND).send('O destino não é uma cidade conhecida');
    if (error.constraint === 'travels_passengerId_fkey')
      return res.status(httpStatus.NOT_FOUND).send('O passageiro com o passengerId não foi encontrado');
    if (error.constraint === 'travels_flightId_fkey')
      return res.status(httpStatus.NOT_FOUND).send('O voo com o flightId não foi encontrado');
  }

  return res.status(httpStatus.INTERNAL_SERVER_ERROR).send('Ocorreu um erro desconhecido!');
}
