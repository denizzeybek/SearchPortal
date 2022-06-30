<template>
  <div class="carousel-outer">
    <div class="carousel">
      <div class="inner" ref="inner" :style="innerStyles">
        <!-- <div class="card" v-for="card in cards.slice(0, 4)" :key="card.id"> -->
        <div
          class="card"
          v-for="card in cards.slice(0, cardNumber)"
          :key="card.id"
        >
          <div class="card-content">
            <!-- <img :src="card.img" /> -->
            <!-- <img :src="`/img/image${card.id}.png`" /> -->
            <img :src="getImgUrl(card.img2)" v-bind:alt="card.img2" />
            <!-- <img :src="card.img2" /> -->
            <div class="card-body">
              <span class="card-header">{{ card.headerText }} </span>
              <span class="card-header">{{ card.bodyText }} </span>
              <span class="card-content">{{ card.contentText }} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="btn-car btn-prev" @click="prev">
      <img class="btn-img" src="@/assets/images/prev.png" />
    </button>
    <button class="btn-car btn-next" @click="next">
      <img class="btn-img" src="@/assets/images/next.png" />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    cardNumber: { type: Number, default: 3 },
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          img: "//picsum.photos/300/200?1",
          headerText: "A Plan to Rebuild Bus Terminal ",
          bodyText: "Eveyone Loves to Hate",
          contentText: "1h ago bt Troy Corison",
          img2: "image1",
        },
        {
          id: 2,
          img: "//picsum.photos/300/200?2",
          headerText: "A Plan to Rebuild Bus Terminal ",
          bodyText: "Eveyone Loves to Hate",
          contentText: "2h ago bt Troy Corison",
          img2: "image2",
        },
        {
          id: 3,
          img: "//picsum.photos/300/200?3",
          headerText: "A Plan to Rebuild Bus Terminal ",
          bodyText: "Eveyone Loves to Hate",
          contentText: "3h ago bt Troy Corison",
          img2: "image3",
        },
        {
          id: 4,
          img: "//picsum.photos/300/200?4",
          headerText: "A Plan to Rebuild Bus Terminal ",
          bodyText: "Eveyone Loves to Hate",
          contentText: "4h ago bt Troy Corison",
          img2: "image4",
        },
        {
          id: 5,
          img: "//picsum.photos/300/200?5",
          headerText: "A Plan to Rebuild Bus Terminal ",
          bodyText: "Eveyone Loves to Hate",
          contentText: "5h ago bt Troy Corison",
          img2: "image5",
        },
      ],
      innerStyles: {},
      step: "",
      transitioning: false,
    };
  },
  mounted() {
    this.setStep();
    this.resetTranslate();
  },
  methods: {
    setStep() {
      const innerWidth = this.$refs.inner.scrollWidth;
      const totalCards = this.cards.length;
      this.step = `${innerWidth / totalCards}px`;
    },

    next() {
      if (this.transitioning) return;

      this.transitioning = true;

      this.moveLeft();

      this.afterTransition(() => {
        const card = this.cards.shift();
        this.cards.push(card);
        this.resetTranslate();
        this.transitioning = false;
      });
    },

    prev() {
      if (this.transitioning) return;

      this.transitioning = true;

      this.moveRight();

      this.afterTransition(() => {
        const card = this.cards.pop();
        this.cards.unshift(card);
        this.resetTranslate();
        this.transitioning = false;
      });
    },

    moveLeft() {
      this.innerStyles = {
        transform: `translateX(-${this.step})
                    translateX(-${this.step})`,
      };
    },

    moveRight() {
      this.innerStyles = {
        transform: `translateX(${this.step})
                    translateX(-${this.step})`,
      };
    },

    afterTransition(callback) {
      const listener = () => {
        callback();
        this.$refs.inner.removeEventListener("transitionend", listener);
      };
      this.$refs.inner.addEventListener("transitionend", listener);
    },

    resetTranslate() {
      this.innerStyles = {
        transition: "none",
        transform: `translateX(-${this.step})`,
      };
    },
    getImgUrl(pet) {
      var images = require.context("@/assets/images/", false, /\.jpeg$/);
      return images("./" + pet + ".jpeg");
    },
  },
};
</script>

<style lang="scss">
.carousel-outer {
  position: relative;
  .carousel {
    width: 90vw;
    overflow: hidden;
    margin-left: 50px;
    height: 400px;

    .inner {
      transition: transform 0.2s;
      white-space: nowrap;
      margin-left: 230px;

      .card {
        width: 330px;
        height: 200px;
        margin-right: 10px;
        display: inline-flex;

        /* optional */
        // background-color: #39b1bd;
        color: white;
        border-radius: 4px;
        align-items: center;
        justify-content: center;
        margin-left: 23px;

        .card-content {
          img {
            min-width: 327px;
            min-height: 195px;
            position: relative;
            top: 88px;
          }
          .card-body {
            max-width: 320px !important;
            width: 320px;
            height: 150px;
            z-index: 2;
            position: relative;
            color: red;
            bottom: -90px;
            display: flex;
            flex-direction: column;

            .card-header {
              font-family: "Inter";
              font-style: normal;
              font-weight: 700;
              font-size: 16px;
              line-height: 24px;
              color: #090a0a;
            }
            .card-content {
              font-family: "Inter";
              font-style: normal;
              font-weight: 400;
              font-size: 12px;
              line-height: 16px;
              color: #6c7072;
            }
            span {
              width: 100%;
              // background-color:blue;
            }
          }
        }
      }
    }
  }

  .btn-car {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 48px;
    height: 48px;
    background: #eeeeee;
    border: none;
    border-radius: 50%;

    img {
      width: 24px;
      height: 24px;
      color: #8a8a8a;
    }
  }

  .btn-prev {
    position: absolute;
    left: 10px;
    top: 90px;
  }
  .btn-next {
    position: absolute;
    right: 130px;
    top: 90px;
  }
}
@media only screen and (max-width: 1281px) {
  .btn-next {
    position: absolute;
    right: -10px !important;
  }
  .carousel-outer {
    margin-left: 0px !important;
  }
  .inner{
    margin-left:230px !important;
  }
}

@media only screen and (max-width: 1441px) {
  .carousel{
    width:88.5vw !important;
  }
  .inner{
    margin-left:220px !important;
  }
  .carousel-outer {
    margin-left: 100px;
  }
}
@media only screen and (min-width: 1919px) {
  .inner {
    margin-left: 305px !important;
  }
}
/* optional */
</style>
