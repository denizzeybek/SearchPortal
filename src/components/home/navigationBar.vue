<template>
  <nav class="nav-home">
    <custom-button
      @clickBtn="$router.push('/add-link')"
      class="btn-nav"
      buttonText="Add New Record"
    />
  </nav>
</template>

<script>
import customButton from "@/components/button/button.vue";

export default {
  components: {
    customButton,
  },
};
</script>

<style scoped lang="scss">
.nav-home {
  width: 98.7vw;
  display: flex;
  justify-content: flex-end;

  .btn-nav {
    margin-right: 57px;
    margin-top: 64px;
    margin-left: 110px;
    margin-bottom: 10px;
  }
}
@media only screen and (max-width: 420px) {
  .nav-home {
    flex-direction: column;
    justify-content: center !important;

    .btn-nav {
      margin-right: 0px !important;
      margin-top: 64px;
    }
  }
}
</style>