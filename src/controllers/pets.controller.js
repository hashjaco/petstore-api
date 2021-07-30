import Pet from '../models/pet.model';

export const getPets = async (req, res) => {
  const P = new Pet();
  try {
    const pets = await P.all();

    return res
      .status(res.statusCode)
      .json({ status: 'success', data: pets.data || 'no data' });
  } catch (err) {
    return res
      .status(err.statusCode)
      .json({ status: 'error', data: err.message });
  }
};

export const getPet = async (req, res) => {
  const P = new Pet();
  try {
    const { id } = req.params;
    const pet = await P.find(id);
    return res
      .status(res.statusCode)
      .json({ status: 'success', data: pet.data });
  } catch (err) {
    return res
      .status(err.statusCode)
      .json({ status: 'error', data: err.message });
  }
};
