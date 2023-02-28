<template>
  <main class=" text-black    ">
    <h1 class=" flex items-center justify-center">hello welcome here find your person</h1>

    <div
          class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
          role="alert"
          v-show="user"
        >
          {{ user }} created!
        </div>
    <div class=" bg-slate-900 flex items-center justify-center flex-col">
      <form
          action=""
          class="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl"
          @submit.prevent="register">
       
          <div>
            <label for="email" class="text-sm font-medium">Email</label>

            <div class="relative mt-1">
              <input
                type="email"
                id="email"
                v-model="email"
                class="w-full rounded-lg ring bg-slate-100 p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter email"
              />
            </div>
            </div>
            <label for="password" class="text-sm font-medium">Password</label>

<div class="relative mt-1">
  <input
    type="password"
    id="password"
    v-model="password"
    class="w-full rounded-lg ring bg-slate-100 p-4 pr-12 text-sm shadow-sm"
    placeholder="Enter password"
  />
  </div>
  <div>
            <label for="confirm-password" class="text-sm font-medium"
              >Confirm Password</label
            >

            <div class="relative mt-1">
              <input
                type="password"
                id="confirm-password"
                class="w-full rounded-lg ring bg-slate-100 p-4 pr-12 text-sm shadow-sm"
                v-model="confirm_password"
                placeholder="Confirm password"
              />
              </div>
               </div>
                        <button
            type="submit"
            class="block w-full rounded-lg px-5 py-3 text-sm font-medium text-white"
            :class="loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-indigo-600'"
            :disabled="loading"
          >
            {{ loading ? "Loading..." : "Sign Up" }}
          </button>
      </form>
      <p class="text-center text-sm text-gray-500">
            Already have an account?
            <NuxtLink to="/Login" class="underline">Sign In</NuxtLink>
          </p>
    </div>
  </main>
</template>
<script>
 import { createClient } from "@supabase/supabase-js"; 
export default{
  name:"register", 
   data(){
 return{
  email:'',
  user: '',
  loading:false,
  password:'',
  confirm_password:'',
  error:'',


    }
  },
  methods:{
    async register(){
      const supabase=createClient("https://swocaqwllmwkocyhqnhm.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3b2NhcXdsbG13a29jeWhxbmhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzExNzM2NDIsImV4cCI6MTk4Njc0OTY0Mn0.eE7E7QeAT2iGCsInhiPVjYqOEuyrfD0-OAKsKhuWVaI"
      );
      if(this.email.length<1){
        this.error="Email is required"
        return;

      }
      if(this.password.length<8){
        this.error="Password must be 8 characters long"
        return;

      }
      if(this.password!==this.confirm_password){
        this.error="Passwords do not match"
        return;

      }
      const main_user=await supabase.auth.getUser();
      if(!this.email.includes("@")){
        this.error="Email is invalid"
        return;

      }
      this.loading=true;
      const{user,data,error}=await supabase.auth.signUp({
        email:this.email,
        password:this.password
      });
      if(error){
        this.error=error.message,
        this.loading=false,
        console.log(error);
      }
       else{
        this.user=data.user.email;
        setTimeout(() => {
          this.loading = false;
          this.$router.push("/Login");
        }, 2000);

       }


    }
  }
}



</script>