<template>
    <div class="fixed w-full h-screen top-[50px] left-0 duration-700" style="background-color: rgb(0 0 0 / 50%);" :class="{'visible' : showSidebar, 'hidden': !showSidebar}"></div>
    <div ref="RespNav" class="visible lg:hidden col-span-2">
        <div  @click="showSidebar = !showSidebar"  class="col-span-2 text-black visible text-3xl hover:cursor-pointer relative flex items-center justify-end pr-2">
            <!--Show when the responsive menu is closed-->
            <div v-if="!showSidebar" class="pointer-events-none">
              <svg class="w-[22px] h-[22px]" fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z"></path>
              </svg>
            </div>
            <!--Show when the responsive menu is opened-->
            <i v-if="showSidebar"  class='text-black bx bx-x' ></i>
        </div>
        <!-- Responsive Sidebar -->
        <div :class="{'translate-x-0' : showSidebar, '-translate-x-[560px]': !showSidebar}" class="duration-700 border lg:hidden absolute left-0 top-[50px] p-5  w-[340px] bg-white text-black"  ref="sidebar" style="height: calc(100vh - 0px);">
            <ul class="flex flex-col gap-5 font-normal">
                <a href="/"><li class="text-black">Home</li></a>
                <a class="relative group" href="/restaurants">
                    <li class="text-black">Restaurants</li>
                </a>
                <a class="relative group" href="/categories">
                    <li class="text-black">Categories</li>
                </a>
                <a class="relative group" href="/contact">
                    <li class="text-black">Contact Us</li>
                </a>
            </ul>
        </div>
    </div>
    
</template>
<script>
    //import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
    export default {
        data(){
            return{
                showSidebar: false,
                categories: {},
            }
        },
        methods:{
            handleClickOutside(event) {
                // Check if the click was outside the referenced element
                if (this.$refs.RespNav && !this.$refs.RespNav.contains(event.target)) {
                    this.showSidebar = false;
                    //console.log('check if the click was outside the referenced element');
                }
            },
        },
        mounted() {
            // Add the event listener when the component is mounted
            document.addEventListener('click', this.handleClickOutside);
        },
        beforeDestroy() {
            // Remove the event listener when the component is destroyed
            document.removeEventListener('click', this.handleClickOutside);
        },
    }
</script>
<style scoped>
@media screen and (max-width: 768px) {
    .toggler{
        display: block;
    } 
}
@media screen and (min-width: 768px) {
    .toggler{
        display: none;
    } 
}
@media screen and (min-width: 1024px) {
    .toggler{
        display: none;
    } 
}
</style>