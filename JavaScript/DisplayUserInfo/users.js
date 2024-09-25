const users = [
  {
    id: 167464,
    firstName: 'Jimmy',
    lastName: 'Arnold',
  },
  {
    id: 578447,
    firstName: 'Martha',
    lastName: 'Goldman',
  },
  {
    id: 864578,
    firstName: 'Tim',
    lastName: 'Burton',
  },
];

const container = document.querySelector('.container')
const list = document.createElement('ol')
list.style.listStyleType = 'none'
for (let i = 0; i < users.length; i++){
  let user = users[i]
  const li = document.createElement('li')
  li.setAttribute('data-id', user.id)
  li.textContent = `${user.firstName} ${user.lastName}`
  list.appendChild(li);
}
container.appendChild(list)