# youtube-shorts-auto

条件の確認: コードは、スクリプトが実行されているウェブページが"www.youtube.com" であり、かつパスが"/shorts/"を含んでいる場合にのみ動作するようになっています。
変数の定義: videoという変数は、YouTubeの動画要素を格納するために使用されます。
reload 関数: 動画が終了したときに呼び出され、ページ内の特定のボタンをクリックして新しい動画を読み込み、その後 load 関数を呼び出します。
load 関数: ページ上の動画要素を取得し、動画が終了したときに reload 関数を呼び出すように設定します。また、video.loop を false に設定しています。
周期的な実行: setInterval を使用して、load 関数が1秒ごとに定期的に実行されるように設定されています。これにより、動画が終了するたびに自動的にページがリロードされます。
```js
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
```
