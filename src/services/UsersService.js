import http from "../api";

class UsersService {
  // Usuários
  getUsers() {
    return http.get("users");
  }
  createUser(data) {
    return http.post("users", data);
  }
  getUserDetails(id) {
    return http.get(`users/${id}`);
  }
  updateUserDetails(id, data) {
    return http.put(`users/${id}`, data);
  }
  deleteUser(id) {
    return http.delete(`users/${id}`);
  }
}

export default new UsersService();