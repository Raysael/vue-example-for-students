<template>
  <div>
    <div>
      <router-link to="/">home</router-link>
    </div>

    <div>
      <div>
        <h3>Render</h3>

        <div>
          <input type="checkbox" v-model="reder.first" />
          <span>v-if</span>
        </div>
        <div
          v-if="reder.first"
        >Nam ut euismod augue. Fusce sed lobortis lectus, et elementum nisi. Nulla et finibus dui. Suspendisse potenti. Curabitur a orci cursus, vestibulum lectus in, semper arcu. Cras ut libero mollis lectus fringilla posuere. Vestibulum at libero dapibus, imperdiet nibh non, blandit lectus. Morbi sodales imperdiet arcu non ullamcorper. Morbi non mauris sem.</div>
      </div>

      <div>
        <div>
          <input type="checkbox" v-model="reder.second" />
          <span>v-else-if</span>
        </div>
        <div
          v-if="reder.second"
        >Aenean quis mollis ante. Morbi nec laoreet metus. Sed ornare semper nisi nec vehicula. Maecenas iaculis non sapien ut molestie. Vestibulum et lacus vel ante interdum elementum. Nullam neque leo, congue in urna quis, rhoncus tempor nunc. Curabitur ut tincidunt ligula. Aliquam erat volutpat. Curabitur molestie diam vitae ex gravida, vitae ornare dolor rutrum. Maecenas sollicitudin orci sit amet est maximus molestie vel sed arcu. Mauris id suscipit purus.</div>
        <div
          v-else
        >Sed mattis enim nec pharetra vulputate. Integer fermentum vestibulum commodo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin vel mi mattis, porta ante nec, pharetra velit. Nunc aliquam bibendum semper. Cras nec vulputate sem, eu tempus arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus ultrices dolor ex, et viverra purus rutrum vel. Sed ut iaculis justo, nec placerat risus. Phasellus ut faucibus metus. Nunc venenatis tortor in lorem ultrices vestibulum. Duis ac efficitur metus. Nullam efficitur interdum felis at ullamcorper.</div>
      </div>

      <div>
        <h3>Show</h3>
        
        <div>
          <input type="checkbox" v-model="show" />
          <span>v-if</span>
        </div>
        <div
          v-if="show"
        >Nam ut euismod augue. Fusce sed lobortis lectus, et elementum nisi. Nulla et finibus dui. Suspendisse potenti. Curabitur a orci cursus, vestibulum lectus in, semper arcu. Cras ut libero mollis lectus fringilla posuere. Vestibulum at libero dapibus, imperdiet nibh non, blandit lectus. Morbi sodales imperdiet arcu non ullamcorper. Morbi non mauris sem.</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      reder: {
        first: false,
        second: false
      },
      show: true
    };
  }
};
</script>
<style lang="scss" scoped>
</style>
