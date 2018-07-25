import axios from 'axios'
import { BASE_URI } from './env'

const Api = axios.create({})

export function getRepository(name) {
  return Api.get(`${BASE_URI}/users/${name}/repos`)
    .then(result => ({ result }))
    .catch(err => ({ err }))
}
