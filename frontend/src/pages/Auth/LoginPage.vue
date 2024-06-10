<template>
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
      Sign in to your account
    </h2>
  </div>

  <div class="flex flex-col mt-10 sm:mx-auto sm:w-full sm:max-w-sm space-y-2">
    <button
      @click="autofill"
      class="px-4 py-1 bg-fuchsia-500 text-white rounded-lg ml-auto"
    >
      AutoFill
    </button>

    <form class="space-y-6" @submit="login" method="POST">

      <div v-if="errorMsg" class="flex items-center justify-between py-3 px-5 bg-red-500 text-white rounded">
        {{errorMsg}}
        <span @click="errorMsg=''">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8 flex items-center justify-center rounded-full transition-colors cursor-pointer hover:bg-black/20 p-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </span>
      </div>

      <input 
        id="email"
        name="email"
        placeholder="Email"
        type="email" 
        autocomplete="email"
        required
        class="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
        v-model="user.email"
      />

      <input 
        id="password"
        name="password"
        placeholder="Password"
        type="password"
        autocomplete="current-password"
        required
        class="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        v-model="user.password"
      />

      <label 
        for="remember"
        class="text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded flex items-center justify-between cursor-pointer"
      >
        Remember Me
      <input 
        id="remember"
        name="remember"
        type="checkbox"
        class="ml-2 block text-sm text-gray-900 h-6 w-6 cursor-pointer"
        v-model="user.remember"
      >
      </label>

      <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>

    </form>

    <p class="mt-10 text-center text-sm text-gray-500">
      Not a member?
      {{ ' ' }}
      <router-link :to="{name: 'register'}" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
        Register for free
      </router-link>
    </p>

    <button @click='test'>
    test
    </button>
  </div>
</template>

<script setup>
import {ref, reactive } from "vue";
import {useRouter} from "vue-router"
import store, { StoreActions } from "../../store";

const router = useRouter();

const user = reactive({
  email: '',
  password: '',
  remember: false,
});

const autofill = () => {
  user.email = 'johndoe@example.com';
  user.password = 'Password1!';
  user.remember = true;
};

let errorMsg = ref('');

function login(e){
  e.preventDefault();
  store
    .dispatch("login", user)
    .then(()=>{
      router.push({name: 'home'});
    })
    .catch((error) => {
      // console.error('Login failed', error);
      errorMsg.value = error.response.data.error
    });
}

</script>