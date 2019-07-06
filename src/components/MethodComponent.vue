<template>
  <div>
    <div>
      <router-link to="/">home</router-link>
    </div>
    <div>
      <!-- обработка события клика на кнопку -->
      <button @click="handleClick()">Click</button>
      <div>{{count.click}}</div>
    </div>

    <div>
      <!-- обработка события нажатия на клавишу enter на клавиатуре -->
      <div>click button and press enter button</div>
      <button @keyup.enter="handleEnter()">Enter</button>
      <div>{{count.enter}}</div>
    </div>

    <div>
      <!-- обработка события сабмит (нажатие на инпут с типом сабмит или нажатие на энтер с фокусом на инпуте) -->
      <!-- .prevent == prevent.default() -->
      <form @submit.prevent="handleSubmit()">
        <input type="text" placeholder="focus me and submit" />
        <div>{{count.submit}}</div>
        <input type="submit" />
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: {
        click: 0,
        enter: 0,
        submit: 0
      }
    };
  },

  methods: {
    handleClick() {
      this.count.click++;
    },

    handleEnter() {
      this.count.enter++;
    },

    handleSubmit() {
      this.count.submit++;
    }
  }
};
</script>
<style lang="scss" scoped>
</style>

