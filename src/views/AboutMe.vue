<script setup>
import { RouterLink } from 'vue-router'

</script>


<template>

  <NavbarComponent class="mb-10"></NavbarComponent>


  <main class="mt-32 grid grid-cols-2 gap-10 items-center">
    <!-- image -->
     <div class="relative">

      <div class="">
        <img src="@/assets/img/about/about-1.png" alt="center image" class="grayscale hover:grayscale-0 transition-all ease-in duration-300">
      </div>

      <div class="w-[200px] absolute -top-14 right-0">
        <img src="@/assets/img/about/about-2.png" alt="second image" class="grayscale hover:grayscale-0 transition-all ease-in duration-300">
      </div>

      <div class="w-[250px] absolute -bottom-20 -left-20">
        <img src="@/assets/img/about/about-3.png" alt="second image" class="grayscale hover:grayscale-0 transition-all ease-in duration-300">
      </div>

     </div>
    <!-- image -->

    <!-- explain about me -->
    <div class="">
      <h1 class="poppins-regular tracking-widest text-lg">YONATAN HIDSON SIMBOLON</h1>
      <p class="poppins">"Hello, I’m Yonatan, a web developer with a strong passion for learning and growing in the field of technology. I’m currently studying Informatics Engineering at Universitas Advent Indonesia. My journey to this point has been full of challenges, but I’ve embraced every step as an opportunity to learn and move closer to my goals.
      In addition to web development, I also have experience in mobile development, UI/UX, and design. I believe that hard work and dedication are the keys to achieving great things. I enjoy sharing ideas and connecting with others who share the same passion. Feel free to reach out to me through my social media!"</p>
      <div class="mt-3 flex gap-4">
        <div class="w-9">
          <RouterLink>
            <img src="@/assets/img/sosmed/instagram.png" alt="instagram icon" class="grayscale hover:grayscale-0 transition-all ease-in duration-100">
          </RouterLink>
        </div>
        <div class="w-9">
          <RouterLink>
            <img src="@/assets/img/sosmed/linkedin.png" alt="instagram icon" class="grayscale hover:grayscale-0 transition-all ease-in duration-100">
          </RouterLink>
        </div>
        <div class="w-9">
          <RouterLink>
            <img src="@/assets/img/sosmed/github.png" alt="instagram icon" class="grayscale hover:grayscale-0 transition-all ease-in duration-100">
          </RouterLink>
        </div>
        <div class="w-9">
          <RouterLink>
            <img src="@/assets/img/sosmed/gmail.png" alt="instagram icon" class="grayscale hover:grayscale-0 transition-all ease-in duration-100">
          </RouterLink>
        </div>
      </div>
    </div>
    <!-- explain about me -->
  </main>
</template>
