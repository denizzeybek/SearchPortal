<template>
  <div class="logo-section">
    <img class="logo-img" src="@/assets/images/logo.png" />
    <p class="logo-text">Search app</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.logo-section {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .logo-img {
    width: 278px;
    height: 115px;
  }

  .logo-text {
    height: 20px;
    z-index: 2;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #484848;
    margin-left: 260px;
    margin-top: 10px;
  }
}
</style>