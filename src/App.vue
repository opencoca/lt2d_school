<template>
  <div id="app">
    <RoomMenu :dataTexts="dataTexts"></RoomMenu>

    <div class="mb-4" v-if="ready">
      <router-view :meet="meet" :count="count" :app="app" :message="message"/>
    </div>
  </div>
</template>

<script>
import TextSelect from "./components/TextSelect.vue";
import RoomMenu from "./components/RoomMenu.vue";

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
      dataTexts: [
        {
          id: 1,
          alt: "Love things and love your self!",
          route: "lobby",
          params: {
            meet: "Preville2020-MainHall",
            app: "www.thinglink.com/mediacard/1327781891578789889",
            href: "amp;app=www.thinglink.com/mediacard/1327781891578789889"
          },
          title: "Preville Lobby"
        },
        {
          id: 2,
          title: "Art",
          route: "meet",
          params: {
            alt: "Keep bullet journaling!",
            meet: "Preville2020-Art",
            href:
              "?count=2&amp;meet=Preville2020-Art&amp;app=wbo.ophir.dev/boards/LT2D-2001"
          }
        },
        {
          id: 3,
          title: "Robot In A Can",
          route: "meet",
          params: {
            alt: "Take it easy ❦",
            meet: "Preville2020-Robot-In-A-Can",
            href:
              "?count=1&amp;meet=Preville2020-Robot-In-A-Can&amp;app=app.robotinacan.com/ai/snap/detective.html"
          }
        },
        {
          id: 4,
          title: "Theater",

          route: "meet",
          params: {
            meet: "Preville2020-Theater",
            alt:
              "“What is drama but life with the dull bits cut out.” - Hitchcock",
            href:
              "?count=2&amp;meet=&amp;app=archive.org/stream/TheUltimatePaperPlaneBook?ui=embed#page/n5/mode/2up"
          }
        },
        {
          id: 5,
          title: "Chess",
          route: "meet",
          params: {
            meet: "Preville2020-Chess",
            alt: "“Chess is the gymnasium of the mind.” – Blaise Pascal",
            href: "?count=1&amp;meet=&amp;app=fritz.chessbase.com"
          }
        },
        {
          id: 6,
          title: "Music",
          route: "meet",
          params: {
            meet: "Preville2020-Music",
            alt: "“Without music, life would be a mistake.” – Nietzsche",
            href:
              "?count=1&amp;meet=Preville2020-Music&amp;app=apps.musedlab.org/aqwertyon/"
          }
        },
        {
          id: 7,
          title: "Tech Support",
          route: "meet",
          params: {
            meet: "Preville2020-TechSupport",
            checked: true,
            alt: "“Prior planning prevents poor performance.” - Somma",
            href: "?count=0&amp;meet="
          }
        }
      ]
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
