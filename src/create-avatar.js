import { usersArray } from "./fetch-data.js"

const random = () => Math.floor(Math.random() * 20)

const avatartNode = document.querySelector('#user')
const randomNumber = random()

export const createAvatarNode = () => {
    const image = document.createElement('img')
    const user = document.createElement('p')
    const icon = document.createElement('i')
    const userdata = usersArray[randomNumber]
    image.src = userdata.avatar
    const username_text = document.createTextNode(userdata.usuario)
    user.appendChild(username_text)

    avatartNode.append(image, user, icon)
}

export const createDropdowMenu = () => {
  // Dropdown
  const userdata = usersArray[randomNumber]
  const dropdown = document.querySelector('.dropdown')
  const user_info = document.createElement('div')
  user_info.className = 'user-info'
  const user_image = document.createElement('figure')
  user_image.className = 'user-image'
  const user_image_img = document.createElement('img')
  user_image_img.id = 'dropdown-img'
  user_image_img.src = userdata.avatar
  user_image.append(user_image_img)
  const user_description = document.createElement('div')
  user_description.className = 'user-description'
  const name = document.createElement('p')
  const username = document.createElement('strong')
  name.textContent = userdata.nombre
  username.textContent = userdata.usuario
  user_description.append(name, username)
  user_info.append(user_image, user_description)

  dropdown.insertAdjacentElement('afterbegin', user_info)
}