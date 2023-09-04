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


export { usersArray, commentsArray, videosArray }