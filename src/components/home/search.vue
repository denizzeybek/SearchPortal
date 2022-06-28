<template>
  <div class="search-section">
    <div class="search-header">
      <span>Find in records</span>
    </div>

    <search-input />

    <div v-if="getTypeList.length > 0 ? true : false" class="search-list">
      <div
        v-for="index in getTypeList.slice(0, 3)"
        :key="index.id"
        class="search-row"
      >
        <div class="row-icon">
          <img src="@/assets/images/Vector.png" class="search-" alt="vector" />
        </div>
        <div class="row-content">
          <div class="row-text">
            <span>{{ index.NameSurname }} </span>
          </div>
          <div class="row-detail">
            <span>{{ index.Company }} </span>
          </div>
        </div>
      </div>
      <div class="load-more">
        <custom-button
          :isSubmit="false"
          class="btn-more"
          buttonText="Show more..."
          @clickBtn="$router.push('/search-view')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import customButton from "@/components/button/button.vue";
import searchInput from "@/components/home/searchInput.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    customButton,
    searchInput,
  },
  created() {
    localStorage.removeItem("inputData");
    this.$store.dispatch("getDataAction");
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getTypeList"]),
  },
};
</script>

<style scoped lang="scss">
.search-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .search-header {
    width: 692px;

    span {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 36px;
      color: #090a0a;
    }
  }

  .search-list {
    width: 715px;
    height: auto;
    padding-top: 15px;
    padding-bottom: 15px;

    background: #ffffff;
    border: 1px solid #484848;
    border-radius: 24px;
    margin-left: 25px;
    margin-top: 15px;

    .search-row {
      width: 90%;
      padding-left: 10px;
      padding-right: 40px;
      padding-top: 7px;
      padding-bottom: 7px;
      display: flex;
      align-items: center;

      .row-icon {
        img {
          width: 18px;
          height: 22px;
          margin-left: 22px;
          margin-right: 15px;
        }
      }
      .row-content {
        .row-text {
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          color: #090a0a;
        }
        .row-detail {
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 16px;
          color: #72777a;
        }
      }
    }
    .load-more {
      width: 100%;
      display: flex;
      justify-content: center;
      button {
        text-decoration: none;
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #090a0a;
        background: none;
        border: none;
        cursor: pointer;
      }
    }
  }
}
</style>