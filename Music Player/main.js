const audioElement = document.createElement('audio');
document.body.appendChild(audioElement);

//selecting Dom elements

const cover = document.querySelector('#cover');
const songTitle = document.querySelector('#song-title');
const Artist = document.querySelector('#artist');
const progressBar = document.querySelector('.progress-bar');
const progress = document.querySelector('.progress');
const currrentTime = document.querySelector('#currrent-time');
const durationEl = document.querySelector('#duration');
const previousBtn = document.querySelector('#prev');
const playBtn = document.querySelector('#play');
const nextBtn = document.querySelector('#next');
const volume = document.querySelector('#volume');
const speedSelect = document.querySelector('#speed'); 

const songs = [
    {title: "SoundHelix Song 1", Artist: "	T. Schürger", cover: "https://cdn.pixabay.com/audio/2025/03/19/20-23-35-428_200x200.png", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
    {title: "SoundHelix Song 2", Artist: "T. Schürger", cover: "https://cdn.pixabay.com/audio/2025/02/18/16-57-42-536_200x200.jpg", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"},
    {title: "Don't talk", Artist: "Show Man", cover: "https://cdn.pixabay.com/audio/2025/03/18/11-45-34-728_200x200.png", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3"}
];


let songIndex = 0;
let isPlaying = false;
let speed = 1;

function loadSong(song) {
    songTitle.textContent = song.title;
    Artist.textContent = song.Artist;
    cover.src = song.cover;
     audioElement.src = song.src;
    //  audioElement.play();
    //  audioElement.muted = true;
}

loadSong(songs[songIndex]);


function playSong() {
    playBtn.querySelector("i").classList.remove("fa-play");
    playBtn.querySelector("i").classList.add("fa-pause");
    audioElement.play();
    isPlaying = true;
}

function pauseSong() {
    playBtn.querySelector("i").classList.remove("fa-pause");
    playBtn.querySelector("i").classList.add("fa-play");
    audioElement.pause();
    isPlaying = false;
}

// previous song
function previousSong() {


setTimeout(()=> {
songIndex--;
if(songIndex < 0) {
        songIndex = songs.length-1;
    }

loadSong(songs[songIndex]);
playSong();

},300);
}

/// next song 

function nextSong() {
    pauseSong();

   setTimeout(()=> {
      songIndex++;
    // console.log(`song index: ${songIndex}`);
    // console.log(`total songs: ${songs.length-1}`);

    if(songIndex > songs.length - 1) {
        songIndex = 0;
    }

     loadSong(songs[songIndex]);
    playSong();
   },300)

   
}

function updateProgress(e) {
    // console.log(e.srcElement);
//   console.log(e.srcElement.duration)
//   console.log(e.srcElement.currentTime);

  const {duration, currentTime} = e.srcElement;
  if(isNaN(duration)) {
    return;
  };
  const progressPercent = (currentTime / duration)*100
//   console.log('progress precent:', progressPercent);

  progress.style.width = `${progressPercent}%`;

  /// duration calculation

  const durationMinutes = Math.floor(duration / 60);

//   console.log('whith ou math floor:', duration/60);
//   console.log('duration minutes:', durationMin);
   let durationSeconds = Math.floor(duration % 60);

   if(durationSeconds < 10) {
    durationSeconds = `0${durationSeconds}`;
   }

currrentTime.textContent = `${durationMinutes}:${durationSeconds}`;

//currentTime claculation

const currentMinutes = Math.floor(currentTime / 60);
let currentSeconds = Math.floor(currentTime % 60);

if(currentSeconds < 10) {
    currentSeconds = `0${currentSeconds}`;
}
durationEl.textContent = `${currentMinutes}:${currentSeconds}`;
audioElement.playbackRate = speed;
}


/// seek the song s
function setProgress(e) {
const width = this.clientWidth;
console.log('width', width);

// console.log('offset X:', e.offsetX);
// console.log('offset Y:', e.offsetY);

const clickX = e.offsetX;

const duration = audioElement.duration;
// console.log('duration:',duration);
if(isNaN(duration))return;

const newTime = (clickX / width) * duration;
console.log('new Time is:', newTime);
audioElement.currentTime = newTime;
}

// All events

playBtn.addEventListener('click', function() {
    if(isPlaying) {
        pauseSong();
    }else {
        playSong();
    }
    
    // pauseSong();
    // playSong();
});



nextBtn.addEventListener('click', function() {
    nextSong();
});

previousBtn.addEventListener('click', function() {
    previousSong();
});

audioElement.addEventListener('timeupdate', updateProgress);

progressBar.addEventListener('click', setProgress);

volume.addEventListener('input', function(e) {
    // console.log('volume sound is:',e.target.value);
    audioElement.volume = e.target.value;
});

speedSelect.addEventListener('change', function(e) {
    speed = parseFloat(e.target.value);
    audioElement.playbackRate = speed;
});

/// meta data 

audioElement.addEventListener('loadeddata', updateProgress);