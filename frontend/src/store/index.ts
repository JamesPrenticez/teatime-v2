import { createStore, Store as VuexStore } from 'vuex';
import me from '../assets/me.webp';

// Define your state types
// TODO move to models?
interface UserData {
  name: string;
  email: string;
  imageUrl: string;
}

interface UserState {
  data: UserData;
  token: number | null;
}

interface RootState {
  user: UserState;
}

// Define initial state
const state: RootState = {
  user: {
    data: {
      name: 'James Prentice',
      email: 'prenticez@hotmail.co.nz',
      imageUrl: me,
    },
    token: 123,
  },
};

// Define mutation types
export enum StoreMutation {
  LOGOUT = 'logout',
}

// Create store
const store: VuexStore<RootState> = createStore({
  state,
  mutations: {
    [StoreMutation.LOGOUT] (state) {
      state.user.data = {} as UserData;
      state.user.token = null;
    },
  },
  getters: {},
  actions: {},
  modules: {},
});

export default store;