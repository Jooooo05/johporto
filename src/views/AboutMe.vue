<script setup>

</script>


<template>

  <NavbarComponent class="mb-10"></NavbarComponent>

  <!-- explain about me -->
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
          <a href="https://www.instagram.com/jonatan_sim/">
            <img src="@/assets/img/sosmed/instagram.png" alt="instagram icon" class="grayscale hover:grayscale-0 transition-all ease-in duration-100">
          </a>
        </div>
        <div class="w-9">
          <a href="https://www.linkedin.com/in/jonatan-simbolon-79615827b/">
            <img src="@/assets/img/sosmed/linkedin.png" alt="instagram icon" class="grayscale hover:grayscale-0 transition-all ease-in duration-100">
          </a>
        </div>
        <div class="w-9">
          <a href="https://github.com/Jooooo05">
            <img src="@/assets/img/sosmed/github.png" alt="instagram icon" class="grayscale hover:grayscale-0 transition-all ease-in duration-100">
          </a>
        </div>
        <div class="w-9">
          <a href="mailto:jonatanhudson.s@gmail.com">
            <img src="@/assets/img/sosmed/gmail.png" alt="instagram icon" class="grayscale hover:grayscale-0 transition-all ease-in duration-100">
          </a>
        </div>
      </div>
    </div>
    <!-- explain about me -->
  </main>
  <!-- explain about me -->

  <!-- skill -->
  <main class="mt-48 ">

    <!-- title -->
    <div class="flex justify-center items-center gap-3">
      <box-icon name='code-alt' size="lg"></box-icon>
      <h1 class="poppins-medium tracking-widest text-3xl">MySkill</h1>
    </div>
    <!-- title -->

    <!-- tools -->
    <div class="mt-8 relative">
      <!-- tools pertama -->
      <div class="grid grid-cols-5 gap-3 mt-4 relative">
        <div class="flex justify-center items-center gap-3 shadow-xl rounded-full border py-1">
          <img src="@/assets/img/skill_logo/html.png" alt="htmlicon" class="w-10">
          <p class="poppins-semibold text-sm">HTML</p>
        </div>
        <div class="flex justify-center items-center gap-3 shadow-xl rounded-full border py-1">
          <img src="@/assets/img/skill_logo/css.png" alt="htmlicon" class="w-10">
          <p class="poppins-semibold text-sm">CSS</p>
        </div>
        <div class="flex justify-center items-center gap-3 shadow-xl rounded-full border py-1">
          <img src="@/assets/img/skill_logo/js.png" alt="htmlicon" class="w-10">
          <p class="poppins-semibold text-sm">JavaScript</p>
        </div>
        <div class="flex justify-center items-center gap-3 shadow-xl rounded-full border py-1">
          <img src="@/assets/img/skill_logo/bootstrapt.png" alt="htmlicon" class="w-10">
          <p class="poppins-semibold text-sm">bootstrapt</p>
        </div>
        <div class="flex justify-center items-center gap-3 shadow-xl rounded-full border py-1">
          <img src="@/assets/img/skill_logo/tailwind.png" alt="htmlicon" class="w-10">
          <p class="poppins-semibold text-sm">TailwindCss</p>
        </div>

      </div>
      <!-- tools pertama -->

      <!-- tools kedua -->
      <div class="grid grid-cols-5 gap-3 mt-4 relative left-10">
        <div class="flex justify-center items-center gap-3 shadow-xl rounded-full border py-1">
          <img src="@/assets/img/skill_logo/php.png" alt="htmlicon" class="w-10">
          <p class="poppins-semibold text-sm">PHP</p>
        </div>
        <div class="flex justify-center items-center gap-3 shadow-xl rounded-full border py-1">
          <img src="@/assets/img/skill_logo/laravel.png" alt="htmlicon" class="w-10">
          <p class="poppins-semibold text-sm">Laravel</p>
        </div>
        <div class="flex justify-center items-center gap-3 shadow-xl rounded-full border py-1">
          <img src="@/assets/img/skill_logo/vue.png" alt="htmlicon" class="w-10">
          <p class="poppins-semibold text-sm">VueJs</p>
        </div>
        <div class="flex justify-center items-center gap-3 shadow-xl rounded-full border py-1">
          <img src="@/assets/img/skill_logo/mysql.png" alt="htmlicon" class="w-10">
          <p class="poppins-semibold text-sm">MySQL</p>
        </div>
        <div class="flex justify-center items-center gap-3 shadow-xl rounded-full border py-1">
          <img src="@/assets/img/skill_logo/firebase.png" alt="htmlicon" class="w-10">
          <p class="poppins-semibold text-sm">Firebase</p>
        </div>
      </div>
      <!-- tools kedua -->

      <!-- tools ketiga -->
      <div class="grid grid-cols-5 gap-3 mt-4">
        <div class="flex justify-center items-center gap-3 shadow-xl rounded-full border py-1">
          <img src="@/assets/img/skill_logo/git.png" alt="htmlicon" class="w-10">
          <p class="poppins-semibold text-sm">Git</p>
        </div>
        <div class="flex justify-center items-center gap-3 shadow-xl rounded-full border py-1">
          <img src="@/assets/img/skill_logo/github.png" alt="htmlicon" class="w-10">
          <p class="poppins-semibold text-sm">GitHub</p>
        </div>
        <div class="flex justify-center items-center gap-3 shadow-xl rounded-full border py-1">
          <img src="@/assets/img/skill_logo/figma.png" alt="htmlicon" class="w-10">
          <p class="poppins-semibold text-sm">Figma</p>
        </div>
        <div class="flex justify-center items-center gap-3 shadow-xl rounded-full border py-1">
          <img src="@/assets/img/skill_logo/vsc.png" alt="htmlicon" class="w-10">
          <p class="poppins-semibold text-sm">VisualSc</p>
        </div>
        <div class="flex justify-center items-center gap-3 shadow-xl rounded-full border py-1">
          <img src="@/assets/img/skill_logo/dbeaver.png" alt="htmlicon" class="w-10">
          <p class="poppins-semibold text-sm">Dbeaver</p>
        </div>

      </div>
      <!-- tools ketiga -->

      <div class="grid grid-cols-5 gap-3 mt-4 relative left-10">
        <div class="flex justify-center items-center gap-3 shadow-xl rounded-full border py-1">
          <img src="@/assets/img/skill_logo/wordpress.png" alt="htmlicon" class="w-10">
          <p class="poppins-semibold text-sm">wordpress</p>
        </div>
      </div>
    </div>
    <!-- tools -->

  </main>
  <!-- skill -->

 <!-- profesional experience -->
  <main class="mt-48 ">

    <!-- title -->
    <div class="flex justify-start items-center gap-3">
      <box-icon name='briefcase' size="lg"></box-icon>
      <h1 class="poppins-medium tracking-widest text-3xl">Profesional Experience</h1>
    </div>
    <!-- title -->

    <!-- history experience -->
     <div class="mt-14 pt-3 border-t border-gray-200">
      <h3 class="poppins-semibold text-sm">Agu 2024 - Dec 2024</h3>
      <h1 class="mochiy text-xl">Universitas Advent Indonesia</h1>
      <p class="poppins">Assistant Lecturer</p>
      <p class="mt-3 poppins text-sm ">Exam Supervisor : Ensuring the smooth conduct of exams, upholding compliance with academic ethics.</p>
      <p class="mt-1 poppins text-sm ">Assignment Checker : Reviewing student assignments according to assessment guidelines, Providing constructive feedback to enhance academic performance.</p>
     </div>

     <div class="mt-8 pt-3 border-t border-gray-200">
      <h3 class="poppins-semibold text-sm">Mei 2024 - Agu 2024</h3>
      <h1 class="mochiy text-xl">Lamjaya Global Solusi - Magang</h1>
      <p class="poppins">Fullstack Developer</p>
      <p class="mt-3 poppins text-sm ">Build an E-Consultation application from start to finish using Laravel technology as the backend (rest-API), VueJs as the frontend (SPA), and Firebase for live-chat (realtime)</p>
     </div>

     <div class="mt-8 pt-3 border-t border-gray-200">
      <h3 class="poppins-semibold text-sm">Agu 2023 - Feb 2024</h3>
      <h1 class="mochiy text-xl">Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka</h1>
      <p class="poppins">Mobile Development Cohort Bangkit Academy 2024</p>
      <p class="mt-3 poppins text-sm ">became an IT verse mentor teaching in the advanced web programming class, the things taught were css3, Bootsrapt tailwindcss, and responsive web concepts.</p>
     </div>

     <div class="mt-8 pt-3 border-t border-gray-200">
      <h3 class="poppins-semibold text-sm">August 2023 - Feb 2024</h3>
      <h1 class="mochiy text-xl">IT Verse</h1>
      <p class="poppins">Mentor</p>
      <p class="mt-3 poppins text-sm ">became an IT verse mentor teaching in the advanced web programming class, the things taught were css3, Bootsrapt tailwindcss, and responsive web concepts.</p>
     </div>
    <!-- history experience -->
  </main>
 <!-- profesional experience -->

  <!-- education -->
   <main class="mt-48 mb-14">
      <!-- title -->
      <div class="text-center">
        <div class="flex justify-center items-center gap-3">
          <box-icon name='graduation' type="solid" size="lg"></box-icon>
          <h1 class="poppins-medium tracking-widest text-3xl">EDUCATION</h1>
        </div>
        <p class="poppins-regular tracking-widest text-lg">Get to know more about my educational background.</p>
      </div>
      <!-- title -->

      <!-- history education -->
       <div class="mt-16">
        <div class="flex justify-center gap-2">
          <!-- left container -->
           <div class="w-1/2">
            <div class="">
              <h3 class="poppins-semibold text-sm">2021 - Present</h3>
              <h1 class="mochiy text-xl">Universitas Advent Indonesia</h1>
              <p class="poppins">S1 Informatic Engineering</p>
            </div>

            <div class="mt-2">
              <img src="@/assets/img/education.png" alt="outstanding achievment" class="grayscale hover:grayscale-0 transition-all ease-in duration-300 rounded-xl">
            </div>

            <div class="mt-4 mb-5">
              <p class="poppins text-sm">Aspiring to be a software engineer, I have currently completed my education at Adventist University of Indonesia with a period of 3.5 years. Fascinated by the world of technology, I now have a strong will to continue to develop in this field, a long journey has been passed until I get to this point.</p>
            </div>
            <span class="px-8 py-2 bg-gray-300 mt-7 poppins-semibold text-sm rounded-2xl text-slate-800">GPA 3.83</span>

           </div>
          <!-- left container -->

          <!-- right container -->
           <div class="w-1/2">
            <div class="text-center">
              <h1 class="mochiy text-xl">Achievements</h1>
              <h3 class="poppins-semibold text-sm">Some of my achievements during my study.</h3>
            </div>

            <div class="mt-7">

              <div class="flex justify-start items-center gap-3">
                <box-icon name='medal' size="lg"></box-icon>
                <p class="poppins text-sm">Out Standing </p>
              </div>

            </div>
           </div>
        </div>
        <!-- right container -->
       </div>
      <!-- histori education -->

   </main>
  <!-- education -->
</template>
