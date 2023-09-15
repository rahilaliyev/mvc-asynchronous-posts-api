export default class Model {
  constructor() {
    this.posts = [];
  }

  async getPosts() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      this.posts = data;
    } catch (err) {
      console.error(err);
    }
  }
}
