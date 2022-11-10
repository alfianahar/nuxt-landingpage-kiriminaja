<template>
  <footer class="py-6 bg-primary text-base-100">
    <div class="mx-16 px-3 grid grid-cols-4 gap-4">
      <div class="grid col-span-2 w-4/5">
        <span class="footer-title">PT. Selalu Siap Solusi</span>
        <p class="mb-4">
          Jl. Palagan Tentara Pelajar No. 30 KM 08, Mudal, Kelurahan Sariharjo,
          Kecamatan Ngaglik, Kabupaten Sleman, Provinsi Daerah Istimewa
          Yogyakarta
        </p>
        <p class="mb-4">support@kiriminaja.com</p>
        <p class="mb-4">0274 8000 123</p>
      </div>
      <div class="grid col-span-1 grid-flow-row grid-rows-4">
        <span class="footer-title">Layanan</span>
        <NuxtLink to="/about" class="row-span-3"> Integrasi API </NuxtLink>
      </div>
      <div class="grid col-span-1">
        <span class="footer-title">KiriminAja</span>
        <NuxtLink to="/about"> Beranda </NuxtLink>
        <NuxtLink to="/about"> Tentang Kami </NuxtLink>
        <NuxtLink to="/about"> Masuk </NuxtLink>
      </div>
    </div>
    <div class="mx-16 px-3 text-center">
      <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
    </div>
  </footer>
</template>
