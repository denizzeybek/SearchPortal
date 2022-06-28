<template>
  <div>
    <button
      @click="$emit('clickBtn')"
      class="btn"
      :class="{ btnSubmit: isSubmit, btnMore: !isSubmit }"
      type="button"
      :disabled="disabledProp == 1"
      :style="{marginTop:marginTop}"
    >
      {{ buttonText }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      default: () => "Add New Record",
    },
    isSubmit: {
      type: Boolean,
      default: true,
    },
    disabledProp: {
      type: Boolean,
      default: false,
    },
    marginTop:{
      type: String,
      default: () => "0px",
    }
  },
};
</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 46px;
  width: 200px;
  cursor: pointer;
}
.btnSubmit {
  background: #204080;
  color: white;
  font-style: normal;
  border: none;
  font-size: 18px;
  line-height: 21px;
  font-weight: 700;
  border-radius: 12px;
  font-family: "Roboto", sans-serif;
  &:hover {
    background-color: #4f75c2;
  }
}
.btnMore {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #090a0a;
  background: none;
  border: none;
}
button:disabled,
button[disabled]{
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
}
</style>