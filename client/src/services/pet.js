import { api } from './user'

export const createPet = async (userId, data) => {
  const resp = await api.post(`/users/${userId}/pets`, { ...data, user_id: userId });
  return resp.data;
}