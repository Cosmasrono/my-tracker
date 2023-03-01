<template>
  <main class="">
    <div class="" v-if="locs.length != 0">
      <div
        class="md:justify-end flex md:items-center justify-start items-start text-black gap-5 px-6 md:px-32 py-3 md:py-5"
        v-show="load"
      >
        <nuxt-link
          to="/Map"
          class="flex items-center gap-2 bg-blue-600 rounded px-3 py-2"
        >
          <span class="text-white">View Map</span>
        </nuxt-link>
        <button
          class="flex items-center gap-2 bg-blue-600 rounded px-3 py-2 text-white"
          @click="logout"
        >
          <span>Logout</span>
        </button>
        <button class="px-9 py-3 bg-red-600 rounded hidden">Login</button>
      </div>
      <div
        class="flex flex-col justify-center items-center mx-auto my-2 rounded text-black"
        v-show="load"
      >
        <!-- display my name -->
        <!-- success alert  -->
        <div
          class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
          role="alert"
          v-show="success"
        >
          {{ success }}
        </div>
        <!-- warning alert -->
        <div
          class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
          v-if="err"
        >
          {{ err }}!
        </div>
        <span class="text-lg text-black" v-show="user">Hi {{ email }}!</span>

        <currentPlace :locs="locs" />
      </div>
      <div v-if="!load">
        <Loader :load="load" />
      </div>
    </div>
    <!-- Warning card if locations are not displayed tell user to allow location on his device usng v-else -->
    <div
      class="flex flex-col justify-center items-center mx-auto my-2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative max-w-md md:max-w-5xl"
      v-else
    >
      <span class="text-lg text-black" v-show="user">Hi {{ email }}!</span>
    <!--   <span class="">
        <img
          src="https://cdn.pixabay.com/photo/2018/07/30/15/00/carpenter-3572804__340.png"
          alt=""
          class=""
        /> 
      </span>-->
      <span class="text-lg text-black"
        >Please Allow Location Access on your device!
      </span>
      <span class="text-lg text-black">Locations not Displayed!! </span>
    </div>
    <!-- footer with copyright Francis_pro and love emoji -->
    
  </main>
</template>

<script>
//import L from "leaflet";
import { createClient } from "@supabase/supabase-js";
import currentPlace from "./currentPlace.vue";
import Loader from "./Loader.vue";

export default {
  data() {
    return {
      client: createClient(
        "https://swocaqwllmwkocyhqnhm.supabase.co",
       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3b2NhcXdsbG13a29jeWhxbmhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzExNzM2NDIsImV4cCI6MTk4Njc0OTY0Mn0.eE7E7QeAT2iGCsInhiPVjYqOEuyrfD0-OAKsKhuWVaI'      ),
      latitude: null,
      name: "",
      longitude: null,
      err: null,
      success: null,
      city: "",
      location: "",
      user: null,
      signing: true,
      load: false,
      email: "",
      locs: [],
    };
  },
  components: {
    currentPlace,
    Loader,
  },

  methods: { 
    async getUser() {
      const user = await this.client.auth.getUser();
      this.email = user.data.user.email;
      this.user = user;
      console.log(user);
    },
    /* Signout user in supabase */
    async logout() {
      const { error } = await this.client.auth.signOut();
      if (error) {
        this.err = error.message;
      } else {
        this.success = "You have been logged out";
        setTimeout(() => {
          this.$router.push("/");
        }, 2000);
      }
    },

    // async listenForLocationChanges() {
    //   /* subscribe to new locations thro channel changes from supabase */
    //   const subs = this.client
    //     .channel("locations")
    //     .on(
    //       "postgres_changes",
    //       { event: "INSERT", schema: "public", table: "locations" },
    //       (payload) => {
    //         console.log("Change received!", payload);
    //       }
    //     )
    //     .subscribe();
    // },

    getCurrentPosition() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          )
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              console.log(data);
              this.locs.push({
                location: data.display_name,
                city: data.address.city,
                latitude: latitude,
                longitude: longitude,
                accuracy: position.coords.accuracy,
              });
              this.load = true;
            });
          console.log(latitude, longitude);
        },
        (error) => {
          console.error("Error getting current position:", error);
        }
      );
    },
    watchCurrentPosition() {
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      };
      const success = (pos) => {
        const crd = pos.cords;
        /// console.log("Your current position is:");
        // console.log(`Latitude : ${crd.latitude}`);
        //  console.log(`Longitude: ${crd.longitude}`);
        // console.log(`More or less ${crd.accuracy} meters.`);
        //console.log(crd);
        const { latitude, longitude,city } = pos.coords;
        this.latitude = latitude;
        this.longitude = longitude;
       
       console.log(`Latitude : ${this.latitude} Longitude: ${this.longitude}`);
        /* insert new locations(latitude and longitude) to supabase */
        this.client
          .from("locations")
          .insert([{ latitude: this.latitude, longitude: this.longitude }])
          .then(() => {
            console.log("Location added to Supabase:", this.latitude);
          })
          .catch((error) => {
            console.error("Error adding location to Supabase:", error);
          });
      };
      const error = (err) => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      };
      navigator.geolocation.watchPosition(success, error, options);
    },
  },

  mounted() {
    //this.setupMap();
    //   this.getCurrentPosition();
    this.getUser();
    this.watchCurrentPosition();
    this.getCurrentPosition();
   
    setTimeout(() => {
      this.load = true;
    }, 5000);
  },
};
</script>

<style></style>