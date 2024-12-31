<script setup>
import { RouterLink } from 'vue-router';


</script>

<template>
  <NavbarComponent class="mb-10"></NavbarComponent>

  <!-- title -->
   <main class="mt-20 border-b pb-3">
    <div class="flex justify-start items-center gap-3">
      <box-icon name='widget' type='solid' color='black' size="lg"></box-icon>
      <h1 class="poppins-medium tracking-widest text-3xl">MyProject</h1>
    </div>
    <p class="poppins mt-2">The following are some of the projects I have worked on, both private and open source.</p>
   </main>
  <!-- title -->

  <!-- project -->
   <main>

    <div class="mt-24">

      <!-- title -->
       <div class="relative pt-5">

        <span class="block w-28 h-1 bg-slate-800 rounded-full absolute top-0 -left-6"></span>
        <span class="block w-32 h-1 bg-slate-800 mt-1 rounded-full absolute top-2 left-8"></span>
        <div class="">
          <h3 class="poppins-medium tracking-widest text-2xl">Highlight</h3>
        </div>

       </div>
      <!-- title -->

      <div class="flex mt-16">

        <!-- left container -->
         <div class="basis-1/2">
          <div class="relative">
            <div class="w-[500px] hover:scale-125 absolute z-10 top-0 transform transition-transform duration-300">
              <img src="@/assets/img/highlight/1.png" alt="emsaec login" class="w-full grayscale hover:grayscale-0 transition-all ease-in duration-300">
            </div>
            <div class="w-[500px] hover:scale-125 absolute z-20 top-32 -left-28 transform transition-transform duration-300">
              <img src="@/assets/img/highlight/2.png" alt="emsaec dashboard" class="w-full grayscale hover:grayscale-0 transition-all ease-in duration-300 ">
            </div>
            <div class="w-[500px] hover:scale-125 absolute z-10 top-60 right-10 transform transition-transform duration-300">
              <img src="@/assets/img/highlight/3.png" alt="emsaec modul" class="w-full grayscale hover:grayscale-0 transition-all ease-in duration-300 ">
            </div>
          </div>
         </div>
        <!-- left container -->

        <!-- right container -->
         <div class="basis-1/2">
          <div class="w-full h-[500px] flex justify-center items-center">
            <div class="">
              <h1 class="poppins-medium text-xl tracking-widest text-slate-800">E-msaec Virtual Learning Environment</h1>
              <div class="ml-6 mt-2">
                <ul class="list-disc poppins">
                  <li>E-msaec is an interactive learning platform specifically designed to support students and healthcare professionals
                    in understanding in-depth concepts of adult nursing care and related disciplines of medical-surgical nursing</li>
                  <li>Collaborate with a team as the backend developer, utilizing Laravel to design and implement scalable APIs,
                    manage database operations, and ensure secure user authentication.</li>
                  <li>Integrated the backend with a ReactJs frontend, enabling seamless user interaction and a responsive interface</li>
                  <li>Ensured high performance and reliability by optimizing backend logic and database queries.</li>
                  <li>Contributed to successful project completion through effective teamwork, code reviews, and active participation
                    in problem-solving sessions</li>
                </ul>
              </div>
            </div>
          </div>
         </div>
        <!-- right container -->
      </div>

    </div>

   </main>
  <!-- project -->


  <!-- recent my project -->
   <main class="mt-44">

    <!-- title -->
    <div class="relative pt-5">
      <span class="block w-28 h-1 bg-slate-800 rounded-full absolute top-0 -left-6"></span>
      <span class="block w-32 h-1 bg-slate-800 mt-1 rounded-full absolute top-2 left-8"></span>
      <div class="">
        <h3 class="poppins-medium tracking-widest text-2xl">Recent my Project</h3>
      </div>
    </div>
    <!-- title -->

    <!-- recent -->
     <div class="pb-20">

      <div class="grid grid-cols-2 gap-4  mt-10">
        <div class="w-full h-[350px] bg-[url('@/assets/img/recentproject/2.png')] bg-cover bg-center relative">
            <span class="absolute top-0 left-0 poppins-medium text-lg tracking-widest p-2 bg-slate-700 text-white ">2024</span>
            <div class="group w-full h-full bg-slate-400 bg-opacity-75 hover:bg-opacity-0 ease-in-out duration-500 flex flex-col justify-center items-center">
              <!-- Konten yang ingin hilang saat hover -->
              <h1 class="poppins-semibold text-xl tracking-widest text-slate-900 group-hover:opacity-0 transition-opacity duration-500">E-msaec Virtual Learning Environment</h1>
              <p class="poppins text-slate-900 mt-2 group-hover:opacity-0 transition-opacity duration-500">Lorem</p>
            </div>
        </div>
        <div class="w-full h-[350px] bg-[url('@/assets/img/recentproject/3.png')] bg-cover bg-center relative">
          <span class="absolute top-0 left-0 poppins-medium text-lg tracking-widest p-2 bg-slate-700 text-white ">2024</span>
            <div class="group w-full h-full bg-slate-400 bg-opacity-75 hover:bg-opacity-0 ease-in-out duration-500 flex flex-col justify-center items-center">
              <!-- Konten yang ingin hilang saat hover -->
              <h1 class="poppins-semibold text-xl tracking-widest text-slate-900 group-hover:opacity-0 transition-opacity duration-500">E-Consultation</h1>
              <p class="poppins text-slate-900 mt-2 group-hover:opacity-0 transition-opacity duration-500">Lorem</p>
            </div>
        </div>
        <div class="w-full h-[350px] bg-[url('@/assets/img/recentproject/4.png')] bg-cover bg-center relative">
          <span class="absolute top-0 left-0 poppins-medium text-lg tracking-widest p-2 bg-slate-700 text-white ">2024</span>
            <div class="group w-full h-full bg-slate-400 bg-opacity-75 hover:bg-opacity-0 ease-in-out duration-500 flex flex-col justify-center items-center">
              <!-- Konten yang ingin hilang saat hover -->
              <h1 class="poppins-semibold text-xl tracking-widest text-slate-900 group-hover:opacity-0 transition-opacity duration-500">Teman Tani</h1>
              <p class="poppins text-slate-900 mt-2 group-hover:opacity-0 transition-opacity duration-500">Lorem</p>
            </div>
        </div>
        <div class="w-full h-[350px] bg-[url('@/assets/img/recentproject/5.png')] bg-cover bg-center relative">
          <span class="absolute top-0 left-0 poppins-medium text-lg tracking-widest p-2 bg-slate-700 text-white ">2024</span>
            <div class="group w-full h-full bg-slate-400 bg-opacity-75 hover:bg-opacity-0 ease-in-out duration-500 flex flex-col justify-center items-center">
              <!-- Konten yang ingin hilang saat hover -->
              <h1 class="poppins-semibold text-xl tracking-widest text-slate-900 group-hover:opacity-0 transition-opacity duration-500">Storry Apps</h1>
              <p class="poppins text-slate-900 mt-2 group-hover:opacity-0 transition-opacity duration-500">Lorem</p>
            </div>
        </div>
      </div>

     </div>
    <!-- recent -->

   </main>
  <!-- recent my project -->

  <!-- footer -->
   <main class="mt-32 mb-32">
    <div class="flex flex-col justify-center items-center gap-3">
      <RouterLink to="" class="poppins tracking-widest border-b-2 border-transparent hover:border-current duration-300">Want something like this?</RouterLink>
      <section class="flex justify-center items-center gap-2">
        <RouterLink to="" class="poppins-medium text-5xl border-b-2 border-transparent hover:border-current duration-300">Get In Touch</RouterLink>
        <box-icon name='right-arrow-circle' size="lg"></box-icon>
      </section>
    </div>
   </main>

</template>
