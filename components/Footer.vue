<template>
  <footer class="py-12 bg-primary text-base-100">
    <div class="mx-16 px-3 grid grid-flow-col auto-cols-auto gap-4">
      <div class="flex flex-col space-y-4">
        <span class="footer-title">PT. Selalu Siap Solusi</span>
        <p class="mb-4 max-w-lg">
          Jl. Palagan Tentara Pelajar No. 30 KM 08, Mudal, Kelurahan Sariharjo,
          Kecamatan Ngaglik, Kabupaten Sleman, Provinsi Daerah Istimewa
          Yogyakarta
        </p>
        <p class="mb-4">support@kiriminaja.com</p>
        <p class="mb-4">0274 8000 123</p>
        <div class="pt-4">
          <span class="footer-title">Terdaftar di</span>
          <img
            src="~/assets/images/logo-kominfo.svg"
            alt="kominfo-logo"
            width="145"
            class="py-1 h-auto max-w-full mt-4"
          />
        </div>
      </div>
      <div class="flex flex-col space-y-4">
        <span class="footer-title">Layanan</span>
        <NuxtLink to="/about" class="place-self-start">
          Integrasi API
        </NuxtLink>
      </div>
      <div class="flex flex-col space-y-4">
        <span class="footer-title">KiriminAja</span>
        <NuxtLink to="/"> Beranda </NuxtLink>
        <NuxtLink to="/about"> Tentang Kami </NuxtLink>
        <NuxtLink to="/about"> Masuk </NuxtLink>
      </div>
      <div class="flex flex-col space-y-4">
        <span class="footer-title">Download App</span>
        <div class="space-y-2">
          <img
            src="~/assets/images/ic-download-android.svg"
            alt="kominfo-logo"
            width="145"
            class="h-auto max-w-full mr-4"
          />
          <img
            src="~/assets/images/ic-download-ios.svg"
            alt="kominfo-logo"
            width="145"
            class="h-auto max-w-full mr-4"
          />
        </div>
        <span class="footer-title pt-4">Ikuti Kami</span>
        <div class="inline-flex space-x-4">
          <NuxtLink to="/" class="hover:scale-125 transition duration-200">
            <font-awesome-icon icon="fa-brands fa-tiktok" size="lg" />
          </NuxtLink>
          <NuxtLink to="/" class="hover:scale-125 transition duration-200">
            <font-awesome-icon icon="fa-brands fa-square-facebook" size="lg" />
          </NuxtLink>
          <NuxtLink to="/" class="hover:scale-125 transition duration-200">
            <font-awesome-icon icon="fa-brands fa-instagram" size="lg" />
          </NuxtLink>
          <NuxtLink to="/" class="hover:scale-125 transition duration-200">
            <font-awesome-icon icon="fa-brands fa-linkedin" size="lg" />
          </NuxtLink>
          <NuxtLink to="/" class="hover:scale-125 transition duration-200">
            <font-awesome-icon icon="fa-brands fa-youtube" size="lg" />
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="mx-16 px-3 py-4 text-center">
      <p>
        Copyright © 2022
        <NuxtLink to="/" class="font-bold"> KiriminAja.com. </NuxtLink> All
        rights reserved.
      </p>
    </div>
  </footer>
</template>
