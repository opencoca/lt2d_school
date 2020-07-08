<template>
  <div>
    <div v-if="$route.params" id="content">
      <div id="header">
        <span class="connState"></span>

        <!--<button id="start-togetherjs" type="button"
       onclick="TogetherJS(this); return false"
       data-end-togetherjs-html="End TogetherJS">
        Start TogetherJS
        </button>-->
        <div id="save"></div>

        <div id="instructionsClick">
          <div id="logo">
            <img
              src="assets/logo.svg"
              alt="LATI2UDE logo"
              style="height: 37px; padding: 6px 6px 6px 6px; margin-left: 60px;"
              id="logoImg"
            >
          </div>
        </div>

        <div class="modal-container">
          <input id="modal-toggle" type="checkbox" v-model="$route.params.checked">
          <button>Onload Info</button>
          <div class="modal-backdrop">
            <div class="modal-content">
              <label class="modal-close" for="modal-toggle">x</label>
              <h1>This is a meeting!!!</h1>
              <div>
                <h2>{{ $route.params.alt }}</h2>
                <h2>{{ $route.params.meet }}</h2>
                <!--<h3>{{ $route.params }}</h3>-->
              </div>
              <label class="modal-close button" for="modal-toggle">Close</label>
            </div>
          </div>
        </div>
      </div>

      <div id="open" style="right: 1%;">
        <a>
          <img onclick="openWindowSide()" src="/assets/tv.png" style="height:40px;">
        </a>
        
        <a
          :href="'https://meet.jit.si/'+ $route.params.meet "
          target="meeting_iframe"
          class="dot"
          style="background-color: #FF0000;"
          id="dot1"
        ></a>
        <a
          :href="'https://meet.jit.si/'+ $route.params.meet + '-2'"
          target="meeting_iframe"
          class="dot"
          style="background-color: #00FF00"
          id="dot2"
        ></a>
        <a
          :href="'https://meet.jit.si/'+ $route.params.meet +'-3'"
          target="meeting_iframe"
          class="dot"
          style="background-color: #0000FF;"
          id="dot3"
        ></a>
      </div>

      <div class="window">
        <iframe
          allow="microphone; camera"
          style="width: 0%; height: calc(100% - 50px); border: none;"
          src="https://www.thinglink.com/mediacard/1327781891578789889"
          id="snap"
          name="app_iframe"
        ></iframe>
        
        <iframe
          allow="microphone; camera"
          style="min-width: 526px; width: 100%; height: calc(100% - 50px); left: 0%;"
          :src="'https://meet.jit.si/' + $route.params.meet + '-' + $route.params.room + '#jitsi_meet_external_api_id=0&amp;config.requireDisplayName=true&amp;config.startAudioMuted=6&amp;config.disableAudioLevels=true&amp;interfaceConfig.DISABLE_VIDEO_BACKGROUND=true'"
          id="jitsi"
          name="meeting_iframe"
        >
          <p>Your browser does not support iframes.</p>
        </iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "meet",
  title: "LT2D Meeting",
  data: function() {
    return {
      app: ""
    };
  },
  makeSureJSONWorks: ""
};
</script>

<style>
.modal-container {
  margin: 0 auto;
  padding-top: 10px;
  position: relative;
  width: 160px;
}

.modal-container button {
  display: none;
  margin: 0 auto;
  color: #fff;
  width: 160px;
  height: 50px;
  line-height: 50px;
  background: #446CB3;
  font-size: 22px;
  border: 0;
  border-radius: 3px;
  box-shadow: 0 5px 5px -5px #333;
  transition: background 0.3s ease-in;
}

.modal-container .modal-backdrop {
  height: 0;
  width: 0;
  opacity: 0;
  overflow: hidden;
  transition: opacity 0.2s ease-in;
}

.modal-container #modal-toggle {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  margin: 0;
  opacity: 0;
  cursor: pointer;
}

.modal-container #modal-toggle:hover ~ button {
  background: #1E824C;
}

.modal-container #modal-toggle:checked {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9;
  opacity: 0;
}

.modal-container #modal-toggle:checked ~ .modal-backdrop {
  background-color: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9;
  pointer-events: none;
  opacity: 1;
}

.modal-container #modal-toggle:checked ~ .modal-backdrop .modal-content {
  background-color: #fff;
  max-width: 400px;
  width: 100%;
  height: 280px;
  padding: 10px 30px;
  position: absolute;
  left: calc(50% - 200px);
  top: 12%;
  border-radius: 4px;
  z-index: 999;
  pointer-events: auto;
  cursor: auto;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.6);
}
@media (max-width: 400px) {
  .modal-container #modal-toggle:checked ~ .modal-backdrop .modal-content {
    left: 0;
  }
}

.modal-container
  #modal-toggle:checked
  ~ .modal-backdrop
  .modal-content
  .modal-close {
  color: #666;
  position: absolute;
  right: 2px;
  top: 0;
  padding-top: 7px;
  background: #fff;
  font-size: 16px;
  width: 25px;
  height: 28px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
}

.modal-container
  #modal-toggle:checked
  ~ .modal-backdrop
  .modal-content
  .modal-close.button {
  top: initial;
  bottom: 20px;
  right: 20px;
  background: #4CAF50;
  color: #fff;
  width: 50px;
  border-radius: 2px;
  font-size: 14px;
  font-weight: normal;
}

.modal-container
  #modal-toggle:checked
  ~ .modal-backdrop
  .modal-content
  .modal-close.button:hover {
  color: #fff;
  background: #1E824C;
}

.modal-container
  #modal-toggle:checked
  ~ .modal-backdrop
  .modal-content
  .modal-close:hover {
  color: #333;
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