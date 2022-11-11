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
  <section class="bg-gray-200 h-screen flex justify-center items-center">
    <div class="px-16 py-8 w-full">
      <swiper
        :pagination="true"
        :modules="modules"
        class="bg-blue-200 h-[80vh]"
      >
        <swiper-slide class="flex justify-center items-center">
          <button @click="countStore.count--" class="btn">-</button>
          <div class="stats shadow mx-6">
            <div class="stat">
              <div class="stat-title">Slide 1</div>
              <div class="stat-value text-center">{{ countStore.count }}</div>
            </div>
          </div>
          <button @click="countStore.count++" class="btn">+</button>
        </swiper-slide>
        <swiper-slide class="flex justify-center items-center">
          Slide 2
        </swiper-slide>
        <swiper-slide class="flex justify-center items-center">
          Slide 3
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import "../assets/css/swiper.min.css";

const modules = [Pagination];
const countStore = useCountStore();

useHead({
  title: "KiriminAJA",
});
</script>
