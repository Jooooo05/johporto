<script setup>
import { RouterLink } from 'vue-router';



</script>

<template>
  <NavbarComponent class="mb-10"></NavbarComponent>

  <!-- title -->
   <main class="mt-20 border-b pb-3">
    <div class="flex justify-start items-center gap-3">
      <box-icon name='widget' type='solid' color='black' size="lg"></box-icon>
      <h1 class="poppins-medium tracking-widest  text-3xl">MyProject</h1>
    </div>
    <p class="poppins mt-2">The following are some of the projects I have worked on, both private and open source.</p>
   </main>
  <!-- title -->

  <!-- project -->
   <main>

    <div class="mt-24">

      <!-- title -->
       <div class="relative pt-5">

        <span class="block w-28 h-1 bg-slate-800 rounded-full absolute top-0 md:-left-6 left-2/4"></span>
        <span class="block w-32 h-1 bg-slate-800 mt-1 rounded-full absolute top-2 md:left-8 left-1/4"></span>
        <div class="">
          <h3 class="poppins-medium tracking-widest text-2xl text-center md:text-start">Highlight</h3>
        </div>

       </div>
      <!-- title -->

      <div class="flex flex-col md:flex-row gap-[470px] md:gap-0 mt-16">

        <!-- left container -->
         <div class="basis-1/2">
          <div class="relative">
            <div class="w-[300px] sm:w-[350px] md:w-[400px] lg:w-[500px] hover:scale-125 absolute z-10 hover:z-30 top-0 right-10 md:right-14 transform transition-transform duration-300">
              <img src="@/assets/img/highlight/1.png" alt="emsaec login" class="w-full grayscale hover:grayscale-0 transition-all ease-in duration-300">
            </div>
            <div class="w-[300px] sm:w-[350px] md:w-[400px] lg:w-[500px] hover:scale-125 absolute z-20 top-32 left-6 sm:-left-28 md:-left-8 transform transition-transform duration-300">
              <img src="@/assets/img/highlight/2.png" alt="emsaec dashboard" class="w-full grayscale hover:grayscale-0 transition-all ease-in duration-300 ">
            </div>
            <div class="w-[300px] sm:w-[350px] md:w-[400px] lg:w-[500px] hover:scale-125 absolute z-10 hover:z-30 top-60 right-10 transform transition-transform duration-300">
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
   <main class="mt-32 md:mt-44">

    <!-- title -->
    <div class="relative pt-5">
      <span class="block w-28 h-1 bg-slate-800 rounded-full absolute top-0 md:-left-6 left-2/4"></span>
      <span class="block w-32 h-1 bg-slate-800 mt-1 rounded-full absolute top-2 md:left-8 left-1/4"></span>
      <div class="">
        <h3 class="poppins-medium tracking-widest text-2xl text-center md:text-start">Recent my Project</h3>
      </div>
    </div>
    <!-- title -->

    <!-- recent -->
     <div class="pb-20">

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4  mt-10">
        <!-- NoteApss -->


        <div class="w-full h-[350px] bg-[url('@/assets/img/recentproject/7.png')] bg-cover bg-center relative">
            <span class="absolute top-0 left-0 poppins-medium text-lg tracking-widest p-2 bg-slate-700 text-white ">2025</span>
            <div class="group w-full h-full bg-slate-400 bg-opacity-75 hover:bg-opacity-0 ease-in-out duration-500 flex flex-col justify-center items-center">
              <!-- Konten yang ingin hilang saat hover -->
              <h1 class="poppins-semibold text-xl tracking-widest text-slate-900 group-hover:opacity-0 transition-opacity duration-500 text-center">Personal Website</h1>
              <p class="text-slate-900 mt-2 group-hover:opacity-0 transition-opacity duration-500 w-3/4 poppins text-center text-sm lg:text-base">Portfolio Website adalah proyek pribadi yang saya kembangkan menggunakan Vue.js 3 dan TailwindCSS. Saya juga memanfaatkan Typed.js untuk efek teks dinamis serta Framer Motion untuk animasi scroll yang halus dan interaktif. Website ini dirancang sebagai wadah untuk menampilkan pengalaman, proyek, dan keterampilan saya dalam pengembangan web. 🔥</p>
              <div class="mt-5">
                <a href="https://github.com/Jooooo05/johporto" class="px-4 py-3 poppins text-sm text-white rounded-md bg-slate-700 hover:bg-white hover:border-2 hover:border-slate-600 hover:text-slate-800 transition-all ease-in">github</a>
              </div>
            </div>
        </div>

        <div class="w-full h-[350px] bg-[url('@/assets/img/recentproject/6.png')] bg-cover bg-center relative">
            <span class="absolute top-0 left-0 poppins-medium text-lg tracking-widest p-2 bg-slate-700 text-white ">2025</span>
            <div class="group w-full h-full bg-slate-400 bg-opacity-75 hover:bg-opacity-0 ease-in-out duration-500 flex flex-col justify-center items-center">
              <!-- Konten yang ingin hilang saat hover -->
              <h1 class="poppins-semibold text-xl tracking-widest text-slate-900 group-hover:opacity-0 transition-opacity duration-500 text-center">NoteApps</h1>
              <p class="text-slate-900 mt-2 group-hover:opacity-0 transition-opacity duration-500 w-3/4 poppins text-center text-sm lg:text-base">NoteApps adalah aplikasi pencatatan yang saya kembangkan saat mengikuti IDCamp 2024 - React Developer Path. Dibangun dengan React dan TailwindCSS, aplikasi ini memungkinkan pengguna untuk menambah, mengedit, menghapus, serta mengarsipkan catatan dengan mudah. NoteApps menjadi pengalaman berharga bagi saya dalam memahami React dan styling modern. 🚀</p>
              <div class="mt-5">
                <a href="https://github.com/Jooooo05/notesApp" class="px-4 py-3 poppins text-sm text-white rounded-md bg-slate-700 hover:bg-white hover:border-2 hover:border-slate-600 hover:text-slate-800 transition-all ease-in">github</a>
              </div>
            </div>
        </div>

        <div class="w-full h-[350px] bg-[url('@/assets/img/recentproject/2.png')] bg-cover bg-center relative">
            <span class="absolute top-0 left-0 poppins-medium text-lg tracking-widest p-2 bg-slate-700 text-white ">2024</span>
            <div class="group w-full h-full bg-slate-400 bg-opacity-75 hover:bg-opacity-0 ease-in-out duration-500 flex flex-col justify-center items-center">
              <!-- Konten yang ingin hilang saat hover -->
              <h1 class="poppins-semibold text-xl tracking-widest text-slate-900 group-hover:opacity-0 transition-opacity duration-500 text-center">E-msaec Virtual Learning Environment</h1>
              <p class="text-slate-900 mt-2 group-hover:opacity-0 transition-opacity duration-500 w-3/4 poppins text-center">E-MSAEC is an interactive platform for medical-surgical nursing. As a backend developer, I used Laravel to build scalable APIs and integrate them with a React.js frontend for a responsive user experience.</p>
              <div class="mt-5">
                <a href="https://e-msaec.com/" class="px-4 py-3 poppins text-sm text-white rounded-md bg-slate-700 hover:bg-white hover:border-2 hover:border-slate-600 hover:text-slate-800 transition-all ease-in">e-msaeac.com</a>
              </div>
            </div>
        </div>

        <div class="w-full h-[350px] bg-[url('@/assets/img/recentproject/3.png')] bg-cover bg-center relative">
          <span class="absolute top-0 left-0 poppins-medium text-lg tracking-widest p-2 bg-slate-700 text-white ">2024</span>
            <div class="group w-full h-full bg-slate-400 bg-opacity-75 hover:bg-opacity-0 ease-in-out duration-500 flex flex-col justify-center items-center">
              <!-- Konten yang ingin hilang saat hover -->
              <h1 class="poppins-semibold text-xl tracking-widest text-slate-900 group-hover:opacity-0 transition-opacity duration-500 text-center">E-Consultation</h1>
              <p class="poppins text-slate-900 mt-2 group-hover:opacity-0 transition-opacity duration-500 w-3/4 text-center">E-Consultation is a web-based platform enabling real-time consultations between Seventh-day Adventist Church members and pastors. I developed the project independently, using Vue.js for the frontend, Laravel for the backend, and Firebase for seamless live communication, ensuring responsive design and secure functionality.</p>
              <div class="mt-5">
                <a href="https://github.com/Jooooo05/e-consultation-fe" class="px-4 py-3 poppins text-sm text-white rounded-md bg-slate-700 hover:bg-white hover:border-2 hover:border-slate-600 hover:text-slate-800 transition-all ease-in">github</a>
              </div>
            </div>
        </div>

        <div class="w-full h-[350px] bg-[url('@/assets/img/recentproject/4.png')] bg-cover bg-center relative">
          <span class="absolute top-0 left-0 poppins-medium text-lg tracking-widest p-2 bg-slate-700 text-white ">2024</span>
            <div class="group w-full h-full bg-slate-400 bg-opacity-75 hover:bg-opacity-0 ease-in-out duration-500 flex flex-col justify-center items-center">
              <!-- Konten yang ingin hilang saat hover -->
              <h1 class="poppins-semibold text-xl tracking-widest text-slate-900 group-hover:opacity-0 transition-opacity duration-500 text-center">Teman Tani</h1>
              <p class="poppins text-slate-900 mt-2 group-hover:opacity-0 transition-opacity duration-500 w-3/4 text-center">Teman Tani is a smart farming mobile application developed as a capstone project for Bangkit Academy 2024. As a Mobile Developer, I built the app using Kotlin, integrating cloud-based APIs and a machine learning model to provide predictive insights like crop recommendations and pest detection, supporting sustainable farming practices.</p>
              <div class="mt-5">
                <a href="https://github.com/Jooooo05/TemanTani" class="px-4 py-3 poppins text-sm text-white rounded-md bg-slate-700 hover:bg-white hover:border-2 hover:border-slate-600 hover:text-slate-800 transition-all ease-in">github</a>
              </div>
            </div>
        </div>

        <div class="w-full h-[350px] bg-[url('@/assets/img/recentproject/5.png')] bg-cover bg-center relative">
          <span class="absolute top-0 left-0 poppins-medium text-lg tracking-widest p-2 bg-slate-700 text-white ">2024</span>
            <div class="group w-full h-full bg-slate-400 bg-opacity-75 hover:bg-opacity-0 ease-in-out duration-500 flex flex-col justify-center items-center">
              <!-- Konten yang ingin hilang saat hover -->
              <h1 class="poppins-semibold text-xl tracking-widest text-slate-900 group-hover:opacity-0 transition-opacity duration-500 text-center">Story Apps</h1>
              <p class="poppins text-slate-900 mt-2 group-hover:opacity-0 transition-opacity duration-500 w-3/4 text-center">storry app is an application that I made to complete the final project of the Intermediate Android Application Development course.</p>
            </div>
        </div>
      </div>

     </div>
    <!-- recent -->

   </main>
  <!-- recent my project -->

  <!-- footer -->
   <main class="mt-20 md:mt-32 mb-32 ">
    <div class="flex flex-col justify-center items-center gap-3">
      <RouterLink to="" class="poppins text-sm md:text-base tracking-widest border-b-2 border-transparent hover:border-current duration-300">Want something like this?</RouterLink>
      <section class="flex justify-center items-center gap-2">
        <RouterLink to="" class="poppins-medium text-3xl md:text-5xl border-b-2 border-transparent hover:border-current duration-300">Get In Touch</RouterLink>
        <box-icon name='right-arrow-circle' size="lg"></box-icon>
      </section>
    </div>
   </main>

</template>
