<template>
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
      Register for free
    </h2>
  </div>

  <div class="flex flex-col mt-10 sm:mx-auto sm:w-full sm:max-w-sm space-y-2">
    <button
      @click="autofill"
      class="px-4 py-1 bg-fuchsia-500 text-white rounded-lg ml-auto"
    >
      AutoFill
    </button>

    <!-- <form class="space-y-2" submit="register"> -->
    <form class="space-y-2" @submit.prevent="register">

      <input 
        id="name"
        name="name"
        placeholder="Name"
        type="text"
        autocomplete="name"
        required 
        class="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
        v-model="user.name"
      />

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

      <input 
        id="password_confirmation"
        name="password_confirmation"
        placeholder="Confrim Password"
        type="password"
        autocomplete="password_confirmation"
        required 
        class="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
        v-model="user.password_confirmation"
      />

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Sign up
        </button>
      </div>
    </form>

    <div class="text-sm flex flex-col items-center space-y-2 mt-2">
      <p class="text-sm text-gray-500">
        Already have an account?
        {{ ' ' }}
        <router-link :to="{name: 'login'}" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
          Login into your account
        </router-link>
      </p>

      <router-link :to="{name: 'login'}" class="font-semibold text-indigo-600 hover:text-indigo-500">
        Forgot password?
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import {useRouter} from "vue-router"
import store, { StoreActions } from "../../store";

const router = useRouter();

const user = reactive({
  name: '',
  email: '',
  password: '',
  password_confirmation: ''
});

const autofill = () => {
  user.name = 'John Doe';
  user.email = 'johndoe@example.com';
  user.password = 'Password1!';
  user.password_confirmation = 'Password1!';
};

function register(e) {
  e.preventDefault();
  store
    .dispatch(StoreActions.REGISTER, user)
    .then(()=>{
      router.push({ name: 'dashboard' })
    })
    .catch((error) => {
      console.error('Registration failed', error);
    });
}

</script>