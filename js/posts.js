const content = document.getElementById("postsContainer")

async function getPosts() {
    return await fetch("https://api.npoint.io/3e0b1f5e50386f3c904a")
}

function Post(postContent) {
    const {imageLink, text, date, author, authorImage} = postContent;

    return (
        `<div>
            <div class="post-header">
                <div>
                    <img src="${authorImage ?? "public/blank_picture.webp"}" class="post-image">
                    <p>${author ?? "anonymous"}</p>
                </div>
                <p>${date}</p>
            </div>
            ${imageLink ? `<img src="${imageLink}" class="post-image" >` : ""}
            <p>
            ${text ?? ""}
            </p>

            <div>
                <img src="public/like.png" class="like-image">
            </div>
        </div>`
   )
}

function renderPosts(contentElement, posts) {
    contentElement.innerHTML = posts.map(post => Post(post)).join("");
}


window.onload = () => {
    const contentElement = document.getElementById("postsContainer")
    getPosts().then(payload => payload.json()).then(result => renderPosts(contentElement, result))
}


