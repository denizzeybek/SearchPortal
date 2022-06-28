<template>
  <div class="search-section">
    <div class="search-content" :style="{marginLeft:contentMargin}">
      <div class="search-input">
        <img :style="{bottom:imgBottom, left:imgLeft}" src="@/assets/images/search.png" class="search-img" />
        <input
          @keyup="onTyping"
          v-model="searchText"
          class="form-control"
          :style="{ width: widthInput }"
          type="text"
        />
      </div>
      <custom-button
        @clickBtn="$router.push('/search-view')"
        class="btn-search"
        buttonText="Search"
        :style="{ marginTop: marginTop }"
        :disabledProp="searchText.length > 1 && getTypeList.length > 0 ? false : true"
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
    imgBottom:{
      type: String,
      default: () => "-6px",
    },
    imgLeft:{
      type: String,
      default: () => "35px",
    },
    contentMargin:{
      type: String,
      default: () => "210px",
    },
  },
  components: {
    customButton,
  },
  data() {
    return {
      show: false,
      searchText: "",
    };
  },
  methods: {
    onTyping() {
      this.show = true;
      if (this.searchText === "") {
        this.show = false;
      }
      this.$store.dispatch("setTypeListAction", this.searchText);
      // action işlemini gerçekleştir, search et ve listeye dön
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
</style>