<template>
  <div class="search-section">
    <div class="search-content" :style="{ marginLeft: contentMargin }">
      <div class="search-input">
        <img
          :style="{ bottom: imgBottom, left: imgLeft }"
          src="@/assets/images/search.png"
          class="search-img"
        />
        <input
          @keyup="onTyping"
          v-model="searchText"
          class="form-control"
          :style="{ width: widthInput }"
          type="text"
        />
      </div>
      <!-- <custom-button
        @clickBtn="onEnter"
        class="btn-search"
        buttonText="Search"
        :btnWidth="searchBtnWidth"
        :style="{ marginTop: marginTop }"
        :disabledProp="(searchText.length != '') && (searchText.length > 1) && (getTypeList.length > 0 ? false : true)"

      /> -->
      <custom-button
        @clickBtn="onEnter"
        class="btn-search"
        buttonText="Search"
        :btnWidth="searchBtnWidth"
        :style="{ marginTop: marginTop }"
        :disabledProp="searchText.length > 1 ? false : true"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import customButton from "@/components/button/button.vue";

export default {
  props: {
    widthInput: {
      type: String,
      default: () => "654px",
    },
    marginTop: {
      type: String,
      default: () => "0px",
    },
    imgBottom: {
      type: String,
      default: () => "-6px",
    },
    imgLeft: {
      type: String,
      default: () => "35px",
    },
    contentMargin: {
      type: String,
      default: () => "210px",
    },
    searchBtnWidth: {
      type: String,
      default: () => "200px",
    },
  },
  components: {
    customButton,
  },
  async mounted() {
    await this.$store.dispatch("getDataAction");
    let stored = localStorage.getItem("inputData");
    if (stored != null) {
      this.searchText = stored;
      this.$store.dispatch("setTypeListAction", this.searchText);
      this.$emit("inputText", this.searchText);
    }
  },
  data() {
    return {
      show: false,
      searchText: "",
    };
  },
  methods: {
    onTyping() {
      if (this.searchText.length > 2) {
        this.show = true;
      }
      if (this.searchText === "") {
        this.show = false;
      } else {
        localStorage.setItem("inputData", this.searchText);
        this.$store.dispatch("setTypeListAction", this.searchText);
      }
      this.$emit("inputText", this.searchText);
    },
    onEnter() {
      if (this.searchText != "") {
        let vm = this;
        vm.onTyping();
        if (this.$route.path != "/search-view") {
          this.$router.push("/search-view");
        }
      }
    },
  },
  computed: {
    ...mapGetters(["getTypeList"]),
  },
};
</script>

<style  lang="scss">
.search-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .search-content {
    display: flex;
    align-items: center;
    // margin-left: 210px;
    margin-top: 10px;
    .search-input {
      .form-control {
        background: #ffffff;
        border: 2px solid #204080;
        border-radius: 8px;
        // width: 654px;
        height: 48px;
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        color: #090a0a;
        line-height: 16px;
        padding-left: 40px;
      }
      .search-img {
        width: 24px;
        height: 24px;
        position: relative;
        // bottom: -7px;
        // left: 35px;
      }
    }
    .btn-search {
      margin-left: 10px;
    }
  }
}

@media (max-width: 420px) {
  .search-section {
    margin-right: 30px;
    .search-content {
      max-width: 414px !important;
      display: flex;
      flex-direction: column;
      margin: 0 !important;
      .search-input {
        max-width: 300px !important;
        margin-bottom: 10px;
        input {
          max-width: 300px !important;
        }
        .search-img {
          bottom: -42px !important;
          left: 19px !important;
        }
      }
    }
  }
}
</style>