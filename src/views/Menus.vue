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
                  <h1 class="text-left text-2xl my-3 font-semibold">Restaurant: {{restaurant.name}}</h1>
              </div>
              <button @click="showFormModalCreate()" class="bg-blue-700 px-3 text-white font-medium h-10">
                  New Menu
              </button>
          </div>
          <div v-if="messageType === 'success'" class="page-padding py-4 rounded-lg w-full bg-green-200 text-green-700">
            {{ message }}
          </div>
          <div class="page-padding w-full mt-8">
              <table class="table-fixed border w-full text-left rounded">
                  <thead>
                    <tr class="border px-6">
                      <th class="p-2">name</th>
                      <th class="py-2">category</th>
                      <th class="py-2">price</th>
                      <th class="py-2">is_active</th>
                      <th class="py-2">actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b" v-for="item in menus">
                      <td class="p-2">{{item.name}}</td>
                      <td class="py-2">{{item.category.name}}</td>
                      <td class="py-2">{{item.price}}</td>
                      <td class="py-2"><div class="w-5 h-5 rounded-full" :class="{'bg-green-600': item.is_available, 'bg-red-600': !item.is_available}"></div> </td>
                      <td class="py-2 flex gap-3 flex-wrap">
                        <button @click="showEditFormModal(item)" class="bg-blue-700 px-3 text-white font-medium h-7">
                          Edit
                        </button>
                        <button @click="deleteMenu(item.id)" class="bg-red-700 px-3 text-white font-medium h-7">
                          <svg v-if="isLoading === 'delete' + item.id" aria-hidden="true" class="mr-3 inline w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                          </svg>
                          Delete
                        </button>
                        <button @click="showFormModalCreate()" class="bg-green-700 px-3 text-white font-medium h-7">
                          View
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
          </div>
      </div>
      <div v-if="formModal.show" class="message-modal w-[100%] h-screen fixed left-0 top-0 bg-[#00000079] z-10 flex items-center justify-center">
          <div class="w-[700px] bg-white px-4 py-8 relative mt-20">
            <button type="button" class="absolute right-8 text-3xl" @click="closeFormModal()"><i class='bx bx-x'></i></button>
            <h1 class="text-2xl mb-6">Create New Menu</h1>
            <form class="grid grid-cols-12 gap-4 user-form" @submit.prevent="formModal.status == 'create' ? createMenu() : updateMenu()">
              <div class="col-span-12 md:col-span-6">
                <input type="text" name="" v-model="form.name" class="bg-white w-full min-h-10 px-2  border-2" placeholder="Menu name">
              </div>
              <div class="col-span-12 md:col-span-6">
                <select class="w-full h-full px-2 border-2 bg-white focus:border" name="category" v-model="form.category_id" id="">
                  <option value="">Select Category</option>
                  <option v-for="item in categories" :value="item.id" :selected="form.category_id === item.id ? true : false">{{item.name}}</option>
                </select>
              </div>
              <div class="col-span-12">
                <input type="text" name="" v-model="form.price" class="bg-white w-full min-h-10 px-2  border-2" placeholder="Price">
              </div>
              <div class="col-span-12 flex gap-6">
                <label for="">Is Available: </label>
                <label for="available">Available</label>
                <input type="radio" name="is_available" id="available" v-model="form.is_available" class="bg-white w-6 min-h-6 px-2  border-2" :value="true" placeholder="Category name">
                <label for="not_available">Not Available</label>
                <input type="radio" name="is_available" id="not_available" v-model="form.is_available" class="bg-white  w-6 min-h-6 px-2  border-2" :value="false" placeholder="Category name">
              </div>
              <div class="col-span-12">
                <textarea class="w-full border px-4" placeholder="Description for the category" v-model="form.desc" name="" id="" cols="30" rows="5"></textarea>
              </div>
              <div class="col-span-12">
                <input type="file" name="" @change="loadFormImage" class="bg-white w-full border-2" >
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
  import { API_URL } from "@/config";
  import axios from "axios";
import Restaurant from './Restaurant.vue';
  export default {
      name: 'HelloWorld',
      data() {
        return {
          token: localStorage.getItem('authToken'),
          pageTitle: this.$route.name,
          apiUrl: API_URL,
          newCartUpdate: false,
          categories:[],
          menus: [],
          restaurant:[],
          isLoading: '',
          message: '',
          messageType: '',
          formModal:{
              show:false,
              status: 'create',
          },
          form:{
            name: '',
            slug: '',
            price: 0,
            restaurant: '',
            category_id: '',
            desc: '',
            is_available: true,
          }
        };
      },
      components: {
          HomeHeader,
          Footer,
          LoadingSpinner,
      },
      methods: {
        loadFormImage(event) {
            this.form.image = event.target.files[0];
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
        showEditFormModal(menu)
        {
          this.formModal.status = 'edit';
          for (let key in this.form) {
              if (menu.hasOwnProperty(key)) {
                  this.form[key] = menu[key];
              }
          }
          this.form.id = menu.id;
          this.form.category_id = menu.category.id;
          console.log(this.form);
          this.formModal.show = true;
        },
        closeFormModal(){
            for (let key in this.form) {
              this.form[key] = "";
            }
            this.formModal.show = false;
        },

        fetchCategories() {
          //this.tableData.loading = true;
          axios.get(`${API_URL}/menu-categories/`, {
              headers: {
                'Authorization': `Token ${this.token}`,
                'Content-Type': 'multipart/form-data'

              }
            })
            .then(response => {
              const results = response.data;
              console.log(results);
              this.categories = results;
              //console.log(this.restaurants);
            })
            .catch(message => {
              console.error('Error fetching categories:', message);
            });
            //this.tableData.loading = false;
        },

        fetchRestaurant() {
          //this.tableData.loading = true;
          const id = this.$route.params.id;
          axios.get(`${API_URL}/restaurants/${id}/`, {
              headers: {
                'Authorization': `Token ${this.token}`
              }
            })
            .then(response => {
              const results = response.data;
              //console.log(results);
              this.restaurant = results;
              this.form.restaurant = this.restaurant.id;
              //console.log(this.form);
            })
            .catch(message => {
              console.error('Error fetching restaurants:', message);
            });
            //this.tableData.loading = false;
        },

        fetchData() {
          //this.tableData.loading = true;
          axios.get(`${API_URL}/menus/`, {
              headers: {
                'Authorization': `Token ${this.token}`
              }
            })
            .then(response => {
              const results = response.data;
              console.log(results);
              this.menus = results;
              //console.log(this.restaurants);
            })
            .catch(message => {
              console.error('Error fetching Menus:', message);
            });
            //this.tableData.loading = false;
        },

        async createMenu() {
          //console.log('start saving the new Restaurant: ', this.form);
          this.form.restaurant = this.restaurant.id;
          await axios.post(`${API_URL}/menus/`, this.form, {
            headers: {
              'Authorization': `Token ${this.token}`,
              'Content-Type': 'multipart/form-data'
            },
          })
          .then(response => {
            console.log('After post request');
            this.closeFormModal();
            this.showSuccessMessage('Menu created successfully');
            this.fetchData();
          })
          .catch(error => {
            console.error('Error creating category:', error);
          })
        },
        async updateMenu() {
          console.log('updating category');
          const response = await axios.put(`${API_URL}/menus/${this.form.id}/`, this.form, {
              headers: {
                'Authorization': `Token ${this.token}`,
                'Content-Type': 'multipart/form-data'
              }
          })
          .then(response => {
            this.closeFormModal();
            this.fetchData();
            this.showSuccessMessage('Menu updated successfully');
          })
          .catch(error => {
            console.error('Error updating category:', error);
          })
        },

        async deleteMenu(id) {
          this.isLoading = 'delete' + id;
          await axios.delete(`${API_URL}/menus/${id}/`, {
              headers: {
                  'Authorization': `Token ${this.token}`
              }
          })
          .then(response => {
            this.fetchData();
            //this.showDeleteModal = false,
            this.showSuccessMessage('Menu Deleted successfully');
          })
          .catch(error => {
            console.error('Error deleting Restaurant:', error);
          })
          this.isLoading = ''
        },
      },
      async mounted() {
        this.isLoading=true;
        this.fetchData()
        this.fetchCategories();
        this.fetchRestaurant();
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