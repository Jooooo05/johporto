<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- <header>

    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header> -->

  <div class="container-app">
    <RouterView />
  </div>
</template>

<style>
.container-app{
  width: 65%;
  margin: auto;
}

.poppins {
  font-family: "Poppins", serif;
  font-weight: 300;
  font-style: normal;
}

.poppins-regular {
  font-family: "Poppins", serif;
  font-weight: 400;
  font-style: normal;
}

.poppins-medium {
  font-family: "Poppins", serif;
  font-weight: 500;
  font-style: normal;
}

.poppins-semibold {
  font-family: "Poppins", serif;
  font-weight: 600;
  font-style: normal;
}

.poppins-bold {
  font-family: "Poppins", serif;
  font-weight: 700;
  font-style: normal;
}

.poppins-extrabold {
  font-family: "Poppins", serif;
  font-weight: 800;
  font-style: normal;
}

.poppins-black {
  font-family: "Poppins", serif;
  font-weight: 900;
  font-style: normal;
}

.mochiy {
  font-family: "Mochiy Pop One", serif;
  font-weight: 400;
  font-style: normal;
}

</style>
