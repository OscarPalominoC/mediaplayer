var usersArray = []; // Crear un array vacío para almacenar los usuarios
var commentsArray = []; // Array para almacenar los comentarios
var videosArray = []; // Array para almacenar los videos

await fetch('../json/users.json')
    .then(response => response.json())
    .then(data => {
        data.usuarios.forEach(user => {
            usersArray.push(user)
        })
    })
    .catch(error => {
        console.error('Error al cargar el archivo JSON de usuarios: ', error)
    })

await fetch('../json/comments.json')
  .then(response => response.json())
  .then(data => {
    // Verificar si hay usuarios en el archivo JSON
    data.comments.forEach(comment => {
        commentsArray.push(comment)
    })
  })
  .catch(error => {
    console.error('Error al cargar el archivo JSON de comentarios:', error);
  });

await fetch('../json/videos.json')
  .then(response => response.json())
  .then(data => {
    // Verificar si hay usuarios en el archivo JSON
    data.videos.forEach(video => {
        videosArray.push(video)
    })
  })
  .catch(error => {
    console.error('Error al cargar el archivo JSON de videos:', error);
  });

console.log(usersArray.length)
console.log(usersArray[0])
const random = () => Math.floor(Math.random() * 20)

const avatartNode = document.querySelector('#user')
const randomNumber = random()

const createAvatarNode = () => {
    console.log(randomNumber)
    const image = document.createElement('img')
    const user = document.createElement('p')
    const icon = document.createElement('i')
    const userdata = usersArray[randomNumber]
    image.src = userdata.avatar
    const username_text = document.createTextNode(userdata.usuario)
    user.appendChild(username_text)

    avatartNode.append(image, user, icon)
}

const createDropdowMenu = () => {
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

createAvatarNode()
createDropdowMenu()

