<template>
  <nav
    id="navbar"
    class="py-2 fixed top-0 left-0 right-0 z-50 transition-all ease-linear duration-300 text-white"
    :class="{
      'shadow-2xl shadow-primary/50 bg-base-100 text-black': !showNavbar,
    }"
  >
    <div class="mx-16 px-3 flex max-h-16">
      <NuxtLink to="/" class="self-center">
        <img
          src="~/assets/images/svg-logo-primary.svg"
          alt="kiriminaja-logo"
          width="145"
          class="py-1 h-auto max-w-full mr-4"
        />
      </NuxtLink>
      <div class="flex justify-end items-center flex-1">
        <label class="swap swap-rotate btn btn-primary btn-circle btn-sm mr-5">
          <!-- this hidden checkbox controls the state -->
          <input type="checkbox" />

          <!-- sun icon -->
          <svg
            class="swap-on fill-current w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
            />
          </svg>

          <!-- moon icon -->
          <svg
            class="swap-off fill-current w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
            />
          </svg>
        </label>
        <NuxtLink to="/" class="py-5">
          <button class="btn btn-ghost font-bold rounded-full">Beranda</button>
        </NuxtLink>
        <NuxtLink to="/about" class="py-5">
          <button class="btn btn-ghost font-bold rounded-full">
            Tentang Kami
          </button>
        </NuxtLink>
        <NuxtLink to="/api-integration" class="py-5 px-1">
          <button class="btn btn-ghost font-bold rounded-full">
            Integrasi API
          </button>
        </NuxtLink>
        <NuxtLink
          to="/https://dashboard.kiriminaja.com/mbr20/login"
          target="_blank"
          rel="noopener"
          class="ml-4 py-5"
        >
          <button class="btn btn-primary font-bold text-base-100 rounded-full">
            Masuk
          </button>
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  el: "#navbar",
  data() {
    return {
      showNavbar: true,
      // lastScrollPosition: 0,
      // scrollValue: 0,
    };
  },

  // mounted() {
  //   this.lastScrollPosition = window.pageYOffset;
  //   window.addEventListener("scroll", this.onScroll);
  //   const viewportMeta = document.createElement("meta");
  //   viewportMeta.name = "viewport";
  //   viewportMeta.content = "width=device-width, initial-scale=1";
  //   document.head.appendChild(viewportMeta);
  // },

  // beforeDestroy() {
  //   window.removeEventListener("scroll", this.onScroll);
  // },

  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    // onScroll() {
    //   if (window.pageYOffset < 0) {
    //     return;
    //   }
    //   if (Math.abs(window.pageYOffset - this.lastScrollPosition) < 60) {
    //     return;
    //   }
    //   this.showNavbar = window.pageYOffset < this.lastScrollPosition;
    //   this.lastScrollPosition = window.pageYOffset;
    // },
    handleScroll() {
      // when the user scrolls, check the pageYOffset
      if (window.pageYOffset > 90) {
        // user is scrolled
        if (this.showNavbar) this.showNavbar = false;
      } else {
        // user is at top of page
        if (!this.showNavbar) this.showNavbar = true;
      }
    },
  },
};
</script>
