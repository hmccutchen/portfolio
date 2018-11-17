

var tag = document.createElement('script');


      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {

          height: '600',
          width: '1280',
          videoId: 'V9NbfpG9tRM',

          disablekb: 0,

          playerVars: { 'controls': 0,
                        'modestbranding': 1,
                        'rel': 0,
                        'autoplay': 1,
                        'version': 3,
                        'start': 960,
                        'end': 1200,
                        'theme': 'light',
                        'loop':1,
                        'playsinline': 1,
                        'showinfo': 0
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
        event.target.setVolume(0);

      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          // setTimeout(stopVideo, 49500);
          done = true;
        }
      }






const flip = document.getElementsByClassName("action");

const runFlip = (e) => {

 e.classList.toggle('flip');

}





var exp = document.getElementById("exp");

exp.addEventListener("click", function(){
  var s = document.getElementById("ex");

s.scrollIntoView({behavior: 'smooth'});

})


var resume = document.getElementById("rsm");



resume.addEventListener("click", function(){
  var r = document.getElementById("res");

res.scrollIntoView({behavior: 'smooth'});

})

var project = document.getElementById("prj");

project.addEventListener("click", function(){
  var p = document.getElementById("proj");

p.scrollIntoView({behavior: 'smooth'});

})









