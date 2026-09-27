// Write your code here!
async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await response.json()

  const postList = document.querySelector("#post-list")

  posts.forEach((post) => {
    const postTitle = document.createElement("h1")
    postTitle.textContent = post.title

    const postBody = document.createElement("p")
    postBody.textContent = post.body

    postList.appendChild(postTitle)
    postList.appendChild(postBody)
  })
}

fetchPosts()

