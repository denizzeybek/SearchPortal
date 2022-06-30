<template>
  <nav class="search-general">
    <div class="logo-section" @click="$router.push('/')">
      <img src="@/assets/images/logo.png" alt="" />
    </div>
    <div class="search-era">
      <searchInput
        imgLeft="15px"
        imgBottom="-42px"
        widthInput="509px"
        marginTop="25px"
        contentMargin="0px"
        searchBtnWidth="138px"
      />
    </div>
    <div class="record-era">
      <custom-button
        @clickBtn="$router.push('/add-link')"
        class="btn-nav"
        buttonText="Add New Record"
      />
    </div>
  </nav>
</template>

<script>
import customButton from "@/components/button/button.vue";
import searchInput from "@/components/input/searchInput.vue";
export default {
  components: {
    customButton,
    searchInput,
  },
};
</script>

<style scoped lang="scss">
.search-general {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  width: 100vw;
  .logo-section {
    cursor: pointer;
    margin-left: 30px;
    img {
      width: 149px;
      height: 63px;
    }
  }
  .search-era {
    max-width: 700px;
    margin-left: 95px;
    margin-bottom: 40px;
  }
  .record-era {
    margin-right: 30px;
    margin-bottom: 5px;
  }
}

.search-input {
  margin-bottom: 50px;
}

@media only screen and (max-width: 1281px) {
  .search-era {
    margin-left: 60px !important;
  }
}
</style>