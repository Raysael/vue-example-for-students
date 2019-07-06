<template>
  <div>
    <div>
      <router-link to="/data">data</router-link>
    </div>
    <div>
      <router-link to="/method">method</router-link>
    </div>
    <div>
      <router-link to="/model">model</router-link>
    </div>
    <div>
      <router-link to="/list">list</router-link>
    </div>
    <div>
      <router-link to="/conditional">conditional</router-link>
    </div>
    <!-- <p class="ololo">{{title}}</p> -->
    <!-- <card :title="checkboxValue"></!-->
    <!-- <p v-if="isVisible">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at egestas nulla, sit amet tincidunt dui. Sed ut sagittis massa, eget porttitor leo. Nulla blandit metus ac sem placerat finibus. Mauris scelerisque, nulla vitae aliquet porta, mauris nunc blandit massa, non rutrum est nisi ullamcorper quam. Ut ac ornare nibh. Sed nec efficitur urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus accumsan lobortis ipsum, id cursus mi sagittis vel. Curabitur aliquet non diam id sagittis.</p>
        <div v-for="(item, _index) in list" :key="_index">
            <div v-html="item"></div>
    </div>-->
    <!-- <input type="text" v-model="inputValue">
    {{inputValue}}-->
    <!-- <input type="checkbox" value="ololo" v-model="checkboxValue"/>
        <input type="checkbox" value="kokoko" v-model="checkboxValue"/>
        <input type="checkbox" value="pedro" v-model="checkboxValue"/>
    {{checkboxValue}}-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "kokoko",
      isVisible: false,
      inputValue: "",
      checkboxValue: [],
      list: {
        "1": '<p style="color: red">Lorem ipsum dolor</p>',
        "2": '<p style="color: red">Lorem ipsum dolor2</p>',
        "3": '<p style="color: red">Lorem ipsum dolor3</p>',
        "4": '<p style="color: red">Lorem ipsum dolor4</p>',
        "5": '<p style="color: red">Lorem ipsum dolor5</p>'
      }
    };
  },

  components: {},

  mounted() {}
};
</script>
<style scoped lang="scss">
.ololo {
  color: green;
}
</style>

