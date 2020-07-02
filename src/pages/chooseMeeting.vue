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
        src="https://www.thinglink.com/mediacard/1327781891578789889"
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


<script type="text/javascript">
var count = 0;
function openWindowSide() {
  if (count % 3 === 0) {
    document.getElementById("jitsi").style.left = "0%";
    document.getElementById("jitsi").style.width = "100%";
    document.getElementById("snap").style.width = "0%";
    document.getElementById("open").style.right = "1%";
  } else if (count % 3 === 1) {
    document.getElementById("jitsi").style.left = "50%";
    document.getElementById("jitsi").style.width = "50%";
    document.getElementById("snap").style.width = "50%";
    document.getElementById("open").style.right = "1%";
  } else if (count % 3 === 2) {
    document.getElementById("jitsi").style.left = "100%";
    document.getElementById("snap").style.width = "100%";
    document.getElementById("open").style.right = "1%";
  }
  window.dispatchEvent(new Event("resize"));
  count += 1;
}

function getJsonFromUrl(url) {
  if (!url) url = location.search;
  var query = url.substr(1);
  var result = {};
  query.split("&").forEach(function(part) {
    var item = part.split("=");
    result[item[0]] = decodeURIComponent(item[1]);
  });
  return result;
}

//Parse window params
const urlParams = new URLSearchParams(window.location.search);

//Choose App
const appParam = urlParams.get("app");
if (appParam != null) {
  var a = document.createElement("a");
  a.href = "https://" + appParam;
  a.target = "app_iframe";
  a.click();
}

//Choose Meeting
const meetParam = urlParams.get("meet");
if (meetParam != null) {
  var a = document.createElement("a");
  a.href = "https://meet.jit.si/" + meetParam;
  a.target = "meeting_iframe";
  a.click();
  document.getElementById("dot1").href = "https://meet.jit.si/" + meetParam;
  document.getElementById("dot2").href =
    "https://meet.jit.si/" + meetParam + "-green";
  document.getElementById("dot3").href =
    "https://meet.jit.si/" + meetParam + "-blue";
}

//Choose Logo
const logoParam = urlParams.get("logo");
if (logoParam != null) {
  document.getElementById("logoImg").src = logoParam;
}

//Choose Load Opening State
const countParam = urlParams.get("count");
if (countParam != null) {
  count = countParam;
}
openWindowSide();
</script>

<style>
</style>
