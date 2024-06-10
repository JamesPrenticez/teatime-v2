import { createStore, Store as VuexStore } from 'vuex';
import axiosClient from '../axios/axiosClient';
import me from '../assets/me.webp'; // TODO move to server

// Define your state types
// TODO move to models?
interface UserData {
  created_at: string;
  email: string;
  email_verified_at: string;
  id: number;
  name: string;
  updated_at: string;
  imageUrl: string;
}

interface UserState {
  data: UserData;
  token: string | null;
}

interface RootState {
  user: UserState;
}

// Define initial state
const state: RootState = {
  user: {
    data: {} as UserData,
    token: sessionStorage.getItem("TOKEN"),
  },
};

// Define mutation types
export enum StoreActions {
  REGISTER = 'register',
  LOGIN = 'login',
  LOGOUT = 'logout',
}

export enum StoreMutation {
  SET_USER = "setUser",
  LOGOUT = "logout",
}

// Create store
const store: VuexStore<RootState> = createStore({
  state,
  mutations: {
    [StoreMutation.LOGOUT] (state) {
      state.user.data = {} as UserData;
      state.user.token = null;
      sessionStorage.clear();
    },
    [StoreMutation.SET_USER] (state, userData) {
      state.user.token = userData.token; // returned from php backend
      state.user.data = userData.user;
      state.user.data.imageUrl = me; // not sending this from server yet
      sessionStorage.setItem('TOKEN', userData.token);
    },
  },
  getters: {},
  actions: {
    async [StoreActions.REGISTER] ({ commit }, user) {
      try {
        const { data } = await axiosClient.post('/register', user)
        commit(StoreMutation.SET_USER, data);
        return data; // Optional: return data if needed
      } catch (error) {
        console.error('Registration failed', error);
        throw error; // Re-throw error to handle it in the component
      }
    },
    async [StoreActions.LOGIN]({ commit }, user) {
      try {
        const { data } = await axiosClient.post('/login', user);
        commit(StoreMutation.SET_USER, data);
        return data;
      } catch (error) {
        console.error('Login failed', error);
        throw error;
      }
    },
    async [StoreActions.LOGOUT]({ commit }) {
      try {
        await axiosClient.post('/logout')
          .then((response) => {
            commit('logout')
            return response;
          })
      }
      catch (error) {
        console.error('Logout failed', error);
        throw error;
      }
    },
  },
  modules: {},
});

export default store;