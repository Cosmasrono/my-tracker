<template>
    <main>
      <div
        class="md:justify-end flex md:items-center justify-start items-start text-blue gap-5 px-6 md:px-32 py-3 md:py-5 bg-slate-50"
        v-show="load"
      >
        <nuxt-link to="/Category" class="flex items-center gap-2">
          <span>Home</span>
        </nuxt-link>
        <button @click="refresh" class="flex items-center gap-2">
          <span>Refresh map</span>
        </button>
        <button class="flex items-center gap-2" @click="logout">
          <span>Logout</span>
        </button>
        <button class="px-9 py-3 bg-red-600 rounded hidden">Login</button>
      </div>
  
      <div v-if="!load">
        <Loader :load="load" />
      </div>
  
      <div id="map-wrap" class="" style="height: 100vh" v-else>
        <client-only>
          <l-map :zoom="15" :center="[latitude, longitude]">
            <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
            <l-marker :lat-lng="[latitude, longitude]"></l-marker>
          </l-map>
        </client-only>
      </div>
    </main>
  </template>
  
  <script>
  
  import Loader from "./Loader.vue";
  import { createClient } from "@supabase/supabase-js";
  
  export default {
    props: ["latitude", "longitude"],
    data() {
      return {
        load: false,
        client: createClient(
          "https://swocaqwllmwkocyhqnhm.supabase.co",
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3b2NhcXdsbG13a29jeWhxbmhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzExNzM2NDIsImV4cCI6MTk4Njc0OTY0Mn0.eE7E7QeAT2iGCsInhiPVjYqOEuyrfD0-OAKsKhuWVaI'        ),
      };
    },
    methods: {
      refresh() {
        window.location.reload();
      },
      async logout() {
        this.client.auth.signOut();
        this.$router.push("/");
      },
      /*  getLatestLocation() {
        this.client
          .from("locations")
          .select("latitude, longitude")
          .order("created_at", { ascending: false })
          .limit(1)
          .then(({ data }) => {
            const latestLatitude = data[0]?.latitude;
            const latestLongitude = data[0]?.longitude;
            console.log("Latest location:", latestLatitude, latestLongitude);
          })
          .catch((error) => {
            console.error("Error getting latest location:", error);
          });
      }, */
    },
    mounted() {
      setTimeout(() => {
        this.load = true;
      }, 4000);
    },
    components: { Loader },
  };
  </script>
  