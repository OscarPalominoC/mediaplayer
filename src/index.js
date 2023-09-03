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

const createAvatarNode = () => {
    const randomNumber = random()
    console.log(randomNumber)
    const image = document.createElement('img')
    const user = document.createElement('p')
    image.src = usersArray[randomNumber].avatar
    const username = document.createTextNode(usersArray[randomNumber].usuario)
    user.appendChild(username)

    avatartNode.append(image, user, document.createElement('i'))
}
createAvatarNode()