<template>
  <div>
    <div>
      <router-link to="/">home</router-link>
      <inner-slot-compoennt>
          <template v-slot:default="properties">
              this is properties from default slot: "<b>{{properties.data}}</b>"
          </template>
          <template v-slot:slot-exapmple="{data}">
              this is properties from slot named "slot-exapmple": "<b>{{data}}</b>"
          </template>
      </inner-slot-compoennt>
    </div>
  </div>
</template>

<script>
import InnerSlotCompoennt from "@/components/InnerSlotCompoennt.vue";

export default {
  components: {
    InnerSlotCompoennt
  },
  data() {
    return {
      title: "Lorem Ipsum"
    };
  }
};
</script>
<style lang="scss" scoped>
</style>
