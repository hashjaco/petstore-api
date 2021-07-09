import * as _ from '../models/pets.model';


export const getPets = async (req, res, next) => {
  try {
    const pets = await _.getAllPets()
    console.log(pets)
    return res.status(res.statusCode).json({ status: 'success', data: pets.data || 'no data'  });
  } catch (err) {
    return res.status(err.statusCode).json({ status: 'error', data: err.message });
  }
};


export const getPet = async (req, res, next) => {
  try {
    const id = req.params.id;
    const pet = await _.getOnePet(id);
    return res.status(res.statusCode).json({ status: 'success', data: pet.data });
  } catch (err) {
    return res.status(err.statusCode).json({ status: 'error', data: err.message });
  }
};
