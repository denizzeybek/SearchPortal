<template>
  <div class="news-section">
    <div class="news-header">
      <span>Top News</span>
    </div>

    <div class="news-carousel">
      <custom-carousel :cardNumber="4" v-if="windowWidth >= 1620"/>
      <custom-carousel :cardNumber="3" v-else-if="windowWidth >= 1280"/>
      <custom-carousel :cardNumber="2" v-else-if="windowWidth >= 768"/>
      <custom-carousel :cardNumber="1" v-else/>
    </div>
  </div>
</template>

 <script>
import customCarousel from "@/components/carousel/customCarousel.vue";
export default {
  components: {
    customCarousel,
  },
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
  },
  watch: {
    windowWidth(newWidth, oldWidth) {
      console.log("window.innerWidth ", newWidth);
      // this.windowWidth = window.innerWidth;
    },
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>

<style scoped lang="scss">
.news-section {
  width: 100%;
  margin-top: 93px;
  .news-header {
    margin-left: 110px;
    margin-bottom: 50px;
    span {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 36px;
      color: #090a0a;
    }
  }
  .news-carousel {
    width: 100%;
    // background-color: antiquewhite;
    height: 385px;
    display: flex;
    justify-content: center;
  }
}
</style>