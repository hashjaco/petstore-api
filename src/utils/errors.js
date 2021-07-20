const codes = {
  200: 'SUCCESS',
  201: 'CREATED',
  202: 'ACCEPTED',
  400: 'BAD REQUEST',
  401: 'UNAUTHORIZED',
  403: 'FORBIDDEN',
  404: 'NOT FOUND',
  500: 'INTERNAL SERVICE ERROR',
  502: 'BAD GATEWAY',
  503: 'SERVER NOT AVAILABLE',
  504: 'GATEWAY TIMEOUT',
};

export const produceError = (error) => {
  const { statusCode, message } = error;
  console.error(
    `Request failed with status code ${statusCode}: ${codes[statusCode]}`
  );
};
