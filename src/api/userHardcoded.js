import _user from './user.json';

const TIMEOUT = 100

export default {
  getUser: () => setTimeout(() => cb(_user), timeout || TIMEOUT),
  setUser: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
