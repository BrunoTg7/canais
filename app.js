if (Hls.isSupported()) {
  var video = document.getElementById("video");
  var hls = new Hls();
  hls.loadSource("http://tv.fazoeli.co.za/m3u8/globorj.m3u8");
  hls.attachMedia(video);
  hls.on(Hls.Events.MANIFEST_PARSED, function () {
    video.play();
  });
} else if (video.canPlayType("application/vnd.apple.mpegurl")) {
  video.src = "http://tv.fazoeli.co.za/m3u8/globorj.m3u8";
  video.addEventListener("canplay", function () {
    video.play();
  });
}

const videos = [
  {
    nome: "Deadpool & Wolverine",
    url: "http://fhd4.doramasapp.xyz/343rt342wtg34wetg34retg4rghy5rh/FHD4/tt6263850.mp4",
  },
  {
    nome: "Venom: A Última Rodada",
    url: "http://fhd4.doramasapp.xyz/343rt342wtg34wetg34retg4rghy5rh/FHD4/tt16366836.mp4",
  },
  {
    nome: "DivertidaMente 2",
    url: "http://fhd4.doramasapp.xyz/343rt342wtg34wetg34retg4rghy5rh/FHD4/tt22022452.mp4",
  },
  {
    nome: "A Liga",
    url: "http://fhd4.doramasapp.xyz/343rt342wtg34wetg34retg4rghy5rh/FHD4/tt12610390.mp4",
  },
  {
    nome: "null",
    url: "",
  },

];

function criarListaDeVideos() {
  const videoList = document.getElementById("videoList");
  videos.forEach((video) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.setAttribute("data-src", video.url);
    a.innerText = video.nome;
    a.addEventListener("click", function (event) {
      event.preventDefault();
      const videoSrc = this.getAttribute("data-src");
      const videoPlayer = document.getElementById("videoPlayer");
      videoPlayer.src = videoSrc;
      videoPlayer.play();
    });
    li.appendChild(a);
    videoList.appendChild(li);
  });
}
window.onload = criarListaDeVideos;
