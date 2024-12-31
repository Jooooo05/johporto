<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>

  <NavbarComponent class="mb-10"></NavbarComponent>

  <!-- introduction -->
  <main>
    <div class="flex items-center justify-center relative">

      <div class="w-[450px] relative">
        <img class="w-full" src="@/assets/img/pp-porto-cartoon.png" alt="">
        <div class="absolute bottom-0 left-0 w-full h-2/4 bg-gradient-to-t from-white to-transparent"></div>
      </div>
      <div class="absolute bottom-10">
        <span class="mochiy text-5xl">FULLSTACK DEVELOPER</span>
        <div class="flex justify-center gap-10 pt-5">
          <a href="../../public/Yonatan-CV.pdf" download="Yonatan-CV.pdf" class="box-border px-9 py-3 bg-slate-600 rounded-xl text-white shadow-md hover:bg-white hover:border-2 hover:border-slate-600 hover:text-slate-800 transition-all ease-in">Download CV</a>
          <RouterLink class="px-9 py-3 rounded-xl shadow-md border-2 border-slate-600 hover:bg-slate-600 hover:text-white transition-all ease-in" to="">Contact Me</RouterLink>
        </div>
      </div>

    </div>

    <div class="mt-16 text-center">
      <h1 class="poppins-regular tracking-widest">Yonatan Hidson Simbolon</h1>
      <p class="poppins mt-4">Hi 👋 i'm an aspiring full-stack developer at the beginning of my journey. In addition, I have experience in mobile development, UI/UX, and design. I'm deeply passionate about web development and always eager to improve my skills. I believe that every line of code is an opportunity to grow and create something meaningful. While I’m still learning, I’m driven by a strong determination to keep growing, evolving, and delivering my best in every project I take on.</p>
      <h3 class="mochiy text-3xl text-slate-800 mt-5">"Your Friendly Beginner Full-Stack Developer"</h3>
    </div>
  </main>
  <!-- introduction -->

  <!-- about me -->
   <main class="mt-32 h-[600px]">
    <div class="grid grid-cols-2 gap-5 items-center">
      <!-- slogan -->
      <div class="flex flex-col justify-center">
        <h1 class="mochiy text-7xl">About ME</h1>
        <p class="poppins text-lg mt-5 ">A brief introduction about me and my interest.</p>
        <span class="w-[420px] border-b-2 border-slate-800"></span>
        <RouterLink to="/about" class="mt-10 text-center box-border w-[200px] px-9 py-3 bg-slate-600 rounded-xl text-white shadow-md hover:bg-white hover:border-2 hover:border-slate-600 hover:text-slate-800 transition-all ease-in">Read More</RouterLink>
      </div>
      <!-- slogan -->

      <!-- image -->
      <div class="flex justify-center">
        <img class="w-3/4" src="@/assets/img/pp-porto-1.png" alt="About Me Image">
      </div>
      <!-- image -->

    </div>
   </main>
  <!-- about me -->

  <!-- my project -->
   <main class="mt-48 h-[600px]">
     <div class="grid grid-cols-2 gap-5 items-center">
      <!-- image -->
      <div class="flex justify-center">
        <img class="w-3/4" src="@/assets/img/recentproject/2.png" alt="About Me Image">
      </div>
      <!-- image -->

      <!-- slogan -->
      <div class="flex flex-col justify-center">
        <h1 class="mochiy text-7xl">My Project</h1>
        <p class="poppins text-lg mt-5 border-b-2 border-slate-800">List of my projects that I have done and currently working on.</p>
        <RouterLink to="/project" class="mt-10 text-center box-border w-[200px] px-9 py-3 bg-slate-600 rounded-xl text-white shadow-md hover:bg-white hover:border-2 hover:border-slate-600 hover:text-slate-800 transition-all ease-in">Read More</RouterLink>
      </div>
      <!-- slogan -->


    </div>
   </main>
  <!-- my project -->

</template>
