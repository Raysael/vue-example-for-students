<template>
  <div class="slot-component">
    <div class="divider divider_1"></div>
    <slot :data="name1"></slot>
    <div class="divider divider_2"></div>
    <slot name="slot-exapmple" :data="name2"></slot>
    <div class="divider divider_3"></div>
  </div>
</template>

<script>
export default {
  name: "slot-component",
  data() {
    return {
      name1: "data_1",
      name2: "data_2"
    };
  }
};
</script>
<style lang="scss">
.divider {
  width: 100%;
  height: 20px;
  margin: 20px 0;

  &_1 {
    background-color: gray;
  }

  &_2 {
    background-color: green;
  }

  &_3 {
    background-color: blue;
  }
}
</style>

