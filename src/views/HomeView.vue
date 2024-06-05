<template>
    <LoadingSpinner v-if="isLoading" />
    <div v-else class="">
        <div class="w-full">
            <LandingPageHeader ></LandingPageHeader>
        </div>
    
        <div class="" id="home">
            <div class="gradient text-white leading-normal tracking-normal">
                <!-- Home Hero section -->
                <div class="pt-24 px-0 sm:px-10 md:px-28">
                    <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                        <!-- left col -->
                        <div class="flex flex-col w-full md:w-2/5 justify-center items:center md:items-start text-center md:text-left">
                            <h1 class="my-4 text-5xl font-bold leading-tight">MyRestaurant</h1>
                            <p class="leading-normal text-2xl mb-3">Create and Manage Your Restaurant Menu Online with just a few clicks.</p>
                            <a href="/register" class="mx-auto lg:mx-0 bg-white hover:bg-lime-400 outline-none px-8 py-4 rounded-full text-lime-300 hover:text-white font-bold my-6 shadow-lg" >Get Started For Free</a>
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

        


        <!-- Features -->
        <section class="bg-white border-b py-8 px-0 sm:px-10 md:px-28" id="feature">
            <div class="container mx-auto flex flex-wrap pt-4 pb-12">
                <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Feature</h2>
                
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

        <!-- About -->
        <section class="bg-white border-b py-8 px-0 sm:px-10 md:px-28" id="about">
            <div class="container max-w-5xl mx-auto m-8">
                <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">About</h2>
                <div class="w-full mb-4">	
                    <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>

                <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                    <ul class="flex flex-wrap -mb-px">
                        <li class="me-2">
                            <button @click="about = 'project'" :class="{'text-blue-600 border-blue-600': about == 'project', 'border-transparent':about != 'project'}" class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Project</button>
                        </li>
                        <li class="me-2" >
                            <button @click="about = 'team'" :class="{'text-blue-600 border-blue-600': about == 'team', 'border-transparent':about != 'team'}" class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" aria-current="page">Team</button>
                        </li>
                    </ul>
                </div>

                <div class="w-full overflow-hidden mt-3">
                    <div class="w-[200%] flex flex-row" :class="{'translate-x-0': about == 'project', '-translate-x-[50%]': about == 'team',}">
                        <div class="w-full bg-white px-4">
                            <h3 class=" text-start text-4xl font-semibold py-4">About the Project</h3>
                            <p>
                                Welcome to the Restaurant Menu Manager! Inspired by a conversation with a friend seeking impactful solutions, we created a platform that revolutionizes restaurant menu management. Our project allows restaurant owners to manage their menus digitally, while customers can easily access these menus by scanning a QR code. Our key features include secure authentication, comprehensive restaurant and menu management, and efficient QR code generation. We aim to enhance the dining experience by combining modern technology with convenience and accessibility. Thank you for your interest in the Restaurant Menu Manager!
                            </p>
                        </div>
                        <div class="w-full">
                            <h3 class=" text-start text-4xl font-semibold py-4">About Our Team</h3>
                            <div class="grid mb-8  gap-4 border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
                                <figure class="flex flex-col items-center justify-center p-8 border text-center bg-white border-b border-gray-200 md:border-e">
                                    <figcaption class="flex items-center justify-center ">
                                        <img class="rounded-full w-9 h-9" src="https://ludivinseunda.tech/storage/01HM6QQMWXA8RZ7TAJSV822JZ1.jpg" alt="profile picture">
                                        <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                                            <div>Ludivin Seunda Tchouapi</div>
                                            <div class="text-sm text-gray-500 dark:text-gray-400 ">Software Developer</div>
                                        </div>
                                    </figcaption>
                                    <blockquote class="max-w-2xl mx-auto mb-1 text-gray-500 dark:text-gray-400">
                                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white"></h3>
                                        <p class="my-4">Web Developer and Student a ALX Africa, pationed in building impactful and reliable solutions to improves people and companies activities.</p>
                                    </blockquote>
                                    <div class=" flex items-start gap-4">
                                        <a href="https://ludivinseunda.tech/" class="">
                                            <div class="bg-white border hover:border-blue-500 hover:text-blue-500 w-28 h-8 rounded-full flex justify-center items-center text-lg"><span>Website</span></div>
                                        </a>
                                        <a href="https://www.linkedin.com/in/ludivin-seunda-1593641ba/" class="">
                                            <div class="bg-white border hover:border-blue-500 hover:text-blue-500 w-8 h-8 rounded-full flex justify-center items-center text-lg"><i class='bx bxl-linkedin'></i></div>
                                        </a>
                                        <a href="https://www.facebook.com/ludivin.seunda" class="">
                                            <div class="bg-white border hover:border-blue-500 hover:text-blue-500 w-8 h-8 rounded-full flex justify-center items-center text-lg"><i class='bx bxl-facebook' ></i></div>
                                        </a>
                                        <a href="https://x.com/ludivin_seunda" class="">
                                            <div class="bg-white border hover:border-blue-500 hover:text-blue-500 w-8 h-8 rounded-full flex justify-center items-center text-lg"><i class='bx bxl-twitter' ></i></div>
                                        </a>
                                    </div>
                                        
                                </figure>
                                <figure class="flex flex-col items-center justify-center p-8 border text-center bg-white border-b border-gray-200 md:border-e">
                                    <figcaption class="flex items-center justify-center ">
                                        <img class="rounded-full w-9 h-9" src="https://pbs.twimg.com/profile_images/1742500076633628672/dauZpyU__400x400.jpg" alt="profile picture">
                                        <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                                            <div>Aisha Hammed</div>
                                            <div class="text-sm text-gray-500 dark:text-gray-400 ">Software Developer</div>
                                        </div>
                                    </figcaption>
                                    <blockquote class="max-w-2xl mx-auto mb-1 text-gray-500 dark:text-gray-400">
                                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white"></h3>
                                        <p class="my-4">Aspiring Software Engineer and Web Developer at ALX Africa, dedicated to creating innovative and dependable solutions that enhance everyday tasks for individuals and businesses.</p>
                                    </blockquote>
                                    <div class=" flex items-start gap-4">
                                        <a href="https://x.com/yinkansola_o?t=YigT-Kpqco1iz39JL5j1TA&s=09" class="">
                                            <div class="bg-white border hover:border-blue-500 hover:text-blue-500 w-8 h-8 rounded-full flex justify-center items-center text-lg"><i class='bx bxl-twitter' ></i></div>
                                        </a>
                                    </div>
                                        
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Benefits -->
        <section class="bg-white border-b py-8 px-0 sm:px-10 md:px-28" id="presentation">
            <div class="container max-w-5xl mx-auto m-8">
                <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Presentation</h2>
                <div class="w-full mb-4">	
                    <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>
                <div class="">
                    <video class="w-full" width="400" controls>
                        <source :src="presentation" type="video/mp4">
                    </video>
                </div>
            </div>
        </section>
        <Footer></Footer>
    </div>
  

  
</template>
<script>
  import LoadingSpinner from '@/components/LoadingSpinner.vue';
  import Footer from '@/components/Footer.vue';
  import presentation from '@/assets/Images/restaurant-menu.mp4'
  //import ProductCard from '@/components/ProductCard.vue';
  import LandingPageHeader from '@/components/LandingPageHeader.vue';
  import { API_URL } from "@/config";
  //import axios from "axios";
  export default {
      name: 'HelloWorld',
      data() {
          return {
              token: localStorage.getItem('authToken'),
              pageTitle: this.$route.name,
              about: 'project',
              presentation: presentation,
          };
      },
      components: {
          LandingPageHeader,
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