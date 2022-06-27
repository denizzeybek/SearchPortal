<template>
  <nav>
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
nav {
  width: 100vw;
  display: flex;
  justify-content: flex-end;

  .btn-nav {
    margin-right: 64px;
    margin-top: 64px;
  }
}
</style>