
const videos = [
  {
    nome: "Deadpool & Wolverine",
    url: "https://fhd4.doramasapp.xyz/343rt342wtg34wetg34retg4rghy5rh/FHD4/tt6263850.mp4",
  },
  {
    nome: "Venom: A Última Rodada",
    url: "https://fhd4.doramasapp.xyz/343rt342wtg34wetg34retg4rghy5rh/FHD4/tt16366836.mp4",
  },
  {
    nome: "DivertidaMente 2",
    url: "https://fhd4.doramasapp.xyz/343rt342wtg34wetg34retg4rghy5rh/FHD4/tt22022452.mp4",
  },
  {
    nome: "A Liga",
    url: "https://fhd4.doramasapp.xyz/343rt342wtg34wetg34retg4rghy5rh/FHD4/tt12610390.mp4",
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
    const button = document.createElement("button");
    button.className = "list-button";
    button.setAttribute("data-src", video.url);
    button.innerText = video.nome;
    button.addEventListener("click", function (event) {
      event.preventDefault();
      const videoSrc = this.getAttribute("data-src");
      const videoPlayer = document.getElementById("videoPlayer");
      videoPlayer.style.display = "block"
      videoPlayer.src = videoSrc;
      videoPlayer.play();
    });
    li.appendChild(button);
    videoList.appendChild(li);
  });
}
criarListaDeVideos();
