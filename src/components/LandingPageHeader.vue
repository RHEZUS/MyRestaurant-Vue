<template>
    <div class="page-padding border-b transition transform ease-in-out delay-150 duration-1000 fixed z-50 text-white top-0 py-3 w-screen grid grid-cols-12 justify-between items-center bg-white" >
      
      
      <!--Website Logo-->
      <div class="logo text-center text-3xl col-span-10 md:col-span-2 flex items-center justify-start">
        <a  href="/">
            <img :src="Logo" alt="logo" width="50" height="50">
        </a>
      </div>
  
      <!--Menu For large Screen Sizes-->
      <div class="justify-start text-white col-span-10  py-1 hidden md:flex">
        <ul class="flex gap-10 font-normal">
          <a class="relative group" href="#home">
            <li  class="text-black">Home</li>
            <span class="after:block after:absolute after:left-0 after:top-5 after:h-[2px] after:bg-blue-600 after:w-0 after:transition-all after:duration-300 group-hover:after:w-full"></span>
          </a>
          <a class="relative group" href="#feature">
            <li class="text-black">Feature</li>
            <span class="after:block after:absolute after:left-0 after:top-5 after:h-[2px] after:bg-blue-600 after:w-0 after:transition-all after:duration-300 group-hover:after:w-full"></span>
          </a>
          <a class="relative group" href="#about">
            <li class="text-black">About </li>
            <span class="after:block after:absolute after:left-0 after:top-5 after:h-[2px] after:bg-blue-600 after:w-0 after:transition-all after:duration-300 group-hover:after:w-full"></span>
          </a>
            
          <a class="relative group" href="#presentation">
            <li class="text-black">Presentation</li>
            <span class="after:block after:absolute after:left-0 after:top-5 after:h-[2px] after:bg-blue-600 after:w-0 after:transition-all after:duration-300 group-hover:after:w-full"></span>
          </a>

        </ul>
      </div>

      <!--Responsive Navbar-->
      <ResponsiveNavbar></ResponsiveNavbar>
      
    </div>
  </template>
  <script>
  import logo from '@/assets/Images/menu-logo.png';
  import ResponsiveNavbar from '@/components/LandingResponsiveNavbar.vue'
  import { API_URL, checkAuthAndRole } from "@/config";
  import axios from "axios";
  export default {
    data() {
      return {
        token: localStorage.getItem('authToken'),
        pageTitle: this.$route.name,
        //categories: [],
        Logo: logo,
        apiUrl: API_URL,
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
  };
  </script>