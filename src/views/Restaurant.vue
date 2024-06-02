<template>
    <LoadingSpinner v-if="isLoading == true" />
    <div v-else class="min-h-screen w-full">
        <div class="w-full">
            <HomeHeader></HomeHeader>
        </div>
        
        <!-- list of products -->
        <div class="min-h-[60vh]">
            <div class="page-padding flex justify-between items-center w-full gap-6 mt-16">
                <div class="">
                    <h1 class="text-left text-2xl my-3 font-semibold">Discover</h1>
                </div>
                <button @click="showFormModalCreate()" class="bg-blue-700 px-3 text-white font-medium h-10">
                    New Restaurant
                </button>
            </div>
            <div v-if="messageType === 'success'" class="page-padding py-4 rounded-lg w-full bg-green-200 text-green-700">
              {{ message }}
            </div>
            <div class="page-padding w-full mt-8">
                <table class="table-fixed border w-full text-left rounded">
                    <thead>
                      <tr class="border px-6">
                        <th class="p-2">Logo</th>
                        <th class="py-2">Qr code</th>
                        <th class="py-2">name</th>
                        <th class="py-2">menus</th>
                        <th class="py-2">actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="border-b" v-for="item in restaurants">
                        <td class="p-2">
                          <img class="w-16 h-16" v-if="item.logo" :src="mediaUrl + item.logo + '/'" alt="">
                          <div v-else class="">{{ '---' }}</div>
                        </td>
                        <td class="py-2">
                          <img class="w-28 h-28" v-if="item.qr_code" :src="mediaUrl + item.qr_code + '/'" alt="Restaurant QR-code image">
                          <div v-else class="">{{ '---' }}</div>
                        </td>
                        <td class="py-2">{{item.name}}</td>
                        <td class="py-2">{{'---'}}</td>
                        <td class="py-2 flex gap-3 flex-wrap">
                          <button @click="showEditFormModal(item)" class="bg-blue-700 px-3 text-white font-medium h-7">
                            Edit
                          </button>
                          <button @click="deleteRestaurant(item.id)" class="bg-red-700 px-3 text-white font-medium h-7">
                            <svg v-if="isLoading === 'delete' + item.id" aria-hidden="true" class="mr-3 inline w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                            Delete
                          </button>
                          <a :href="'/restaurant/' + item.id" class="bg-green-700 px-3 text-white font-medium h-7">
                            View
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
            </div>
        </div>
        <div v-if="formModal.show" class="message-modal w-[100%] h-screen fixed left-0 top-0 bg-[#00000079] z-10 flex items-center justify-center">
            <div class="w-[700px] bg-white px-4 py-8 relative mt-20">
              <button type="button" class="absolute right-8 text-3xl" @click="closeFormModal()"><i class='bx bx-x'></i></button>
              <h1 class="text-2xl mb-6">Create Restaurant</h1>
              <form class="grid grid-cols-12 gap-4 user-form" @submit.prevent="formModal.status == 'create' ? createRestaurant() : updateRestaurant()">
                <div class="col-span-12">
                  <input type="text" name="" v-model="form.name" class="bg-white w-full min-h-10 px-2  border-2" placeholder="Restaurant name">
                  <div class="text-red-600 bg-red-100 px-2 py-2 mt-2" v-if="formErrors.hasOwnProperty('name') && formErrors.name != null">{{formErrors.name[0]}}</div>
                </div>
                <div class="col-span-12">
                  <input type="file" name="" @change="loadFormImage" class="bg-white w-full border-2" >
                  <div class="text-red-600 bg-red-100 px-2 py-2 mt-2" v-if="formErrors.hasOwnProperty('logo') && formErrors.logo != null">{{formErrors.logo[0]}}</div>
                </div>
                <div class="col-span-12">
                  <input type="text" name="" v-model="form.location" class="bg-white w-full min-h-10 px-2  border-2" placeholder="Restaurant Location">
                  <div class="text-red-600 bg-red-100 px-2 py-2 mt-2" v-if="formErrors.hasOwnProperty('location') && formErrors.location != null">{{formErrors.location[0]}}</div>
                </div>
                <div class="col-span-12">
                  <textarea class="w-full border px-4" placeholder="Give more information about the restaurant" v-model="form.desc" name="" id="" cols="30" rows="5"></textarea>
                  <div class="text-red-600 bg-red-100 px-2 py-2 mt-2" v-if="formErrors.hasOwnProperty('desc') && formErrors.desc != null">{{formErrors.desc[0]}}</div>
                </div>
                <button type="submit" class="bg-blue-600 text-white w-28 py-1">Save</button>
              </form>
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
    import { API_URL, mediaUrl } from "@/config";
    import axios from "axios";
    export default {
        name: 'HelloWorld',
        data() {
          return {
            token: localStorage.getItem('authToken'),
            pageTitle: this.$route.name,
            apiUrl: API_URL,
            mediaUrl: mediaUrl,
            newCartUpdate: false,
            restaurants:[],
            isLoading: '',
            message: '',
            messageType: '',
            formModal:{
                show:false,
                status: 'create',
            },
            form:{
              name: '',
              desc: '',
              location: '',
            },
            formErrors: [],
          };
        },
        components: {
            HomeHeader,
            Footer,
            LoadingSpinner,
        },
        methods: {
          loadFormImage(event) {
            this.form.logo = event.target.files[0];
          },
          showSuccessMessage(message) {
            this.message = message;
            this.messageType = 'success';
            setTimeout(() => {
              this.messageType = ' ';
            }, 2000);
          },
          showFormModalCreate(){
            this.formModal.status = 'create';
            for (let key in this.form) {
              this.form[key] = "";
            }

            this.formModal.show = true;
          },
          showEditFormModal(restaurant)
          {
            this.formModal.status = 'edit';
            console.log('Our form is: ',this.form);
            this.form.name = restaurant.name;
            this.form.desc = restaurant.desc;
            this.form.location = restaurant.location;
            this.form.id = restaurant.id;
            console.log(this.form);
            this.formModal.show = true;
          },
            closeFormModal(){
              for (let key in this.form) {
                this.form[key] = "";
              }
              this.formModal.show = false;
            },
            fetchData() {
              //this.tableData.loading = true;
              axios.get(`${API_URL}/restaurants/`, {
                  headers: {
                    'Authorization': `Token ${this.token}`
                  }
                })
                .then(response => {
                  const results = response.data;
                  console.log(results);
                  this.restaurants = results;
                  //console.log(this.restaurants);
                })
                .catch(message => {
                  console.error('Error fetching restaurants:', message);
                });
                //this.tableData.loading = false;
            },


            async createRestaurant() {
              console.log('start saving the new Restaurant: ', this.token);
              await axios.post(`${API_URL}/restaurants/`, this.form, {
                headers: {
                  'Authorization': `Token ${this.token}`,
                  'Content-Type': 'multipart/form-data'
                },
              })
              .then(response => {
                console.log('After post request');
                this.closeFormModal();
                this.showSuccessMessage('Restaurant created successfully');
                this.fetchData();
              })
              .catch(error => {
                this.formErrors = error.response.data;
                //console.log(this.formErrors);
                setTimeout(() => {
                  this.formErrors = [];
                }, 5000)
                //console.error('Error creating category:', error);
              })
            },
            async updateRestaurant() {
              //this.form.desc = 'Restaurant'
              const response = await axios.put(`${API_URL}/restaurants/${this.form.id}/`, this.form, {
                  headers: {
                    'Authorization': `Token ${this.token}`,
                    'Content-Type': 'multipart/form-data'
                  }
              })
              .then(response => {
                this.closeFormModal();
                this.fetchData();
                this.showSuccessMessage('Category updated successfully');
              })
              .catch(error => {
                this.formErrors = error.response.data;
                //console.log(this.formErrors);
                setTimeout(() => {
                  this.formErrors = [];
                }, 5000)
              })
            },
  
          async deleteRestaurant(id) {
            this.isLoading = 'delete' + id;
            await axios.delete(`${API_URL}/restaurants/${id}/`, {
                headers: {
                    'Authorization': `Token ${this.token}`
                }
            })
            .then(response => {
              this.fetchData();
              //this.showDeleteModal = false,
              this.showSuccessMessage('Restaurant Deleted successfully');
            })
            .catch(error => {
              console.error('Error deleting user:', error);
            })
            this.isLoading = ''
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