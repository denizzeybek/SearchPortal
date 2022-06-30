<template>
  <div>
    <transactions-paginated
      :data="getTypeList"
      :total-pages="Math.ceil(this.getTypeList.length / perPage)"
      :total="getTypeList.length"
      :per-page="5"
      :maxVisibleButtons="perPage"
      :current-page="currentPage"
      @pagechanged="onPageChange"
    />
  </div>
</template>

<script>
import TransactionsPaginated from "@/components/pagination/TransactionsPaginated.vue";
import { mapGetters } from "vuex";
export default {
  async created() {
    // await this.$store.dispatch("getDataAction");
  },
  data() {
    return {
      currentPage: 1,
      perPage: 5,
    };
  },
  methods: {
    onPageChange(page) {
      this.currentPage = page;
    },
  },
  computed: {
    ...mapGetters(["getTypeList"]),
  },
  components: {
    TransactionsPaginated,
  },
};
</script>
