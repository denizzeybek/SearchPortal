<template>
  <div>
    <transactions-paginated
      :data="getUserData"
      :total-pages="Math.ceil(getUserData.length / 4)"
      :total="getUserData.length"
      :per-page="4"
      :current-page="currentPage"
      @pagechanged="onPageChange"
    />
  </div>
</template>

<script>
import TransactionsPaginated from "./TransactionsPaginated.vue";
import { mapGetters } from "vuex";
export default {
  async created() {
    await this.$store.dispatch("getDataAction");
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  methods: {
    onPageChange(page) {
      this.currentPage = page;
    },
  },
  computed: {
    ...mapGetters(["getUserData"]),
  },
  components: {
    TransactionsPaginated,
  },
};
</script>

<style scoped lang="scss">
hr {
  border: 1px solid silver;
  width: 100%;
}
h2 {
  font-size: 1.5rem;
  text-align: center;
  margin-top: 0;
}
.transactions {
  display: flex;
  height: calc(100% - 1.25rem);
  flex-direction: column;
  .row {
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0.75rem 0;
  }
  .col {
    justify-content: center;
    flex-basis: 25%;
    display: inline-flex;
  }
  .pagination {
    display: flex;
    justify-content: center;
    padding: 0;
    margin: auto 0 0 0;
    list-style-type: none;
  }
  .pagination-item {
    button {
      margin: 0 !important;
      padding: 0.25rem 0.5rem;
      font-size: 1.1rem;
      border: none;
      border-radius: 0.25rem;
      background: none;
    }
    &:hover {
      cursor: pointer;
      background-color: silver;
    }
    &[disabled="disabled"] {
      color: silver;
      cursor: default;
      &:hover {
        cursor: default;
        background-color: transparent;
      }
    }
    &.active {
      color: red;
    }
  }
}
</style>
