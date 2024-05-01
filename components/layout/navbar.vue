<script setup>

import { useTrashBin } from '~/composables/trashBin';
const { getTotalQuantity } = useTrashBin();

</script>

<template>
  <nav class="navbar">
    <NuxtLink to="/" class="logo-link">
      <img src="/img/logo.png" alt="Logo" class="logo-img" />
    </NuxtLink>
    <div class="nav-links">
      <NuxtLink to="/products" class="nav-item"> Produkty </NuxtLink>
      <NuxtLink to="/trashBin" class="nav-item"> Śmietnik <a class="total-items-in-trash">{{getTotalQuantity()}}</a></NuxtLink>    
    </div>
  </nav>
</template>

<style scoped lang="scss">
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  background-color: #a2dbb9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}

.logo-link {
  flex-shrink: 0;
  transition: transform 0.7s ease;
}

.logo-link:hover {
  transform: scale(1.5); 
}
.logo-img {
  height: 60px;
  width: auto;
  padding: 0 50px;
}

.nav-links {
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: left;
  flex-grow: 1.5;
}

.nav-item:hover {
  transform: scale(1.5); 
}

.nav-item {
  text-decoration: none;
  color: inherit;
  padding: 10px;
  text-align: center;
  transition: transform 0.7s ease;
}

.total-items-in-trash{
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 2px;
  padding-bottom: 2px;
  background-color: #ffffff;
  border: 3px solid #73aa89;
  border-radius: 20px;
}
</style>
