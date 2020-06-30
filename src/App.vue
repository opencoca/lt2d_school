<template>
  <div id="app">
    <img width="25%" src="/assets/Bear-And-Cub-Logo.svg">
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
        <TextSelect :dataTexts="dataTexts" @onselecttext="onSelectText" rootClass="menu" id="menu"></TextSelect>
      </div>
    </nav>
    <HelloWorld :msg="message"/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import TextSelect from "./components/TextSelect.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    TextSelect
  },
  data: function() {
    return {
      logo: [
        {
          id: 1,
          src: "/assets/robot.gif"
        }
      ],
      message: "Hello! This should allow text based selection!",
      dataTexts: [
        {
          id: 1,
          alt: "Love things and love your self!",
          href:
            "?count=0&amp;meet=Preville2020-MainHall&amp;app=www.thinglink.com/mediacard/1327781891578789889",
          title: "Preville Lobby"
        },
        {
          id: 2,
          alt: "Keep bullet journaling!",
          href:
            "?count=2&amp;meet=Preville2020-Art&amp;app=wbo.ophir.dev/boards/LT2D-2001",
          title: "Art"
        },
        {
          id: 3,
          alt: "Take it easy ❦",
          href:
            "?count=1&amp;meet=Preville2020-Robot-In-A-Can&amp;app=app.robotinacan.com/ai/snap/detective.html",
          title: "Robot In A Can"
        },
        {
          id: 4,
          alt: "Drama at its finest.",
          href:
            "?count=2&amp;meet=Preville2020-Theater&amp;app=archive.org/stream/TheUltimatePaperPlaneBook?ui=embed#page/n5/mode/2up",
          title: "Theater"
        },
        {
          id: 5,
          alt: "Always write things down.",
          href:
            "?count=1&amp;meet=Preville2020-Chess&amp;app=fritz.chessbase.com",
          title: "Chess"
        },
        {
          id: 6,
          alt: "Always write things down.",
          href:
            "?count=1&amp;meet=Preville2020-Music&amp;app=apps.musedlab.org/aqwertyon/",

          title: "Music"
        },
        {
          id: 7,
          alt: "We're hear to help.",
          href: "?count=0&amp;meet=Preville2020-TechSupport",
          title: "Tech Support"
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
