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
        <li>
          <div>
          <input type="text" v-model="search" v-on:keyup="room_filter" placeholder="Search title.."/>
          </div>
        </li>
        <li v-for="item in filtered_rooms" v-bind:key="item.id" v-bind:name="item.name" class="room">
          <div v-if="item.classroom" onclick="document.querySelector('#menuToggle > input[type=checkbox]').checked = false">
            <div v-if=" item.name === item.name.toUpperCase() " class="program"> {{ item.name }} </div>
            <div v-else><router-link :to="{ name: item.route, params: item.classroom }">{{ item.name }}</router-link>
          </div>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MenuItems",
  props: {
    rooms: {
      type: Array,
      default: () => []
    },
    filtered_rooms: {
      type: Array,
      default: () => []
    }
  },
  // data: () => ({
  //   filtered_rooms: this.rooms
  // }),
  methods: {
    room_filter() {
      if (this.search != ""){
        // console.log(this.rooms)
        this.filtered_rooms = this.rooms.filter(i => i.name.toLowerCase().includes(this.search.toLowerCase()));
      } else {
        this.filtered_rooms = this.rooms;
      }
    }
  },
  mounted() {
    console.log(this.rooms)
    this.filtered_rooms = this.rooms;
    console.log(this.filtered_rooms)
  }
};

</script>


<style>
#menu input{
  display: initial;
  /* width: 40px;
  height: 32px; */
  position: initial;
  /* top: -7px;
  left: -5px; */
  cursor: pointer;
  opacity: 1;
  /* opacity: 0; */
  /* hide this */
  z-index: 3;
}


#menuToggle {
  display: block;
  position: fixed;
  top: 14px;
  left: 10px;
  z-index: 199999;
  user-select: none;
}
#menuToggle > input {
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
  width: 50vw;
  height: 88vh;
  overflow: scroll;
  margin: -100px 0 0 -50px;
  padding: 110px 50px 125px 85px;
  text-align: left;
  background: rgba(237,237,237,0.92);
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  /* stop flickering of text in safari */
  transform-origin: 0% 0%;
  transform: translate(-100%, 0);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
}
#menu li {
  padding: 8px 0;
  font-size: 1.1em;
}

#menu li .program{
    font-size: 1.4em;
    background: white;
    text-align: center;
    padding: 1.2em;
    margin: 0 -3em;
}

/*
 * And let's slide it in from the left
 */

#menuToggle input:checked ~ #menu {
  transform: none;
}
</style>
