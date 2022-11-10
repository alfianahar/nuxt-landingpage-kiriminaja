<template>
  <div
    class="hero min-h-screen"
    style="
      background-image: url(https://images.unsplash.com/photo-1591270551371-3401a1a9382f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBhY2thZ2UlMjBkZWxpdmVyeXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60);
    "
  >
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="flex justify-start w-full">
      <div class="text-white mx-16 max-w-md">
        <h1 class="text-5xl font-bold">
          Semua bisa mulai kirim paket tanpa ribet.
        </h1>
        <div class="flex flex-row space-x-4 mt-6">
          <img
            src="~/assets/images/ic-download-android.svg"
            alt="android-app"
            width="200"
            class="h-auto max-w-full mr-4"
          />
          <img
            src="~/assets/images/ic-download-ios.svg"
            alt="ios-app"
            width="200"
            class="h-auto max-w-full mr-4"
          />
        </div>
      </div>
    </div>
  </div>
  <section class="">
    <swiper
      :pagination="true"
      :modules="modules"
      class="h-screen flex justify-center items-center"
    >
      <swiper-slide class="flex justify-center items-center"
        >Slide 1</swiper-slide
      ><swiper-slide class="flex justify-center items-center"
        >Slide 2</swiper-slide
      ><swiper-slide class="flex justify-center items-center"
        >Slide 3</swiper-slide
      >
    </swiper>
  </section>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "../assets/css/swiper.min.css";

// import required modules
import { Pagination } from "swiper";

export default {
  head() {
    return {
      title: "KiriminAJA",
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>
