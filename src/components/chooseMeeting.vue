<template>
  <div id="content">
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
        <input id="modal-toggle" type="checkbox" unchecked>
        <button>Onload Info</button>
        <div class="modal-backdrop">
          <div class="modal-content">
            <label class="modal-close" for="modal-toggle">x</label>
            <iframe src="./app/guidebook/index.html" style="width: 100%; height: 100%;"></iframe>
            <label class="modal-close button" for="modal-toggle">Close</label>
          </div>
        </div>
      </div>
    </div>

    <div id="open" style="right: 1%;">
      <a>
        <img onclick="openWindowSide()" src="assets/tv.png" style="height:40px;">
      </a>
      <a
        href="https://meet.jit.si/Preville2020-MainHall"
        target="meeting_iframe"
        class="dot"
        style="background-color: #FF0000;"
        id="dot1"
      ></a>
      <a
        href="https://meet.jit.si/Preville2020-MainHall-2"
        target="meeting_iframe"
        class="dot"
        style="background-color: #00FF00"
        id="dot2"
      ></a>
      <a
        href="https://meet.jit.si/Preville2020-MainHall-3"
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
        src="https://www.centrepreville.org"
        id="snap"
        name="app_iframe"
      ></iframe>
      
      <iframe
        allow="microphone; camera"
        style="min-width: 526px; width: 100%; height: calc(100% - 50px); left: 0%;"
        src="https://meet.jit.si/Preville2020-MainHall"
        id="jitsi"
        name="meeting_iframe"
      >
        <p>Your browser does not support iframes.</p>
      </iframe>
    </div>
  </div>
</template>




