<template>
  <LoadingSpinner v-if="isLoading" />
  <div v-else class="">
      <div class="w-full">
          <HomeHeader :categories="categories"></HomeHeader>
      </div>
      
      <div class="px-3 lg:px-0">
        <div class="gradient text-white leading-normal tracking-normal">
        <!-- Home Hero section -->
            <div class="pt-24 px-28">
                <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                    <!-- left col -->
                    <div class="flex flex-col w-full md:w-2/5 justify-center items:center md:items-start text-center md:text-left">
                        <h1 class="my-4 text-5xl font-bold leading-tight">Create and Manage Your <br>Restaurant Menu Online</h1>
                        <p class="leading-normal text-2xl mb-3">Design your menu from scratch, add dishes, descriptions, <br> prices, and photos with just a few clicks.</p>
                        <p class="eading-normal text-2xl mb-8">Sign up today!</p>
                        <a class="mx-auto lg:mx-0 bg-white hover:bg-lime-400 outline-none px-8 py-4 rounded-full text-lime-300 hover:text-white font-bold my-6 shadow-lg" href="/users/sign_up">Get Started For Free</a>
                    </div>
                    <!-- Right col -->
                    <div class="w-full md:w-3/5 py-6 text-center">
                        <img src="../assets/Images/hero.png" class="w-full md:w-4/5 z-50" alt="">
                    </div>
                </div>
            </div>
            <div class="relative -mt-12 lg:-mt-24">
                <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
                <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
                <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
                <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
                </g>
                <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero">
                <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
                </g>
                </g>
                </svg>
            </div>
      </div>
      </div>

      


      <!-- list of products -->
      <section class="bg-white border-b py-8 px-28">
            <div class="container mx-auto flex flex-wrap pt-4 pb-12">
                <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Discover</h2>
                <div class="w-full mb-4">	
                <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>
                <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                    <div href="#" class="flex flex-wrap no-underline hover:no-underline">
                    <p class="w-full text-gray-600 text-lg md:text-lg px-6">1</p>
                    <div class="w-full font-bold text-xl text-gray-800 px-6">Create a menu</div>
                    <p class="text-gray-800 text-base px-6 mb-5">Sign up to create a menu and add your menu items.</p>
                    </div>
                </div>
                </div>
                <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                    <div href="#" class="flex flex-wrap no-underline hover:no-underline">
                    <p class="w-full text-gray-600 text-lg md:text-lg px-6">2</p>
                    <div class="w-full font-bold text-xl text-gray-800 px-6">Print QR code</div>
                    <p class="text-gray-800 text-base px-6 mb-5">Every menu gets a QR code. Print and display it in your restaurant.</p>
                    </div>
                </div>
                </div>
                <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                    <div href="#" class="flex flex-wrap no-underline hover:no-underline">
                    <p class="w-full text-gray-600 text-lg md:text-lg px-6">3</p>
                    <div class="w-full font-bold text-xl text-gray-800 px-6">Scan QR code</div>
                    <p class="text-gray-800 text-base px-6 mb-5">Customers scan a QR code that brings them to your online menu.</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
        <section class="bg-white border-b py-8">
        <div class="container max-w-5xl mx-auto m-8">
            <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Benefits</h2>
            <div class="w-full mb-4">	
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
        
            <div class="flex flex-wrap">
            <div class="w-1/3 sm:w-1/6 p-6">
                <img src="../assets/Images/clean menu.svg" alt="Benefits of Online Menu: Clean">
            </div>
            <div class="w-2/3 sm:w-5/6 p-6">
                <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">Clean</h3>
                <p class="text-gray-600 mb-8">No need for passing around greasy paper menus. No need for disinfecting them.<br><br>
            </p></div>
            </div>

            
            
            <div class="flex flex-wrap">	
            <div class="w-1/3 sm:w-1/6 p-6 mt-6">
                <img src="../assets/Images/copies.svg" alt="Benefits of Online Menu: Unlimited Copies">
            </div>
            <div class="w-2/3 sm:w-5/6 p-6 mt-6">
                <div class="align-middle">
                <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">Unlimited Copies</h3>
                <p class="text-gray-600 mb-8">Anyone with a smartphone can browse your menu. Never run out of menus.<br><br>
                </p></div>
            </div>

            </div>

            <div class="flex flex-wrap">
            <div class="w-1/3 sm:w-1/6 p-6">
                <img src="../assets/Images/update.svg" alt="Benefits of Online Menu: Easy to Update">
            </div>
            <div class="w-2/3 sm:w-5/6 p-6">
                <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">Easy to Update</h3>
                <p class="text-gray-600 mb-8">Easily update and manage your menu items and prices. No need for reprinting paper menus.<br><br>
            </p></div>
            </div>
        </div>
        </section>

        <svg class="gradient" viewBox="0 0 1439 147" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
                <g class="wave" fill="#f8fafc">
                    <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"></path>
                </g>
                <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
                    <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                    <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
                    <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
                    <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" opacity="0.200000003"></path>
                    </g>
                </g>
                </g>
            </g>
        </svg>
        <section class="container mx-auto text-center py-6 mb-12 gradient">

            <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-white">Help Reduce the Spread of COVID-19</h2>
            <div class="w-full mb-4">	
            <div class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
            </div>

            <h3 class="my-5 text-3xl leading-tight text-white">Say goodbye to paper menus!</h3>	

            <div class="flex flex-col w-full justify-center items-center text-center">
                <a class="mx-auto lg:mx-0 bg-white hover:bg-lime-400 outline-none px-8 py-4 rounded-full text-lime-300 hover:text-white font-bold my-6 shadow-lg" href="/users/sign_up">Get Started For Free</a>
            </div>
        </section>
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
    .gradient {
    background: linear-gradient(111.3deg, rgb(163 230 53) 9.6%, rgb(132 204 22) 93.6%);
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