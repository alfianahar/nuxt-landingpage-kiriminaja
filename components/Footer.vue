<template>
  <footer class="py-12 bg-primary text-base-100">
    <div class="mx-16 px-3 grid grid-flow-col auto-cols-auto gap-4">
      <div class="flex flex-col space-y-4">
        <span class="footer-title">PT. Selalu Siap Solusi</span>
        <div class="inline-flex space-x-4">
          <svg
            class="fill-current w-5 h-5 mt-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"
            />
          </svg>
          <p class="mb-4 max-w-lg">
            Jl. Palagan Tentara Pelajar No. 30 KM 08, Mudal, Kelurahan
            Sariharjo, Kecamatan Ngaglik, Kabupaten Sleman, Provinsi Daerah
            Istimewa Yogyakarta
          </p>
        </div>
        <div class="inline-flex space-x-4">
          <svg
            class="fill-current w-5 h-5 mt-[0.1rem]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
            />
          </svg>
          <p class="mb-4">support@kiriminaja.com</p>
        </div>
        <div class="inline-flex space-x-4">
          <svg
            class="fill-current w-5 h-5 mt-[0.1rem]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm90.7 96.7c9.7-2.6 19.9 2.3 23.7 11.6l20 48c3.4 8.2 1 17.6-5.8 23.2L168 231.7c16.6 35.2 45.1 63.7 80.3 80.3l20.2-24.7c5.6-6.8 15-9.2 23.2-5.8l48 20c9.3 3.9 14.2 14 11.6 23.7l-12 44C336.9 378 329 384 320 384C196.3 384 96 283.7 96 160c0-9 6-16.9 14.7-19.3l44-12z"
            />
          </svg>
          <p class="mb-4">0274 8000 123</p>
        </div>
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
            <font-awesome-icon :icon="['fab', 'tiktok']" size="lg" />
          </NuxtLink>
          <NuxtLink to="/" class="hover:scale-125 transition duration-200">
            <font-awesome-icon :icon="['fab', 'square-facebook']" size="lg" />
          </NuxtLink>
          <NuxtLink to="/" class="hover:scale-125 transition duration-200">
            <font-awesome-icon :icon="['fab', 'instagram']" size="lg" />
          </NuxtLink>
          <NuxtLink to="/" class="hover:scale-125 transition duration-200">
            <font-awesome-icon :icon="['fab', 'linkedin']" size="lg" />
          </NuxtLink>
          <NuxtLink to="/" class="hover:scale-125 transition duration-200">
            <font-awesome-icon :icon="['fab', 'youtube']" size="lg" />
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
