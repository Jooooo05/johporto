<script setup>
  import { ref } from 'vue';

  const isMenuOpen = ref(false);

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
  </script>

<template>
  <header class="pt-8">

    <main class="flex justify-between items-center ">

      <div class="poppins relative z-50">
        <p class="text-base font-medium">Yonatan's</p>
        <p class="text-sm">Web Developer</p>
      </div>

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
