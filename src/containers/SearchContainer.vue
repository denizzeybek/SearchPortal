<template>
  <div>
    <custom-navigation />
    <div class="pagination-outer" style="position: relative">
      <div>
        <pagination />
      </div>

      <div class="sorting-outer" style="">
        <button @click="isOrderOpen = !isOrderOpen">
          <img src="@/assets/images/order.png" />
          <span>Order By</span>
        </button>
        <div v-if="isOrderOpen" class="button-content" style="">
          <span
            @click="order(item.prop)"
            v-for="item in orderDataList"
            :key="item.id"
            >{{ item.name }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import customNavigation from "@/components/searchContainer/navigation.vue";
import pagination from "@/components/pagination/pagination.vue";
import customButton from "@/components/button/button.vue";
import searchInput from "@/components/input/searchInput.vue";
export default {
  components: {
    customNavigation,
    pagination,
    customButton,
    searchInput,
  },
  created() {
    this.$store.dispatch("getDataAction");
  },
  data() {
    return {
      isOrderOpen: false,
      orderDataList: [
        { name: "Name Ascending", prop: "nameAscending" },
        { name: "Name Descending", prop: "nameDescending" },
        { name: "Year Ascending", prop: "yearAscending" },
        { name: "Year Descending", prop: "yearDescending" },
      ],
    };
  },
  methods: {
    order(prop) {
      this.$store.dispatch("sortListAction", prop);
    },
  },
};
</script>

<style scoped lang="scss">
.btn-search {
  button {
    margin-top: 100px;
  }
}

.pagination-outer {
  .sorting-outer {
    width: 130px;
    height: 30px;
    position: absolute;
    right: 120px;
    top: 0px;
    button {
      display: flex;
      align-items: center;
      cursor: pointer;
      background: #f3f2f2;
      border: 1px solid #414141;
      border-radius: 8px;
      img {
        width: 26px;
        height: 24px;
      }
      span {
        margin-left: 4px;
        font-family: "Roboto";
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        color: #484848;
      }
      width: 130px;
      height: 30px;
    }
    .button-content {
      background: #ffffff;
      border: 1px solid #8f8f8f;
      box-shadow: 4px 6px 12px 4px rgba(0, 0, 0, 0.2);
      border-radius: 8px;
      width: 155px;
      margin-top: 16px;
      padding-left: 17px;
      padding-right: 17px;
      padding-bottom: 5px;
      padding-top: 5px;
      display: flex;
      flex-direction: column;
      span {
        width: 120px;
        padding-left: 9px;
        padding-right: 9px;
        padding-top: 4px;
        padding-bottom: 4px;
        font-family: "Roboto";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        cursor: pointer;
        color: #000000;
        &:hover {
          background: #b3b3b3;
          border-radius: 8px;
          color: white;
        }
      }
    }
  }
}
</style>