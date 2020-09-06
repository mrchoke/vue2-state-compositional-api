import { reactive } from '@vue/composition-api'
import SystemNoti from './SystemNoti'

const users = [
  {
    username: 'user1',
    password: 'abc',
    fullname: 'MrChoke'
  },
  {
    username: 'user2',
    password: 'abc',
    fullname: 'Guest'
  }
]
const auth = reactive({
  user: {},
  status: false
})
const login = (username, password) => {
  const user = users.find(u => u.username === username && u.password === password)

  if (user) {
    auth.user = user
    auth.status = true
    SystemNoti.setdata({ type: 'success', msg: `Welcome ${user.fullname}` })
  } else {
    SystemNoti.setdata({ type: 'error', msg: `User ${username} not found or Password incorrect` })
    return false
  }
  return true
}

const logout = () => {
  const olduser = Object.assign({}, auth.user)
  SystemNoti.setdata({ type: 'success', msg: `See ya ${olduser.fullname}` })
  auth.user = {}
  auth.status = false
}
export { login, logout, auth }
