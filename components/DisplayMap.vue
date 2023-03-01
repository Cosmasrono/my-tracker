<template>
    <div>hello from mapping</div>
  </template>
  
  <script>
  /*  ['nuxt-supabase', {
      supabaseUrl: 'https://btozlwgodrieiivvilno.supabase.co',
      supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0b3psd2dvZHJpZWlpdnZpbG5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjkzNzQ2NDksImV4cCI6MTk4NDk1MDY0OX0.mCLYF2ZKas2hOfAUapacMUqysLPLgKfz3tRp99MrIYg'
    }] */
  import { createClient } from "@supabase/supabase-js";
  import { ref } from "vue";
  export default {
    data() {
      return {
     
      };
    },
    setup() {
      let locs=ref([]);
      const supabaseUrl = "https://swocaqwllmwkocyhqnhm.supabase.co";
      const supabaseKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3b2NhcXdsbG13a29jeWhxbmhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzExNzM2NDIsImV4cCI6MTk4Njc0OTY0Mn0.eE7E7QeAT2iGCsInhiPVjYqOEuyrfD0-OAKsKhuWVaI'  
      const supabase = createClient(supabaseUrl, supabaseKey);
     
      async function getLocations() {
        const { data, error } = await supabase
          .from("locations")
          .select("*")
          .order("created_at", { descending: true });
        if (error) {
          console.log(error);
        }
         let res = JSON.stringify(data);
        locs.value = res;
        console.table(locs.value);
      }
      getLocations();
      return { getLocations, locs };
    },
  };
  </script>
  
  <style></style>