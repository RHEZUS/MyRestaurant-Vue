<template>
  <LoadingSpinner v-if="isLoading" />
  <div v-else class="min-h-screen w-full">
      <div class="w-full">
          <HomeHeader :categories="categories"></HomeHeader>
      </div>
      
      <!-- Home Hero section -->
      <div class="w-full h-[50vh] md:h-[60vh] hero  mt-6">
          <img class="w-full h-full" style="" src="../assets/slider-1.webp" alt="">
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