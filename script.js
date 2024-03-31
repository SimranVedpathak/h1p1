const video=document.getElementById('video')
const play=document.getElementById('play')
const timestamp=document.getElementById('timestamp')
const progress=document.getElementById('progress')
const stop=document.getElementById('stop')

function toggleVideostatus(){
    // console.log(video)
   if(video.paused){
      video.play();
   }else video.pause();
}
function togglePlayIcon(){
   if(video.paused){
      play.innerHTML=' <i class="fa fa-play fa-2x"></i>';
   }else{
      play.innerHTML=' <i class="fa fa-pause fa-2x"></i>';
   }
}
function toggleProgress(){
    console.log(video.currentTime)
       progress.value=(video.currentTime / video.duration)*100;
}
function setVideoProgress(){
     return true;
}
function stopVideo(){
    video.currentTime=0;
    video.pause();
}
video.addEventListener('click',toggleVideostatus);
video.addEventListener('pause',togglePlayIcon);
video.addEventListener('play',togglePlayIcon);
progress.addEventListener('change',setVideoProgress);
play.addEventListener('click',toggleVideostatus);
video.addEventListener('timestamp',toggleProgress);

stop.addEventListener('click',stopVideo);

