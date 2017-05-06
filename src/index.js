import { getUsers } from './api/users'

getUsers().then(data => {
  let usersTemplate = data.map(x => `<tr>
    <td>${x.firstName}</td>
    <td>${x.lastName}</td>
    <td>${x.age}</td>
    </tr>`).join('')

  let users = data.length ? usersTemplate : '<td colspan="3">Nothing found</td>'

  global.document.getElementById('users').innerHTML = users
})
