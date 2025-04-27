<script setup>
import { ref } from 'vue'

const showCard = ref(false)
const imageSrc = ref('')

const showCardHandler = (no_folder, number) => {
  // /our_daily/daily3/2.jpg
  showCard.value = true
  imageSrc.value = `/our_daily/daily${no_folder}/${number}.jpg`
  console.log(imageSrc.value)
}

const hideCardHandler = () => {
  showCard.value = false
}
</script>

<template>
  <!-- card image untuk di baca -->
  <div v-if="showCard" class="fixed inset-0 bg-black/80 z-[9999] overflow-hidden">
    <div @click="hideCardHandler" class="absolute top-7 right-[600px] cursor-pointer">
      <box-icon name="x" color="white" size="md"></box-icon>
    </div>

    <div class="flex items-center justify-center h-screen">
      <div class="w-[380px]">
        <img :src="imageSrc" alt="image" class="w-full h-full rounded-xl" />
      </div>
    </div>
  </div>
  <!-- card image untuk di baca -->

  <!-- navbar -->
  <header class="pt-8">
    <main class="flex justify-between items-center">
      <div class="poppins">
        <p class="text-base font-medium">Joh's</p>
        <p class="text-sm">Yonatan Hidson Simbolon</p>
      </div>

      <div class="poppins">
        <p class="text-base font-medium">Audy's</p>
        <p class="text-sm">Audrey Febriany Silalahi</p>
      </div>
    </main>
  </header>
  <!-- navbar -->

  <!-- title -->
  <div class="mt-32 mx-auto border-b-2 pb-3 flex justify-start items-center gap-3 w-fit">
    <box-icon name="image" type="solid" color="black" size="lg"></box-icon>
    <h1 class="poppins-medium tracking-widest text-3xl">My Favorite Images</h1>
  </div>
  <!-- title -->

  <!-- my favorite image -->
  <main class="grid grid-cols-6 mt-8 gap-4">
    <div class="flex items-center">
      <div
        class="h-[200px] overflow-hidden rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all ease-in duration-300 cursor-pointer"
      >
        <img
          src="@/assets/story_audy/audystory_img_kecil/1.png"
          alt="selfie_time"
          class="w-full h-full transform hover:scale-110 transition-all ease-in duration-200"
        />
      </div>
    </div>
    <div class="flex items-start">
      <div
        class="h-[200px] overflow-hidden rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all ease-in duration-300 cursor-pointer"
      >
        <img
          src="@/assets/story_audy/audystory_img_kecil/10.png"
          alt="selfie_time"
          class="w-full h-full transform hover:scale-110 transition-all ease-in duration-200"
        />
      </div>
    </div>
    <div class="col-span-2 flex items-center">
      <div
        class="overflow-hidden rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all ease-in duration-300 cursor-pointer"
      >
        <img
          src="@/assets/story_audy/audystory_img_kecil/3.png"
          alt="selfie_time"
          class="w-full h-full transform hover:scale-110 transition-all ease-in duration-200"
        />
      </div>
    </div>
    <div class="flex items-end">
      <div
        class="h-[200px] overflow-hidden rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all ease-in duration-300 cursor-pointer"
      >
        <img
          src="@/assets/story_audy/audystory_img_kecil/13.png"
          alt="selfie_time"
          class="w-full h-full transform hover:scale-110 transition-all ease-in duration-200"
        />
      </div>
    </div>
    <div class="flex items-center">
      <div
        class="h-[200px] overflow-hidden rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all ease-in duration-300 cursor-pointer"
      >
        <img
          src="@/assets/story_audy/audystory_img_kecil/5.png"
          alt="selfie_time"
          class="w-full h-full transform hover:scale-110 transition-all ease-in duration-200"
        />
      </div>
    </div>
    <div class="col-span-2 flex items-center">
      <div
        class="overflow-hidden rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all ease-in duration-300 cursor-pointer"
      >
        <img
          src="@/assets/story_audy/audystory_img_kecil/6.png"
          alt="selfie_time"
          class="w-full h-full transform hover:scale-110 transition-all ease-in duration-200"
        />
      </div>
    </div>
    <div class="col-span-2 flex justify-center items-center">
      <div
        class="h-[200px] overflow-hidden rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all ease-in duration-300 cursor-pointer"
      >
        <img
          src="@/assets/story_audy/audystory_img_kecil/8.png"
          alt="selfie_time"
          class="w-full h-full transform hover:scale-110 transition-all ease-in duration-200"
        />
      </div>
    </div>
    <div class="col-start-5 col-end-7 flex items-center">
      <div
        class="overflow-hidden rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all ease-in duration-300 cursor-pointer"
      >
        <img
          src="@/assets/story_audy/audystory_img_kecil/4.png"
          alt="selfie_time"
          class="w-full h-full transform hover:scale-110 transition-all ease-in duration-200"
        />
      </div>
    </div>
  </main>
  <!-- my favorite image -->

  <!-- title story-->
  <div class="mt-32 border-b-2 pb-3 flex justify-starti items-center gap-3 w-fit">
    <box-icon name="message-alt-dots" size="lg"></box-icon>
    <h1 class="poppins-medium tracking-widest text-3xl">My Story 🥰</h1>
  </div>
  <!-- title story-->

  <!-- my story -->
  <main class="mt-8 mb-10">
    <!-- story pertama -->
    <div class="w-full relative flex items-center justify-center gap-20">
      <div class="w-[3px] h-full bg-zinc-300 absolute top-1/2 left-1/2 transform -translate-y-1/2">
        <span
          class="w-7 h-7 absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-zinc-300"
        ></span>
        <div
          class="w-0 h-0 border-t-[9px] border-b-[9px] border-r-[18px] border-transparent border-r-zinc-300 absolute top-1/2 -translate-y-1/2 -left-4"
        ></div>
      </div>

      <div class="w-1/2 h-full bg-white shadow-lg p-8 rounded-xl">
        <h3 class="mochiy tracking-widest text-xl">How we got acquainted</h3>
        <p class="poppins text-sm tracking-wider mt-1">2 Oktober 11.31</p>
        <p class="poppins text-sm mt-1">
          Honestly lupa kapan tepatnya aku dikenalin sama Audy, tapi aku masih inget banget momen
          awalnya. Hari itu Sabtu, tiba-tiba temenku, Ellen, nelpon. Dia bilang mau ngenalin
          temennya ke aku. Aku yang waktu itu lagi yahh open juga buat kenalan sama orang baru,
          langsung kepikiran, "Why not, right?"
        </p>
        <p class="poppins text-sm mt-1">
          Ellen terus ngirimin aku akun Instagram-nya Audy. Dia bilang, "Ini orangnya, Jo. Cobalah
          kau liat-liat dulu. Gimana? Oke kan orangnya?" Di situ Ellen mulai ngejelasin panjang
          lebar tentang Audy. Katanya Audy orangnya baik, asik, pokoknya the kind of person you’d
          want to know lebih jauhlah. Sambil Ellen cerita, aku mulai scroll Instagram-nya Audy dan,
          I don’t know why, ada sesuatu yang bikin aku tertarik. Tapi, ada rasa ragu juga waktu itu.
          Di pikiran aku muncul, "Duh, takut nih. Takut kedepannya malah aku yg capek sendiri atau
          gimana."
        </p>
        <p class="poppins text-sm mt-1">
          tapi si ellen selalu yg nanya nanya gimana jo sudah kau chat belum pokoknya maksa aku buat
          chatt temennya si audy ini. "Gimana, Jo? Udah kau chat belum?" Sampai akhirnya, karena dia
          bener-bener push aku, I decided to take that first step.
        </p>
        <p class="poppins text-sm mt-1">
          Dan di tanggal 2 Oktober, jam 11.31, aku ngirim pesan pertama ke Audy. That’s how it all
          started. 🤗
        </p>
      </div>

      <div class="w-1/2 h-full">
        <div class="relative shadow-2xl">
          <div
            class="w-[200px] h-[433px] absolute z-30 top-1/2 left-1/3 transform -translate-y-1/2 hover:scale-105 transition-all ease-in duration-200"
          >
            <img
              src="@/assets/story_audy/mystory/storry1.png"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            class="w-[200px] h-[433px] absolute z-20 top-1/2 left-[5%] -translate-y-1/2 transform -rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200"
          >
            <img
              src="@/assets/story_audy/mystory/storry2.png"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            class="w-[200px] h-[433px] absolute z-10 top-1/2 left-[60%] transform -translate-y-1/2 rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200"
          >
            <img
              src="@/assets/story_audy/mystory/4.png"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- story pertama -->

    <!-- story kedua -->
    <div class="w-full relative flex flex-row-reverse items-center justify-center gap-20">
      <div class="w-[3px] h-full bg-zinc-300 absolute top-1/2 left-1/2 transform -translate-y-1/2">
        <div
          class="w-0 h-0 border-t-[9px] border-b-[9px] border-l-[18px] border-transparent border-l-zinc-300 absolute top-1/2 -translate-y-1/2 -right-4"
        ></div>
      </div>

      <div class="w-1/2 h-full bg-white shadow-lg p-8 rounded-xl">
        <h3 class="mochiy tracking-widest text-xl">Konyolnya Gue</h3>
        <p class="poppins text-sm mt-1">
          Jadi gini, waktu pertama kali gue ngechat Audy, honestly nggak punya ekspektasi apa-apa.
          Ya, pokoknya jalanin aja tanpa berharap besar. Tapi, karena ada rasa ragu dan nggak yakin,
          gue akhirnya cerita ke teman dekatku, Steven. Gue bilang, "Pen, gue dikenalin cewek sama
          Ellen nih." gue juga cerita kalau gue sebenarnya tertarik, tapi di sisi lain gue punya
          keraguan besar buat deketin Audy
        </p>
        <p class="poppins text-sm mt-1">
          Ngobrol tuh panjang lebar, sampai dititik si Steven malah bilang, "Jo, gimana kalau lu
          sama temen gue aja, si Grace?" nah si tolol ini langsung ngechat ke orangnya langsung kyk
          minta izin buat ngenalin gue ke si Grace. Gue bilang "woe masa gue deketin dua orang
          sekaligus? kayak apaan tau gue, giu" nah si Tipen kan emang sifatnya kek anjing yah wkwkw
          malah bilang "Nggak apa-apa, Jo. Namanya juga kenalan, nggak ada yang salah." Akhirnya,
          yah karena gue juga masih punya keraguan sama Audy, mikirnya "Yaudalah, kenalan aja, kek
          gada salahnya hehehe peace ✌️"
        </p>
        <p class="poppins-semibold text-sm">Dan di titik ini, kekonyolanku dimulai.</p>
        <p class="poppins text-sm mt-1">
          Gue sama Steven sama sekali nggak mikir buat car tahu lebih dalam soal circle mereka.
          Ternyata! tanpa kami duga, Grace sama Audy itu temen dekat gais! hahah mereka sama-sama
          aktif di organisasi PCM, dan yah sesuai yang kami duga dan takutkan langsung tau dong
          mereka. Bisa dibilang yah lasung jadi bahan gosipnya mereka
        </p>
        <p class="poppins text-sm mt-1">
          Pas tau hal ini, rasanya... bjirr mati aje udeh. Malunya bener-bener nggak bisa dijelasin
          pakai kata-kata. Tapi ya, mau nggak mau, gue harus jelasin apa adanya. Akhirnya gue coba
          cerita jujur gimana bisa itu bisa terjadi aku juga ragu awalnya deketin audy Wahahaha
          konyol banget co
        </p>
      </div>

      <div class="w-1/2 h-full">
        <div class="relative shadow-2xl">
          <div
            class="w-[200px] h-[433px] absolute z-20 top-1/2 left-[20%] -translate-y-1/2 transform -rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200"
          >
            <img
              src="@/assets/story_audy/mystory/storry3.png"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            class="w-[200px] h-[433px] absolute z-10 top-1/2 left-[55%] transform -translate-y-1/2 rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200"
          >
            <img
              src="@/assets/story_audy/mystory/5.png"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- story kedua -->

    <!-- story ketiga -->
    <div class="w-full h-[550px] relative flex items-center justify-center gap-20">
      <div class="w-[3px] h-full bg-zinc-300 absolute top-1/2 left-1/2 transform -translate-y-1/2">
        <div
          class="w-0 h-0 border-t-[9px] border-b-[9px] border-r-[18px] border-transparent border-r-zinc-300 absolute top-1/2 -translate-y-1/2 -left-4"
        ></div>
      </div>

      <div class="w-1/2 h-full flex items-center">
        <div class="w-full bg-white shadow-lg p-8 rounded-xl">
          <h3 class="mochiy tracking-widest text-xl">Move to whatshapp</h3>
          <p class="poppins text-sm tracking-wider mt-1">8 Oktober 14.16</p>
          <p class="poppins text-sm mt-1">
            Awal aku ngechat itu dari dm dan setelah coba berbicara lumayan banyak dia bilang "ehh
            boleee lewat wa ajaa gaa, dm ga enak soalnya jujur wkwkw" yaudah aku lsg jawab boleh
            banget tuhh wkwkw, untuk part ini ga banyak sih yg bisa di ceritain cuma so happy bisa
            pindah ke whatshapp hehehe :)
          </p>
        </div>
      </div>

      <div class="w-1/2">
        <div class="relative shadow-2xl">
          <div
            class="w-[200px] h-[433px] absolute z-30 top-1/2 left-1/3 transform -translate-y-1/2 hover:scale-105 transition-all ease-in duration-200"
          >
            <img
              src="@/assets/story_audy/mystory/6.png"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            class="w-[200px] h-[433px] absolute z-20 top-1/2 left-[5%] -translate-y-1/2 transform -rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200"
          >
            <img
              src="@/assets/story_audy/mystory/7.png"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            class="w-[200px] h-[433px] absolute z-10 top-1/2 left-[60%] transform -translate-y-1/2 rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200"
          >
            <img
              src="@/assets/story_audy/mystory/8.png"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- story ketiga -->

    <!-- story keempat -->
    <div class="w-full relative flex flex-row-reverse items-center justify-center gap-20">
      <div class="w-[3px] h-full bg-zinc-300 absolute top-1/2 left-1/2 transform -translate-y-1/2">
        <div
          class="w-0 h-0 border-t-[9px] border-b-[9px] border-l-[18px] border-transparent border-l-zinc-300 absolute top-1/2 -translate-y-1/2 -right-4"
        ></div>
      </div>

      <div class="w-1/2 h-full bg-white shadow-lg p-8 rounded-xl">
        <h3 class="mochiy tracking-widest text-xl">Almost gave up</h3>
        <p class="poppins text-sm tracking-wider mt-1">16 Oktober</p>
        <p class="poppins text-sm mt-1">
          Setelah kami kenal satu sama lain selama beberapa hari—honestly, I don’t even know how
          long exactly—it felt like everything was just <span class="font-semibold">meh</span>.
          Gimana ya, rasanya stuck banget, kayak kurang ada progress, sampai akhirnya aku mutusin
          buat cerita ke Ellen. Aku cerita panjang lebar ke dia, bilang kalau aku merasa stuck dan
          nggak tahu harus gimana. Terus aku bilang ke Ellen, "Lenn, coba deh tanyain ke Audy,
          sebenarnya dia itu ada interest nggak sih?" Aku juga bilang ke Ellen kalau aku bakal
          mutusin langkahku berikutnya setelah tahu jawabannya.
        </p>
        <p class="poppins text-sm mt-1">
          Nggak lama setelah itu, Ellen cerita ke Audy. Nah, yang ini aku nggak tahu detail diskusi
          mereka gimana, tapi aku rada curiga juga sih soal hasil obrolan itu. Tapi yang sampai ke
          aku katanya, <span class="font-semibold">"Audy sih interest-interest aja."</span>
        </p>
        <p class="poppins text-sm mt-1">
          Waktu dengar itu, honestly aku kayak... "Hhmmm...percaya gak yah?" Aku nggak langsung
          nge-chat Audy hari itu. Seharian aku diem, nggak ada inisiatif buat nyapa dia duluan.
          Tiba-tiba malamnya, dia nge-chat:
          <span class="font-semibold">"Hai, apakah sudah tidur?"</span> Aku kaget sih. Habis itu, ya
          udah, NGILANG!!. ANJG!? iyaa anak anjg emang, fag 🤣
        </p>
        <p class="poppins text-sm mt-1">
          Pas aku tanya kenapa dia cuma nge-chat gitu terus ngilang, kalo klarifikasi dri orangnya
          sih: "Aku sengaja biar besoknya kita masih punya topik buat ngobrol." Dalam hati aku
          mikir: "Helehh, bacot bett ni orang." Tapi ya udahlah, aku ketawa aja. Wkwk.
        </p>
        <p class="poppins text-sm mt-1">
          Akhirnya masa PDKT kami berlanjut seperti biasa. Kadang absurd, kadang bikin gemes, tapi
          ya itulah yang bikin semuanya seru.
        </p>
      </div>

      <div class="w-1/2 h-full">
        <div class="relative shadow-2xl">
          <div
            class="w-[200px] h-[433px] absolute z-30 top-1/2 left-1/3 transform -translate-y-1/2 hover:scale-105 transition-all ease-in duration-200"
          >
            <img
              src="@/assets/story_audy/mystory/11.png"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            class="w-[200px] h-[433px] absolute z-20 top-1/2 left-[5%] -translate-y-1/2 transform -rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200"
          >
            <img
              src="@/assets/story_audy/mystory/9.png"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            class="w-[200px] h-[433px] absolute z-10 top-1/2 left-[60%] transform -translate-y-1/2 rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200"
          >
            <img
              src="@/assets/story_audy/mystory/10.png"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- story keempat -->

    <!-- storry kelima -->
    <div class="w-full relative flex items-center justify-center gap-20">
      <div class="w-[3px] h-full bg-zinc-300 absolute top-1/2 left-1/2 transform -translate-y-1/2">
        <div
          class="w-0 h-0 border-t-[9px] border-b-[9px] border-r-[18px] border-transparent border-r-zinc-300 absolute top-1/2 -translate-y-1/2 -left-4"
        ></div>
      </div>

      <div class="w-1/2 h-full flex items-center">
        <div class="w-full bg-white shadow-lg p-8 rounded-xl">
          <h3 class="mochiy tracking-widest text-xl">Video Call pertama</h3>
          <p class="poppins text-sm tracking-wider mt-1">18 Oktober 19.52</p>
          <p class="poppins text-sm mt-1">
            Setelah kami mengenal lebih dalam satu sama lain, ada satu momen yang bener-bener aku
            ingat sampai sekarang. Waktu itu, aku lagi ikut kebaktian Rabu malam di chapel.
            Tiba-tiba hape aku geter, pas aku cek ternyata ada video call group. Isinya? Ellen dan
            Audy! Dalam hati aku langsung panik:
            <span class="font-semibold">"Ancritt! Ngapain mereka?!"</span> Wkwk. Aku nggak jawab
            call itu, nggak angkat juga. Tapi aku langsung chat Ellen, bilang, "Aku lagi ibadah nih,
            tunggu dulu ya." Dengan perasaan campur aduk, aku coba fokus lagi ke kebaktian, walaupun
            agak dagdigdug nggak karuan.
          </p>
          <p class="poppins text-sm mt-1">
            Setelah kebaktian selesai, aku langsung otw ke kamar asrama. Baru aja sampai, Ellen
            langsung chat: "Udah selesai kah Rabu malamnya? Join yuk ke video call group tadi!" Aku
            sempet nolak, bilang: "Aduh Lenn, belum siap mental aku, takuttt." Tapi Ellen maksa
            banget, jadi ya udah, akhirnya aku join juga.
          </p>
          <p class="poppins text-sm mt-1">
            Pas masuk ke call, ternyata ada satu orang lagi yang aku nggak kenal. Katanya namanya
            Udin, temen dekat mereka pas di Pekanbaru. Jujur, aku diem banget sepanjang call itu,
            nggak tahu harus ngomong apa. Rasanya awkward parah. Setelah selesai call, aku langsung
            chat Audy kalau aku emang gugup kalau ngomong sama orang baru—jaim dikit lah istilahnya.
            Terus Audy cuma jawab santai:
            <span class="font-semibold"
              >"Iya gapapa kok. Kalau kamu kapan-kapan mau call lagi, it'll be nice!" </span
            >Aku langsung jawab, "SIAP!" Wkwk.
          </p>
          <p class="poppins text-sm mt-1">
            Abis call itu, aku dan Audy lanjut chat seperti biasa. Kebetulan waktu itu aku lagi
            sendirian di kamar karena teman-teman asrama lagi pada weekend. Aku cerita ke dia soal
            itu, dan dia tiba-tiba nanya:
            <span class="font-semibold">"Eh, berarti kamu lagi sendiri di kamar ya?"</span> Aku
            nyaut iseng:
            <span class="font-semibold"
              >"Iya nih, lagi sendiri di kamar :( Temenin aku dong pliss wkwkw."</span
            >
            Tapi karena nggak mau keliatan terlalu desperate kalau ditolak, aku buru-buru tambahin:
            <span class="font-semibold"> "Haha nggak deng, becanda."</span> WAHAHAH.
          </p>
          <p class="poppins text-sm mt-1">
            Eh, ternyata dia jawab: "Mau call nggak? Aku gabut, belum bisa tidur juga." YEAYY!
            Langsung aja aku call dia, tanpa pikir panjang. itu call sampai jam 1 malem sih kalo ga
            salah wkwkwk
          </p>
        </div>
      </div>

      <div class="w-1/2">
        <div class="relative shadow-2xl">
          <div
            class="w-[200px] h-[433px] absolute z-20 top-1/2 left-[20%] -translate-y-1/2 transform -rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200"
          >
            <img
              src="@/assets/story_audy/mystory/12.png"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            class="w-[200px] h-[433px] absolute z-10 top-1/2 left-[55%] transform -translate-y-1/2 rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200"
          >
            <img
              src="@/assets/story_audy/mystory/13.png"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- storry kelima -->
  </main>
  <!-- my story -->

  <!-- my butterf -->
  <main class="mt-24">
    <!-- title -->
    <div class="relative pt-5">
      <span
        class="block w-32 h-1 bg-slate-800 rounded-full absolute left-1/2 -top-2 transform -translate-y-1/2"
      ></span>
      <span class="block w-36 h-1 bg-slate-800 mt-1 rounded-full absolute top-0 left-[40%]"></span>
      <div class="flex items-center gap-2 w-fit m-auto">
        <box-icon name="heart-circle" size="lg"></box-icon>
        <h1 class="poppins-medium tracking-widest text-3xl">My Butterfly era</h1>
      </div>
      <p class="mt-3 poppins text-sm text-center">
        Setelah call pertama itu, aku ngerasanya kalo ada sesuatu yang beda idk exactly to explain
        it, but there was this feeling-like..were getting closer hahaha, lebih intens, dan lebih
        terbuka satu sama lain. Obrolan-obrolan kami jadi lebih mengalir, lebih sering, dan somehow
        terasa effortless. And this is where my
        <span class="font-semibold">butterfly era</span> officially began ☺️
      </p>
    </div>
    <!-- title -->

    <!-- container image -->
    <div class="w-full h-[800px] mt-8 bg-red-300 relative">
      <div
        class="w-[400px] overflow-hidden rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all ease-in duration-300 cursor-pointer"
      >
        <img
          src="@/assets/story_audy/butterfly_era/2.png"
          alt="selfie_time"
          class="transform hover:scale-110 transition-all ease-in duration-200"
        />
      </div>
      <div
        class="w-[400px] overflow-hidden rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all ease-in duration-300 cursor-pointer absolute top-0 right-0"
      >
        <img
          src="@/assets/story_audy/butterfly_era/3.png"
          alt="selfie_time"
          class="transform hover:scale-110 transition-all ease-in duration-200"
        />
      </div>
      <div
        class="w-[400px] overflow-hidden rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all ease-in duration-300 cursor-pointer absolute top-0 right-1/2 transform translate-x-1/2"
      >
        <img
          src="@/assets/story_audy/butterfly_era/4.png"
          alt="selfie_time"
          class="transform hover:scale-110 transition-all ease-in duration-200"
        />
      </div>
      <div
        class="w-[400px] overflow-hidden rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all ease-in duration-300 cursor-pointer absolute top-2 left-1/2"
      >
        <img
          src="@/assets/story_audy/butterfly_era/4.png"
          alt="selfie_time"
          class="transform hover:scale-110 transition-all ease-in duration-200"
        />
      </div>
      <div
        class="w-[400px] overflow-hidden rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all ease-in duration-300 cursor-pointer"
      >
        <img
          src="@/assets/story_audy/butterfly_era/4.png"
          alt="selfie_time"
          class="transform hover:scale-110 transition-all ease-in duration-200"
        />
      </div>
      <div
        class="w-[400px] overflow-hidden rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all ease-in duration-300 cursor-pointer"
      >
        <img
          src="@/assets/story_audy/butterfly_era/4.png"
          alt="selfie_time"
          class="transform hover:scale-110 transition-all ease-in duration-200"
        />
      </div>
    </div>
    <!-- container image -->

    <div class="">
      <p class="mt-5 poppins text-sm text-center">
        Masih banyak moment butterfly eranya yang mungkin aku gak bisa kasih tunjukin, yah mmg
        sebanyak itu hehhe susah ngumpulinnya satu satu
      </p>
    </div>
  </main>
  <!-- my butterf -->

  <!-- song -->
  <main class="mt-20">
    <!-- title -->
    <div class="relative pt-5">
      <h1 class="poppins-medium tracking-widest text-3xl">🎵 If I Ain't Got You</h1>
      <p class="mt-3 poppins text-sm">
        Banyak banget hal yang sudah terjadi jika suatu saat kamu buka website ini, aku taruh semua
        perasaan aku semua disini aku harap perasaan ini bisa tersampaikan ke kamu dengan baik..maaf
        bukan aku harap pasti bisa tersampaikan kekamu aku yakin :)
        <span class="font-semibold">ini ada lagu sambil dengerin yah</span>
      </p>
      <div class="mt-3">
        <audio src="/sound/sound1.mp3" controls></audio>
      </div>
    </div>
    <!-- title -->
  </main>
  <!-- song -->

  <!-- title story-->
  <div class="mt-32 border-b-2 pb-3 flex justify-center mx-auto items-center gap-3 w-fit">
    <box-icon name="message-alt-dots" size="lg"></box-icon>
    <h1 class="poppins-medium tracking-widest text-3xl">Contiued My Story 🥰</h1>
  </div>
  <!-- title story-->

  <!-- continued my story -->
  <main class="mt-8 mb-10">
    <div class="grid grid-cols-4 gap-1">
      <div
        class="w-full h-[350px] bg-[url('@/assets/story_audy/continue_story/1.png')] bg-cover bg-center cursor-pointer"
      >
        <div
          class="group w-full h-full bg-black bg-opacity-60 hover:bg-opacity-0 ease-in-out duration-500 flex flex-col justify-center items-center"
        >
          <p
            class="text-white mt-2 group-hover:opacity-0 font-bold transition-opacity duration-500 poppins text-center text-xs lg:text-sm"
          >
            Lucu amat awal awal call
          </p>
        </div>
      </div>
      <div
        class="w-full h-[350px] bg-[url('@/assets/story_audy/continue_story/2.png')] bg-cover bg-center cursor-pointer"
      >
        <div
          class="group w-full h-full bg-black bg-opacity-60 hover:bg-opacity-0 ease-in-out duration-500 flex flex-col justify-center items-center"
        >
          <p
            class="text-white mt-2 group-hover:opacity-0 font-bold transition-opacity duration-500 poppins text-center text-xs lg:text-sm"
          >
            Kasih semangat ke dia hahha
          </p>
        </div>
      </div>
      <div
        class="w-full h-[350px] bg-[url('@/assets/story_audy/continue_story/3.png')] bg-cover bg-center cursor-pointer"
      >
        <div
          class="group w-full h-full bg-black bg-opacity-60 hover:bg-opacity-0 ease-in-out duration-500 flex flex-col justify-center items-center"
        >
          <p
            class="text-white mt-2 group-hover:opacity-0 font-bold transition-opacity duration-500 poppins text-center text-xs lg:text-sm"
          >
            Mutualan spotify gemess hehhe
          </p>
        </div>
      </div>
      <div
        class="w-full h-[350px] bg-[url('@/assets/story_audy/continue_story/4.png')] bg-cover bg-center cursor-pointer"
      >
        <div
          class="group w-full h-full bg-black bg-opacity-60 hover:bg-opacity-0 ease-in-out duration-500 flex flex-col justify-center items-center"
        >
          <p
            class="text-white mt-2 group-hover:opacity-0 font-bold transition-opacity duration-500 poppins text-center text-xs lg:text-sm"
          >
            Lucuu diajak call lgi :)
          </p>
        </div>
      </div>
      <div
        class="w-full h-[350px] bg-[url('@/assets/story_audy/continue_story/5.png')] bg-cover bg-center cursor-pointer"
      >
        <div
          class="group w-full h-full bg-black bg-opacity-60 hover:bg-opacity-0 ease-in-out duration-500 flex flex-col justify-center items-center"
        >
          <p
            class="text-white mt-2 group-hover:opacity-0 font-bold transition-opacity duration-500 poppins text-center text-xs lg:text-sm"
          >
            Sedih ga call karena sibuk ngasdos :(
          </p>
        </div>
      </div>
      <div
        class="w-full h-[350px] bg-[url('@/assets/story_audy/continue_story/6.png')] bg-cover bg-center cursor-pointer"
      >
        <div
          class="group w-full h-full bg-black bg-opacity-60 hover:bg-opacity-0 ease-in-out duration-500 flex flex-col justify-center items-center"
        >
          <p
            class="text-white mt-2 group-hover:opacity-0 font-bold transition-opacity duration-500 poppins text-center text-xs lg:text-sm"
          >
            So happy with his appreciation ☺️
          </p>
        </div>
      </div>
      <div
        class="w-full h-[350px] bg-[url('@/assets/story_audy/continue_story/7.png')] bg-cover bg-center cursor-pointer"
      >
        <div
          class="group w-full h-full bg-black bg-opacity-60 hover:bg-opacity-0 ease-in-out duration-500 flex flex-col justify-center items-center"
        >
          <p
            class="text-white mt-2 group-hover:opacity-0 font-bold transition-opacity duration-500 poppins text-center text-xs lg:text-sm"
          >
            Bocah ngeselin bgt, tpi lucuu😉
          </p>
        </div>
      </div>
      <div
        class="w-full h-[350px] bg-[url('@/assets/story_audy/continue_story/8.png')] bg-cover bg-center cursor-pointer"
      >
        <div
          class="group w-full h-full bg-black bg-opacity-60 hover:bg-opacity-0 ease-in-out duration-500 flex flex-col justify-center items-center"
        >
          <p
            class="text-white mt-2 group-hover:opacity-0 font-bold transition-opacity duration-500 poppins text-center text-xs lg:text-sm"
          >
            Ini maunya dia apa sii? wkwk
          </p>
        </div>
      </div>
      <div
        class="w-full h-[350px] bg-[url('@/assets/story_audy/continue_story/9.png')] bg-cover bg-center cursor-pointer"
      >
        <div
          class="group w-full h-full bg-black bg-opacity-60 hover:bg-opacity-0 ease-in-out duration-500 flex flex-col justify-center items-center"
        >
          <p
            class="text-white mt-2 group-hover:opacity-0 font-bold transition-opacity duration-500 poppins text-center text-xs lg:text-sm"
          >
            Ini lebih ngeselin lgi + mara mara mulu, kangenn:(
          </p>
        </div>
      </div>
      <div
        class="w-full h-[350px] bg-[url('@/assets/story_audy/continue_story/10.png')] bg-cover bg-center cursor-pointer"
      >
        <div
          class="group w-full h-full bg-black bg-opacity-60 hover:bg-opacity-0 ease-in-out duration-500 flex flex-col justify-center items-center"
        >
          <p
            class="text-white mt-2 group-hover:opacity-0 font-bold transition-opacity duration-500 poppins text-center text-xs lg:text-sm"
          >
            Kasih semangat soalny di kantor ad org ngeselinn
          </p>
        </div>
      </div>
      <div
        class="w-full h-[350px] bg-[url('@/assets/story_audy/continue_story/11.png')] bg-cover bg-center cursor-pointer"
      >
        <div
          class="group w-full h-full bg-black bg-opacity-60 hover:bg-opacity-0 ease-in-out duration-500 flex flex-col justify-center items-center"
        >
          <p
            class="text-white mt-2 group-hover:opacity-0 font-bold transition-opacity duration-500 poppins text-center text-xs lg:text-sm"
          >
            hahha ngomong apa si aku..blepotan, tpi katanya aku jdi lebih banyak omong kalo lgi sama
            dia
          </p>
        </div>
      </div>
      <div
        class="w-full h-[350px] bg-[url('@/assets/story_audy/continue_story/12.png')] bg-cover bg-center cursor-pointer"
      >
        <div
          class="group w-full h-full bg-black bg-opacity-60 hover:bg-opacity-0 ease-in-out duration-500 flex flex-col justify-center items-center"
        >
          <p
            class="text-white mt-2 group-hover:opacity-0 font-bold transition-opacity duration-500 poppins text-center text-xs lg:text-sm"
          >
            Lucu bgt aku mau ngajak dia kenalan ke olin wkwk
          </p>
        </div>
      </div>
      <div
        class="w-full h-[350px] bg-[url('@/assets/story_audy/continue_story/13.png')] bg-cover bg-center cursor-pointer"
      >
        <div
          class="group w-full h-full bg-black bg-opacity-60 hover:bg-opacity-0 ease-in-out duration-500 flex flex-col justify-center items-center"
        >
          <p
            class="text-white mt-2 group-hover:opacity-0 font-bold transition-opacity duration-500 poppins text-center text-xs lg:text-sm"
          >
            Sesekali buat dia kesel lah ✌️
          </p>
        </div>
      </div>
      <div
        class="w-full h-[350px] bg-[url('@/assets/story_audy/continue_story/14.png')] bg-cover bg-center cursor-pointer"
      >
        <div
          class="group w-full h-full bg-black bg-opacity-60 hover:bg-opacity-0 ease-in-out duration-500 flex flex-col justify-center items-center"
        >
          <p
            class="text-white mt-2 group-hover:opacity-0 font-bold transition-opacity duration-500 poppins text-center text-xs lg:text-sm"
          >
            Hahha inget banget dia bete bgt gara gara aku lsg tidur 🤣
          </p>
        </div>
      </div>
      <div
        class="w-full h-[350px] bg-[url('@/assets/story_audy/continue_story/15.png')] bg-cover bg-center cursor-pointer"
      >
        <div
          class="group w-full h-full bg-black bg-opacity-60 hover:bg-opacity-0 ease-in-out duration-500 flex flex-col justify-center items-center"
        >
          <p
            class="text-white mt-2 group-hover:opacity-0 font-bold transition-opacity duration-500 poppins text-center text-xs lg:text-sm"
          >
            Minta pengampunan karena kemarin lsg tidur dengn polosnya, pdhl dia nungguin biar bisa
            call 🙏
          </p>
        </div>
      </div>
      <div
        class="w-full h-[350px] bg-[url('@/assets/story_audy/continue_story/16.png')] bg-cover bg-center cursor-pointer"
      >
        <div
          class="group w-full h-full bg-black bg-opacity-60 hover:bg-opacity-0 ease-in-out duration-500 flex flex-col justify-center items-center"
        >
          <p
            class="text-white mt-2 group-hover:opacity-0 font-bold transition-opacity duration-500 poppins text-center text-xs lg:text-sm"
          >
            Ngomelin dia karena jarang makan katanya hrinya full banget sampa lupa makan 😤
          </p>
        </div>
      </div>
      <div
        class="w-full h-[350px] bg-[url('@/assets/story_audy/continue_story/17.png')] bg-cover bg-center cursor-pointer"
      >
        <div
          class="group w-full h-full bg-black bg-opacity-60 hover:bg-opacity-0 ease-in-out duration-500 flex flex-col justify-center items-center"
        >
          <p
            class="text-white mt-2 group-hover:opacity-0 font-bold transition-opacity duration-500 poppins text-center text-xs lg:text-sm"
          >
            Dia ovt tpi malah dipendem sendiri, buat org ga tenang aja boo👎
          </p>
        </div>
      </div>
      <div
        class="w-full h-[350px] bg-[url('@/assets/story_audy/continue_story/18.png')] bg-cover bg-center cursor-pointer"
      >
        <div
          class="group w-full h-full bg-black bg-opacity-60 hover:bg-opacity-0 ease-in-out duration-500 flex flex-col justify-center items-center"
        >
          <p
            class="text-white mt-2 group-hover:opacity-0 font-bold transition-opacity duration-500 poppins text-center text-xs lg:text-sm"
          >
            Mencoba menjelaskan pelan pelan ovtnya yg masih ngeganjel
          </p>
        </div>
      </div>
    </div>
  </main>
  <!-- continued my story -->

  <!-- our daily life -->
  <main class="mt-20">
    <!-- title -->
    <div class="relative pt-5">
      <h1 class="poppins-medium tracking-widest text-3xl">Our Daily Life</h1>
      <p class="mt-1 poppins text-sm">Keseharian</p>
    </div>
    <!-- title -->

    <!-- container daily -->
    <!-- daily1 -->
    <div class="w-full relative flex items-center justify-center gap-20">
      <div
        class="w-[3px] h-full bg-zinc-300 absolute top-1/2 left-1/2 transform -translate-y-1/2"
      ></div>

      <div class="w-1/2 h-[600px] p-8 rounded-xl flex flex-col items-center justify-between">
        <div class="relative w-full h-full">
          <div
            @click="showCardHandler(1, 1)"
            class="absolute z-10 top-1/2 left-[5%] -translate-y-1/2 transform -rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="@/assets/story_audy/our_daily/daily1/1.png"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(1, 2)"
            class="absolute z-20 top-1/2 left-[15%] transform -rotate-3 -translate-y-1/2 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="@/assets/story_audy/our_daily/daily1/2.png"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(1, 3)"
            class="absolute z-30 top-1/2 left-1/3 transform -translate-y-1/2 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="@/assets/story_audy/our_daily/daily1/3.png"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(1, 4)"
            class="absolute z-20 top-1/2 left-[50%] transform -translate-y-1/2 rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="@/assets/story_audy/our_daily/daily1/4.png"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(1, 5)"
            class="absolute z-10 top-1/2 left-[60%] transform -translate-y-1/2 rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="@/assets/story_audy/our_daily/daily1/5.png"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

        <div class="mt-2">Hellow</div>
      </div>

      <div class="w-1/2 h-[600px] p-8 rounded-xl flex flex-col items-center justify-between">
        <div class="relative w-full h-full">
          <div
            @click="showCardHandler(1, 6)"
            class="absolute z-10 top-1/2 left-[5%] -translate-y-1/2 transform -rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="@/assets/story_audy/our_daily/daily1/6.png"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(1, 7)"
            class="absolute z-20 top-1/2 left-[15%] transform -rotate-3 -translate-y-1/2 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="@/assets/story_audy/our_daily/daily1/7.png"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(1, 8)"
            class="absolute z-30 top-1/2 left-1/3 transform -translate-y-1/2 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="@/assets/story_audy/our_daily/daily1/8.png"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(1, 9)"
            class="absolute z-10 top-1/2 left-[60%] transform -translate-y-1/2 rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="@/assets/story_audy/our_daily/daily1/9.png"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

        <div class="mt-2">Hellow</div>
      </div>
    </div>

    <!-- daily2 -->
    <div class="w-full relative flex items-center justify-center gap-20">
      <div
        class="w-[3px] h-full bg-zinc-300 absolute top-1/2 left-1/2 transform -translate-y-1/2"
      ></div>

      <div class="w-1/2 h-[600px] p-8 rounded-xl flex flex-col items-center justify-between">
        <div class="relative w-full h-full">
          <div
            @click="showCardHandler(2, 1)"
            class="absolute z-10 top-1/2 left-[5%] -translate-y-1/2 transform -rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="@/assets/story_audy/our_daily/daily2/1.jpg"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(2, 2)"
            class="absolute z-20 top-1/2 left-[15%] transform -rotate-3 -translate-y-1/2 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="@/assets/story_audy/our_daily/daily2/2.jpg"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(2, 3)"
            class="absolute z-30 top-1/2 left-1/3 transform -translate-y-1/2 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="@/assets/story_audy/our_daily/daily2/3.jpg"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(2, 4)"
            class="absolute z-20 top-1/2 left-[50%] transform -translate-y-1/2 rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="@/assets/story_audy/our_daily/daily2/4.jpg"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(2, 5)"
            class="absolute z-10 top-1/2 left-[60%] transform -translate-y-1/2 rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="@/assets/story_audy/our_daily/daily2/5.jpg"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

        <div class="mt-2">Hellow</div>
      </div>

      <div class="w-1/2 h-[600px] p-8 rounded-xl flex flex-col items-center justify-between">
        <div class="relative w-full h-full">
          <div
            @click="showCardHandler(2, 6)"
            class="absolute z-10 top-1/2 left-[5%] -translate-y-1/2 transform -rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="@/assets/story_audy/our_daily/daily2/6.jpg"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(2, 7)"
            class="absolute z-20 top-1/2 left-[15%] transform -rotate-3 -translate-y-1/2 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="@/assets/story_audy/our_daily/daily2/7.jpg"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(2, 8)"
            class="absolute z-30 top-1/2 left-1/3 transform -translate-y-1/2 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="@/assets/story_audy/our_daily/daily2/8.jpg"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(2, 9)"
            class="absolute z-20 top-1/2 left-[50%] transform -translate-y-1/2 rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="@/assets/story_audy/our_daily/daily2/9.jpg"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(2, 10)"
            class="absolute z-10 top-1/2 left-[60%] transform -translate-y-1/2 rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="@/assets/story_audy/our_daily/daily2/10.jpg"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

        <div class="mt-2">Hellow</div>
      </div>
    </div>

    <!-- daily3 -->
    <div class="w-full relative flex items-center justify-center gap-20">
      <div
        class="w-[3px] h-full bg-zinc-300 absolute top-1/2 left-1/2 transform -translate-y-1/2"
      ></div>

      <div class="w-1/2 h-[600px] p-8 rounded-xl flex flex-col items-center justify-between">
        <div class="relative w-full h-full">
          <div
            @click="showCardHandler(3, 1)"
            class="w-[200px] h-[433px] absolute z-10 top-1/2 left-[5%] -translate-y-1/2 transform -rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="@/assets/story_audy/our_daily/daily3/1.jpg"
              alt="storry_we_meet"
              class="w-full h-full rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(3, 2)"
            class="w-[200px] h-[433px] absolute z-20 top-1/2 left-[15%] transform -rotate-3 -translate-y-1/2 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="@/assets/story_audy/our_daily/daily3/2.jpg"
              alt="storry_we_meet"
              class="w-full h-full rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(3, 3)"
            class="w-[200px] h-[433px] absolute z-30 top-1/2 left-1/3 transform -translate-y-1/2 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="@/assets/story_audy/our_daily/daily3/3.jpg"
              alt="storry_we_meet"
              class="w-full h-full rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(3, 4)"
            class="w-[200px] h-[433px] absolute z-20 top-1/2 left-[50%] transform -translate-y-1/2 rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="@/assets/story_audy/our_daily/daily3/4.jpg"
              alt="storry_we_meet"
              class="w-full h-full rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(3, 5)"
            class="w-[200px] h-[433px] absolute z-10 top-1/2 left-[60%] transform -translate-y-1/2 rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="@/assets/story_audy/our_daily/daily3/5.jpg"
              alt="storry_we_meet"
              class="w-full h-full rounded-xl"
            />
          </div>
        </div>

        <div class="mt-2">Hellow</div>
      </div>

      <div class="w-1/2 h-[600px] p-8 rounded-xl flex flex-col items-center justify-between">
        <div class="relative w-full h-full">
          <div
            @click="showCardHandler(3, 6)"
            class="w-[200px] h-[433px] absolute z-10 top-1/2 left-[5%] -translate-y-1/2 transform -rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="@/assets/story_audy/our_daily/daily3/6.jpg"
              alt="storry_we_meet"
              class="w-full h-full rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(3, 7)"
            class="w-[200px] h-[433px] absolute z-20 top-1/2 left-[15%] transform -rotate-3 -translate-y-1/2 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="@/assets/story_audy/our_daily/daily3/7.jpg"
              alt="storry_we_meet"
              class="w-full h-ful rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(3, 8)"
            class="w-[200px] h-[433px] absolute z-30 top-1/2 left-1/3 transform -translate-y-1/2 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="@/assets/story_audy/our_daily/daily3/8.jpg"
              alt="storry_we_meet"
              class="w-full h-ful rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(3, 9)"
            class="w-[200px] h-[433px] absolute z-20 top-1/2 left-[50%] transform -translate-y-1/2 rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="@/assets/story_audy/our_daily/daily3/9.jpg"
              alt="storry_we_meet"
              class="w-full h-full rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(3, 10)"
            class="w-[200px] h-[433px] absolute z-10 top-1/2 left-[60%] transform -translate-y-1/2 rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="@/assets/story_audy/our_daily/daily3/10.jpg"
              alt="storry_we_meet"
              class="w-full h-ful rounded-xl"
            />
          </div>
        </div>

        <div class="mt-2">Hellow</div>
      </div>
    </div>

    <!-- daily4 -->
    <div class="w-full relative flex items-center justify-center gap-20">
      <div
        class="w-[3px] h-full bg-zinc-300 absolute top-1/2 left-1/2 transform -translate-y-1/2"
      ></div>

      <div class="w-1/2 h-[600px] p-8 rounded-xl flex flex-col items-center justify-between">
        <div class="relative w-full h-full">
          <div
            @click="showCardHandler(4, 1)"
            class="w-[200px] h-[433px] absolute z-10 top-1/2 left-[5%] -translate-y-1/2 transform -rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="/our_daily/daily4/1.jpg"
              alt="storry_we_meet"
              class="w-full h-full rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(4, 2)"
            class="w-[200px] h-[433px] absolute z-20 top-1/2 left-[15%] transform -rotate-3 -translate-y-1/2 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="/our_daily/daily4/2.jpg"
              alt="storry_we_meet"
              class="w-full h-full rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(4, 3)"
            class="w-[200px] h-[433px] absolute z-30 top-1/2 left-1/3 transform -translate-y-1/2 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="/our_daily/daily4/3.jpg"
              alt="storry_we_meet"
              class="w-full h-full rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(4, 4)"
            class="w-[200px] h-[433px] absolute z-20 top-1/2 left-[50%] transform -translate-y-1/2 rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="/our_daily/daily4/4.jpg"
              alt="storry_we_meet"
              class="w-full h-full rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(4, 5)"
            class="w-[200px] h-[433px] absolute z-10 top-1/2 left-[60%] transform -translate-y-1/2 rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="/our_daily/daily4/5.jpg"
              alt="storry_we_meet"
              class="w-full h-full rounded-xl"
            />
          </div>
        </div>

        <div class="mt-2">Hellow</div>
      </div>

      <div class="w-1/2 h-[600px] p-8 rounded-xl flex flex-col items-center justify-between">
        <div class="relative w-full h-full">
          <div
            @click="showCardHandler(4, 6)"
            class="w-[200px] h-[433px] absolute z-10 top-1/2 left-[5%] -translate-y-1/2 transform -rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="/our_daily/daily4/6.jpg"
              alt="storry_we_meet"
              class="w-full h-full rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(4, 7)"
            class="w-[200px] h-[433px] absolute z-20 top-1/2 left-[15%] transform -rotate-3 -translate-y-1/2 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="/our_daily/daily4/7.jpg"
              alt="storry_we_meet"
              class="w-full h-ful rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(4, 8)"
            class="w-[200px] h-[433px] absolute z-30 top-1/2 left-1/3 transform -translate-y-1/2 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="/our_daily/daily4/8.jpg"
              alt="storry_we_meet"
              class="w-full h-ful rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(4, 9)"
            class="w-[200px] h-[433px] absolute z-20 top-1/2 left-[50%] transform -translate-y-1/2 rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="/our_daily/daily4/9.jpg"
              alt="storry_we_meet"
              class="w-full h-full rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(4, 10)"
            class="w-[200px] h-[433px] absolute z-10 top-1/2 left-[60%] transform -translate-y-1/2 rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="/our_daily/daily4/10.jpg"
              alt="storry_we_meet"
              class="w-full h-ful rounded-xl"
            />
          </div>
        </div>

        <div class="mt-2">Hellow</div>
      </div>
    </div>

    <!-- daily5 -->
    <div class="w-full relative flex items-center justify-center gap-20">
      <div
        class="w-[3px] h-full bg-zinc-300 absolute top-1/2 left-1/2 transform -translate-y-1/2"
      ></div>

      <div class="w-1/2 h-[600px] p-8 rounded-xl flex flex-col items-center justify-between">
        <div class="relative w-full h-full">
          <div
            @click="showCardHandler(5, 1)"
            class="w-[200px] h-[433px] absolute z-10 top-1/2 left-[5%] -translate-y-1/2 transform -rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="/our_daily/daily5/1.jpg"
              alt="storry_we_meet"
              class="w-full h-full rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(5, 2)"
            class="w-[200px] h-[433px] absolute z-20 top-1/2 left-[15%] transform -rotate-3 -translate-y-1/2 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="/our_daily/daily5/2.jpg"
              alt="storry_we_meet"
              class="w-full h-full rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(5, 3)"
            class="w-[200px] h-[433px] absolute z-30 top-1/2 left-1/3 transform -translate-y-1/2 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="/our_daily/daily5/3.jpg"
              alt="storry_we_meet"
              class="w-full h-full rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(5, 4)"
            class="w-[200px] h-[433px] absolute z-20 top-1/2 left-[50%] transform -translate-y-1/2 rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="/our_daily/daily5/4.jpg"
              alt="storry_we_meet"
              class="w-full h-full rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(5, 5)"
            class="w-[200px] h-[433px] absolute z-10 top-1/2 left-[60%] transform -translate-y-1/2 rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="/our_daily/daily5/5.jpg"
              alt="storry_we_meet"
              class="w-full h-full rounded-xl"
            />
          </div>
        </div>

        <div class="mt-2">Hellow</div>
      </div>

      <div class="w-1/2 h-[600px] p-8 rounded-xl flex flex-col items-center justify-between">
        <div class="relative w-full h-full">
          <div
            @click="showCardHandler(5, 6)"
            class="w-[200px] h-[433px] absolute z-10 top-1/2 left-[5%] -translate-y-1/2 transform -rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="/our_daily/daily5/6.jpg"
              alt="storry_we_meet"
              class="w-full h-full rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(5, 7)"
            class="w-[200px] h-[433px] absolute z-20 top-1/2 left-[15%] transform -rotate-3 -translate-y-1/2 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="/our_daily/daily5/7.jpg"
              alt="storry_we_meet"
              class="w-full h-ful rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(5, 8)"
            class="w-[200px] h-[433px] absolute z-30 top-1/2 left-1/3 transform -translate-y-1/2 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="/our_daily/daily5/8.jpg"
              alt="storry_we_meet"
              class="w-full h-ful rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(5, 9)"
            class="w-[200px] h-[433px] absolute z-20 top-1/2 left-[50%] transform -translate-y-1/2 rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="/our_daily/daily5/9.jpg"
              alt="storry_we_meet"
              class="w-full h-full rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(5, 10)"
            class="w-[200px] h-[433px] absolute z-10 top-1/2 left-[60%] transform -translate-y-1/2 rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="/our_daily/daily5/10.jpg"
              alt="storry_we_meet"
              class="w-full h-ful rounded-xl"
            />
          </div>
        </div>

        <div class="mt-2">Hellow</div>
      </div>
    </div>

    <!-- container daily -->
  </main>
  <!-- our daily life -->

  <!-- detail kecil ttg dia -->
   <main class="mt-20">
    <!-- title -->
    <div class="relative pt-5">
      <h1 class="poppins-medium tracking-widest text-3xl">Detail Kecil Tentang Dia</h1>
      <p class="mt-1 poppins text-sm">Keseharian</p>
    </div>
    <!-- title -->

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      <!-- Card 1 -->
      <div class="bg-blue-100 border border-gray-200 rounded-lg shadow-lg p-6">
        <div class="flex items-center justify-between">
          <h3 class="mochiy tracking-widest text-xl font-semibold text-gray-800">Makanan yang dia suka</h3>
        </div>
        <p class="text-gray-600 mt-2">Dia bilang sebenarnya dia suka semua makanan kalo orang pada nanya katanya dia bakalan nanya suka sushi tapi katanya dia suka makan jengkol hahha kalo makanan yang dia ga suka katnya coklat sih </p>
      </div>

      <!-- Card 2 -->
      <div class="bg-pink-100 border border-gray-200 rounded-lg shadow-lg p-6">
        <div class="flex items-center justify-between">
          <h3 class="mochiy tracking-widest text-xl font-semibold text-gray-800">Warna yang dia suka </h3>
        </div>
        <p class="text-gray-600 mt-2">Suka banget sama warna pink hahha, barang barangnya pink, pinky girl, suka sama benda benda imutt</p>
      </div>

      <!-- Card 3 -->
      <div class="bg-yellow-100 border border-gray-200 rounded-lg shadow-lg p-6">
        <div class="flex items-center justify-between">
          <h3 class="mochiy tracking-widest text-xl font-semibold text-gray-800">Silsilah Keluarganya</h3>
        </div>
        <p class="text-gray-600 mt-2">Siboru, anak terakhir dari 4 bersaudara 2 kaka kembar Angelina + Angelisa panggilannya ka jisa & ka jina, bang Hary anak 3 satu satunya anak laki - laki anak kesayangan ortu katanya wkwk, dan dia terakhir <span class="font-bold">audrey febriany silalahi</span></p>
      </div>
      <!-- Card 4 -->
      <div class="bg-yellow-100 border border-gray-200 rounded-lg shadow-lg p-6">
        <div class="flex items-center justify-between">
          <h3 class="mochiy tracking-widest text-xl font-semibold text-gray-800">Lagu kesukaan dia</h3>
        </div>
        <p class="text-gray-600 mt-2">Banyak banget si lagu yg dia suka kalau ditanya suka bingung katanya wkwk, trus dia suka semua lagu one direction, tpi pas aku tanyain katanya dia terlintas satu lagu yg paling dia suka "gita gutawa - harmoni cinta" dia suka bosenan banget sama lagu tpi kalo sama lagu ini gatau katanya gabisa bosen musiknya, ambience, lirik, suara "gemes lagunya" </p>
      </div>
      <!-- Card 5 -->
      <div class="bg-blue-100 border border-gray-200 rounded-lg shadow-lg p-6">
        <div class="flex items-center justify-between">
          <h3 class="mochiy tracking-widest text-xl font-semibold text-gray-800">2 Bayik kesayangannya</h3>
        </div>
        <p class="text-gray-600 mt-2">Selalu jadi pengasuh bayi kalo udah di keluarganya karena 2 kakanya udah nikah sama punya bayi yang pertama itu "gracia" katanya audrey versi kecil karena kelakuan mereka mirip banget pas dia masih kecil bisa di bilang klonannya wkwkw, kedua "abram" si abram agak pendiam tpi mereka lucu lucu bangettt asliii! gemeshnya waktu pertama dikenalin wkwkwk</p>
      </div>
      <!-- Card 5 -->
      <div class="bg-pink-100 border border-gray-200 rounded-lg shadow-lg p-6">
        <div class="flex items-center justify-between">
          <h3 class="mochiy tracking-widest text-xl font-semibold text-gray-800">Circle dia</h3>
        </div>
        <p class="text-gray-600 mt-2">Temen yang paling sering aku denger manda, izza, icha hapalkan kan aku wkwk masih ada sih kalo ga salah vira. circle si bungsunya tisa, elvita teman dari sdnya di pekanbaru pellong, udin, kalo dia budiman :) circle pcmnya kak nia, grace, tisa, elvita circle smanya di pekanbaru icha, kirab (sahabat sih kalo ini dia bilangnya), teman gaskeun dia marcela dst masih banyak sih gataula.</p>
      </div>
      <!-- Card 6 -->
      <div class="bg-pink-100 border border-gray-200 rounded-lg shadow-lg p-6">
        <div class="flex items-center justify-between">
          <h3 class="mochiy tracking-widest text-xl font-semibold text-gray-800">Fun Fact</h3>
        </div>
        <p class="text-gray-600 mt-2">Waktu itu dia pernah cerita kalo dia itu takut hujan bukan sih dia takut hujan + sendirian, jadi kalo misalnya lagi hujan katanya dia nyari teman buat nemenin dia </p>
      </div>
      <!-- Card 7 -->
      <div class="bg-yellow-100 border border-gray-200 rounded-lg shadow-lg p-6">
        <div class="flex items-center justify-between">
          <h3 class="mochiy tracking-widest text-xl font-semibold text-gray-800">Binatang kesukaan & Binatang dibenci</h3>
        </div>
        <p class="text-gray-600 mt-2">Dia suka sama anjing dulu pas kecil dia pernah melihara anjing kalo hewan yang paling dia benci itu kucing tapi pas ditanya kenapa benci banget sama kucing gatau benci aja (kalo ga salah ya wkwk)</p>
      </div>
      <!-- Card 8 -->
      <div class="bg-blue-100 border border-gray-200 rounded-lg shadow-lg p-6">
        <div class="flex items-center justify-between">
          <h3 class="mochiy tracking-widest text-xl font-semibold text-gray-800">Love Language nya</h3>
        </div>
        <p class="text-gray-600 mt-2">Hhnm...rakus banget si dia semua nya keknya deh tapi yg paling nonjol di dia itu physical touch, word of affirmation, qulity time </p>
      </div>
    </div>

   </main>
  <!-- detail kecil ttg dia -->

  <!-- story again -->
   <main class="mt-20">
    <!-- title -->
    <!-- <div class="relative pt-5">
      <h1 class="poppins-medium tracking-widest text-3xl">Detail Kecil Tentang Dia</h1>
      <p class="mt-1 poppins text-sm">Keseharian</p>
    </div> -->
    <!-- title -->

    <!-- story keenam -->
    <div class="w-full relative flex flex-row-reverse items-center justify-center gap-20">
      <div class="w-[3px] h-full bg-zinc-300 absolute top-1/2 left-1/2 transform -translate-y-1/2">
        <div
          class="w-0 h-0 border-t-[9px] border-b-[9px] border-l-[18px] border-transparent border-l-zinc-300 absolute top-1/2 -translate-y-1/2 -right-4"
        ></div>
      </div>

      <div class="w-1/2 h-full bg-white shadow-lg p-8 rounded-xl">
        <h3 class="mochiy tracking-widest text-xl">First date? Ketemu pertama?</h3>
        <p class="poppins text-sm tracking-wider mt-1">10 December</p>

        <p class="poppins text-sm mt-1">
          Ya, tanggal 10 december itu hari kami pertama kali bertemu, wuah rasanya itu aku gugup banget sih langsung overhinking segala macam pikiran aku pikirin hahhaha, ada kejadian lucu yang ngebuat pertamuan kami seperti kedukung gitu jadi kan dia itu sering bolak balik dari bekasi ke tangsel karena kaka satu di bekasi satu di tangsel, pas waktu di bekasi ini kacamatanya ketinggalan dan ngebuat sekalian buat balikin kacamatanya ke dia soalnya kan jauh tuh kalo misalnya bolak balik tangsel dri bekasi
        </p>
        <p class="poppins text-sm mt-1">
          Kami ketemu di BXC (Bintaro Xchange), aku jalan jam 10 an kalo ga salah nyampe di bxc itu jam 12 hampi ke jam 1 gitu, baru pertama kali ke bxc jadi di tuntun dia deh kwkwk baik banget, ketemu di masion feerie hahaha inget banget gais pertama kali ketemu kami couple sama sama putih padahal ga janjian hahah lucu banget, terus abis itu kami lunch bareng di gokana kalo ga salah ya wkwkw lucu banget sama sama alim sambil ngobrolin apa yak lupa sih sampai jam 2 lewat abis kami nonton wicked inget banget aku seru bagent..engga sih b aja wkwk tpi karena banreng dia jadi seru bangett, becandain ariana ketawa bareng truss suara arian bangus banget sih emang 👍 poll dehh filmnya lama baget hampi 3 jam an tpi seru karena bareng dia :)
        </p>
        <!-- <p class="poppins-semibold text-sm">Dan di titik ini, kekonyolanku dimulai.</p> -->
        <p class="poppins text-sm mt-1">
          setelah selesai nonton aku di ajak buat nemenin dia buat beli earphone?headset? itula lupa sebutannya wkwk di minisoo, trus kami nongs dulu bentar di tempat minum lupa namanya apa ngobrol banyak tapi aku inget banget deh itu dia bahas ttg grace co wkwkwk sumpa aku ga bisa ngomong apa apa disitu pasrah banget deh pokoknya sambil emote 🙏
        </p>
      </div>

      <div class="w-1/2 h-full">
        <div class="relative shadow-2xl">
          <div
            class="w-[200px] h-[433px] absolute z-20 top-1/2 left-[20%] -translate-y-1/2 transform -rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200"
          >
            <img
              src="@/assets/story_audy/mystory/storry3.png"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            class="w-[200px] h-[433px] absolute z-10 top-1/2 left-[55%] transform -translate-y-1/2 rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200"
          >
            <img
              src="@/assets/story_audy/mystory/5.png"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- story keenam -->

    <!-- story ketujuh -->
    <div class="w-full h-[550px] relative flex items-center justify-center gap-20">
      <div class="w-[3px] h-full bg-zinc-300 absolute top-1/2 left-1/2 transform -translate-y-1/2">
        <div
          class="w-0 h-0 border-t-[9px] border-b-[9px] border-r-[18px] border-transparent border-r-zinc-300 absolute top-1/2 -translate-y-1/2 -left-4"
        ></div>
      </div>

      <div class="w-1/2 h-full flex items-center">
        <div class="w-full bg-white shadow-lg p-8 rounded-xl">
          <h3 class="mochiy tracking-widest text-xl">Main ke aeon mall cakung☺️</h3>
          <p class="poppins text-sm tracking-wider mt-1">Tanggalnya lupa hehe</p>
          <p class="poppins text-sm mt-1">
            kami ketemu di stasiun cakung, aku jalan dari rumah jam 11/12 deh kalo gasalah nah kalau dia itu kan masih ada magang msib dari pagi sampai siang pulangnya dia otw ke stasiun cakung inget banget waktu itu ujan deh kalo gasalah wkwkwk, kami mesen grab car dari stasiun sampai mall aeonnya sampai mallnya kami makan di food court ayam apa lupa hehhe, cerita cerita banyak abis itu kami kami naik biang lala sumpaa seruu bangettttttt sekali lagi pake bangett!! wkwk, kami naik di biang lala itu sambil ngobrolin banyak hal, truss foto foto lucu amatt pokoknya,
          </p>
          <p class="poppins text-sm mt-1">
            setelah selesai main biang lala jam berapa ya 3/4 sore gitu kami mutusin buat nongs lagi makan mochi sambil ngobrol ngobrol lagi hehhe cerita random yang terlintas di pikiran kami..kami ceritain semua sampai ga berasa udah mulai malem aja....rasanya bahagia banget...gimana yaa jelasinnyaaa...pengennya waktu berenti disitu ajaaa...pengennya rasa, perasaan, waktu, moment, rasanyaman, bahagianya semuanya...selamanya berhenti......🥰🥰🥰🥰🥰
          </p>
        </div>
      </div>

      <div class="w-1/2">
        <div class="relative shadow-2xl">
          <div
            class="w-[200px] h-[433px] absolute z-30 top-1/2 left-1/3 transform -translate-y-1/2 hover:scale-105 transition-all ease-in duration-200"
          >
            <img
              src="@/assets/story_audy/mystory/6.png"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            class="w-[200px] h-[433px] absolute z-20 top-1/2 left-[5%] -translate-y-1/2 transform -rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200"
          >
            <img
              src="@/assets/story_audy/mystory/7.png"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            class="w-[200px] h-[433px] absolute z-10 top-1/2 left-[60%] transform -translate-y-1/2 rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200"
          >
            <img
              src="@/assets/story_audy/mystory/8.png"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- story ketujuh -->

    <!-- story kedelapan -->
    <div class="w-full relative flex flex-row-reverse items-center justify-center gap-20">
      <div class="w-[3px] h-full bg-zinc-300 absolute top-1/2 left-1/2 transform -translate-y-1/2">
        <div
          class="w-0 h-0 border-t-[9px] border-b-[9px] border-l-[18px] border-transparent border-l-zinc-300 absolute top-1/2 -translate-y-1/2 -right-4"
        ></div>
      </div>

      <div class="w-1/2 h-full bg-white shadow-lg p-8 rounded-xl">
        <h3 class="mochiy tracking-widest text-xl">Temenin dia ke kampusnya</h3>
        <p class="poppins text-sm tracking-wider mt-1">31 December</p>

        <p class="poppins text-sm mt-1">
          Jadi dia itu ados matkul apa gitu lupa deh nah dia disuruh untuk ngurus tandatangan buat jam jerka kah lupa deh pokoknya ngurus dokument dan perlu tanda tangan supaya gajinya masuk nah itu terakhir di urus tanggal 31 desember, tbtb dia bilang mau ga temenin dia ke kampusnya, aku lagsung nyautla bilang mau mau mauuuuuuuuuuu wkwkw lucu banget wkwkwk excited banget akunya disitu, ketemuannya di stasiun bekasi timur soalnya dia lagi di bekasi di tempat ka jisa dari bekasi ke stasiun manggarai padahal kami berangkatnya agak siangan tapi ttp aja rame ga dpt tempat duduk wkwk abis itu transit ke arah bogor turunnya di stasiun ui truss lanjut naik buss di ui kampusnya sampai ke fakultasnyaaaa hehehe abis dia ke fotocopy buat print sesuatu dulu trus dia ngurus berkasnya/documnet dll aku nunggu di luar,,sambil nunggu aku liat liat kampusya tpi aku kepanasan banget itu wkwk soalnya aku pake sweater salah aku juga sih kenapa pake sweater pdhl lgi panas banget
        </p>
        <p class="poppins text-sm mt-1">
          truss aku diajak ke kantin kampusnya, rencanannya kami mau makan siang disitu tpi banyak yang tutup sih soalnya udah mau tahun baru juga, trus setelah kami mutusin mau makan apa dan agak lama kami geser ke margonda wkwk kami makan ramenn, lupa nama tempat makannya ehh wkwk turs ngobrol ngobrol lagi hal hal random :), selesai makan kami mutusin buat pulang deh seru gais keluin apa aj kyknya seru gais happy banget, kami jalan ke stasuin karena kami pengen duduk kami mau transit pake lrt aj deh disitu wkwk, kami turun di stasiun cawang karena nyambung sama lrt trus ada plot twist wkwkw kami ketemu sama temennya dia wkwkw, ngobrol bentar trus kami lanjut deh ke lrtnya
        </p>
        <p class="poppins-semibold text-sm">dalam perjalanan ini dia cerita tentang third account dia dan yahh akuu....ngerasa....:(</p>
        <!-- <p class="poppins text-sm mt-1">

        </p> -->
      </div>

      <div class="w-1/2 h-full">
        <div class="relative shadow-2xl">
          <div
            class="w-[200px] h-[433px] absolute z-20 top-1/2 left-[20%] -translate-y-1/2 transform -rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200"
          >
            <img
              src="@/assets/story_audy/mystory/storry3.png"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            class="w-[200px] h-[433px] absolute z-10 top-1/2 left-[55%] transform -translate-y-1/2 rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200"
          >
            <img
              src="@/assets/story_audy/mystory/5.png"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- story kedelapan -->

    <!-- story ketujuh -->
    <div class="w-full h-[550px] relative flex items-center justify-center gap-20">
      <div class="w-[3px] h-full bg-zinc-300 absolute top-1/2 left-1/2 transform -translate-y-1/2">
        <div
          class="w-0 h-0 border-t-[9px] border-b-[9px] border-r-[18px] border-transparent border-r-zinc-300 absolute top-1/2 -translate-y-1/2 -left-4"
        ></div>
      </div>

      <div class="w-1/2 h-full flex items-center">
        <div class="w-full bg-white shadow-lg p-8 rounded-xl">
          <h3 class="mochiy tracking-widest text-xl">Cekcok antara kami</h3>
          <!-- <p class="poppins text-sm tracking-wider mt-1">Tanggalnya lupa hehe</p> -->
          <p class="poppins text-sm mt-1">
            Disini aku ga bakalan cerita panjang lebar sih, jadi di third nya itu dia bilang kalau kisah asmaranya dia yahh pas aku denger kisah cinta dia aku ngerasa aneh dan juga jealous yah perasaan aku ganyaman lah intinya...pdhal disitu gua udah kecintaan banget gais wkwkw. yahh tapi gua ga cari pembelaan setelah sampai stastiun akhir jatimulya kami pisah dia pesen gojeknya sendiri aku juga pesen gojek aku sendiri disitu aku diem banget dia chat kalo gasalah "hatihati di jalan, aku sudah sampai rumah yaa" tapi aku gada balas chat dia...yahh...aku akuin emosi aku masih belum bagus disitu belum bisa ngontroll emosi lebih matang dan nyampain emosi dengan baik juga ke dia padahal bisa lebih gampang sih kalau misalnya aku langsung sampai yang aku rasain tanpa perlu diemin dia ya atau bilang kedia kalau misalnya aku butuh waktu untuk nenangin diri...yahh disitu aku belajar untuk ngatur emosi aku lebih baik dan cara untuk nyampein emosi ke dia, im so sooorryyyyyy 🥺 and thankyou for being patient with my childish
          </p>
        </div>
      </div>

      <div class="w-1/2">
        <div class="relative shadow-2xl">
          <div
            class="w-[200px] h-[433px] absolute z-30 top-1/2 left-1/3 transform -translate-y-1/2 hover:scale-105 transition-all ease-in duration-200"
          >
            <img
              src="@/assets/story_audy/mystory/6.png"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            class="w-[200px] h-[433px] absolute z-20 top-1/2 left-[5%] -translate-y-1/2 transform -rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200"
          >
            <img
              src="@/assets/story_audy/mystory/7.png"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            class="w-[200px] h-[433px] absolute z-10 top-1/2 left-[60%] transform -translate-y-1/2 rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200"
          >
            <img
              src="@/assets/story_audy/mystory/8.png"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- story ketujuh -->

    <!-- story kedelapan -->
    <div class="w-full relative flex flex-row-reverse items-center justify-center gap-20">
      <div class="w-[3px] h-full bg-zinc-300 absolute top-1/2 left-1/2 transform -translate-y-1/2">
        <div
          class="w-0 h-0 border-t-[9px] border-b-[9px] border-l-[18px] border-transparent border-l-zinc-300 absolute top-1/2 -translate-y-1/2 -right-4"
        ></div>
      </div>

      <div class="w-1/2 h-full bg-white shadow-lg p-8 rounded-xl">
        <h3 class="mochiy tracking-widest text-xl">Jemput dia di stasiun jatimulya :)</h3>
        <p class="poppins text-sm mt-1">
          Ini kejadian lucu sih wkwkw, jadi kalo gasalah kami malamnya itu ada masalah deh ribut tentang sesuatu lupa deh masalahnya apa wkwkw, nah seharian itu kami chatt kami pendek pendek banget + seadanya cuma buat ngabarin lgi ngapain dimana gitu gitu doang. nah jadi kan aku lagi nganter papa ke stasiun bekasi timur karena papa lagi ada urusan lah, jadi pulangnya sendiri nah pas banget dia udah nyampe di stasiun jatimulya truss aku tanya deh mau ga bareng sekalian aja gitu baliknya..itu lucu banget akunya malu malu buat nawarin wkwkw truss akhirnya aku jemput deh dia di stasiun itu aku anterin sampai rumahnya ka jisaaa heheh lucu bangettt itu dia gajadi marah ke aku heheh😋
        </p>
      </div>

      <div class="w-1/2 h-full">
        <div class="relative shadow-2xl">
          <div
            class="w-[200px] h-[433px] absolute z-20 top-1/2 left-[20%] -translate-y-1/2 transform -rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200"
          >
            <img
              src="@/assets/story_audy/mystory/storry3.png"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            class="w-[200px] h-[433px] absolute z-10 top-1/2 left-[55%] transform -translate-y-1/2 rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200"
          >
            <img
              src="@/assets/story_audy/mystory/5.png"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- story kedelapan -->

   </main>
  <!-- story again -->

  <!-- my wisudaa -->
  <main class="mt-32">
    <!-- title -->
    <div class="relative pt-5">
      <span
        class="block w-32 h-1 bg-slate-800 rounded-full absolute left-1/2 -top-2 transform -translate-y-1/2"
      ></span>
      <span class="block w-36 h-1 bg-slate-800 mt-1 rounded-full absolute top-0 left-[40%]"></span>

      <div class="">
        <div class="flex items-center gap-2 w-fit m-auto">
          <box-icon name="book-bookmark" size="lg"></box-icon>
          <h1 class="poppins-medium tracking-widest text-3xl">Wisudaku</h1>
        </div>
        <p class="poppins text-sm tracking-wider text-center">19 January 2025</p>
      </div>

      <p class="mt-5 poppins text-sm text-center">
        Jauh sebelum hari wisudaku dia pernah bete karena respon aku yang kurang gitu, jadi dia tanya ke aku "seberapa senang aku kalau dia datang ke wisuda aku kasih rate dari 1-10" aku jawabnya agak panjang soalnya aku kawathir sih + gaenakan juga ke dia soalnya kan di wisuda aku di unai ya aku mikirnya gimana cara dia bisa dateng ke unai jauh banget takutnya kenapa kenapa cape jugakan dll lain jadinya aku bilang "aku seneng banget kalo misalnya kamu bisa dateng ke wisuda aku, tapi ga usa di paksain ya kalo misalnya gabisa soalnya aku takut kamu kenapa kenapa di jalan" abis itu dia langsung matiin call nya wkwkwk, kalo aku pikir pikir lagi iya sih siapa yang ga bete kalo dijawabnya gitu ya padahal di udah mau effort banget aku malah nggak ngehargain effort dia, jadi akhirnya dia mutusin buat ga datang deh katanya :( sedih banget sih aku, tapi yahh aku gamau maksa juga,,tapi pas malam minggu sebelum hari-h wisuda aku dia bilang mau dateng ke wisuda aku ditemenin temennya marcela wkwk jujur aku seneng banget happyy banget gaii hapyyy bangetttttt wkwkw, salah satu kebahagian yang ga pernah aku lupain waktu wisuda ini sih bener bener puncak rasa sayang aku ke dia udah full banget rasanya, gila tiap kali aku liat dia di unai rasanya pengen peluk dia erat eratt hahahah
      </p>
      <P class="font-semibold text-center">disini rasanya Tuhan ngejawab semua doa doa ku, semua kekhawatiran ku di buang sama Tuhan</P>
    </div>
    <!-- title -->

    <!-- container image -->

    <!-- container image -->

    <div class="">
      <p class="mt-5 poppins text-sm text-center">
        Masih banyak moment butterfly eranya yang mungkin aku gak bisa kasih tunjukin, yah mmg
        sebanyak itu hehhe susah ngumpulinnya satu satu
      </p>
    </div>
  </main>
  <!-- my wisudaa -->

  <!-- happy birthday -->
  <!-- <main class="mt-24">
  <div class="relative pt-5">
  <span class="block w-32 h-1 bg-slate-800 rounded-full absolute left-1/2 -top-2 transform -translate-y-1/2"></span>
  <span class="block w-36 h-1 bg-slate-800 mt-1 rounded-full absolute top-0 left-[40%]"></span>
  <div class="flex items-center gap-2 w-fit ">
    <box-icon type='solid' name='party' size="lg"></box-icon>
    <h1 class="poppins-medium tracking-widest text-3xl">Happy Birthday</h1>
  </div>
  <p class="mt-3 poppins text-sm text-center">Setelah call pertama itu, aku ngerasanya kalo ada sesuatu yang beda idk exactly to explain it, but there was this feeling-like..were getting closer hahaha, lebih intens, dan lebih terbuka satu sama lain. Obrolan-obrolan kami jadi lebih mengalir, lebih sering, dan somehow terasa effortless. And this is where my <span class="font-semibold">butterfly era</span> officially began ☺️</p>
</div>
</main> -->
  <!-- happy birthday -->
</template>
