import { api } from './user'

export const createPet = async (data) => {
  const resp = await api.post(`/pets`, data);
  return resp.data
}