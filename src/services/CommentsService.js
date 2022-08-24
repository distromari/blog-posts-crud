import http from "../api";

class CommentsService {
  // Comentários
  createComment(id, data) {
    return http.post(`/posts/${id}/comments`, data);
  }
  getComments(id, data) {
    return http.get(`/posts/${id}/comments`, data);
  }
}

export default new CommentsService();