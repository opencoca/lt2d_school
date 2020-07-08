<template>
  <div id="app">
    <RoomMenu :dataTexts="dataTexts"></RoomMenu>

    <div class="mb-4" v-if="ready">
      <router-view/>
    </div>
  </div>
</template>

<script>
import TextSelect from "./components/TextSelect.vue";
import RoomMenu from "./components/RoomMenu.vue";
import data from './classRooms.json';

const classRooms = data.classRooms;

export default {
  name: "App",
  components: {
    TextSelect,
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
      dataTexts: classRooms,
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
  margin: none;
  padding: none;
  overflow: hidden;
}

#snap {
  border: none;
  margin: none;
  padding: none;
  position: absolute;
  top: 50px;
  left: 0px;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
}

#jitsi {
  border: none;
  margin: none;
  padding: none;
  position: fixed;
  top: 50px;
  left: 100vw;
  min-width: 526px;
  background-color: #333;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
}

#open {
  position: fixed;
  top: 5px;
  right: 1vw;
  width: 200px;
  z-index: 99999;
}

.dot {
  height: 28px;
  width: 28px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  margin-left: 10px;
}

#content {
  min-width: 945px; /* Suppose you want minimum width of 1000px */
  width: auto !important; /* Firefox will set width as auto */
}
</style>
