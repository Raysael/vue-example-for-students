<template>
  <div>
    <div>
      <router-link to="/">home</router-link>
    </div>
    <!-- вывод значения переменной -->
    <h3>{{title}}</h3>
    <!-- вывод html разметки -->
    <div v-html="description"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: 'Lorem Ipsum',
      description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      <p>Morbi imperdiet fermentum cursus. Etiam mattis eget urna commodo sagittis. </p>
      <p>Nunc posuere sapien id nibh accumsan, sed volutpat erat tempus. Morbi lectus sem, tempus id rhoncus eget, vulputate a neque. </p>
      <p>Ut orci nunc, vulputate vitae mi in, tincidunt pulvinar erat. Maecenas tellus eros, laoreet non nibh non, fermentum rutrum lectus. </p>
      <p>Nullam pellentesque eget metus scelerisque porttitor. </p>
      <p>Nullam nec efficitur mauris. </p>
      <p>Mauris non faucibus sapien, sit amet tincidunt libero. </p>
      <p>Quisque ac venenatis ipsum, vulputate elementum tellus. Ut semper molestie eros a suscipit.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet justo in nibh feugiat, non cursus neque sagittis.</p>`
    };
  }
};
</script>
<style lang="scss" scoped>
</style>

