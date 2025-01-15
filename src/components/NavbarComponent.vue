<script setup>
  import { ref } from 'vue';

  const isMenuOpen = ref(false);
  const isAudyStorryOpen = ref(false);
  const countOpen = ref(0);

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };

  function openAudystorry() {
    countOpen.value++;
    if (countOpen.value == 21){
      isAudyStorryOpen.value = true;
    }
  }
  </script>

<template>
  <header class="pt-8">

    <main class="flex justify-between items-center ">

      <div class="poppins relative z-50">
        <p @click="openAudystorry" class="text-base font-medium">Yonatan's</p>
        <p class="text-sm">Web Developer</p>
      </div>

      <RouterLink v-if="isAudyStorryOpen" to="/audystory" class="px-5 py-2 bg-pink-600 text-white rounded-lg hover:bg-white hover:border-2 hover:border-pink-600 hover:text-pink-800 transition-all ease-in">Audyy story</RouterLink>

      <!-- desktop -->
      <nav class="hidden md:flex gap-12">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/project">Projects</RouterLink>
      </nav>
      <!-- desktop -->


      <!-- mobile -->
      <nav class="md:hidden">
        <!-- Button On -->
        <button
          v-if="!isMenuOpen"
          class="relative z-50"
          @click="toggleMenu">
          <box-icon name="menu" size="md"></box-icon>
        </button>

        <!-- Button Off -->
        <button
          v-if="isMenuOpen"
          class="relative z-50"
          @click="toggleMenu">
          <box-icon name="x" size="md"></box-icon>
        </button>

        <!-- Navigasi -->
        <div
          v-show="isMenuOpen"
          :class="{
            'translate-x-0': isMenuOpen,
            'translate-y-full': !isMenuOpen
          }"
          class="fixed inset-0 z-40 bg-white overflow-hidden transition-transform duration-500">

          <div class="flex flex-col items-center justify-center h-full gap-12">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/project">Projects</RouterLink>
          </div>
        </div>
      </nav>
      <!-- mobile -->
    </main>




  </header>
</template>

<style scoped></style>
