<template>
    <LoadingSpinner v-if="isLoading == true" />
    <div v-else class="min-h-screen w-full bg-[#102935]">        
        <!-- list of products -->
      <div class="min-h-[60vh] py-5">
        <div class="px-28 w-full gap-6 text-[#bea574]">
          <div class="w-full flex justify-center items-center">
            <img class="w-24 h-24 rounded-full" v-if="restaurant.logo" :src="mediaUrl + restaurant.logo + '/'" alt="Restaurant logo">
          </div>
          <div class="">
            <h1 class="text-center text-5xl my-3 font-semibold capitalize">{{restaurant.name}}</h1>
          </div>
        </div>
        <div class="px-28 w-full grid grid-cols-12 mt-8 gap-4">
          <div v-for="item in menus" class="col-span-12 md:col-span-6 border-2 border-[#525953] p-6 rounded-lg">
            <div class="">
              <h1 class="text-center text-white text-2xl font-medium capitalize border-b-2 border-[#bea574]">{{item.category.name}}</h1>
            </div>
            <div v-for="meal in item.menus" class="">
              <div class="flex justify-between border-b border-[#bea574] py-1"> 
                <span class="text-lg text-[#bea574] font-medium"> {{ meal.name }} </span>
                <span class="text-lg text-white font-medium"> {{ '$' + meal.price }} </span>
              </div>
              <div class="flex gap-3 py-3">
                <img class="w-24 h-24" :src="mediaUrl + meal.image + '/'" alt="Meal image">
                <div class="text-white"> {{ meal.desc }} </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  
    
  </template>
  <script>
    import LoadingSpinner from '@/components/LoadingSpinner.vue';
    import Footer from '@/components/Footer.vue';
    //import ProductCard from '@/components/ProductCard.vue';
    import HomeHeader from '@/components/HomeHeader.vue';
    import { API_URL, mediaUrl } from "@/config";
    import axios from "axios";
    export default {
        name: 'HelloWorld',
        data() {
          return {
            pageTitle: this.$route.name,
            apiUrl: API_URL,
            mediaUrl: mediaUrl,
            isLoading:false,
            restaurant: [],
            menus:[],
          };
        },
        components: {
            HomeHeader,
            Footer,
            LoadingSpinner,
        },
        methods: {
          fetchData() {
            const id = this.$route.params.id;
            axios.get(`${API_URL}/restaurant/${id}/menus/`)
            
              .then(response => {
                const results = response.data;
                console.log(results);
                this.restaurant = results.restaurant;
                this.menus = results.categories;

              })
              .catch(message => {
                console.error('Error fetching restaurants:', message);
              });
          },
        },
        async mounted() {
          this.isLoading=true;
          this.fetchData()
            setTimeout(() => {
              this.isLoading = false;
          }, 2000);
  
          
        },
    }
  
  </script>
  <style scoped> 
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