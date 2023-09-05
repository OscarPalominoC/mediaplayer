import { commentsArray, usersArray } from "./fetch-data.js";


const commentsMountNode = document.querySelector('.comments')

export const createCommentsNode = (video_id) => {
    const comments = []
    commentsMountNode.innerHTML = ''
    const comments_per_video = commentsArray.filter(
        comment => comment.video_id == video_id)
    comments_per_video.forEach(comment => {
        const user = usersArray.find(users => users.id == comment.user_id)
        const commentario = document.createElement('div')
        commentario.className = 'comment'
        const figure = document.createElement('figure')
        const img = document.createElement('img')
        img.src = user.avatar
        figure.appendChild(img)

        const comment_details = document.createElement('div')
        comment_details.id   = 'comment-details'
        const p_userInfo = document.createElement('p')
        p_userInfo.id = 'user-info'
        p_userInfo.textContent = user.usuario
        const p_date = document.createElement('p')
        p_date.id = 'date'
        const small_date = document.createElement('small')
        small_date.textContent = `Comented on: ${comment.date}`
        p_date.appendChild(small_date)
        const p_userComment = document.createElement('p')
        p_userComment.id = 'user-comment'
        p_userComment.textContent = comment.text

        comment_details.append(p_userInfo, p_date, p_userComment)
        commentario.append(figure, comment_details)

        comments.push(commentario)
    })

    commentsMountNode.append(...comments)
}

