<script setup lang="ts">
import Navbar from "~/components/layout/navbar.vue";
</script>

<template>
    <head>
        <title>Plant Szop</title>
    </head>
    <div class="h-screen">
        <Navbar/>
        <slot />
    </div>
</template>