<template>
  <div>
    <navigation-bar />
    <logo />
    <search />
    <news />
    <maps />
  </div>
</template>

<script>
import customButton from "@/components/button/button.vue";
import logo from "@/components/home/logo.vue";
import navigationBar from "@/components/home/navigationBar.vue";
import search from "@/components/home/search.vue";
import news from "@/components/home/news.vue";
import maps from "@/components/home/maps/maps.vue";

export default {
  components: {
    customButton,
    logo,
    navigationBar,
    search,
    news,
    maps,
  },
};
</script>

 