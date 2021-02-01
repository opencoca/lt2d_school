<template>
  <div id="app">
    <RoomMenu :rooms="rooms"></RoomMenu>
    <div class="mb-4" v-if="ready">
      <transition
        name="fade"
        mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
//import TextSelect from "./components/TextSelect.vue";
import RoomMenu from "./components/RoomMenu.vue";

//if(process.env.VUE_APP_ROOMS === undefined) {
//  this.$alert("Room Admin API endpoint not set. Unable to list rooms")
//}

export default {
  name: "App",
  components: {
    RoomMenu
  },
  data: function() {
    return {
      message: "",
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
      rooms: []
    }
  },
  created() {
    // Simple GET request using fetch
    fetch("https://api.centrepreville.org/classrooms/")
      .then(response => response.json())
      .then(data => {
        this.rooms = data.results;
        console.log(this.rooms);
      });
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
  margin-top: 45px;
}

.menu__item {
  display: flex;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
  transition: all 0.5s ease;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
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
