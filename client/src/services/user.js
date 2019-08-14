import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3000'
});

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/users/verify');
    return resp.data
  }
  return false;
}
export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData)
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}
export const fetchUsers = async () => {
  const resp = await api.get('/users')
  return resp.data
}
export const createUser = async (data) => {
  const resp = await api.post('/users/', { user: data });
  return resp.data
}
export const deleteUser = async (id) => {
  const resp = await api.delete(`/users/${id}`)
  return resp.data
}
