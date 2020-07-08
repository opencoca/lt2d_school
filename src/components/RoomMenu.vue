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
#menuToggle {
  display: block;
  position: fixed;
  top: 14px;
  left: 10px;
  z-index: 199999;
  user-select: none;
}
#menuToggle input {
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  cursor: pointer;
  opacity: 0;
  /* hide this */
  z-index: 2;
  /* and place it over the hamburger */
  -webkit-touch-callout: none;
}

/*
* hamburger
*/

#menuToggle span {
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  background: #cdcdcd;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
}
#menuToggle span:first-child {
  transform-origin: 0% 0%;
}
#menuToggle span:nth-last-child(2) {
  transform-origin: 0% 100%;
}
#menuToggle input:checked ~ span {
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #232323;
}
#menuToggle input:checked ~ span:nth-last-child(3) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}
#menuToggle input:checked ~ span:nth-last-child(2) {
  transform: rotate(-45deg) translate(0, -1px);
}
#menu {
  position: absolute;
  width: 23vw;
  height: 100vh;
  margin: -100px 0 0 -50px;
  padding: 80px;
  padding-top: 125px;
  background: #ededed;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  /* stop flickering of text in safari */
  transform-origin: 0% 0%;
  transform: translate(-100%, 0);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
}
#menu li {
  padding: 10px 0;
  font-size: 22px;
}
/*
   * And let's slide it in from the left
   */

#menuToggle input:checked ~ #menu {
  transform: none;
}
</style>
