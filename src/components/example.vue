<template>
  <div>
    <div>
      <ul v-if="list && list.length">
        <li v-for="(item, key) in list" :key="key">
          <p v-if="item.data">{{item.data.name}}</p>
          <div v-if="item.data && item.data.sprites">
            <template v-for="(pokemon, pokemonKey) in item.data.sprites">
              <img v-if="pokemon" :key="pokemonKey" :src="pokemon" alt />
            </template>
          </div>
        </li>
      </ul>
    </div>
    <div>
      <button @click="getPokemon">update</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: []
    };
  },

  methods: {
    update() {
      this.$store.dispatch("updateAction");
    },

    async getPokemon() {
      this.list = await this.$store.dispatch("getPokemonList");
      console.log(this.list);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
