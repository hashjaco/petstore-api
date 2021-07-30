import { httpClient } from '../app';

export default class Pet {
  constructor() {
    this.all = this.all.bind(this);
    this.find = this.find.bind(this);
  }

  async all() {
    try {
      const pets = await httpClient.get('https://api.petfinder.com/v2/animals');
      if (pets) return pets;
    } catch (err) {
      return err;
    }
  }

  async find(id) {
    try {
      const pet = await httpClient.get(
        `https://api.petfinder.com/v2/animals/${id}`
      );
      if (pet) return pet;
    } catch (err) {
      return err;
    }
  }
}
