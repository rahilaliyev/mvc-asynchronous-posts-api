export default class View {
  constructor() {
    this.postsContainer = document.querySelector(".posts-container");
  }

  listeningRenderPosts(posts) {
    this.postsContainer.innerHTML = "";

    posts.forEach(post => {
      const postElement = document.createElement("div");
      postElement.classList.add("post");
      postElement.innerHTML = `
        <h2 class="post-title">${post.title}</h2>
      `;
      this.postsContainer.appendChild(postElement);
    });
  }
}
