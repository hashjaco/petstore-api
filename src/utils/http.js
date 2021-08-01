import axios from 'axios';
import { getAuthToken } from '../models/auth.model';

export default class HttpClient {
  constructor() {
    this.config = {
      headers: {
        Authorization: '',
        'X-Content-Type-Options': 'nosniff',
        'Content-Type': 'text/plain',
        Accept: 'application/json',
      },
    };

    // Immediate function call to set access token for http instance
    this.refreshAccessToken()
      .then(() => console.log('refreshed access token'))
      .catch((err) => console.error(err.message));
  }

  setAccessToken(token) {
    this.config.headers.Authorization = `Bearer ${token}`;
  }

  async refreshAccessToken() {
    try {
      const data = await getAuthToken();
      this.setAccessToken(data.access_token);
    } catch (err) {
      console.error(err.message);
    }
  }

  async get(url) {
    try {
      const response = await axios.get(url, this.config);
      if (response) return response;
    } catch (err) {
      console.error(err.message);
    }
  }

  async post(url) {
    try {
      const data = await axios.post(url, this.config);
      if (data) {
        return data;
      }
    } catch (err) {
      return err;
    }
  }
}
