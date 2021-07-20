import { httpClient } from '../app';

export const getAllPets = async () => {
  try {
    const pets = await httpClient.get('https://api.petfinder.com/v2/animals');
    if (pets) return pets;
  } catch (err) {
    return err;
  }
};

export const getOnePet = async (id) => {
  try {
    const pet = await httpClient.get(
      `https://api.petfinder.com/v2/animals/${id}`
    );
    if (pet) return pet;
  } catch (err) {
    return err;
  }
};
