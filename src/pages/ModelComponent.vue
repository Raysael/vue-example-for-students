<template>
  <div>
    <div>
      <router-link to="/">home</router-link>
    </div>
    <div>
      <input type="text" v-model="model.input" />
      <div>{{model.input}}</div>
    </div>

    <div>
      <input type="textarea" v-model="model.textarea" />
      <div>{{model.textarea}}</div>
    </div>

    <div>
      <div>
        <input type="checkbox" v-model="model.checkbox" />
        <span>checkbox</span>
      </div>
      <div>{{model.checkbox}}</div>
    </div>

    <div>
      <div>checkbox group</div>
      <div>
        <input type="checkbox" value="cb-1" v-model="model.checkboxGroup" />
        <span>cb-1</span>
      </div>

      <div>
        <input type="checkbox" value="cb-2" v-model="model.checkboxGroup" />
        <span>cb-2</span>
      </div>

      <div>
        <input type="checkbox" value="cb-3" v-model="model.checkboxGroup" />
        <span>cb-3</span>
      </div>
      
      <div>{{model.checkboxGroup}}</div>
    </div>

    <div>
      <div>checkbox group</div>
      <div>
        <input type="radio" value="rb-1" v-model="model.radioGroup" />
        <span>rb-1</span>
      </div>

      <div>
        <input type="radio" value="rb-2" v-model="model.radioGroup" />
        <span>rb-2</span>
      </div>

      <div>
        <input type="radio" value="rb-3" v-model="model.radioGroup" />
        <span>rb-3</span>
      </div>

      <div>{{model.radioGroup}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      model: {
        input: "",
        textarea: "",
        checkbox: false,
        checkboxGroup: [],
        radioGroup: ''
      }
    };
  }
};
</script>
<style lang="scss" scoped>
</style>
