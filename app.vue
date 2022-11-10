<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script>
export default {
  head() {
    return {
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    };
  },
};
</script>
