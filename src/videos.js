import { videosArray } from "./fetch-data.js";

// Video
const mountNode = document.querySelector('.video')
const playPauseButton = document.getElementById('playPause');
const muteButton = document.getElementById('mute');
const volumeInput = document.getElementById('volumen');
const playBar = document.getElementById('barraReproduccion');
const fullscreenButton = document.getElementById('fullscreen')
const controls = document.querySelector('.controls')

let timeoutId

function showPlayBar() {
    controls.style.opacity = 1
}

function hidePlayBar() {
    controls.style.opacity = 0
}

export const createVideo = (video_id) => {
    const newVideo = videosArray.find(video => video.id == video_id)
    const video = document.createElement('video')
    
    const source = document.createElement('source')
    video.dataset.videoId = newVideo.id

    source.src = newVideo.sources

    playPauseButton.addEventListener('click', () => {
        if (video.paused) {
            video.play()
            playPauseButton.textContent = 'Pause'
        }
        else {
            video.pause()
            playPauseButton.textContent = 'Play'
        }
    })

    video.addEventListener('click', () => {
        if (video.paused) {
            video.play()
            playPauseButton.textContent = 'Pause'
        }
        else {
            video.pause()
            playPauseButton.textContent = 'Play'
        }
    })

    muteButton.addEventListener('click', () => {
        video.muted = !video.muted
        muteButton.textContent = video.muted ? 'Unmute': 'Mute'
    })

    volumeInput.addEventListener('input', () => {
        video.volume = volumeInput.value
    })

    playBar.addEventListener('input', () => {
        const playTime = video.duration * (playBar.value / 100)
        video.currentTime = playTime
    })

    video.addEventListener('timeupdate', () => {
        const percentage = (video.currentTime / video.duration) * 100
        playBar.value = percentage
    })

    fullscreenButton.addEventListener('click', () => {
        if (video.requestFullscreen) {
          video.requestFullscreen(); // Método para activar el modo de pantalla completa
        } else if (video.mozRequestFullScreen) {
          video.mozRequestFullScreen(); // Para navegadores Firefox
        } else if (video.webkitRequestFullscreen) {
          video.webkitRequestFullscreen(); // Para navegadores basados en WebKit (Chrome, Safari)
        }
    })

    // Métodos para ocultar/mostrar la barra de reproducción
    video.addEventListener('mouseenter', () => {
        showPlayBar()
        clearTimeout(timeoutId)
    })

    video.addEventListener('mouseleave', () => {
        hidePlayBar()
    })

    video.addEventListener('mousemove', () => {
        showPlayBar()
        clearTimeout(timeoutId)
        timeoutId = setTimeout(hidePlayBar, 2000)

    })

    controls.addEventListener('mouseenter', () => {
        showPlayBar()
        clearTimeout(timeoutId)
    })

    controls.addEventListener('mouseleave', () => {
        hidePlayBar()
    })

    controls.addEventListener('mousemove', () => {
        showPlayBar()
        clearTimeout(timeoutId)
        timeoutId = setTimeout(hidePlayBar, 2000)

    })

    video.appendChild(source)
    mountNode.insertAdjacentElement('afterBegin', video)
}

export const videoDescription = (video_id) => {
    const newVideo = videosArray.find(video => video.id == video_id)
    const descriptionMountNode = document.querySelector('.video-description')
    descriptionMountNode.innerHTML = ''
    const title = document.createElement('h3')
    title.textContent = newVideo.title
    const author = document.createElement('p')
    const author_sm = document.createElement('small')
    author_sm.textContent = newVideo.author
    author.appendChild(author_sm)
    const uploaded = document.createElement('p')
    const uploaded_sm = document.createElement('small')
    uploaded_sm.textContent = newVideo.upload_date
    uploaded.appendChild(uploaded_sm)
    const description = document.createElement('p')
    description.textContent = newVideo.description

    descriptionMountNode.append(title, author, uploaded, description)
}