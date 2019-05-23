const ap = new APlayer({
  container: document.getElementById("aplayer"),
  fixed: true,
  autoplay: false,
  audio: [
    {
      name: "Début",
      artist: "Mélanie Laurent",
      url:
        "http://m10.music.126.net/20190523104118/bb8639a6759b8e5dd065a0518f938c42/ymusic/ce39/39e8/d2c6/20233d98ba1ddd568254bd5129372cff.mp3",

      cover: "https://cdn.llow22.com/picture/pianoStudy.jpg"
    },
    {
      name: "Sugarcane",
      artist: "Ana Olgica",
      url: "https://cdn.llow22.com/audio/Sugarcane_unregistered.mp3",
      cover: "https://cdn.llow22.com/picture/pianoStudy.jpg"
    }
  ]
});
