<template>
    <div>
      <section>
        <div class="main-container">
          <img class="main-img "alt="Plant Szop"src="/img/logo.png" />
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Witaj w wiacie śmietnikowej!
            </h1>
            <p class="mb-8">
              Wygrzeb sobie co lepszą roślinkę jak rasowy szop pracz.
            </p>
            <div >
              <NuxtLink to="/products" class="To-products-link"> Zagrzeb </NuxtLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>


<style>
    .main-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        padding-top: 50px;
    }

    .main-img {
        width: 90vh;
        height: auto;
    }
    .To-products-link{
        background-color: #73aa89;
        color: white;
        padding: 10px;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.8s ease;
    }
    .To-products-link:hover {
        background-color: #376a53;
    } 
</style>
  