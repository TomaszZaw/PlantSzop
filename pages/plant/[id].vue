<template>
    <div class="plant-card">
      <img :src="`/img/${plant.imageFileName}`" alt="plant.plantName">
      <div class="plant-details">
        <h1>{{ plant.plantName }}</h1>
        <p>{{ plant.description }}</p>
        <div class="size-selection">
        </div>
        <button @click="addToTrashBin(plant)">Dodaj do śmietnika</button>
      </div>
    </div>
  </template>
  
  
  <script setup lang="ts">
  import { usePlantsList } from '~/composables/plantList';
  const plants = usePlantsList();
  const route = useRoute();
  let id = parseInt(route.params.id[0]);
  const plant = plants[id - 1]
  
  import { useTrashBin } from '~/composables/trashBin';
  const { addToTrashBin } = useTrashBin();
  </script>
  
  
  <style scoped>
  .plant-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90vw;
    max-width: 800PX;
    margin: 0 auto;
    background-color: #ffffff;
    border: 2px solid #73aa89;
    border-radius: 10px;
    padding: 80px;
    padding-bottom: 20px;
    box-sizing: border-box;
  }
  
  .plant-card img {
    width: 50%;
    height: auto;
    margin: 1 auto;
    margin-right: 40px;
    border-radius: 20px;
  }
  
  .plant-details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  h1 {
    font-size: 2em;
    margin-bottom: 10px;
    color: #333;
  }
  
  p {
    font-size: 1em;
    line-height: 1.5;
    margin-bottom: 15px;
    color: #376a53;
  }
  
  .size-selection {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .size-selection h2 {
    font-size: 1.2em;
    margin-right: 10px;
    color: #333;
    line-height: 20px;
  }
  
  select {
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-family: inherit;
  }
  @media (min-width: 768px) {
    .product-card {
      width: 500px;
      /* Adjust width as desired */
    }
  }
  </style>
  