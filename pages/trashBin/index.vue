<template>
    <div class="trash-bg">
      <ul v-if="trashItems.length > 0">
        <h3>Rośliny w twoim śmietniku:</h3>
          <div 
          v-for="(item, index) in trashItems" 
          :key="index"
          class="trash-list">
              <div class="plants-in-trash-list-details">
                <b>{{ item.plantName }}</b>
              </div>
              <div class="plants-in-trash-list-details">
                {{ item.price }}
              </div> 
              <div class="plants-in-trash-list-details">
                Ilość: {{ item.quantity }}
              </div>
           
            <div class="trash-buttons">
              <button @click="decrementQuantity(index)">
                <IconsMinus/>
              </button>

              <button @click="incrementQuantity(index)">
                <IconsPlus />
              </button>

              <button @click="removeFromTrashBin(index)">
                <IconsDelete />
              </button>
            </div>

          </div>
      </ul>

      <p v-else>Śmietnik jest pusty.</p>
      <p class="mt-8" v-if="trashItems.length > 0"><b>Ilość rzeczy:</b> {{ getTotalQuantity() }}</p>
      <p class="mt-2" v-if="trashItems.length > 0"><b>Suma:</b> {{ getTotalValue() }} zł</p>
    </div>

</template>

<script setup>
import { useTrashBin } from '~/composables/trashBin';

const { getTrashItems, removeFromTrashBin, incrementQuantity, decrementQuantity, getTotalValue, getTotalQuantity } = useTrashBin();
const trashItems = getTrashItems();
</script>

<style>
.trash-bg {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90vw;
    max-width: 800PX;
    margin: 0 auto;
    background-color: #ffffff;
    border: 2px solid #73aa89;
    border-radius: 10px;
    padding: 20px;
    box-sizing: border-box;
    margin-top: 100px;
}
.trash-list {
  display: flex;
    align-items: center;
    max-width: 700px;
    justify-content: space-between;
    margin-bottom: 10px;
    border: 1px solid #73aa89;
    border-radius: 3px;
    padding: 10px;
    transition: box-shadow 0.3s ease;
    background-color: #ffffff;
}

.trash-list-details {
  display: flex;
  width: 70%;
}

.trash-buttons{
  display: flex;
  width: 33%;
}

.plants-in-trash-list-details {
  display: flex;
  margin-left: 10px;
  margin-right: 10px;
}

</style>
