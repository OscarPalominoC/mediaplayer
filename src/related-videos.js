import { videosArray } from './fetch-data.js'
import { createVideo, videoDescription } from "./videos.js"
import { createCommentsNode } from "./comments.js"



export const createRelatedVideos = () => {
    const relatedVideosMountNode = document.querySelector('.related-videos')
    const videos = []
    videosArray.forEach(video => {
        const container = document.createElement('div')
        container.className = 'container'
        container.dataset.video_id = video.id
        container.dataset.video_url = video.sources
        // Image
        const thumbnail = document.createElement('figure')
        thumbnail.id = 'thumbnail'
        const img = document.createElement('img')
        img.src = video.thumb
        thumbnail.appendChild(img)

        // Video description
        const videoDescription = document.createElement('div')
        videoDescription.id = 'video-description'
        const pTitle = document.createElement('p')
        pTitle.id = 'title'
        const st_title = document.createElement('strong')
        st_title.id = 'st_title'
        st_title.textContent = video.title
        pTitle.append(st_title)
        
        const pAuthor = document.createElement('p')
        pAuthor.id = 'author'
        const smAuthor = document.createElement('small')
        smAuthor.id = 'sm_author'
        smAuthor.textContent = video.author
        pAuthor.append(smAuthor)
        
        const pViews = document.createElement('p')
        pViews.id = 'views'
        const smViews = document.createElement('small')
        smViews.id = 'sm_views'
        smViews.textContent = `${video.views} Reproducciones`
        pViews.append(smViews)
        
        videoDescription.append(pTitle, pAuthor, pViews)
        
        container.append(thumbnail, videoDescription)
        videos.push(container)
    })

    relatedVideosMountNode.append(...videos)
}