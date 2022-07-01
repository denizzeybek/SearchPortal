<template>
  <div>
    <nav class="add-general">
      <div class="logo-section" @click="$router.push('/')">
        <img src="@/assets/images/logo.png" alt="" />
      </div>
      <div class="return-section" @click="$router.push('/')">
        <img src="@/assets/images/leftArrow.png" alt="" />
        <span>Return to List Page</span>
      </div>
    </nav>
    <div class="form-general">
      <div class="form-section">
        <formInput :formElements="formElements" />
      </div>
      <div v-if="getError" class="toastr-overall">
        <a @click="closeToastr" href="#">
          <img src="@/assets/images/cross.png" alt="cross" />
        </a>
        <span class="toastr-header">Error while adding link element</span>
        <span v-for="error in getErrorList" :key="error.id" class="toastr-error">{{error.prop}} </span>
      </div>
    </div>
  </div>
</template>

<script>
import formInput from "@/components/form/form.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    formInput,
  },
  data() {
    return {
      formElements: [
        {
          id: 1,
          label: "Name Surname",
          placeHolder: "Enter name and surname",
          modelText: "nameText",
          type: "text",
        },
        {
          id: 2,
          label: "Country",
          placeHolder: "Enter a country",
          modelText: "countryText",
          type: "text",
        },
        {
          id: 3,
          label: "City",
          placeHolder: "Enter a city",
          modelText: "cityText",
          type: "text",
        },
        {
          id: 4,
          label: "Email",
          placeHolder: "Enter a email(abc@xyz.com)",
          modelText: "emailText",
          type: "email",
        },
      ],
    };
  },
  methods: {
    closeToastr(){
      this.$store.dispatch("setErrorAction", false)
    }
  },
  computed: {
    ...mapGetters(["getError", "getErrorList"]),
  },
  watch: {
    getError(newValue, oldValue) {
      setTimeout(() => {
        this.$store.dispatch("setErrorAction", false);
        document.querySelector("#label-nameText").classList.remove("error");
        document.querySelector("#nameText").classList.remove("error");
        document.querySelector("#label-emailText").classList.remove("error");
        document.querySelector("#emailText").classList.remove("error");
        document.querySelector("#label-countryText").classList.remove("error");
        document.querySelector("#countryText").classList.remove("error");
        document.querySelector("#label-cityText").classList.remove("error");
        document.querySelector("#cityText").classList.remove("error");
      }, "5000");
    },
  },
};
</script>

<style scoped lang="scss">
nav {
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 27px;
  width: 100vw;
  margin-bottom: 65px;
  .logo-section {
    cursor: pointer;
    margin-left: 30px;
    img {
      width: 149px;
      height: 63px;
    }
  }
  .return-section {
    display: flex;
    align-items: center;
    margin-left: 39px;
    cursor: pointer;
    img {
      width: 26px;
      margin-right: 12px;
    }
    span {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
      color: #484848;
    }
  }
}
.form-general {
  width: 100vw;
  height: 700px;
  display: flex;
  justify-content: center;
  margin: 0;
  .form-section {
    max-width: 970px;
    width: 620px;
    // padding-right: 350px;
    height: 550px;
  }
}
.toastr-overall {
  width: 375px;
  min-height: 123px;
  background: #c4c4c4;
  border-radius: 8px;
  position: absolute;
  bottom: 24px;
  right: 17px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  a {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    img {
      width: 20px;
      height: 20px;
    }
  }
  .toastr-header {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 36px;
    color: #090a0a;
  }
  .toastr-error {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 24px;
    color: #090a0a;
  }
}
@media (max-width:414px){
  .return-section{
    span{
      font-size:18px !important;
    }
  }
.toastr-overall{
  right:0;
}
}
</style>