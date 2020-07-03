<template>
  <div>
    <blog-post v-for="item in dataTexts" v-bind:key="item.id" v-bind:title="item.title"></blog-post>
  </div>
</template>


<script>
export default {
  name: "MenuItems",
  props: {
    dataTexts: {
      type: Array,
      default: () => []
    }
  }
};
</script>