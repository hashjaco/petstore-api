import * as model from '../models/auth.model';

export const getToken = async (req, res) => {
  try {
    const response = await model.getAuthToken();
    return res.status(200).send(response);
  } catch (err) {
    return res.status(err.statusCode).send(err.stack);
  }
};
