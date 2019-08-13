import { api } from './user'

export const fetchComments = async (userId, petId) => {
  const resp = await api.get(`/users/${userId}/pets/${petId}/comments`)
  return resp.data
}

export const creatComments = async (userId, petId, data) => {
  const resp = await api.post(`/users/${userId}/pets/${petId}/comments`, data)
  return resp.data
}

export const updateComments = async (userId, petId, data,id) => {
  const resp = await api.put(`/users/${userId}/pets/${petId}/comments/${id}`, data)
  return resp.data
}

export const deleteComments = async (userId, petId, id) => {
  const resp = await api.delete(`/users/${userId}/pets/${petId}/comments/${id}`)
  return resp.data
}