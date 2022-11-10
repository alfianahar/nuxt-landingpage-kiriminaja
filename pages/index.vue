<template>
  <div
    class="hero min-h-screen"
    style="
      background-image: url(https://images.unsplash.com/photo-1551825687-f9de1603ed8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80);
    "
  >
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content flex justify-end w-full">
      <div class="text-white">
        <h1 class="text-5xl font-bold">Box Office News!</h1>
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
      ><swiper-slide class="flex justify-center items-center"
        >Slide 4</swiper-slide
      ><swiper-slide class="flex justify-center items-center"
        >Slide 5</swiper-slide
      ><swiper-slide class="flex justify-center items-center"
        >Slide 6</swiper-slide
      ><swiper-slide class="flex justify-center items-center"
        >Slide 7</swiper-slide
      ><swiper-slide class="flex justify-center items-center"
        >Slide 8</swiper-slide
      ><swiper-slide class="flex justify-center items-center"
        >Slide 9</swiper-slide
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
