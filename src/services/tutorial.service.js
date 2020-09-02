import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get(`/institution`);
  }

  get(id) {
    return http.get(`/institution/${id}`);
  }

  create(data) {
    return http.post(`/institution`, data);
  }

  update(id, data) {
    return http.put(`/institution/${id}`, data);
  }

  delete(id) {
    return http.delete(`/institution/${id}`);
  }

  deleteAll() {
    return http.delete(`/institution`);
  }

  findByTitle(data) {
    return http.post(`/institution/filter`, data);
  }
}

export default new TutorialDataService();