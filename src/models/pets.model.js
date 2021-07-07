import axios from 'axios';

const config = {
  headers: {
    Authorization: `Bearer ${global.accessToken}`,
  },
};

export const getAllPets = async () => {
  try {
    const pets = await axios.get(
      'https://api.petfinder.com/v2/animals',
      config
    );
    if (pets) return pets.data;
  } catch (err) {
    return err;
  }
};

export const getOnePet = async (id) => {
  try {
    const pet = await axios.get('https://api.petfinder.com/v2/animals/', {
      ...config,
      id,
    });
    if (pet) return pet.data;
  } catch (err) {
    return err;
  }
};
