export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  async init() {
    await this.model.getPosts();
    this.view.listeningRenderPosts(this.model.posts);
  }
}
