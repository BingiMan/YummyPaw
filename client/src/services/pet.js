import { api } from './user'

export const fetchPet = async () => {
  const resp = await api.get('/pets')
  return resp.data
}

export const createPet = async (data) => {
  const resp = await api.post(`/pets`, data);
  return resp.data
}

