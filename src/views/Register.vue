<template>
  <div class="w-full h-screen flex items-center justify-center">
      <form @submit.prevent="register()" class="w-[500px] border px-5 py-7">
          <h1 class="text-center text-4xl font-bold text-gray-800 mb-5">
              Register
          </h1>
            <div class="mb-5 w-full">
              <input class="w-full min-h-10 px-2 border-2" v-model="form.username" id="name" type="text" placeholder="User Name">
              <div class="text-red-600 mt-2" v-if="errors.hasOwnProperty('username') && errors.username != null">{{errors.username[0]}}</div>
            </div>
          <div class="mb-5 w-full">
              <input class="w-full min-h-10 px-2  border-2" v-model="form.email" type="email" placeholder="Email">
              <div class="text-red-600 mt-2" v-if="errors.hasOwnProperty('email') && errors.email != null">{{errors.email[0]}}</div>
          </div>
          <div class="mb-5 w-full relative">
              <input :type="hidePass ? 'password' : 'text'" v-model="form.password" class="w-full min-h-10 px-2  border-2" placeholder="Password">
              <button type="button" @click="hidePass =!hidePass" class="text-xl ml-2 absolute top-[7px] right-2">
                  <i v-if="hidePass" class='bx bx-show' ></i>
                  <i v-else class='bx bx-hide' ></i>
              </button>
              <div class="text-red-600 mt-2" v-if="errors.hasOwnProperty('password') && errors.password != null">{{errors.password[0]}}</div>
          </div>
          <div class="mb-5 w-full text-blue-600">
              <a href="/login">Already have an account? Login!</a>
          </div>
          <div class="mb-5 w-full">
              <button :type="'submit'" class="submit-btn text-white w-full py-3 flex items-center justify-center">
                  <svg v-if="loading" aria-hidden="true" class="mr-3 inline w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                  </svg>
                  Sign up
              </button>
          </div>
      </form>
  </div>
</template>
<script>
import { API_URL } from "@/config";
import axios from "axios";
export default {
data() {
  return {
      token: localStorage.getItem('authToken'),
      activeTab: 'users',
      pageTitle: this.$route.name,
      hidePass: true,
      loading: false,
      form: {
          username: "",
          email: "",
          password: "",
      },
      errors: [],
  };
},
methods:{
    async register() {
        this.loading = true;
        try {
            const response = await axios.post(`${API_URL}/signup/`, this.form, {
                headers: {
                    //'Authorization': `Bearer ${this.token}`
                },
            });

            // Print the response to the console
            console.log('User created:', response.data);

            // Extract the token and user data from the response
            const { token, user } = response.data;

            // Store the token in localStorage
            localStorage.setItem('authToken', token);
            console.log('Auth token stored:', localStorage.getItem('authToken'));

            // Redirect the user to the home page
            this.$router.push('/');
        } catch (error) {
            this.errors = error.response ? error.response.data : 'An error occurred';
            console.error('Error creating user:', this.errors);
        } finally {
            this.loading = false;
        }
    }


}
};
</script>
<style scoped>
  .submit-btn{
      background-color: #0e0e0e;
  }
</style>