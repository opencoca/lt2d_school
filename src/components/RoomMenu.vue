<template>
  <nav role="navigation">
    <div id="menuToggle">
      <!--
    hidden checkbox is used as click reciever,
    so you can use the :checked selector on it.
      -->
      <input type="checkbox">

      <!--
    Some spans to act as a hamburger. 
    They are acting like a real hamburger,
    not that McDonalds stuff.
      -->
      <span></span>
      <span></span>
      <span></span>
      <ul id="menu">
        <li v-for="item in dataTexts" v-bind:key="item.id" v-bind:title="item.title">
          <router-link :to="{ name: item.route, params: item.params }">{{ item.title }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
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

<style>
</style>