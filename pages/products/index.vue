<template>
    <div class="plant-list">
      <div
        v-for="plant in plants"
        :key="plant.id"
        class="plant-item"
      >
      <nuxt-link :to="`/plant/${plant.id}`"> <img
            :src="`/img/${plant.imageFileName}`"
            :alt="plant.plantName"
            class="plant-image"
          />
        </nuxt-link>
        <div class="plant-details">
          <h3>{{ plant.plantName }}</h3>
        </div>
        <div class="plant-action">
          <div class="plant-price">{{ plant.price }}</div>
          <button @click="addToTrashBin(plant)" class="add-to-trashBin">Dodaj do śmietnika</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { usePlantsList } from '~/composables/plantList';
  import { useTrashBin } from '~/composables/trashBin';
  
  const plants = usePlantsList();
  const { addToTrashBin } = useTrashBin();
  </script>

  <style>
  .plant-list {
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    margin: 0 auto;
    padding: 10px;
    margin-bottom: 60px;
    margin-top: 70px;
  }
  
  .plant-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    border: 2px solid #73aa89;
    border-radius: 8px;
    padding: 15px;
    transition: box-shadow 0.3s ease;
    background-color: #ffffff;
  }
  
  .plant-item:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .plant-image {
    width: 100px;
    height: auto;
    margin-right: 20px;
    border-radius: 4px;
  }
  
  .plant-details {
    flex-grow: 1;
  }
  
  .plant-action {
    display: flex;
    align-items: center;
  }
  
  .plant-price {
    font-weight: bold;
    margin-right: 20px;
  }

  </style>
  