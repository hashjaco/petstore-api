import axios from 'axios';
import { petfinderClientId, petfinderClientSecret } from '../settings';

export const getAuthToken = async () => {
  const config = {
    grant_type: 'client_credentials',
    client_id: petfinderClientId,
    client_secret: petfinderClientSecret,
  };
  try {
    const response = await axios.post(
      'https://api.petfinder.com/v2/oauth2/token',
      config
    );
    console.log(response);
    if (response) return response.data;
  } catch (err) {
    return console.error(err.stack);
  }
};
