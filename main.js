  let input = document.getElementById("color-switch");

  window.onload = function(){

  input.checked ? location.reload(true) : null

  }


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
        event.target.setVolume(50);

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




var nav = document.getElementById("nav");

nav.addEventListener("click", function(){
  var n = document.getElementById("navb");

n.scrollIntoView({behavior: 'smooth', block: 'start'});

})


var exp = document.getElementById("exp");

exp.addEventListener("click", function(){
  var s = document.getElementById("ex");

s.scrollIntoView({behavior: 'smooth', block: 'start'});

})


var resume = document.getElementById("rsm");


resume.addEventListener("click", function(){
  var r = document.getElementById("res");

res.scrollIntoView({behavior: 'smooth', block: 'start'});

})

var project = document.getElementById("prj");

project.addEventListener("click", function(){
  var p = document.getElementById("proj");

p.scrollIntoView({behavior: 'smooth', block: 'start'});

})


   toggleCheckBox = () => {
   let input = document.getElementById("color-switch");
    let pTags = document.querySelectorAll('p');
    let headerOne = document.querySelectorAll('h1');
    let headerTwo =  document.querySelectorAll('h2');
    let navigation = document.querySelector(".navigation");
    let navigationLinks = document.querySelectorAll('a');
    let myName = document.getElementById('myName');
    let footer = document.querySelector('.footer');
    let cpyRight = document.querySelector('.footer-copyright');

   if(input.checked){
    document.body.style.backgroundColor = '#1f1b21';
    navigation.style.backgroundColor = "#1f1b21";
    myName.style.color = 'white';
    footer.style.backgroundColor = '#1f1b21';
    cpyRight.style.color = 'white';

    navigationLinks.forEach((a) => {
      a.style.color = 'white';
    })

    pTags.forEach((p)=> {
      p.style.color = 'white';
    })
    headerOne.forEach((h)=> {
      h.style.color = 'white';
    })

    headerTwo.forEach((h)=> {
      h.style.color = 'white';
      h.style.borderBottom = '2px solid white';
    })


   } else if(input.checked === false){

    document.body.style.backgroundColor = 'white';
    navigation.style.backgroundColor = "#f7f5f5";
    myName.style.color = 'black';
    footer.style.backgroundColor = '#f7f5f5';
    cpyRight.style.color = 'black';

    navigationLinks.forEach((a) => {
      a.style.color = 'black';
    })
    pTags.forEach((p)=> {
      p.style.color = 'black';
    })
    headerOne.forEach((h)=> {
      h.style.color = 'black';
    })

    headerTwo.forEach((h)=> {
      h.style.color = 'black';
      h.style.borderBottom = '2px solid black';
    })

   };

  }


















