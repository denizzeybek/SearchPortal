<template>
  <div class="transactions">
    <div class="search-results">
      <div class="result-content">
        <div
          v-for="(transaction, index) in paginatedData"
          :key="index"
          class="search-row"
        >
          <div class="search-row-content">
            <div class="row-left">
              <div class="row-icon">
                <img
                  src="@/assets/images/Vector.png"
                  class="search-"
                  alt="vector"
                />
              </div>
              <div class="row-content">
                <div class="row-text">
                  <span class="text-span">{{ transaction.NameSurname }} </span>
                </div>

                <div class="row-detail">
                  <span class="detail-span">{{ transaction.Company }} </span>
                </div>
              </div>
            </div>

            <div class="row-right">
              <div class="date-content">
                <div class="row-text">
                  <span>{{ transaction.Country }} </span>
                </div>
                <div class="row-detail">
                  <span>{{ transaction.Date }} </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="result-order"></div>
    </div>
    <!--#region pagination count -->
    <ul class="pagination" v-if="data.length > 5 || currentPage > 1">
      <!-- <li class="pagination-item" title="Первая страница">
        <button
          type="button"
          @click="onClickFirstPage"
          :disabled="isInFirstPage"
        >
          <i>First</i>
        </button>
      </li> -->

      <li class="pagination-item" title="pagination">
        <button
          type="button btn-next"
          @click="onClickPreviousPage"
          :disabled="isInFirstPage"
        >
          <i>Previous</i>
        </button>
      </li>

      <li class="pagination-item" v-for="(page, index) in pages" :key="index">
        <button
          type="button"
          @click="onClickPage(page.number)"
          :disabled="page.isDisabled"
          :class="{ active: isPageActive(page.number) }"
        >
          {{ page.number }}
        </button>
      </li>

      <li class="pagination-item" title="pagination">
        <button
          type="button btn-next"
          style="width: 85px"
          @click="onClickNextPage"
          :disabled="isInLastPage"
        >
          <i>Next</i>
        </button>
      </li>
      <!-- <li class="pagination-item" title="Последняя страница">
        <button type="button" @click="onClickLastPage" :disabled="isInLastPage">
          <i>Last</i>
        </button>
      </li> -->
    </ul>
    <!--#endregion pagination count -->
  </div>
</template>

<script>
export default {
  name: "transactions-paginated",
  props: {
    data: {
      type: Array,
      required: true,
    },
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  computed: {
    paginatedData() {
      let start = (this.currentPage - 1) * this.perPage,
        end = start + this.perPage;
      return this.data.slice(start, end);
    },
    startPage() {
      if (this.currentPage === 1) return 1;
      if (this.currentPage === this.totalPages)
        return (
          this.totalPages -
          this.maxVisibleButtons +
          (this.maxVisibleButtons - 1)
        );
      return this.currentPage - 1;
    },
    endPage() {
      return Math.min(
        this.startPage + this.maxVisibleButtons - 1,
        this.totalPages
      );
    },
    pages() {
      let range = [];
      for (let i = this.startPage; i <= this.endPage; i += 1) {
        range.push({
          number: i,
          isDisabled: i === this.currentPage,
        });
      }
      return range;
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    },
  },
  created() {},
  methods: {
    onClickFirstPage() {
      this.$emit("pagechanged", 1);
    },
    onClickPreviousPage() {
      this.$emit("pagechanged", this.$props.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit("pagechanged", page);
    },
    onClickNextPage() {
      this.$emit("pagechanged", this.$props.currentPage + 1);
    },
    onClickLastPage() {
      this.$emit("pagechanged", this.$props.totalPages);
    },
    isPageActive(page) {
      return this.currentPage === page;
    },
    onPageChange(page) {
      this.$props.currentPage = page;
    },
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
    margin: 105px 0 0 0;
    list-style-type: none;
    // margin-top:75px;
  }
  .pagination-item {
    .btn-next {
      min-width: 85px;
    }
    button {
      padding: 0.25rem 0.5rem;
      font-size: 1.1rem;
      background: #ffffff;
      border: 1px solid #484848;
      border-radius: 4px;
      margin-right: 10px;
    }

    &:hover {
      cursor: pointer;
    }
    &[disabled="disabled"] {
      color: silver;
      cursor: default;
      background-color: blue;
      &:hover {
        cursor: default;
        background-color: transparent;
      }
    }
    &.active {
      color: red;
    }
    .active {
      background: #204080;
      color: white;
    }
  }
}

.search-results {
  display: flex;
  justify-content: center;
  .result-content {
    max-width: 726px;
    width: 100%;
    height: 480px;
    // background-color: antiquewhite;

    .search-row {
      max-width: 726px;
      width: 100%;
      height: 88px;
      // background-color: aquamarine;
      border-bottom: 1px solid #7e7e7e;
      margin-top: 10px;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      .search-row-content {
        margin-bottom: 10px;
        width: 100%;
        height: 78px;
        display: flex;
        padding-left: 27px;
        padding-right: 12px;
        justify-content: space-between;
        &:hover {
          background: rgba(79, 117, 194, 0.21);
          border-radius: 8px;
        }
        .row-left {
          display: flex;
          align-items: center;
          .row-icon {
            img {
              margin-right: 15px;
              width: 18px;
              height: 22px;
            }
          }
          .row-content {
            .row-text {
              span {
                font-family: "Inter";
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 20px;
                color: #090a0a;
              }
            }
            .row-detail {
              span {
                font-family: "Inter";
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 16px;
                color: #72777a;
              }
            }
          }
        }

        .row-right {
          display: flex;
          align-items: center;
          .date-content {
            .row-text {
              text-align: end;
              span {
                font-family: "Inter";
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 20px;
                color: #484848;
              }
            }
            .row-detail {
              text-align: end;
              span {
                font-family: "Inter";
                font-style: normal;
                font-weight: 500;
                font-size: 16px;
                line-height: 16px;
                color: #484848;
              }
            }
          }
        }
      }
    }
  }
}
</style>
