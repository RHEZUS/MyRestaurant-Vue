<template>
    <div class="page-padding border-b transition transform ease-in-out delay-150 duration-1000 fixed z-50 text-white top-0 py-3 w-screen grid grid-cols-12 justify-between items-center bg-white" >
      
      
      <!--Website Logo-->
      <div class="logo text-center text-3xl col-span-10 lg:col-span-2 flex items-center justify-start">
        <a  href="/">
            <img src="../assets/images/menu logo.png" alt="logo" width="70" height="70">
        </a>
      </div>
      

  
      <!--Menu For large Screen Sizes-->
      <div class="justify-center text-white col-span-7  py-1" :class="{'hidden  lg:hidden': isScrolled, 'hidden lg:flex': !isScrolled}">
        <ul class="flex gap-10 font-normal">
          <a class="relative group" href="/">
            <li  class="text-black">Home</li>
            <span v-if="$route.name == 'home'" class="after:block after:absolute after:left-0 after:top-5 after:h-[2px] after:bg-blue-600 after:w-full  group-hover:after:w-full"></span>
            <span v-else class="after:block after:absolute after:left-0 after:top-5 after:h-[2px] after:bg-blue-600 after:w-0 after:transition-all after:duration-300 group-hover:after:w-full"></span>
          </a>
          <a class="relative group" href="/restaurants">
            <li class="text-black">Restaurants</li>
            <span v-if="$route.name == 'help&faq'" class="after:block after:absolute after:left-0 after:top-5 after:h-[2px] after:bg-blue-600 after:w-full  group-hover:after:w-full"></span>
            <span v-else class="after:block after:absolute after:left-0 after:top-5 after:h-[2px] after:bg-blue-600 after:w-0 after:transition-all after:duration-300 group-hover:after:w-full"></span>
          </a>
          <a class="relative group" href="/categories">
            <li class="text-black">Categories</li>
            <span v-if="$route.name == 'help&faq'" class="after:block after:absolute after:left-0 after:top-5 after:h-[2px] after:bg-blue-600 after:w-full  group-hover:after:w-full"></span>
            <span v-else class="after:block after:absolute after:left-0 after:top-5 after:h-[2px] after:bg-blue-600 after:w-0 after:transition-all after:duration-300 group-hover:after:w-full"></span>
          </a>
            
            <a class="relative group" href="/contact">
              <li class="text-black">Contact Us</li>
              <span v-if="$route.name == 'contact'" class="after:block after:absolute after:left-0 after:top-5 after:h-[2px] after:bg-blue-600 after:w-full  group-hover:after:w-full"></span>
              <span v-else class="after:block after:absolute after:left-0 after:top-5 after:h-[2px] after:bg-blue-600 after:w-0 after:transition-all after:duration-300 group-hover:after:w-full"></span>
            </a>

        </ul>
      </div>

      <div class="justify-center text-white col-span-3 py-1 hidden lg:flex">
        <ul class="flex w-full gap-4 font-normal justify-end">
          <a v-if="!isLogin" class="relative group" href="/register">
            <li  class="text-black">Sign Up</li>
            <span v-if="$route.name == 'home'" class="after:block after:absolute after:left-0 after:top-5 after:h-[2px] after:bg-blue-600 after:w-full  group-hover:after:w-full"></span>
            <span v-else class="after:block after:absolute after:left-0 after:top-5 after:h-[2px] after:bg-blue-600 after:w-0 after:transition-all after:duration-300 group-hover:after:w-full"></span>
          </a>
  
          <a v-if="!isLogin" class="relative group" href="/login">
            <li class="text-black">Log In</li>
            <span v-if="$route.name == 'help&faq'" class="after:block after:absolute after:left-0 after:top-5 after:h-[2px] after:bg-blue-600 after:w-full  group-hover:after:w-full"></span>
            <span v-else class="after:block after:absolute after:left-0 after:top-5 after:h-[2px] after:bg-blue-600 after:w-0 after:transition-all after:duration-300 group-hover:after:w-full"></span>
          </a>
          
          <a v-if="isLogin" class="relative group" href="/contact">
            <li class="text-black">Log Out</li>
            <span v-if="$route.name == 'contact'" class="after:block after:absolute after:left-0 after:top-5 after:h-[2px] after:bg-blue-600 after:w-full  group-hover:after:w-full"></span>
            <span v-else class="after:block after:absolute after:left-0 after:top-5 after:h-[2px] after:bg-blue-600 after:w-0 after:transition-all after:duration-300 group-hover:after:w-full"></span>
          </a>

        </ul>
      </div>

      <!--Responsive Navbar-->
      <ResponsiveNavbar></ResponsiveNavbar>
      
    </div>
  </template>
  <style scoped>
    .scrollCard::-webkit-scrollbar-track
    {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        /*border-radius: 10px;*/
        background-color: #F5F5F5;
    }
    
    .scrollCard::-webkit-scrollbar
    {
        width: 3px;
        background-color: #F5F5F5;
    }
    
    .scrollCard::-webkit-scrollbar-thumb
    {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #c2c0c0f1;
    }
  
    .scrollCard::-webkit-scrollbar-thumb:hover{
      background-color: #555;
    }
  
    .page-padding{
      padding-left: 48px;
      padding-right: 48px;
    }
    
    @media screen and (max-width: 768px) {
      .toggler{
        display: block;
      } 
      .page-padding{
        padding-left: 12px;
        padding-right: 12px;
      } 
    }
    @media screen and (min-width: 768px) {
        .products{
            grid-template-columns: repeat(3, 1fr);
        } 
    }
    @media screen and (min-width: 1024px) {
      .page-padding{
        padding-left: 48px;
        padding-right: 48px;
      } 
    }
  
    @media screen and (min-width: 1280px) {
        .products{
            display: grid;
            grid-template-columns: repeat(5, 1fr);
        } 
    }
  </style>
  
  <script>
  import ResponsiveNavbar from '@/components/ResponsiveNavbar.vue'
  //import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
  //import SearchModal from '@/components/SearchModal.vue'
  //import CartModal from "@/components/CartModal.vue"
  import { API_URL, checkAuthAndRole } from "@/config";
  import axios from "axios";
  export default {
    data() {
      return {
        token: localStorage.getItem('authToken'),
        pageTitle: this.$route.name,
        //categories: [],
        apiUrl: API_URL,
        isScrolled: false,
        isLogin: false,
        showSidebar: false,
        showCard: false,
        numberOfItemInCart: localStorage.getItem('numberOfItemInCart'),
      };
    },
    props:{
    },
    async mounted(){
      //this.getChildData();
      this.isLogin = await checkAuthAndRole('user');
      console.log('Check if user connected: ', this.isLogin);
      
    },
    components: {
      ResponsiveNavbar,
  
    },
    created() {
      window.addEventListener('scroll', this.handleScroll);
      //this.fetchCategories();
      //window.addEventListener('click', this.handleGlobalClick);
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
      //window.removeEventListener('click', this.handleGlobalClick);
    },
    methods: {
      handleScroll() {
        if (window.pageYOffset > 100) { // Change 100 to the position where you want the background to change
          this.isScrolled = true;
        } else {
          this.isScrolled = false;
        }
      },
      computedClass(categoryName) {
        const currentPath = '/product/category/' + categoryName;
        return this.$route.path === currentPath;
      },
  
      async logout() {
          try {
              // Make a request to the logout endpoint provided by Sanctum
              await axios.post(`${API_URL}/logout`, {}, {
                  headers: {
                      Authorization: `Bearer ${localStorage.getItem('authToken')}`
                  }
              });
              
              // Clear the authToken from localStorage
              localStorage.removeItem('authToken');
  
              // Redirect the user to the login page or any other page as needed
              this.$router.push('/login');
          } catch (error) {
              console.error('Error logging out:', error);
              // Handle error as needed
          }
      },
  
  
      prodByCategory(name) {
        this.$router.push({name: 'Category Products', params: {name: name}});
        this.showSidebar=false;
      },
    }
  };
  </script>