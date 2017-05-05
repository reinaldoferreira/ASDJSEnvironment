import './index.css'
import { getAnimals } from './api/animals'

getAnimals().then(data => {
  let animalsTemplate = data.map(x => `<tr>
    <td>${x.name}</td>
    <td>${x.species}</td>
    <td>${x.friendlyPoints}</td>
    </tr>`).join('')

  let animals = data.length ? animalsTemplate : '<td colspan="3">Nothing found</td>'

  global.document.getElementById('animals').innerHTML = animals
})
