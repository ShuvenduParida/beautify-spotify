console.log("Welcome to SpotifyClone");

let songIndex = 0;
let audioElement = new Audio('3.mp3');

// let a = new Audio('songs/1.mp3');
let masteplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let song1 = Array.from(document.getElementsByClassName('song1'));
let previous = document.getElementById('previous');
let next = document.getElementById('next');

let songs = [
    {songName:"salam isqe", filepath:"1.mp3",coverpath:"blog image 1.jpeg"},
    {songName:"let me love you", filepath:"2.mp3",coverpath:"blog image 2.jpeg"},
    {songName:"kabhi gana ye gaye ", filepath:"3.mp3",coverpath:"blog image 3.jpeg"},
    {songName:"koy harurat ho ", filepath:"4.mp3",coverpath:"blog image 4.jpeg"}
]

masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masteplay.classList.remove('fa-circle-play');
        masteplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masteplay.classList.remove('fa-circle-pause');
        masteplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;

    }


})

song1.forEach((element,i)=>{
    // console.log(element, i);
    element.getElementsByTagName('img')[0].src = songs[i].coverpath;
    element.getElementsByClassName('lyricstag')[0].innerText = songs[i].songName;


})


// Listen to event
audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        // audioElement.src = 'songs/${index+1}.mp3';
        audioElement.src = `${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masteplay.classList.remove('fa-circle-play');
        masteplay.classList.add('fa-circle-pause');

    })
})

next.addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex = 0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masteplay.classList.remove('fa-circle-play');
        masteplay.classList.add('fa-circle-pause');

})

previous.addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masteplay.classList.remove('fa-circle-play');
        masteplay.classList.add('fa-circle-pause');

})