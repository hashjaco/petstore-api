import Model from '../models/model';

const petsModel = new Model('pets');

export const getPets = async (req, res) => {
  try {
    const pets = await petsModel.select('*');
    res.status(200).json({ status: 'success', data: pets });
  } catch (err) {
    res.status(200).json({ status: 'error', data: err.stack });
  }
};


export const getPet = async (req, res) => {
  try {
    const { id, columns, clause } = req.params;
    const pet = await petsModel.select(columns, `WHERE id = ${id}`)
  } catch (err){
    
  }
}
