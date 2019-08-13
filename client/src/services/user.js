import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3000'
});
export const fetchUsers = async () => {
  const resp = await api.get('/users')
  return resp.data
}