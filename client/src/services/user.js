import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3000'
});
// export const loginUser = async (data) => {
//   const resp = await api.post(`/users/`, data)
//   return resp.data
// }
export const fetchUsers = async () => {
  const resp = await api.get('/users')
  return resp.data
}
export const createUser = async (data) => {
  const resp = await api.post('/users', data);
  return resp.data
}
export const deleteUser = async (id) => {
  const resp = await api.delete(`/users/${id}`)
  return resp.data
}
