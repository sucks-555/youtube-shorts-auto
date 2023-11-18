(function() {
  if (location.host === "www.youtube.com" && location.pathname.includes("/shorts/")) {
    let video;
    function reload() {
      const button = document.querySelector("#navigation-button-down > ytd-button-renderer > yt-button-shape > button");
      button && button.click();
      load();
    }
    function load() {
      video = document.querySelector("video");
      video.loop = false;
      video.addEventListener("ended", reload);
    }
    setInterval(load, 1000);
  }
})();
