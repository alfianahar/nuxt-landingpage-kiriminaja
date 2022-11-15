<template>
  <header>
    <div
      class="hero min-h-screen"
      style="
        background-image: url(https://images.unsplash.com/photo-1603201667141-5a2d4c673378?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=896&q=80);
      "
    >
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-white">
        <div class="backdrop-blur-sm">
          <h1 class="mb-5 text-5xl font-semibold leading-snug text-black">
            <span
              class="underline underline-offset-4 decoration-4 decoration-primary text-white"
              >Memberi solusi teknologi
            </span>
            <br />
            untuk kebutuhan supply chain yang mempermudah ekosistem bisnis
            <br />
            Indonesia berkembang.
          </h1>
          <p class="mb-5">
            Pengiriman untuk UMKM, Pebisnis Online, dan seluruh masyarakat
            Indonesia.
          </p>
        </div>
      </div>
    </div>
  </header>
  <section class="min-h-screen">
    <div v-if="team.team == undefined" class="mx-16 py-6">Loading ...</div>
    <div v-else class="mx-16 py-6 flex flex-1 flex-wrap">
      <div
        v-for="data in team.team"
        :key="data.name"
        class="card card-compact w-96 bg-base-100 shadow-xl m-2"
      >
        <figure>
          <img :src="data.img" :alt="name" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ data.name }}</h2>
          <p>{{ data.position }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const team = useDataStore();
team.getTeamDetail();

useHead({
  title: "KiriminAJA | Tentang Kami",
});
</script>
