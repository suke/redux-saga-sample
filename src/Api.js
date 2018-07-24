import axios from 'axios'

const Api = axios.create({})

export function getRepository() {
  return Api.get('https://api.github.com/users/suke/repos')
    .then(result => ({ result }))
    .catch(err => ({ err }))
}
