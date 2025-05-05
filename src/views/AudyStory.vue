<script setup>
import { ref, nextTick, computed  } from 'vue'

const showCard = ref(false)
const imageSrc = ref('')

const showCardHandler = (no_folder, number) => {
  // /our_daily/daily3/2.jpg
  showCard.value = true
  imageSrc.value = `/our_daily/daily${no_folder}/${number}.jpg`
}

const hideCardHandler = () => {
  showCard.value = false
}

const continued_story = (no) => {
  showCard.value = true;
  imageSrc.value = `/continued_story/${no}.jpg`

}

const kocakHandler = (no) => {
  showCard.value = true;
  imageSrc.value = `/kocak/${no}.jpg`
}

const gambar = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]

const allImages = Object.entries(
  import.meta.glob('@/assets/story_audy/gallery_wisuda/*.jpg', { eager: true })
)
  // Urutkan berdasarkan nama file (path-nya)
  .sort((a, b) => {
    const getNumber = path => parseInt(path.match(/(\d+)\.jpg$/)?.[1] || 0)
    return getNumber(a[0]) - getNumber(b[0])
  })
  // Ambil hanya URL default-nya
  .map(([_, module]) => module.default);

  const playlist = [
    '/sound/sound1.mp3',
    '/sound/sound2.mp3'
  ];

  const currentTrackIndex = ref(0);
  const currentTrack = ref(playlist[currentTrackIndex.value]);
  const audioPlayer = ref(null);

  function playNext() {
    if (currentTrackIndex.value < playlist.length - 1) {
      currentTrackIndex.value++
      currentTrack.value = playlist[currentTrackIndex.value]
      // Tunggu update DOM selesai, baru play
      nextTick(() => {
        audioPlayer.value.load()
        audioPlayer.value.play()
      });
    }
  }
</script>

<template>
  <!-- card image untuk di baca -->
  <div @click="hideCardHandler" v-if="showCard" class="fixed inset-0 bg-black/80 z-[9999] overflow-hidden">
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
        <audio ref="audioPlayer" controls @ended="playNext">
          <source :src="currentTrack" type="audio/mpeg" />
          Browser tidak mendukung audio.
        </audio>
        <!-- <audio src="/sound/sound1.mp3" controls></audio> -->
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
      <div @click="continued_story(1)"
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
      <div @click="continued_story(2)"
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
      <div @click="continued_story(3)"
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
      <div @click="continued_story(4)"
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
      <div @click="continued_story(5)"
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
      <div @click="continued_story(6)"
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
      <div @click="continued_story(7)"
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
      <div @click="continued_story(8)"
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
      <div @click="continued_story(9)"
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
      <div @click="continued_story(10)"
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
      <div @click="continued_story(11)"
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
      <div @click="continued_story(12)"
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
      <div @click="continued_story(13)"
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
      <div @click="continued_story(14)"
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
      <div @click="continued_story(15)"
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
      <div @click="continued_story(16)"
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
      <div @click="continued_story(17)"
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
      <div @click="continued_story(18)"
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
    <div class="relative pt-5 mb-12">
      <h1 class="poppins-medium tracking-widest text-3xl">Our Daily Life</h1>
      <p class="mt-1 poppins text-sm">Ini aku mau ceritain sebagian kecil keseharian kami, lucu lucu!! kalo gambarnya kurang keliatan bisa di klick yaa!!</p>
    </div>
    <!-- title -->

    <!-- container daily -->
    <!-- daily1 -->
    <div class="w-full relative flex items-center justify-center gap-20">
      <div
        class="w-[3px] h-full bg-zinc-300 absolute top-1/2 left-1/2 transform -translate-y-1/2"
      ></div>

      <div class="w-1/2 h-[600px] p-8 rounded-xl flex flex-col items-center justify-between ">
        <div class="relative w-full h-full">
          <div
            @click="showCardHandler(1, 1)"
            class="w-[200px] h-[433px] absolute z-10 top-1/2 left-[5%] -translate-y-1/2 transform -rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="@/assets/story_audy/our_daily/daily1/1.png"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(1, 2)"
            class="w-[200px] h-[433px] absolute z-20 top-1/2 left-[15%] transform -rotate-3 -translate-y-1/2 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="@/assets/story_audy/our_daily/daily1/2.png"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(1, 3)"
            class="w-[200px] h-[433px] absolute z-30 top-1/2 left-1/3 transform -translate-y-1/2 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="@/assets/story_audy/our_daily/daily1/3.png"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(1, 4)"
            class="w-[200px] h-[433px] absolute z-20 top-1/2 left-[50%] transform -translate-y-1/2 rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="@/assets/story_audy/our_daily/daily1/4.png"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(1, 5)"
            class="w-[200px] h-[433px] absolute z-10 top-1/2 left-[60%] transform -translate-y-1/2 rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="@/assets/story_audy/our_daily/daily1/5.png"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

        <div class="mt-2">
          <p class="mt-1 poppins text-sm text-center">Lucuu inget banget moment ini dia bilang kalo misalnya aku lgi deketin dia trus dia bete karena aku marah, pdhlmah salting banget gais aku</p>
        </div>
      </div>

      <div class="w-1/2 h-[600px] p-8 rounded-xl flex flex-col items-center justify-between">
        <div class="relative w-full h-full">
          <div
            @click="showCardHandler(1, 6)"
            class="w-[200px] h-[433px] absolute z-10 top-1/2 left-[5%] -translate-y-1/2 transform -rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="@/assets/story_audy/our_daily/daily1/6.png"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(1, 7)"
            class="w-[200px] h-[433px] absolute z-20 top-1/2 left-[15%] transform -rotate-3 -translate-y-1/2 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="@/assets/story_audy/our_daily/daily1/7.png"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(1, 8)"
            class="w-[200px] h-[433px] absolute z-30 top-1/2 left-1/3 transform -translate-y-1/2 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="@/assets/story_audy/our_daily/daily1/8.png"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(1, 9)"
            class="w-[200px] h-[433px] absolute z-10 top-1/2 left-[60%] transform -translate-y-1/2 rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="@/assets/story_audy/our_daily/daily1/9.png"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

        <div class="mt-2 poppins text-sm text-center">Ini juga lucu banget baca gehh heheh</div>
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
            class="w-[200px] h-[433px] absolute z-10 top-1/2 left-[5%] -translate-y-1/2 transform -rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="@/assets/story_audy/our_daily/daily2/1.jpg"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(2, 2)"
            class="w-[200px] h-[433px] absolute z-20 top-1/2 left-[15%] transform -rotate-3 -translate-y-1/2 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="@/assets/story_audy/our_daily/daily2/2.jpg"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(2, 3)"
            class="w-[200px] h-[433px] absolute z-30 top-1/2 left-1/3 transform -translate-y-1/2 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="@/assets/story_audy/our_daily/daily2/3.jpg"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(2, 4)"
            class="w-[200px] h-[433px] absolute z-20 top-1/2 left-[50%] transform -translate-y-1/2 rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="@/assets/story_audy/our_daily/daily2/4.jpg"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(2, 5)"
            class="w-[200px] h-[433px] absolute z-10 top-1/2 left-[60%] transform -translate-y-1/2 rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="@/assets/story_audy/our_daily/daily2/5.jpg"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

        <div class="mt-2 poppins text-sm text-center">Ini dia lagi cerita ke mamamnya kalo dia kesal sama mentornya di tempat magang</div>
      </div>

      <div class="w-1/2 h-[600px] p-8 rounded-xl flex flex-col items-center justify-between">
        <div class="relative w-full h-full">
          <div
            @click="showCardHandler(2, 6)"
            class="w-[200px] h-[433px] absolute z-10 top-1/2 left-[5%] -translate-y-1/2 transform -rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="@/assets/story_audy/our_daily/daily2/6.jpg"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(2, 7)"
            class="w-[200px] h-[433px] absolute z-20 top-1/2 left-[15%] transform -rotate-3 -translate-y-1/2 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="@/assets/story_audy/our_daily/daily2/7.jpg"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(2, 8)"
            class="w-[200px] h-[433px] absolute z-30 top-1/2 left-1/3 transform -translate-y-1/2 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="@/assets/story_audy/our_daily/daily2/8.jpg"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(2, 9)"
            class="w-[200px] h-[433px] absolute z-20 top-1/2 left-[50%] transform -translate-y-1/2 rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="@/assets/story_audy/our_daily/daily2/9.jpg"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            @click="showCardHandler(2, 10)"
            class="w-[200px] h-[433px] absolute z-10 top-1/2 left-[60%] transform -translate-y-1/2 rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
          >
            <img
              src="@/assets/story_audy/our_daily/daily2/10.jpg"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

        <div class="mt-2 poppins text-sm text-center">Ini aku janji kedia ngebuat bunga ke dia, aku happy banget dia suka sama buatan aku 🥰</div>
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

        <div class="mt-2 poppins text-sm text-center">Ih degdegan banget ges di moment ini sumpa, iya sih salah aku responnya kyk ga peduli bgt..so sourryy</div>
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

        <div class="mt-2 poppins text-sm text-center">Gemesss amatt ini dia,,bete katanya aku sibuk poll cuma telat bales 3mnt nying</div>
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

        <div class="mt-2 poppins text-sm text-center">Hahaha gataula hari hari gelut, bete, berantemm mulu, tpi ngangenin bgtt yaaah... :(</div>
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

        <div class="mt-2 poppins text-sm text-center">wkwkw lucu rencana mau ke bekasi buat berenang bareng ka jisa ka jina malah masuk tol mbz ngakak woee!</div>
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

        <div class="mt-2 poppins text-sm text-center">ini agaknya kumpulan ceritanya agak random sih heheh tpi lucu lucu ko baca ajaa</div>
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

        <div class="mt-2 poppins text-sm text-center">Another pembicaraan lucu, dan seperti biasa ciri khas ngambekny betenya ituu, kangen yaa:(</div>
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
        <p class="text-gray-600 mt-2">Dia bilang sebenarnya dia suka semua makanan kalo orang pada nanya katanya dia bakalan nanya suka sushi tapi katanya dia suka makan jengkol hahha kalo makanan yang dia ga suka coklat sih </p>
      </div>

      <!-- Card 2 -->
      <div class="bg-pink-100 border border-gray-200 rounded-lg shadow-lg p-6">
        <div class="flex items-center justify-between">
          <h3 class="mochiy tracking-widest text-xl font-semibold text-gray-800">Warna yang dia suka </h3>
        </div>
        <p class="text-gray-600 mt-2">Suka banget sama warna pink hahha, barang barangnya pink, pinky gurlll, suka sama benda benda imutt</p>
      </div>

      <!-- Card 3 -->
      <div class="bg-yellow-100 border border-gray-200 rounded-lg shadow-lg p-6">
        <div class="flex items-center justify-between">
          <h3 class="mochiy tracking-widest text-xl font-semibold text-gray-800">Silsilah Keluarganya</h3>
        </div>
        <p class="text-gray-600 mt-2">Siboru, anak terakhir dari 4 bersaudara 2 kaka kembar Angelina + Angelisa panggilannya ka jisa & ka jina, bang Hary anak ke 3 satu satunya anak laki - laki dan anak kesayangan ortu katanya wkwk, dan dia terakhir <span class="font-bold">audrey febriany silalahi</span></p>
      </div>
      <!-- Card 4 -->
      <div class="bg-yellow-100 border border-gray-200 rounded-lg shadow-lg p-6">
        <div class="flex items-center justify-between">
          <h3 class="mochiy tracking-widest text-xl font-semibold text-gray-800">Lagu kesukaan dia</h3>
        </div>
        <p class="text-gray-600 mt-2">Banyak banget si lagu yg dia suka kalau ditanya suka bingung katanya wkwk, trus dia suka semua lagu one direction pernah buat top ten list tpi bisa berubah ubah hahha, tpi pas aku tanyain katanya dia terlintas satu lagu yg paling dia suka "gita gutawa - harmoni cinta" she said dia suka bosenan banget sama lagu tpi kalo sama lagu ini gatau katanya gabisa bosen! musiknya, ambience, lirik, suara, "gemes lagunya" </p>
      </div>
      <!-- Card 5 -->
      <div class="bg-blue-100 border border-gray-200 rounded-lg shadow-lg p-6">
        <div class="flex items-center justify-between">
          <h3 class="mochiy tracking-widest text-xl font-semibold text-gray-800">2 Bayik kesayangannya</h3>
        </div>
        <p class="text-gray-600 mt-2">Selalu jadi pengasuh bayi kalo udah di keluarganya karena 2 kakanya udah nikah sama punya bayi yang pertama itu "gracia" katanya audrey versi kecil karena kelakuan mereka mirip banget pas dia masih kecil bisa di bilang klonannya wkwkw, kedua "abram" si abram agak pendiam tpi mereka lucu lucu bangettt asliii! ehh ada satu lagi sih adenya gracia lupa siapa namnyaa hehehe, gemesh bangettt waktu pertama dikenalin wkwkwk</p>
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
        <h3 class="mochiy tracking-widest text-xl">First date? Kali pertama ketemu</h3>
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
            class="w-[200px] h-[433px] absolute z-30 top-1/2 left-1/3 transform -translate-y-1/2 hover:scale-105 transition-all ease-in duration-200"
          >
            <img
              src="@/assets/story_audy/continue_story2/firstdate2.jpg"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            class="w-[200px] h-[433px] absolute z-20 top-1/2 left-[5%] -translate-y-1/2 transform -rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200"
          >
            <img
              src="@/assets/story_audy/continue_story2/firstdate1.jpg"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            class="w-[200px] h-[433px] absolute z-10 top-1/2 left-[60%] transform -translate-y-1/2 rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200"
          >
            <img
              src="@/assets/story_audy/continue_story2/firstdate3.jpg"
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
          <p class="poppins text-sm tracking-wider mt-1">19 Desember 2024</p>
          <p class="poppins text-sm mt-1">
            kami ketemu di stasiun cakung, aku jalan dari rumah jam 11/12 deh kalo gasalah nah kalau dia itu kan masih ada magang msib dari pagi sampai siang pulangnya dia otw ke stasiun cakung inget banget waktu itu ujan deh kalo gasalah wkwkwk, kami mesen grab car dari stasiun sampai mall aeonnya sampai mallnya kami makan di food court ayam apa lupa hehhe, cerita cerita banyak abis itu kami kami naik biang lala sumpaa seruu bangettttttt sekali lagi pake bangett!! wkwk, kami naik di biang lala itu sambil ngobrolin banyak hal, truss foto foto lucu amatt pokoknya,
          </p>
          <p class="poppins text-sm mt-1">
            setelah selesai main biang lala jam berapa ya 3/4 sore gitu kami mutusin buat nongs lagi makan mochi sambil ngobrol ngobrol lagi hehhe cerita random yang terlintas di pikiran kami..kami ceritain semua sampai ga berasa udah mulai malem aja....rasanya bahagia banget...gimana yaa jelasinnyaaa...pengennya waktu berenti disitu ajaaa...rasa, perasaan, waktu, moment, rasanyaman, bahagianya semuanya...selamanya berhenti....aku ngelihat dunia dengan warna yang beda saati ituu🥰🥰🥰🥰🥰
          </p>
        </div>
      </div>

      <div class="w-1/2">
        <!-- <div class="relative shadow-2xl">
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
        </div> -->
        <div class="relative shadow-2xl">
          <div
            class="w-[200px] h-[433px] absolute z-20 top-1/2 left-[20%] -translate-y-1/2 transform -rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200"
          >
            <img
              src="@/assets/story_audy/continue_story2/aeon-cakung1.jpg"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            class="w-[200px] h-[433px] absolute z-10 top-1/2 left-[55%] transform -translate-y-1/2 rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200"
          >
            <img
              src="@/assets/story_audy/continue_story2/aeon-cakung2.jpg"
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
        <p class="poppins text-sm tracking-wider mt-1">24 December 2024</p>

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
            class="w-[200px] h-[433px] absolute z-30 top-1/2 left-1/3 transform -translate-y-1/2 hover:scale-105 transition-all ease-in duration-200"
          >
            <img
              src="@/assets/story_audy/continue_story2/kampus1.jpg"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            class="w-[200px] h-[433px] absolute z-20 top-1/2 left-[5%] -translate-y-1/2 transform -rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200"
          >
            <img
              src="@/assets/story_audy/continue_story2/kampus2.jpg"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            class="w-[200px] h-[433px] absolute z-10 top-1/2 left-[60%] transform -translate-y-1/2 rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200"
          >
            <img
              src="@/assets/story_audy/continue_story2/kampus3.jpg"
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
            Disini aku ga bakalan cerita panjang lebar sih, jadi di third nya itu dia bilang kalau kisah asmaranya dia yahh pas aku denger kisah cinta dia aku ngerasa aneh dan juga jealous yah perasaan aku ganyaman lah intinya...pdhal disitu aku udah kecintaan banget gais wkwkw. yahh tapi aku ga cari pembelaan setelah sampai stastiun akhir jatimulya kami pisah dia pesen gojeknya sendiri aku juga pesen gojek aku sendiri disitu aku diem banget dia chat kalo gasalah "hatihati di jalan, aku sudah sampai rumah yaa" tapi aku gada balas chat dia...yahh...aku akuin emosi aku masih belum bagus disitu belum bisa ngontroll emosi lebih matang dan nyampain emosi dengan baik juga ke dia padahal bisa lebih gampang sih kalau misalnya aku langsung sampein yang aku rasain tanpa perlu diemin dia yaa atau bilang kedia kalau misalnya aku butuh waktu untuk nenangin diri...yahh disitu aku belajar untuk ngatur emosi aku lebih baik dan cara untuk nyampein emosi ke dia, im so sooorryyyyyy 🥺 and thankyou for being patient with my childish
          </p>
        </div>
      </div>

      <div class="w-1/2">
        <div class="relative shadow-2xl">
          <div
            class="w-[200px] h-[433px] absolute z-30 top-1/2 left-1/3 transform -translate-y-1/2 hover:scale-105 transition-all ease-in duration-200"
          >
            <img
              src="@/assets/story_audy/continue_story2/cekcok3.jpg"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            class="w-[200px] h-[433px] absolute z-20 top-1/2 left-[5%] -translate-y-1/2 transform -rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200"
          >
            <img
              src="@/assets/story_audy/continue_story2/cekcok2.jpg"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            class="w-[200px] h-[433px] absolute z-10 top-1/2 left-[60%] transform -translate-y-1/2 rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200"
          >
            <img
              src="@/assets/story_audy/continue_story2/cekcok1.jpg"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- story ketujuh -->

    <!-- story kedelapan -->
    <div class="w-full h-[700px] relative flex flex-row-reverse items-center justify-center gap-20">
      <div class="w-[3px] h-full bg-zinc-300 absolute top-1/2 left-1/2 transform -translate-y-1/2">
        <div
          class="w-0 h-0 border-t-[9px] border-b-[9px] border-r-[18px] border-transparent border-r-zinc-300 absolute top-1/2 -translate-y-1/2 -left-4"
        ></div>
      </div>

      <div class="w-1/2 h-full flex items-center">
        <div class="w-full bg-white shadow-lg p-8 rounded-xl">
          <h3 class="mochiy tracking-widest text-xl">Jemput dia di stasiun jatimulya :)</h3>
          <!-- <p class="poppins text-sm tracking-wider mt-1">8 Oktober 14.16</p> -->
          <p class="poppins text-sm mt-1">
            Ini kejadian lucu sih wkwkw, jadi kalo gasalah kami malamnya itu ada masalah deh ribut tentang sesuatu lupa deh masalahnya apa wkwkw, nah seharian itu kami chatt kami pendek pendek banget + seadanya cuma buat ngabarin lgi ngapain dimana gitu gitu doang. nah jadi kan aku lagi nganter papa ke stasiun bekasi timur karena papa lagi ada urusan lah, jadi pulangnya sendiri nah pas banget dia udah nyampe di stasiun jatimulya truss aku tanya deh mau ga bareng sekalian aja gitu baliknya..itu lucu banget akunya malu malu buat nawarin wkwkw truss akhirnya aku jemput deh dia di stasiun itu aku anterin sampai rumahnya ka jisaaa heheh lucu bangettt itu dia gajadi marah ke aku heheh😋
          </p>
        </div>
      </div>

      <div class="w-1/2">
        <div class="relative shadow-2xl">
          <div
            class="w-[200px] h-[433px] absolute z-30 top-1/2 left-1/3 transform -translate-y-1/2 hover:scale-105 transition-all ease-in duration-200"
          >
            <img
              src="@/assets/story_audy/continue_story2/jatimulya1.jpg"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            class="w-[200px] h-[433px] absolute z-20 top-1/2 left-[5%] -translate-y-1/2 transform -rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200"
          >
            <img
              src="@/assets/story_audy/continue_story2/jatimulya2.jpg"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            class="w-[200px] h-[433px] absolute z-10 top-1/2 left-[60%] transform -translate-y-1/2 rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200"
          >
            <img
              src="@/assets/story_audy/continue_story2/jatimulya3.jpg"
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
          <h3 class="mochiy tracking-widest text-xl">Belajar bareng di perpus ismail🥰</h3>
          <p class="poppins text-sm tracking-wider mt-1">Date perpus ismail 14 january</p>
          <p class="poppins text-sm mt-1">
            Kami berdua sama sama lagi berproses punya struggle kami masing masing dia lagi fokus skripsian aku fokus buat apply apply tuh tpi pengen bange buat ketemu jadi aku usulin deh tuh buat temenin aku apply apply dong di perpus sekalian buat ketemuu 😍, kami ketemu di stasiun bekasi timur sampai ke stasiun apa ya cikini deh kalo gasalah gataudeh lupa heheh, abis kami lanjut naik jaklingko wkwkw sampai ke Perpustakaan Jakarta dan Pusat Dokumen Sastra HB Jassin| Cikini abis kami masuk kedalam harus registrasi di website gitu lupa namanya, abis itu tinggal confirm di lobby dan dikasih loker buat nyimpen barang karena gaboleh bawa tas kedalam perpusnya. pas msauk perpusnya aku akuin sih bagus banget gais nyaman buat belajar dan orang yang lagi skripsian hehhe tapi minusnya rame banget aku sama dia sampe muter muter dan akhirnya kami dapet tempat duduk tuh. karena udah jam 12 an lewat itu kami laper dan kami putusin buat makan dulu di bawah perpus ada kantin gitu hehhe sambil cerita random lagi :) setelah selesai makan kami naik lagi ke dalam perpus, oh iya kami tinggalin barang kami disitu biar tempat duduk kami ga diambil ya abis itu.
          </p>
          <p class="poppins text-sm mt-1">
            setelah kami masuk ke dalam perpus lagi kami fokus lagi sama tugas masing masing abis itu aku nyeletuk gimana si hubungan kita kedepannya...bahas panjang lebar agak kecewa sih sama jawaban dia + sedih dikit dia bilang kalo misalnya dia tunggu jawaban dari Tuhan gitu yang sampai sekarang pun aku gatau apa setelah itu aku kasih dia website ini deh, waktu itu website ini masih sampai butterfly era di atas gais wkwkwk dia ngeriview langsung depan aku haha lucu banget sambil bercanda bercandaaa huaa..ini salah satu butterfly era aku yaa🥺
          </p>
        </div>
      </div>

      <div class="w-1/2">
        <div class="relative shadow-2xl">
          <div
            class="w-[200px] h-[433px] absolute z-30 top-1/2 left-1/3 transform -translate-y-1/2 hover:scale-105 transition-all ease-in duration-200"
          >
            <img
              src="@/assets/story_audy/continue_story2/perpus1.jpg"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            class="w-[200px] h-[433px] absolute z-20 top-1/2 left-[5%] -translate-y-1/2 transform -rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200"
          >
            <img
              src="@/assets/story_audy/continue_story2/cekcok2.jpg"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            class="w-[200px] h-[433px] absolute z-10 top-1/2 left-[60%] transform -translate-y-1/2 rotate-6 hover:rotate-0 hover:z-40 hover:scale-105 transition-all ease-in duration-200"
          >
            <img
              src="@/assets/story_audy/continue_story2/cekcok1.jpg"
              alt="storry_we_meet"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- story ketujuh -->

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
        Jauh sebelum hari wisudaku dia pernah bete karena respon aku yang kurang gitu, jadi dia tanya ke aku "seberapa senang aku kalau dia datang ke wisuda aku kasih rate dari 1-10" aku jawabnya agak panjang soalnya aku kawathir sih + gaenakan juga ke dia soalnya kan di wisuda aku di unai ya aku mikirnya gimana cara dia bisa dateng ke unai jauh banget takutnya kenapa kenapa cape jugakan dll lain jadinya aku bilang "aku seneng banget kalo misalnya kamu bisa dateng ke wisuda aku, tapi ga usa di paksain ya kalo misalnya gabisa soalnya aku takut kamu kenapa kenapa di jalan" abis itu dia langsung matiin call nya wkwkwk, kalo aku pikir pikir lagi iya sih siapa yang ga bete kalo dijawabnya gitu ya padahal di udah mau effort banget aku malah nggak ngehargain effort dia, jadi akhirnya dia mutusin buat ga datang deh katanya :( sedih banget sih aku, tapi yahh aku gamau maksa juga,,tapi pas malam minggu sebelum hari-h wisuda aku dia bilang mau dateng ke wisuda aku ditemenin temennya marcela wkwk jujur aku seneng banget happyy banget gaiis hapyyy bangetttttt wkwkw, salah satu kebahagian yang ga pernah aku lupain waktu wisuda ini sih bener bener puncak rasa sayang aku ke dia udah full banget rasanya, gila tiap kali aku liat dia rasanya pengen aku peluk dia erat eratt hahahah
      </p>
      <P class="font-semibold text-center">
        disini rasanya Tuhan ngejawab semua doa doa ku: "Tuhan aku udah mau lulus nih dari unai, dari sem 1 aku rajin belajar sampai sekarang aku jaga diri aku baik baik...taat beribadah juga, ga mainin hati perempuan. Tuhan boleh ga kasih aku perempuan yang baik sayang sama keluarganya, pokoknya ga usah aneh aneh" semua terasa begitu baik 
      </P>
    </div>
    <!-- title -->

    <!-- container image -->
    <div class="mt-10 px-4">
      <h2 class="text-center poppins-medium text-2xl mb-6">Galeri Wisudaku</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div v-for="i in allImages"  class="overflow-hidden rounded-lg shadow-lg">
          <img :src="i" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
        </div>
        <!-- Tambahkan lebih banyak foto di sini -->
      </div>
    </div>
    <!-- container image -->

    <div class="">
      <p class="mt-5 poppins text-sm text-center">
        Makasih yaa sudah buat moment terbahagia aku, sampai sekarang aku masih sering terbayang bayang kamuuu...
      </p>
    </div>
  </main>
  <!-- my wisudaa -->

  <main class="mt-20">
    <!-- title -->
    <div class="relative pt-5">
      <h1 class="poppins-medium tracking-widest text-3xl">Perbincangan, pembahasan kocak kami hahha</h1>
      <p class="mt-1 poppins text-sm">Sumpa yaa ini lucu lucu banget dahh, baca aja yaa bisa di klick juga ko kalo kurang jelas hehhe</p>
    </div>
    <!-- title -->

    <!-- galery -->
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 py-3">
      <img v-for="image in gambar" @click="kocakHandler(image)" :src="`/kocak/${image}.jpg`" alt="Image 1" class="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer">
      <!-- Tambahkan gambar lain sesuai kebutuhan -->
    </div>
    <!-- galery -->
  </main>

    <!-- song -->
    <main class="mt-20">
    <!-- title -->
    <div class="relative pt-5">
      <h1 class="poppins-medium tracking-widest text-3xl"></h1>
      <p class="mt-3 poppins text-sm">
        Allow..wuahh gak keresa ya udah sampai sini aja ceritanya, to be honest aku ga sanggup lagi sih buat ceritain lanjutan ceritanya soalnya abis ini lanjutan ceritanya bisa buat aku nangis banget wkwk. untuk sampai sini aja aku udah nangis berapa kali yaa...tau dehh gak ngitungg heheheh lebih dari 10 belasan sih kyknya..gakuat banget jujur, buat nyari nyari dokumentasi dokumnetasi cerita kami, aku pernah tuh buka laptop mau lanjutin cerita ini tpi malah begong sampai berjam jam abis itu nangiss hahhaha akhirnya ga sanggup buat lanjutin cerita ini dan jadinya rebahan seharian makanya lama banget ini aku selesaiinyaa karena kebanyakan nangis nyaaa. jadi abis ini ceritanya mungkin ada yang salah sedikit atau aku lupa lupa maaf yaa, soalnya cuma sebatas ingatan aku aja 
      </p>
      <p class="mochiy tracking-widest text-xl mt-1">Nyamper Dia ke BLOK M</p>
      <p class="poppins text-sm">
        aku lupa tanggal nya kapan nah jadi kalo gasalah dia itu mau ngurus sesuatu deh di blok m, pas aku tanya "kamu mau ngapain ke blok m?" dia gak mau jawab njir wkwk katanya misi rahasia keluarga ntahla udah aku paksa juga dia ttp gamau kasih tau mau ngapain, trus aku tanya "kamu sendiri ke blok m?" nah makanya aku nawarin buat nyamperin dia kesitu, sekalian buat ketemu dehh wkwkw, di blok m kami niatnya mau nonton apa ya..film horor indo lupa ehh judulnya wkwkw..tpi karena aku nyampenya jam 2 an kalo gasalah..karena filmnya adanya jam 1 trus jam 3 jadinya kami makan dulu,,kami mau nyari makan di food court tuh tapi rame banget, jadinya kami nyari ke bawah dehh, kalo gasalah lagi yaaa...makan di gokana lagi WKWKWK
      </p>
      <p class="poppins text-sm">
        setelah kami makan lanjut nonton deh, nonton apa ya lupa euhh judulnya pokoknya film horor. EHHH BUKAN FILM HOROR ANJAYYY WKWKWKWKW FILM 1 KAKA 7 PONAKANNN...IYAKK INGET BANGET AKU HAHAHA SORRY SORRY wuahh ini film nya seruh sih menginspirasi banget jadi dia tinggal sama kaka yang udah nikah tpi tbtb suaminya itu meninggal yang keadaanya itu kakanya sedang hamil tak lama kemudian kakanya pun melahirkan anak yang di kandungnya tpi sedih banget itu kakanya meninggal setelah melahirkan anaknya, nah disinilah perjuangan pemeran utama membiayai 7 ponakan dari saudara saudaranya wauhh poll parah ceritanya nyentuh ditambah kisa romansa nya juga...KERENN SIHH KERENNN...kalo film horor mah itu aeon yakk wkwkwk 🙏
      </p>
      <p class="poppins text-sm">
        Gila gua di situ udah niat banget tuh mau nembak dia wkwkwk tpi dia bahas bahas doanya ttg Tuhan dan katanya dia juga lagi siapin diri idk, dia juga ada cerita ttg penyakitnya dan buat gua mungkin belum waktunya dan akhirnya aku pulang dengan perasaan tidak nyaman tuhh tbtb pas pulang dia ngirimin vt yang contentnya ttg htsan itu gapapa!!?? tpi keknya dia cuma mau becanda sih "KYKNYA YAA" gatau juga sih yaudahlah posotif thinking aj itumah
      </p>
      <p class="mochiy tracking-widest text-xl mt-1">Aku nyatain perasaanku</p>
      <p class="poppins text-sm tracking-wider mt-1">00.00 / 2 February 2025 </p>
      <p class="poppins text-sm">
        Fyuhhh...aku berdoa ke Tuhan buat bisa nyeritain part bagaian ini, akuu....huhuu :(, aku lupa sih awalnya gimana..pokoknya malam itu kami call kyk biasa truss pembahasan kami apa yaa??seinget aku awalnya dia nanya kenapa aku mau sama dia atau kenapa aku suka sama dia gitu gitu sih truss kami deeptalk deh..aku juga nanya kapan dia mulai suka aku balik, sampai dititik akhirnya aku nanya ttg track record percintaan dia, akhirnya dia mulai cerita dri sma? ehh dri sd deh keknya wkwk dan sampai mantan terakhirnya dan dia bilang kalau mantannya "oriza" kalo ga salah ya maap kalo salah 🙏 itu ternyata ikut ke korea juga postech. GILA AKU DISITU BENGONG..DIEM..GATAU HARUS NGERESPON APA..GATAU HRS NGOMONG APA.. AKU DIEM MEMBEKU BRP MENIT ITU YAA, jujur shock berat sih dengarnya, rasanya kek sesakit itu njir, mmg sesakit itu aku sumpaa!! fuhhh..truss setelah diam berapa menit aku mulai ngomong lagi, "kenapa baru ngomong sekarang?" "aku sakit loh denger ini!" "kamu ngapain aj disitu sama dia?" "perasaan kamu pas dikorea gimana sama dia?" gilaa overthinking aku bermunculan tpi jujur disitu aku udah sayanggggg..banget anjritttt bener bener apa yaa..udah kecintaan  banget deh, qoute "cinta itu buta" gais rill banget dahh, dia juga nemenin ovt aku semaleman ga dibiarin buat mikir aneh anehh, akhirnya aku mikir bahwa kalau dia itu benar di kasih tau semua ttg dirinya dulu ke aku sampai setransparan itu kyk ngasih tau kalau itu sebagai bentuk keseriusan dia ke aku
      </p>
      <p class="poppins text-sm mt-1">1. dia nunjukin kalo misalnya dia moodyan + tukang bete + tukang berantem dramatic gf wkwkwk jujur sih ngangennin :( </p>
      <p class="poppins text-sm">2. dia tunjukin tuh kalo misalnya dia itu gampang bosen jadi mmg harus effort sih buat menuhin love langguage nya dia </p>
      <p class="poppins text-sm">3. dia kasih tahu kalo misalnya dia punya penyakit karena dari kecil dia selalu dicuekin..perasaan dia ga sering di validasi sama mamanya ngebuat dia kadang ngerasa ga pernah dapet rasa kasih sayang </p>
      <p class="poppins text-sm">4. terakhir di cerita ttg track record kisah percintaan dia. benar benar diceritain semua sih sama dia.</p>
      <p class="poppins text-sm mt-1">aku terima semua yang ada di dalam diri dia ini juga bentuk keseriusan aku ke dia, gada yang di tutupin juga sama dia yang akhirnya aku mikir kalau dia udah se transparan itu ke kyk bilang secara tersirat "aku nunjukin kalo aku orangnya kyk gini nih, jo!", aku udah tau semua ttg hidup dia kalo mundur gitu kesannya kyk gak ada keseriusan gitukan yang buat aku akhirnya mutusin buat nembak dia malam itu.</p>
      <p class="poppins text-sm my-2">
        <span class="font-semibold">"Nyeselll!?"</span> ENGGAK!! kalaupun aku bisa muter waktu lagi aku bakalan ttp nembak dia di saat itu, di waktu itu, di moment itu jugakk mungkin yg bakalan aku rubah paling cara aku ngetreat dia dan effort aku sih heheh keknya ini lanjut di part akhir aja yaa
      </p>
      <p class="poppins text-sm">
        DAN IYAA AKU MULAI PACARAN SAMA DIA HAHAHAH, ini pertama kalinya aku manggil cantik keseseorang, pertama kalinya aku manggil jelek keseseorang, pertama kalinya aku manggil kepunyaanku, pertama kalinya aku manggil sayanggg:(, rasanya mau pamerin ke seluruh dunia kalau dia udah jadi milik aku hahha. tahu gak aku aja gapercaya kalo misalnya bisa dapetin dia, kyk "ini beneran yak dia pacar aku!?? ini aku bukan lagi mimpikan???" sampai segapercaya itu hahhahah wahh dalam hati "akhirnya dia manggil sayang jugak ke akuu yaa", aku udah ga dimarahin lagi kalo misalnya manggil sayang kedia wkwkw. dan untuk pertama kalinya aku se clingy itu ke cewek bener bener se clingy itu!! hampir tiap malam itu aku clingy in dia, tempat aku recharge energy bahagia banget rasanya dan keseharian kami pun berlanjut seperti biasa
      </p>
      <p class="poppins text-sm">
        Tapi jujur pacaran itu ga selalu ttg bahagianya sihh kami ttp sering berantem, masih sering mis komunikasi, ego kami masih sama sama tinggi apa lagi dia sensitif banget salah dikit bisa berabeee, harus bisa menuhin love Language pasangan aku selalu mau belajar untuk bisa lebih baik lagi tapii...masalah kami yang paling sering itu di cara treat aku yang agak kureng sih..mungkin dia udah numpuk sih rasa capenyaa gatau dehh ini ga bisa diunkapin melalui kata kata mmg harus berinteraksi dan ketemu hrsnya biar dia jangan ngerasa kalau dia itu ga disayang
      </p>
      <p class="mochiy tracking-widest text-xl mt-1">Date ke aeon tanjung barat</p>
      <p class="poppins text-sm">
        Aku udah kangen banget sih sama dia, pengen banget ketemu, aku akhirnya ajak dia buat ketemuan, soalnya aku lagi sibuk sibuknya nyari kerja tapi di sela sela kesibukan aku, ajak dia ketemu lagi untuk recharge energy aku lagi wkwk, kami di aeon itu nonton horror!! nahh ini baru bener kami nonton horror wkwkwk lumaya serem sih filmnya apa judulnya petapa gunung apa gitu, kalo gasalah yaa wkwkwk itu di depan kami ada orang berisik banget lagi gajelazz. abis nonton kami mau nongs dulu bentar ngobroll ngobroll abis itu dia nyamper temennya deh aku balik, soalnya dia pengen nginep di tempat temennya biar ga bolak balik kampusnya
      </p>
      <div class="mt-3">
        <!-- <audio src="/sound/sound1.mp3" controls></audio> -->
      </div>
    </div>
    <!-- title -->
  </main>
  <!-- song -->

  <!-- happy birthday -->
  <main class="mt-24">
    <div class="relative pt-5">
      <span class="block w-32 h-1 bg-slate-800 rounded-full absolute left-1/2 -top-2 transform -translate-y-1/2"></span>
      <span class="block w-36 h-1 bg-slate-800 mt-1 rounded-full absolute top-0 left-[40%]"></span>
      <div class="">
        <div class="flex items-center gap-2 w-fit m-auto">
          <box-icon type='solid' name='party' size="lg"></box-icon>
          <h1 class="poppins-medium tracking-widest text-3xl">Her Birthday</h1>
        </div>
        <p class="poppins text-sm tracking-wider text-center">21 February 2025</p>
      </div>
      <p class="mt-3 poppins text-sm text-center">
        Ini pertama kalinya aku beliin hadiah ke cewe wkwkwk ga ngertii 😭😭😭 aku nanya ke karolin "ehh dia ulang tahun bagusnya aku beliin apa yaa", truss aku juga nanya ke ellen dia pengen hadia apa yaa, setelah aku pikirin panjang aku mutusin buat beli tas sama bunga buat dia kyknya dia juga lagi stress banget itu waktu skripsiannya gatau deh dia suka ga yaa sama hadiah aku hahhahaha, maaf ya cuma bisa ngasih itu pengennya ngasih lsg sih kedia tpi karna satu dua hal dia gabisa buat ketemu aku juga sih gabisa soalnya motor kepake semua sama abang, rasanya sedih segabisa itu aku buat ketemu dia :(
      </p>
      <div class="relative h-[650px] flex items-center justify-center">
        <!-- Gambar 1 -->
        <img
          src="@/assets/story_audy/birthday/1.jpg"
          alt="Image 1"
          class="w-[300px] h-[560px] object-cover rounded-xl shadow-xl transform rotate-[-6deg] -translate-x-[220px] absolute z-10 hover:scale-105 hover:rotate-0 transition-all duration-300 hover:z-50"
        />

        <!-- Gambar 2 (tengah) -->
        <img
          src="@/assets/story_audy/birthday/3.jpg"
          alt="Image 2"
          class="w-[300px] h-[560px] object-cover rounded-xl shadow-2xl transform -translate-y-4 z-20 hover:z-50 hover:scale-105 transition-all duration-300"
        />

        <!-- Gambar 3 -->
        <img
          src="@/assets/story_audy/birthday/2.jpg"
          alt="Image 3"
          class="w-[300px] h-[560px] object-cover rounded-xl shadow-xl transform rotate-[6deg] translate-x-[220px] absolute z-10 hover:scale-105 hover:rotate-0 transition-all duration-300 hover:z-50"
        />
      </div>

    </div>
  </main>
  <!-- happy birthday -->

  <!-- last part -->
     <!-- title last-->
    <div class="mt-32 border-b-2 pb-3 flex justify-center mx-auto items-center gap-3 w-fit">
      <!-- <box-icon name="message-alt-dots" size="lg"></box-icon> -->
      <h1 class="poppins-medium tracking-widest text-3xl">Last Part My Story</h1>
    </div>
    <!-- title last-->

    <main class="mt-5">
      <p class="mt-3 poppins text-sm text-center">
        Akhirnya sampai ke part ini juga ya, gakuat banget ceritainnyaaa huhuu...bingung banget mau ceritaain yang ini gimana yaa :( okeeee..jadi kyk yang aku bilang kalau pacaran itu ga tentang bahagianya doang, ga cuman ttg gemesnya doang, dan yahh tentu kami sering berantem but it's okay semua itu proses untuk kebentuknya sebuah hubungan yang kita mau nantinya ada yang kami ganyaman kami obrolin baik baik, satu persatu masalah kami lalui aku belajar lagi untuk dapat jadi lebih baik kedapannya, aku belajar gimana berkomunikasi dengan lebih baik kedia, aku yang cemburuan tapi aku percaya kalo misalnya dia punya personal boundariesnya yg kuat, yang buat aku yakin bahwa dia gabakalan aneh aneh walaupun dia punya banyak teman cowo and i know his se friendly itu and i know she has a male bestfriend tapi aku percaya dan ga pernah permasalahin itu aku ga pernah kekang dia dengan aturan apapun itu karena ya,,aku percaya ke dia yang buat aku merasa special dan beda dari yang lain.
      </p>
      <p class="mt-2 poppins text-sm text-center">
        hingga waktu itu aku pernah bete, soalnya aku mau cerita ke dia, aku masuk ke tahap final interview, aku udah excited banget itu mau cerita kedia, tapi dia gabales bales sampai sore deh baru dia bales. mungkin disini sih titik awalnya titik kesalahan aku...aku terlalu terburu buru...aku hanyut dengan rasa kesal sesaat aku ga berpikir panjang mungkin aja harinya juga lagi cape, dia mungkin lagi hectic hecticnya tapi akuu malahh ngebuat perasaan dia makin campur aduk..tpi aku cuma mau komunikasiin rasa kesalnya aku, bukan yg gimana atau mau marah gimana gimana...dan akhirnya malah jadi makin runyamm permasalahanya ga selesai hari itu, soalnya dia cape dia minta waktu untuk sendiri, harusnya aku lebih sabar lagi sih waktu itu..hrsnya aku paksa minta buat ketemu obrolin baik baik, yg mungkin aja bisa buat hasilnya bisa berbeda, yahh sudah berlalu juga sih...mungkin dulu gara gara keadaan aku juga lgi banyak pikiran dan rasa stress yg menumpuk belum dapet jawaban jawaban dri Tuhan (kerja) itu memperngaruhi cara aku berpikir dan pengambilan keputusan, aku jadi gampang cape akhirnya setelah dia coba nenangin diri akhirnya dia call aku dan ngehubungin aku lagi, kami gobrol baik baik masalah ini pun selesai kami saling minta maaf, tapi keesokanya aku ngerasa dia beda banget, kyk engga dirinya lagi..rasanya kyk ada gap gitu di antara kami, dan juga kami jarang banget call karena ada satu dua hal lah aku gatau juga kenapa...dan iya kami semakin ada jarak, aku ngerasa kyk ada yang salah, aku ngerasa kyk ada sesuatu yang berbeda dri dia..akhirnya aku beraniin diri buat nanya kyk nanya keadaanya "gapapakan?", "kalo misalnya ada kenapa kenapa bilang aj ya?", "atau mungkin ada akunya salah gitu?", "gapapa ya buat di obrolin baik baik" dan di hari itu dia benar benar ga ada manggil aku dengan panggilan sayang seperti biasanya dan aku bener bener ngerasa kayak memang ada sesuatu gituu.
      </p>
      <p class="mochiy tracking-widest text-xl mt-1 text-center">3 Maret 2025</p>
      <p class="poppins mt-2 text-sm text-center">
        di tanggal 3 maret ini aku ga nyapa selamat pagi ke dia, aku nunggu dia yang ngabarin aku, untuk kalo udah siap ngomong kabarin aj tapi di pagi harinya ini aku ada interview di daerah pulogebang dan setelah aku sampai rumah kamipun call bicara baik baik........aku menghela nafasss panjangggg bangettt.......dia mulai ngomong pelan pelan..dia ngejelasin.. disaat dia jelasin aku cuma bisa diam, tangan aku gematar...pikiran aku kosongggg..aku gigit bibir bagian bawah aku kencengggg bangett..gatau aku hrs jawab apa kedia, otak aku bener bener kosong!!! bener bener kosonggggg sumpaa. dia bilang :
      </p>
      <p class="poppins mt-2 text-sm text-center">"Jooo, aku ngerasa 0 ke 100 nya ga works"</p>
      <p class="poppins mt-2 text-sm text-center">"dia ngerasa flat banget, kalu misalnya effort aku masih kurang :("</p>
      <p class="poppins mt-2 text-sm text-center">"pdhl masih baru tapi jadian tpi sparkle, percikan dri cinta itu ga kerasa"</p>
      <p class="poppins mt-2 text-sm text-center">
        aku ngerasa ngedown banget semua yg aku overthinking dri kemarin kemarinnya terjadi, aku cuma bisa ngeiyain semua kata kata dia...dengan keadaan aku yang shock itu dan otak aku yang lgi kosong aku gatau harus ngejawab apa, aku ga bisa cari pembelaan apa apa lagi lemes banget rasanyaaa mau nangisss, sakit banget, rasanya gamau percaya dengan apa yang terjadi huuuuuu....setelah call itu aku masih coba buat ngeyakinin dia, tpi tetep aja :((( gagabisa..rasanya kalo mmg semua ini terjadi karena memang gara gara kesalahan aku dan juga cara treat dan kurangnya effort aku mungkin aku pantes buat dapetin ini :( tpi i don't know juga sihh rasanya sakit bangettttt, aku cuma berharap kalau semua keputusan dia mmg rill dari dia ga ada campur tangan external dari luar 
      </p>
      <p class="poppins mt-2 text-sm text-center">
        setelah semua itu terjadi aku....gatau...aku gabisa ungkapin dengan kata kata, hidup ini terus berjalan....hari demi hari menyesakkan rasanya mau balik ke october lagi..ngulang dari awal, awal ketemu dia huuhuu...jujur aku mimpiin dia berkali kali awal aku bangun rasanya nyesek bangettt, ga mood ngapa-ngapain maunya rebahan, lemes banget gada tenaga. kadang kalo aku lagi kesepian banget aku call olin buat dengerin cerita dia, cuma ke olin aku bisa cerita. waktu akhirnya nyembuhin luka luka ini dan semua yang aku rasain aku tulis di dalam cerita ini sekarang, kadang masih suka doa ke Tuhan: "Tuhan boleh ga sih aku minta hal egois hahaha minta hal yang gamungkin terjadi ini bisa terjadi"
      </p>
      <p class="poppins mt-2 text-sm text-center">"Tuhan bisa ga misalnya goboleh ada cowo loading yang dateng ke dia wkwkw"</p>
      <p class="poppins mt-2 text-sm text-center">"Tuhan to much ga ya kalo misalnya aku datang ke mamanya trus pegang tangannya bilang ma audy jahatin aku, tpi semua itu ga bener kan maa! aku lamar dia sekarang ya maa! AOKWOKWO"</p>
      <p class="poppins mt-2 text-sm text-center">"Tuhan aku kuat ga ya liat dia dengan yg baru :("</p>
      <p class="poppins mt-2 text-sm text-center">"Tuhan aku masih belum bisa lupain dia lohh:( gimana ya inii??"</p>
      <p class="poppins mt-2 text-sm text-center">"Tuhan aku bakalan baik baik aja ga ya kedepannya? Tuhan aku harus gimana ini? Tuhan?? Tuhannn....😭"</p>
      <p class="poppins mt-2 text-sm text-center">"Tuhan aku gakuattttt hidup aku sakit bangettt :((("</p>
      <p class="poppins mt-2 text-sm text-center">
        Hingaa waktu yang nyembuhim semua luka luka aku ini, aku udah gatau kabar tentag dia, aku udah gapernah dengar suara dia...kadang aku gakuat untuk buka instagram, takut banget kambuh rasa sakit ini, terkadang aku masih suka relapse, sampai tiba tiba dia datang lagi Nyeletuk "semlekom! sombong amatt" jujur disitu aku berharap lagi kalau misalnya kami bisa kembali ke waktu yang dulu lagi, aku nanya kabar dia, dia juga nanya kabar aku tapi entah kenapa rasanya dia berbeda, padahal ellen bilang kalo dia kangen tpi kenapa sikap dia kyk gitu yaa? shit mann, shiballl la wkwkw, dikasih mixed signal gini yaaak, fyuhhhh agak sakit juga sihhh...kyk...
      </p>
      <p class="poppins mt-2 text-sm text-center">
        sekali lagi aku gada bilang dia jahat, ini 100% pov dari aku sendiri, perasaan manusia itu ribet banget susah untuk di mengerti banyak faktor yang memperngaruhi, baik dari keluarga, pertemanan dan juga lingkungan sekitar mereka. dia juga punya pemikiran sendiri, punya perasaannya yang ga bisa aku mengerti atau aku rasain, aku ga bisa ngejudge apa apa. semua sudah terjadi..aku percaya rencana Tuhan..aku selalu berdoa ke Tuhan untuk berikan yang terbaik ke aku
      </p>
      <p class="poppins mt-1 text-sm text-center">
        Yeremia 29:11 Sebab Aku ini mengetahui rancangan-rancangan apa yang ada pada-Ku mengenai kamu, demikianlah firman TUHAN, yaitu rancangan damai sejahtera dan bukan rancangan kecelakaan, untuk memberikan kepadamu hari depan yang penuh harapan.
      </p>
      <p class="poppins mt-1 text-sm text-center">Yesaya 55:8 Sebab rancangan-Ku bukanlah rancanganmu, dan jalanmu bukanlah jalan-Ku, demikianlah firman TUHAN.</p>
      <p class="poppins mt-2 text-sm text-center">
        Terimakasih sekali lagi ke orang yang pernah aku cintai, yang pernah aku panggil sayang, yang pernah aku sayang sebegitu sayangnya, terimakasih orang yang pernah aku panggil cantik, terimakasih....dari kamu aku belajar bahagia dari kamu juga aku merasakan rasa sakit ini, maaff kyknya udah kebanyak kata maaf, tapi cuma kata maaf yang bisa aku ucapin, maaf ya setelah aku lihat kyknya mmg iya kekurangan aku banyak banget..maaf yaa sebosen itu yaaa :( effort aku belum terlalu terlihat/menonjol mungkin karena mmg aku belum punya apa apa...kadang aku pengen buat ketemu dia tpi abang nyampe rumah jam 8.30 an ga enak juga mau ajak dia ketemu minggu kadang motornya kepake dan dia juga sering di tangsel kalau minggu dulu belum punya duit sendiri buat ngajak dia jalan sekarang udah punya tapi malah...yahh:( maaf ya belum bisa jadi terbaik yang kamu mau. kita sama sama percaya sama Tuhan kan :) tapi semoga Tuhan ga nyuruh buat kita pisah dan saling menutup perasaan kita:( aku juga percaya semua yang kita lalui itu bukan buat main main tapi bentuk sebuah keseriusan.
      </p>

    </main>
  <!-- last part -->

  <!-- title -->
  <div class="mt-16 mx-auto border-b-2 pb-3 flex justify-start items-center gap-3 w-fit">
    <box-icon name="image" type="solid" color="black" size="lg"></box-icon>
    <h1 class="poppins-medium tracking-widest text-3xl">Gallery in my Relationship</h1>
  </div>
  <!-- title -->

  <!-- video -->
  <div class="relative h-[650px] flex items-center justify-center">
    <!-- Gambar 1 -->
    <video
      src="@/assets/story_audy/gallery_relation/video1.mp4"
      class="w-[300px] h-[560px] object-cover rounded-xl shadow-xl transform rotate-[-6deg] -translate-x-[220px] absolute z-10 hover:scale-105 hover:rotate-0 transition-all duration-300 hover:z-50"
      autoplay
      muted
      loop
      playsinline>
    </video>

    <!-- Gambar 3 -->
    <video
      src="@/assets/story_audy/gallery_relation/video2.mp4"
      class="w-[300px] h-[560px] object-cover rounded-xl shadow-xl transform rotate-[6deg] translate-x-[220px] absolute z-10 hover:scale-105 hover:rotate-0 transition-all duration-300 hover:z-50"
      autoplay
      muted
      loop
      playsinline>
    </video>
  </div>
  <!-- video -->

  <!-- my favorite image -->
  <main class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8 px-4">
    <div class="flex items-center">
      <div class="aspect-[3/2] w-full overflow-hidden rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all ease-in duration-300 cursor-pointer">
        <img
          src="@/assets/story_audy/audystory_img_kecil/1.png"
          alt="selfie_time"
          class="w-full h-full object-cover transform hover:scale-110 transition-all ease-in duration-200"
        />
      </div>
    </div>

    <div class="flex items-start">
      <div class="aspect-[3/2] w-full overflow-hidden rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all ease-in duration-300 cursor-pointer">
        <img
          src="@/assets/story_audy/audystory_img_kecil/10.png"
          alt="selfie_time"
          class="w-full h-full object-cover transform hover:scale-110 transition-all ease-in duration-200"
        />
      </div>
    </div>

    <div class="md:col-span-2 flex items-center">
      <div class="aspect-[3/2] w-full overflow-hidden rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all ease-in duration-300 cursor-pointer">
        <img
          src="@/assets/story_audy/audystory_img_kecil/3.png"
          alt="selfie_time"
          class="w-full h-full object-cover transform hover:scale-110 transition-all ease-in duration-200"
        />
      </div>
    </div>

    <div class="flex items-end">
      <div class="aspect-[3/2] w-full overflow-hidden rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all ease-in duration-300 cursor-pointer">
        <img
          src="@/assets/story_audy/audystory_img_kecil/13.png"
          alt="selfie_time"
          class="w-full h-full object-cover transform hover:scale-110 transition-all ease-in duration-200"
        />
      </div>
    </div>

    <div class="flex items-center">
      <div class="aspect-[3/2] w-full overflow-hidden rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all ease-in duration-300 cursor-pointer">
        <img
          src="@/assets/story_audy/audystory_img_kecil/5.png"
          alt="selfie_time"
          class="w-full h-full object-cover transform hover:scale-110 transition-all ease-in duration-200"
        />
      </div>
    </div>

    <div class="md:col-span-2 flex items-center">
      <div class="aspect-[3/2] w-full overflow-hidden rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all ease-in duration-300 cursor-pointer">
        <img
          src="@/assets/story_audy/audystory_img_kecil/6.png"
          alt="selfie_time"
          class="w-full h-full object-cover transform hover:scale-110 transition-all ease-in duration-200"
        />
      </div>
    </div>

    <div class="md:col-span-2 flex justify-center items-center">
      <div class="aspect-[3/2] w-full overflow-hidden rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all ease-in duration-300 cursor-pointer">
        <img
          src="@/assets/story_audy/audystory_img_kecil/8.png"
          alt="selfie_time"
          class="w-full h-full object-cover transform hover:scale-110 transition-all ease-in duration-200"
        />
      </div>
    </div>

    <div class="md:col-start-5 md:col-end-7 flex items-center">
      <div class="aspect-[3/2] w-full overflow-hidden rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all ease-in duration-300 cursor-pointer">
        <img
          src="@/assets/story_audy/audystory_img_kecil/4.png"
          alt="selfie_time"
          class="w-full h-full object-cover transform hover:scale-110 transition-all ease-in duration-200"
        />
      </div>
    </div>
  </main>
  <!-- my favorite image -->


</template>
