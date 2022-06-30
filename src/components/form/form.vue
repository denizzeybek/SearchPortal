<template>
  <div class="input-outer">
    <div v-for="elem in formElements" :key="elem.id" class="input-inner">
      <label class="label-name" :id="`label-${elem.modelText}`">{{
        elem.label
      }}</label>
      <custom-input
        @sendInputData="bindInputData"
        :id="elem.modelText"
        :placeHolder="elem.placeHolder"
        :type="elem.type"
      />
    </div>
    <div class="button-section">
      <custom-button buttonText="Add" @clickBtn="submitForm" />
    </div>
  </div>
</template>

<script>
import customButton from "@/components/button/button.vue";
import customInput from "@/components/form/formInput.vue";
import uuid4 from "@/assets/js/uuid4";

export default {
  props: {
    formElements: {
      type: Array,
    },
  },
  components: {
    customButton,
    customInput,
  },
  data() {
    return {
      formText: {
        name: "",
        country: "",
        city: "",
        email: "",
      },
      errors: [
        { id: 1, prop: "Name Surname must contain at least 2 words" },
        { id: 2, prop: "It is not a valid email" },
        { id: 3, prop: "City input can't be empty" },
        { id: 4, prop: "Country input can't be empty" },
      ],
      errorLis: [],
      hasError: false,
    };
  },
  methods: {
    submitForm() {
      this.hasError = false;
      let name = this.formText.name;
      let nameArr = name.split(" ");
      let nameArr2 = nameArr.filter((word) => word !== "");
      let length = nameArr2.length;
      if (length <= 1) {
        document.querySelector("#label-nameText").classList.add("error");
        document.querySelector("#nameText").classList.add("error");
        this.$store.dispatch("setErrorMessagesAction", this.errors[0]);
        this.hasError = true;
      }

      let vm = this;
      let res = vm.validateEmail(this.formText.email);
      if (res === false) {
        document.querySelector("#label-emailText").classList.add("error");
        document.querySelector("#emailText").classList.add("error");
        this.$store.dispatch("setErrorMessagesAction", this.errors[1]);
        this.hasError = true;
      }
      if (this.formText.country == "") {
        document.querySelector("#label-countryText").classList.add("error");
        document.querySelector("#countryText").classList.add("error");
        this.$store.dispatch("setErrorMessagesAction", this.errors[3]);

        this.hasError = true;
      }
      if (this.formText.city == "") {
        document.querySelector("#label-cityText").classList.add("error");
        document.querySelector("#cityText").classList.add("error");
        this.$store.dispatch("setErrorMessagesAction", this.errors[2]);
        this.hasError = true;
      }

      if (this.hasError) {
        this.$store.dispatch("setErrorAction", true);
      } else {
        let date = new Date(Date.now());
        // let date = now.getTime();
        let converted =
          (date.getMonth() > 8
            ? date.getMonth() + 1
            : "0" + (date.getMonth() + 1)) +
          "/" +
          (date.getDate() > 9 ? date.getDate() : "0" + date.getDate()) +
          "/" +
          date.getFullYear();
        let postObj = {
          id: uuid4(),
          NameSurname: this.formText.name,
          Company: "new company",
          Email: this.formText.email,
          Country: this.formText.country,
          City: this.formText.city,
          Date: converted,
        };
        this.$store
          .dispatch("saveFormAction", postObj)
          .then((res) => {
            document.getElementById("nameText").value = "";
            document.getElementById("countryText").value = "";
            document.getElementById("cityText").value = "";
            document.getElementById("emailText").value = "";
          })
          .catch((e) => {
            this.hasError = true;
            console.log("error::", e);
          });
      }
    },
    bindInputData($event) {
      switch ($event.type) {
        case "nameText":
          this.formText.name = $event.data;
          break;
        case "countryText":
          this.formText.country = $event.data;
          break;
        case "cityText":
          this.formText.city = $event.data;
          break;
        case "emailText":
          this.formText.email = $event.data;

          break;
        default:
      }
    },
    validateEmail(email) {
      //eslint-disable-next-line
      const mailformat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email.match(mailformat)) return true;
      else return false;
    },
    containsNumber(text) {
      return /\d/.test(text);
    },
  },
};
</script>

<style scoped lang="scss">
.input-outer {
  .input-inner {
    display: flex;
    flex-direction: column;
    margin-bottom: 37px;
    .label-name {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 21px;

      color: #686868;
    }
    .label-error {
      span {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        color: rgba(255, 0, 0, 0.5);
        margin-top: 17px;
      }
    }

    .error {
      color: #ff0000;
      border-color: #ff0000;
      &::placeholder {
        color: #ff0000;
      }
    }
  }
  .button-section {
    display: flex;
    justify-content: flex-end;
    margin-right: 6px;
  }
}
</style>