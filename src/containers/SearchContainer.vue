<template>
  <div>
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

    <pagination />

  </div>
</template>

<script>
import pagination from "@/components/pagination/pagination.vue";
import customButton from "@/components/button/button.vue";
import searchInput from "@/components/input/searchInput.vue";
export default {
  components: {
    pagination,
    customButton,
    searchInput,
  },
  created() {
    this.$store.dispatch("getDataAction");
  },
};
</script>

<style scoped lang="scss">
.btn-search {
  button {
    margin-top: 100px;
  }
}
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
// .search-results {
//   display: flex;
//   justify-content: center;
//   .result-content {
//     max-width: 726px;
//     width: 100%;
//     height: 480px;
//     // background-color: antiquewhite;

//     .search-row {
//       max-width: 726px;
//       width: 100%;
//       height: 88px;
//       // background-color: aquamarine;
//       border-bottom: 1px solid #7e7e7e;
//       margin-top: 10px;
//       margin-bottom: 10px;
//       .search-row-content {
//         margin-bottom: 10px;
//         width: 100%;
//         height: 78px;
//         &:hover {
//           background: rgba(79, 117, 194, 0.21);
//           border-radius: 8px;
//         }
//       }
//     }
//   }
// }
.search-input {
  margin-bottom: 50px;
}
</style>