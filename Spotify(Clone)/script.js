console.log("Welcome! to Spotify");

// Initialize The Variables
let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');


let songs = [
    { songName: "Let Me Love You - Justin Beiber", filePath: "song/1.mp3", coverPath: "cover1.jpg" },
    { songName: "Excuses - Ap Dhillon", filePath: "song/2.mp3", coverPath: "ex.jpg" },
    { songName: "Raat Di Gedi - Diljeet Dosanjh", filePath: "song/3.mp3", coverPath: "dilj.jpg" },
    { songName: "Chale Toh Kat Hi Jayega - Atif Aslam", filePath: "song/4.mp3", coverPath: "atif.jpg" },
    { songName: "Yaar Ni Mileya - Hardy Sandhu", filePath: "song/5.mp3", coverPath: "hardy.jpg" },
    { songName: "Do Ghut Pila De - Party Song", filePath: "song/6.mp3", coverPath: "bg2.jpg" },
    { songName: "Care Ni Karda - Honey Singh", filePath: "song/7.mp3", coverPath: "care.jpg" },
    { songName: "Dil Chahte Ho - Jubin Nautiyal", filePath: "song/8.mp3", coverPath: "dil.jpg" }
];



// audioElement.play()  --> To Play Audio Tracks

//Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play()
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause()
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})



// Listen to Events 
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    // update seekBar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log(progress);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element) => {
        Element.classList.remove('fa-circle-pause');
        Element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element) => {
    Element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = 'song/${songIndex + 1}.mp3';
        masterSongName.innertext = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play()
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');

    })
});

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 7) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = 'song/${songIndex + 1}.mp3';
    masterSongName.innertext = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play()
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.remove('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = 'song/${songIndex + 1}.mp3';
    masterSongName.innertext = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play()
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.remove('fa-circle-pause');
})