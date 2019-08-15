import { api } from './user'

export const fetchComments = async (petId) => {
  const resp = await api.get(`/pets/${petId}/comments`)
  return resp.data
}

export const createComment = async (petId, data) => {
  const resp = await api.post(`/pets/${petId}/comments`, data)
  return resp.data
}

export const updateComment = async (petId, id, data) => {
  const resp = await api.put(`/pets/${petId}/comments/${id}`, data)
  return resp.data
}

export const deleteComment = async (petId, id) => {
  const resp = await api.delete(`/pets/${petId}/comments/${id}`)
  return resp.data
}