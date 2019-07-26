<template>
  <div>
    <div>
      <router-link to="/">home</router-link>
    </div>

    <div>
      <h3>List Array</h3>
      <div v-for="(item, index) in listArray" :key="index">
        <h4>{{item.title}}</h4>
        <p>{{item.description}}</p>
      </div>
    </div>

     <div>
      <h3>List Object</h3>
      <div v-for="(item, index) in listObject" :key="index">
        <p>{{item}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      listArray: [
        {
          title: "Lorem",
          description:
            "Nam porta scelerisque purus id lacinia. Duis tincidunt, ligula non aliquet ultrices, massa arcu commodo ligula, id pharetra quam nisi id tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vestibulum sapien nec urna pellentesque imperdiet. Nulla et scelerisque leo, et ornare turpis. Morbi sit amet lacus finibus risus facilisis posuere quis et lectus. Donec at viverra arcu, ut ullamcorper purus. Vestibulum pulvinar lacus sed pulvinar viverra. Vestibulum lobortis lacus leo, vel iaculis velit gravida id. Nulla a faucibus nisi, mattis accumsan turpis. Etiam consectetur felis eget nunc rhoncus eleifend."
        },
        {
          title: "Ipsum",
          description:
            "Vestibulum ornare sem in condimentum eleifend. Phasellus in ultrices sapien. Praesent sed risus eget lacus convallis lacinia sit amet aliquam nisi. Etiam cursus pellentesque nibh ac accumsan. Etiam accumsan mi sed erat maximus venenatis. Nullam venenatis vulputate sapien rutrum posuere. Mauris sit amet pellentesque purus. Fusce cursus orci at imperdiet rutrum."
        },
        {
          title: "Dolor",
          description:
            "Sed eget facilisis mi. Phasellus ut tincidunt eros, quis vehicula urna. Curabitur id pulvinar lorem. Fusce porttitor lectus ut turpis interdum, at interdum nibh molestie. Vestibulum at erat ac metus posuere ultricies. Duis vitae libero diam. Aenean consequat nec lorem blandit tempor. Morbi tincidunt metus sed orci commodo, in fermentum augue convallis. Interdum et malesuada fames ac ante ipsum primis in faucibus."
        }
      ],

      listObject: {
        'first': 'Sed mattis enim nec pharetra vulputate. Integer fermentum vestibulum commodo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin vel mi mattis, porta ante nec, pharetra velit. Nunc aliquam bibendum semper. Cras nec vulputate sem, eu tempus arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus ultrices dolor ex, et viverra purus rutrum vel. Sed ut iaculis justo, nec placerat risus. Phasellus ut faucibus metus. Nunc venenatis tortor in lorem ultrices vestibulum. Duis ac efficitur metus. Nullam efficitur interdum felis at ullamcorper.',
        'second': 'Aenean quis mollis ante. Morbi nec laoreet metus. Sed ornare semper nisi nec vehicula. Maecenas iaculis non sapien ut molestie. Vestibulum et lacus vel ante interdum elementum. Nullam neque leo, congue in urna quis, rhoncus tempor nunc. Curabitur ut tincidunt ligula. Aliquam erat volutpat. Curabitur molestie diam vitae ex gravida, vitae ornare dolor rutrum. Maecenas sollicitudin orci sit amet est maximus molestie vel sed arcu. Mauris id suscipit purus.',
        'third': 'Curabitur ac magna eget nunc tincidunt interdum eu sit amet nisi. Aenean congue, libero et pretium dictum, nunc dolor vestibulum lacus, et dictum magna urna et diam. Donec consectetur non orci sit amet commodo. Vivamus quis massa justo. Aenean a ipsum sed orci pellentesque facilisis ut in orci. Nam sodales molestie arcu ac rutrum. Phasellus eget ipsum quis neque aliquet ornare a vitae tortor. Donec dictum nec lectus vitae condimentum. Integer consectetur nibh in turpis rutrum, quis venenatis enim aliquet. Morbi porttitor diam at orci sollicitudin vestibulum ac sodales erat. In sodales pellentesque maximus.'
      }
    };
  }
};
</script>
<style lang="scss" scoped>
</style>
