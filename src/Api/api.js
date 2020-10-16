import * as axios from "axios";

const api = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "847951f2-1ae7-4688-b919-360aa831ca75",
  },
});

export const userAPI = {
  getUsers(currentPage = 1, pageSize = 5) {
    return api
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  follow(id) {
    return api.post(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
  unFollow(id) {
    return api.delete(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
};

export const authAPI = {
  isAuth() {
    return api.get(`auth/me`).then((response) => {
      return response.data;
    });
  },
  login(email, password, rememberMe = false, captcha = null) {
    return api
      .post(`/auth/login`, { email, password, rememberMe, captcha })
      .then((response) => {
        return response.data;
      });
  },
  logout() {
    return api.delete(`/auth/login`).then((response) => {
      return response.data;
    });
  },
  captcha(){
    return api.get(`/security/get-captcha-url`).then((response) => {
      return response.data;
    });
  }
};

export const profileAPI = {
  getUserId(id) {
    return api.get(`profile/${id}`).then((response) => {
      return response.data;
    });
  },
  getStatus(id) {
    return api.get(`/profile/status/${id}`).then((response) => {
      return response.data;
    });
  },
  updateStatus(status) {
    return api.put(`/profile/status/`, { status }).then((response) => {
      return response.data;
    });
  },
  savePhoto(photo) {
    const formData = new FormData();
    formData.append("image", photo);

    return api.put(`/profile/photo/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};
