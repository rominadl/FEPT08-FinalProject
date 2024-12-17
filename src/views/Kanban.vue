
<template>
    <div class="flex flex-col sm:flex-row gap-4 p-4 min-h-screen">
      <!-- Column: To Be Contacted -->
      <div class="flex-1 bg-gray-100 rounded-lg shadow-md p-4">
        <h2 class="text-xl font-bold mb-4 text-white bg-green-600 p-2 rounded-md">To be contacted</h2>
        <div
          v-for="business in toBeContacted"
          :key="business.id"
          class="bg-white p-2 rounded-md shadow-sm mb-2 border-l-4 border-green-400"
        >
          <p class="text-gray-800 font-medium">{{ business.name }}</p>
          <p class="text-gray-500 text-sm">Category: {{ business.category }}</p>
        </div>
      </div>
  
      <!-- Column: In Contact -->
      <div class="flex-1 bg-gray-100 rounded-lg shadow-md p-4">
        <h2 class="text-xl font-bold mb-4 text-white bg-green-600 p-2 rounded-md">In contact</h2>
        <div
          v-for="business in inContact"
          :key="business.id"
          class="bg-white p-2 rounded-md shadow-sm mb-2 border-l-4 border-green-400"
        >
          <p class="text-gray-800 font-medium">{{ business.name }}</p>
          <p class="text-gray-500 text-sm">Category: {{ business.category }}</p>
        </div>
      </div>
  
      <!-- Column: Deal Closed -->
      <div class="flex-1 bg-gray-100 rounded-lg shadow-md p-4">
        <h2 class="text-xl font-bold mb-4 text-white bg-green-600 p-2 rounded-md">Deal closed</h2>
        <div
          v-for="business in dealClosed"
          :key="business.id"
          class="bg-white p-2 rounded-md shadow-sm mb-2 border-l-4 border-green-400"
        >
          <p class="text-gray-800 font-medium">{{ business.name }}</p>
          <p class="text-gray-500 text-sm">Category: {{ business.category }}</p>
        </div>
      </div>

    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        restaurants: [
          { id: 1, name: "Joe's Diner", status: "To be contacted", category: "Diner" },
          { id: 2, name: "Sushi World", status: "In contact", category: "Japanese" },
          { id: 3, name: "Pizza Paradise", status: "Deal closed", category: "Italian" },
          { id: 4, name: "Taco Fiesta", status: "To be contacted", category: "Mexican" },
          { id: 5, name: "Steakhouse Supreme", status: "In contact", category: "Steakhouse" },
          { id: 6, name: "Vegan Delights", status: "Deal closed", category: "Vegan" },
        ],
      };
    },
    computed: {
      // Filter restaurants by status
      toBeContacted() {
        return this.restaurants.filter(
          (business) => business.status === "To be contacted"
        );
      },
      inContact() {
        return this.restaurants.filter(
          (business) => business.status === "In contact"
        );
      },
      dealClosed() {
        return this.restaurants.filter(
          (business) => business.status === "Deal closed"
        );
      },
    },
  };
  </script>
  
  <style>
  /* Optional styles for layout */
  .flex-1 {
    min-width: 300px;
  }
  </style>
  