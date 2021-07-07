import * as _ from '../models/pets.model';

export const getPets = async (req, res) => {
  try {
    const pets = await _.getAllPets();
    res.status(200).json({ status: 'success', data: pets });
  } catch (err) {
    res.status(200).json({ status: 'error', data: err.stack });
  }
};

export const getPet = async (req, res) => {
  try {
    const { id } = req.params.id;
    const pet = _.getOnePet(id);
    return res.status(200).json({ status: 'success', data: pet });
  } catch (err) {
    return res.status(200).json({ status: 'error', data: err.stack });
  }
};
