import http from "../api";

class PostsService {
  // Posts
  getAll() {
    return http.get("posts");
  }
  get(id) {
    return http.get(`/posts?id=${id}`);
  }
  createPost(id, data) {
    return http.post(`users/${id}/posts`, data);
  }
}

export default new PostsService();