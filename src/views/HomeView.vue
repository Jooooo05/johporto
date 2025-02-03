<script setup>
import { onMounted, onUnmounted,ref, useTemplateRef } from "vue";
import { RouterLink } from 'vue-router';
import Typed from "typed.js";
import { scroll, animate } from "motion";

const typedElement1 = ref(null);
const isInView = ref(false);
const container = useTemplateRef("container");
const myProject = useTemplateRef("myProject");

let stopScrollAnimation;
let animateMyProject;

onMounted(() => {

  stopScrollAnimation = scroll(
    animate(container.value, { transform: ["translateX(-20%)", "translateX(0)"]}, { duration: 0.3, ease: "easeInOut" })
  )

  animateMyProject = scroll(
    animate(myProject.value, { transform: ["translateX(20%)", "translateX(0)"] })
  )

  // Infinite loop example
  if (typedElement1.value) {
    new Typed(typedElement1.value, {
      strings: ["FULLSTACK DEVELOPER", "MOBILE DEVELOPER"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: false,
    });
  }

});

onUnmounted(() => {
  stopScrollAnimation?.();
  animateMyProject?.();
});

</script>

<template>

  <NavbarComponent class="mb-10"></NavbarComponent>

  <!-- introduction -->
  <main >
    <div class="flex items-center justify-center relative">

      <div class="w-[450px] relative">
        <img class="w-full" src="@/assets/img/pp-porto-cartoon.png" alt="">
        <div class="absolute bottom-0 left-0 w-full h-2/4 bg-gradient-to-t from-white to-transparent"></div>
      </div>
      <div class="absolute bottom-10">
        <h1 class="mochiy text-3xl sm:text-4xl md:text-5xl text-center" ref="typedElement1"></h1>
        <div class="flex justify-center gap-6 sm:gap-10 pt-5">
          <a href="../../Yonatan-CV.pdf" download="Yonatan-CV.pdf" class=" box-border px-5 py-3 text-sm sm:text-base sm:px-9 sm:py-3 bg-slate-600 rounded-xl text-white shadow-md hover:bg-white hover:border-2 hover:border-slate-600 hover:text-slate-800 transition-all ease-in">Download CV</a>
          <a href="mailto:jonatanhudson.s@gmail.com" class="px-5 py-3 sm:px-9 sm:py-3 text-sm sm:text-base rounded-xl shadow-md border-2 border-slate-600 hover:bg-slate-600 hover:text-white transition-all ease-in">Contact Me</a>
        </div>
      </div>

    </div>

    <div class="mt-16 text-center px-3 sm:px-0">
      <h1 class="poppins-regular tracking-widest">Yonatan Hidson Simbolon</h1>
      <p class="poppins mt-4 ">Hi 👋 i'm an aspiring full-stack developer at the beginning of my journey. In addition, I have experience in mobile development, UI/UX, and design. I'm deeply passionate about web development and always eager to improve my skills. I believe that every line of code is an opportunity to grow and create something meaningful. While I’m still learning, I’m driven by a strong determination to keep growing, evolving, and delivering my best in every project I take on.</p>
      <h3 class="mochiy text-2xl md:text-3xl text-slate-800 mt-5">"Your Friendly Beginner Full-Stack Developer"</h3>
    </div>
  </main>
  <!-- introduction -->

  <!-- about me -->
   <main ref="container" :class="{ 'in-view': isInView }" class="mt-32  md:h-[500px] lg:h-[600px]">
    <div class="flex flex-col-reverse gap-10 md:grid grid-cols-2 md:gap-5 items-center">
      <!-- slogan -->
      <div class="flex flex-col justify-center">
        <h1 class="mochiy text-5xl md:text-7xl">About ME</h1>
        <p class="poppins text-lg mt-5 ">A brief introduction about me and my interest.</p>
        <span class="md:w-[420px] border-b-2 border-slate-800"></span>
        <RouterLink to="/about" class="self-end md:self-start mt-10 text-center box-border w-[200px] px-9 py-3 bg-slate-600 rounded-xl text-white shadow-md hover:bg-white hover:border-2 hover:border-slate-600 hover:text-slate-800 transition-all ease-in">Read More</RouterLink>
      </div>
      <!-- slogan -->

      <!-- image -->
      <div class="flex justify-center items-center">
        <img class="w-3/4 rounded-xl grayscale hover:grayscale-0 transition-all ease-in duration-100" src="@/assets/img/about.png" alt="About Me Image">
      </div>
      <!-- image -->

    </div>
   </main>
  <!-- about me -->

  <!-- my project -->
   <main ref="myProject" class="mt-28 md:mt-48  md:h-[500px] lg:h-[600px]">
     <div class="flex flex-col gap-10 md:grid grid-cols-2 md:gap-5 items-center">
      <!-- image -->
      <div class="flex justify-center">
        <img class="w-3/4" src="@/assets/img/recentproject/2.png" alt="About Me Image">
      </div>
      <!-- image -->

      <!-- slogan -->
      <div class="flex flex-col justify-center">
        <h1 class="mochiy text-5xl lg:text-7xl">My Project</h1>
        <p class="poppins text-lg mt-5 border-b-2 border-slate-800">List of my projects that I have done and currently working on.</p>
        <RouterLink to="/project" class="mt-10 text-center box-border w-[200px] px-9 py-3 bg-slate-600 rounded-xl text-white shadow-md hover:bg-white hover:border-2 hover:border-slate-600 hover:text-slate-800 transition-all ease-in">Read More</RouterLink>
      </div>
      <!-- slogan -->


    </div>
   </main>
  <!-- my project -->

</template>

<style scoped>

</style>
