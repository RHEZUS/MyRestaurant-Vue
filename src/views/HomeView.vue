<template>
  <LoadingSpinner v-if="isLoading" />
  <div v-else class="min-h-screen w-full">
      <div class="w-full">
          <HomeHeader :categories="categories"></HomeHeader>
      </div>
      
      <!-- Home Hero section -->
      <div class="conatiner mx-auto px-20 lg:px-32 hero flex bg-lime-combined h-[100vh] md:h-[80vh] justify-between items-center gap-10">
            <div class="w-full flex items-center flex-col md:items-start">
                <h1 class="text-5xl md:text-4xl text-white font-bold my-3">Create and Manage Your <br>Restaurant Menu Online</h1>
                <p class="text-2xl font-semibold text-white my-3">Design your menu from scratch, add dishes, descriptions, <br> prices, and photos with just a few clicks.</p>
                <p class="text-2xl font-semibold text-white my-3">Join thousands of satisfied restaurant owners. <br> Sign up today!</p>
                <button class="bg-white hover:bg-lime-400 outline-none px-8 py-4 rounded-full text-lime-300 hover:text-white font-bold mt-3">Get Started For Free</button>
                
            </div>
            <div class="">
                <img class="w-[100%] h-[100%]" style="" src="../assets/images/hero.png" alt="">
            </div>
      </div>


      <!-- list of products -->
      <div class="page-padding products w-full gap-6 my-4 px-[12px] py-7">
          <div class="col-span-full">
              <h1 class="text-center text-2xl my-3 font-semibold">Discover</h1>
          </div>
      </div>

      <Footer></Footer>
  </div>
  

  
</template>
<script>
  import LoadingSpinner from '@/components/LoadingSpinner.vue';
  import Footer from '@/components/Footer.vue';
  //import ProductCard from '@/components/ProductCard.vue';
  import HomeHeader from '@/components/HomeHeader.vue';
  import { API_URL } from "@/config";
  //import axios from "axios";
  export default {
      name: 'HelloWorld',
      data() {
          return {
              token: localStorage.getItem('authToken'),
              pageTitle: this.$route.name,
              products: [],
              categories: [],
              apiUrl: API_URL,
              newCartUpdate: false,
              isLoading: true,
          };
      },
      components: {
          HomeHeader,
          Footer,
          LoadingSpinner,
      },
      methods: {

      },
      async mounted() {
        this.isLoading=true

        setTimeout(() => {
            this.isLoading = false;
        }, 2000);
      },
  }

</script>
<style scoped>
    .bg-lime-combined {
        background: linear-gradient(
            to bottom, 
            rgb(163 230 53),  /* bg-lime-50 */
            rgb(132 204 22),  /* bg-lime-100 */
            rgb(217, 249, 157)   /* bg-lime-200 */
        );
    }
  .products{
      display: grid;
      grid-template-columns: repeat(5, 1fr);
  } 
  .page-padding{
      padding-left: 12px;
      padding-right: 12px;
  } 
  @media screen and (max-width: 768px) {
      .products{
          grid-template-columns: repeat(2, 1fr);
      } 
  }
  @media screen and (min-width: 768px) {
      .products{
          grid-template-columns: repeat(3, 1fr);
      } 
  }
  @media screen and (min-width: 1024px) {
      .products{
          display: grid;
          grid-template-columns: repeat(4, 1fr);
      } 
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