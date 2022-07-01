<template>
  <!-- <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :id="id" :placeholder="placeHolder" /> -->
  <input
    @input="$emit('sendInputData', { data: $event.target.value, type: id })"
    :id="id"
    :placeholder="placeHolder"
    :type="type"
  />
</template>

<script>
export default {
  props: {
    id: { type: String },
    placeHolder: { type: String },
    type: { type: String },
    modelValue: { type: String, default: "" },
  },
};
</script>

<style scoped lang="scss">
input {
  margin-top: 7px;
  width: 590px;
  height: 46px;
  background: #ffffff;
  border: 1.5px solid #484848;
  border-radius: 12px;
  color: #686868;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  padding-left: 17px;
  &::placeholder {
    color: rgba(100, 100, 100, 0.5);
  }
  &:hover {
    background: rgba(100, 100, 100, 0.08);
    border: 1.5px solid rgba(72, 72, 72, 0.6);
  }
}
@media (max-width: 414px) {
  input {
    max-width: 350px;
  }
}
</style>