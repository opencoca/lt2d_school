<template>
  <div id="app">
    <RoomMenu :dataTexts="dataTexts"></RoomMenu>

    <div class="mb-4" v-if="ready">
      <transition
        name="fade"
        mode="out-in"
      >
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
//import TextSelect from "./components/TextSelect.vue";
import RoomMenu from "./components/RoomMenu.vue";
import data from "./classRooms.json";

const classRooms = data.classRooms;

export default {
  name: "App",
  components: {
    //TextSelect,
    RoomMenu
  },
  data: function() {
    return {
      message: "Hello! This should allow text based selection!",
      count: "",
      meet: "",
      app: "",
      ready: true,
      // Props Pass Data to Child Components and Routes
      props: {
        meet: String,
        message: String
      },
      logo: [
        {
          id: 1,
          src: "/assets/robot.gif"
        }
      ],
      dataTexts: classRooms
    };
  },
  methods: {
    onSelectText: function(text) {
      this.message = "You clicked text " + text.id + "! \n " + text.alt;
    }
  }
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.menu__item {
  display: flex;
}

body {
  border: none;
  padding: none;
  overflow: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

/*CSS filters */
.saturate { filter: saturate(3); }
.grayscale { filter: grayscale(100%); }
.contrast { filter: contrast(160%); }
.brightness { filter: brightness(0.81); }
.blur { filter: blur(3px); }
.invert { filter: invert(100%); }
.sepia { filter: sepia(100%); }
</style>
