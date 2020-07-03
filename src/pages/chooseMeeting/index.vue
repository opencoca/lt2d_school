<template>
  <div>
    <img width="25%" src="/assets/Bear-And-Cub-Logo.svg">
    <h1>This is a meeting!!!</h1>
    <h3 v-if="$route.params">{{ $route.params }}</h3>
  </div>
</template>

<script>
export default {
  name: "meet",
  title: "LT2D Meeting",
  makeSureJSONWorks: ""
};
</script>