<template>
  <div ref="main" :data-theme="theme" class="font-Poppins">
    <Navbar />
    <slot />
    <Footer />
  </div>
</template>

<script setup>
import { computed } from "vue";
const themeStore = useTheme();

const theme = computed(() => {
  if (themeStore.darkMode) return "dark";
  return "mytheme";
});
</script>
