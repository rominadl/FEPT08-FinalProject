<template>
    <div 
    class="justify-center py-10 justify-items-center min-h-screen bg-cover bg-center font-mono"
    style="">
    <!-- Título:  -->
      <h1 class="text-xl font-bold font-mono my-12">The Restaurant finder</h1>
      <div class="flex gap-10">
        <div>
             <!-- Formulario:  -->
          <form @submit.prevent="getRestaurants" class="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 my-4 h-52 w-80">
            <label class=" justify-self-start block text-gray-700 font-semibold mb-2" for="RestaurantType">
              Enter restaurant type:
            </label>
            <!-- Input rest type:  -->
            <input 
            v-model="restType"
            class="shadow appearance-none border rounded w-full py-2 px-2 mt-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            placeholder="Ex. Indú"/>
            <label class=" justify-self-start block text-gray-700 font-semibold mb-2" for="restaurantLocation">
              Enter restaurant location:
            </label>
            <!-- Input location:  -->
            <input 
            v-model="location"
            class="shadow appearance-none border rounded w-full py-2 px-2 mt-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            placeholder="Ex. Barcelona"/>
            <button 
            class="my-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
            type="submit" 
            :disabled="loading">{{loading?"Cargando...":"Submit"}} </button>
          </form>
        </div>
  
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 my-4 h-96 w-80">
          <div v-if="loading">Loading...</div>
          <div v-if="error" class="text-red-500">{{ error }}</div>
          <div v-if="restaurants">
            <h2 class="font-semibold">📍 Restaurants </h2>
            <br/>

            <!-- <p> <span class="font-semibold">Category</span><br/>
               {{ businesses.categories.alias }}</p> -->
            <!-- <p class="my-5"> <span class="font-semibold"> Weather </span> <br/>
              {{ weather.weather[0].description }}</p> -->
        </div>
    </div>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "App",
    data() {
      return {
        loading: false,
        location: "",
        businesses: null,
        error: "",
        restaurants: [],
        restType: "",
      };
    },
    methods: {
      getRestaurants() {
        this.loading=true;
        this.error=false;
        this.restaurants = null;
        const myApiKey = "60b16db3779fdc4bd524139845db8d57";
        const url =  `https://api.yelp.com/v3/businesses/search?term=${this.restType}&location=${this.location}`;
      
  
  fetch(url, {
    headers: {
        "Authorization": "Bearer j3cEDqmhJfemNvM6UoxpmzTI65dPPWjy7z5hspQtPhaTh7wrP3thWI5M0MObGomvPlqGS_b14VsdcM3JGBIlBpGZkua6PoIQgFpTflsY4HPWKdICuZV6aAHIMHBRZ3Yx",
        "Accept": "application/json"
    }
  })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Error en la respuesta de la API");
            }
            return response.json();
          })
          .then((data) => {
            console.log(data);
            this.businesses = data;
            this.loading = false;
          })
          .catch(() => {
            this.error = "Failed to fetch restaurants. Please try again.";
            this.loading = false;
          });
        // fetch(url)
  
          // .then (response => {
          //   if(!response.ok) {
          //     throw new Error ("error en la respuesta de la Api");}
          // return response.json());
          // .then(data => {this.weather = data; this.loading=false;})
          // .catch((error) => {this.error = error.message; this.loading = false;
          // }),
        // call Open Weather API;
      },
    },
  };
  
  </script>
  
  <style></style>
  