import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

function endpoint(url) {
  return `http://127.0.0.1:8000/api/${url}`;
}

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('access_token') || null,
  },
  mutations: {
    retrieveToken(state, token) {
      state.token = token;
    },
    destroyToken(state) {
      state.token = null;
    },
  },
  getters: {
    loggedIn(state) {
      return state.token !== null;
    },
    getApiToken(state) {
      return state.token;
    },
  },
  actions: {
    retrieveToken(context, credentials) {
      return new Promise((resolve, reject) => {
        axios.post(endpoint('auth/login'), {
          email: credentials.email,
          password: credentials.password
        })
        .then(resp => {
          const token = resp.data.access_token;

          localStorage.setItem('access_token', token);
          context.commit('retrieveToken', token);

          resolve(resp);
        })
        .catch(err => {
          reject(err);
        })
      });
    },
    destroyToken(context) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token;
      
      if (context.getters.loggedIn) {
        return new Promise((resolve, reject) => {
          axios.post(endpoint('auth/logout'))
          .then((resp) => {
            localStorage.removeItem('access_token');
            context.commit('destroyToken');

            resolve(resp);
          })
          .catch((err) => {
            localStorage.removeItem('access_token');
            context.commit('destroyToken');

            reject(err);
          });
        });
      }
    },
    getPhotographyGroups(context) {
      return new Promise((resolve, reject) => {
        axios.post(endpoint('group'))
        .then((resp) => {
          resolve(resp);
        })
        .catch((err) => {
          reject(err);
        })
      });
    },
    createPhotographyGroup(context, credentials) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token;

      return new Promise((resolve, reject) => {
        axios.post(endpoint('group/create'), {
          name: credentials.name,
        })
        .then((resp) => {
          resolve(resp);
        })
        .catch((err) => {
          reject(err);
        });
      });
    },
    deletePhotographyGroup(context, credentials) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token;

      return new Promise((resolve, reject) => {
        axios.delete(endpoint(`group/delete/${credentials.id}`))
        .then((resp) => {
          resolve(resp);
        })
        .catch((err) => {
          reject(err);
        });
      });
    },
    getPhotographyGroup(context, credentials) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token;

      return new Promise((resolve, reject) => {
        axios.post(endpoint(`group/get/${credentials.id}`))
        .then((resp) => {
          resolve(resp);
        })
        .catch((err) => {
          reject(err);
        });
      });
    },
    updatePhotographyGroup(context, credentials) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token;

      return new Promise((resolve, reject) => {
        axios.put(endpoint(`group/update/${credentials.id}`), {name: credentials.name})
        .then((resp) => {
          resolve(resp);
        })
        .catch((err) => {
          reject(err);
        });
      });
    },
    getGalleries(context) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token;

      return new Promise((resolve, reject) => {
        axios.post(endpoint(`gallery/all`))
        .then((resp) => {
          resolve(resp);
        })
        .catch((err) => {
          reject(err);
        });
      });
    },
    createGallery(context, credentials) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token;

      return new Promise((resolve, reject) => {
        axios.post(endpoint('gallery/create'), { name: credentials.name, private: credentials.private })
        .then((resp) => {
          resolve(resp);
        })
        .catch((err) => {
          reject(err);
        });
      });
    },
    getGalleryForEdit(context, credentials) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token;

      return new Promise((resolve, reject) => {
        axios.post(endpoint(`gallery/get/${credentials.id}`))
        .then((resp) => {
          resolve(resp);
        })
        .catch((err) => {
          reject(err);
        });
      });
    },
    deleteGallery(context, credentials) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token;

      return new Promise((resolve, reject) => {
        axios.delete(endpoint(`gallery/delete/${credentials.id}`))
        .then((resp) => {
          resolve(resp);
        })
        .catch((err) => {
          reject(err);
        });
      });
    },
  },
  modules: {
  },
});
