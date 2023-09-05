import { createAvatarNode, createDropdowMenu } from "./create-avatar.js"
import { createVideo, videoDescription } from "./videos.js"
import { createCommentsNode } from "./comments.js"
import { createRelatedVideos } from "./related-videos.js"

//Variables para pintar el vídeo
const randomVideo = () => Math.floor(Math.random() * 13) + 1
const randomNumber = randomVideo()



createAvatarNode()
createDropdowMenu()
createVideo(randomNumber)
videoDescription(randomNumber)
createCommentsNode(randomNumber)
createRelatedVideos()

// Creando los listeners en cada container
const containerVideo = document.querySelectorAll('.container') // Node list
const containers = [...containerVideo]


containers.forEach(container => {
    container.addEventListener('click', () => {
        const video_id = parseInt(container.dataset.video_id, 10)
        videoDescription(video_id)
        createCommentsNode(video_id)

        const video = document.querySelector('video')
        const source = document.querySelector('source')
        video.dataset.videoId = video_id
        source.src = container.dataset.video_url

        video.load()
    })
})

//containerVideo.addEventListener('click', () => console.log('Holis'))