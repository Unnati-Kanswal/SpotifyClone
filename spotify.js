console.log("spotify");
let songindex=0;
let audioElement =  new Audio('1.mp3');
// let audioElement = new Audio('clone/happy.mp3'); //songs array happy 1st song bydefault
let masterplay = document.getElementById("masterplay");
let progress = document.getElementById("progressbar");
let gif = document.querySelector(".gif img");
let Songitems = Array.from(document.getElementsByClassName("songitem"));   //nodelist into array
let SongPlay =Array.from(document.getElementsByClassName("songplay"));
let singer = document.querySelector(".info");
let prev  = document.getElementById("previous");
let next = document.getElementById("next");


let songs=[{song: "Happy Happy", filepath:"1.mp3", coverpath:"happy.jfif",sing: "Happy Happy- Badshah"},
{song: "Oh Ho Ho Ho", filepath:"2.mp3", coverpath:"oho1.jpg",sing:"Oh Ho Ho Ho- Sukhbir"},
{song: "Woh Kisna Hai", filepath:"3.mp3", coverpath:"kanu 4.jpg",sing:"Woh Kisna Hai- Ayesha I. Darbar"},
{song: "Obsessed", filepath:"4.mp3", coverpath:"heart2.jpg",sing:"Obsessed- Abhijay Sharma"},
{song: "Mathu Mathu", filepath:"5.mp3", coverpath:"garhwali2.jpg",sing:"Mathu Mathu- Sanjay Semwal"},
// {song: "happy", filepath:"clone/happy.mp3", coverpath:"clone/happy.jfif"},
// {song: "happy", filepath:"clone/happy.mp3", coverpath:"clone/happy.jfif"},

]

Songitems.forEach((element,i)=>
{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerHTML =songs[i].song;
    
  

})

masterplay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();   //song play
        masterplay.classList.remove("fa-circle-play"); 
        masterplay.classList.add("fa-circle-pause");   //pause sign
        gif.style.opacity=1;
       
    }
    else{
        audioElement.pause();
        masterplay.classList.remove("fa-circle-pause");
        masterplay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }
})

//timeupdate event
audioElement.addEventListener("timeupdate",()=>{
   percent=((audioElement.currentTime/audioElement.duration)*100);
   progress.value = percent;
//    console.log(percent);
}
)
//change event
progress.addEventListener("change",()=>{
    audioElement.currentTime=(progress.value*audioElement.duration)/100;
})

//makeallplay    next play pre stop
const makeallplay = ()=>{
SongPlay.forEach((ele)=>{
    ele.classList.remove("fa-circle-pause");
    ele.classList.add("fa-circle-play");
})
}


//songplay 
SongPlay.forEach((element)=>{
    element.addEventListener("click",(e)=>{
    // console.log(e.target);
    makeallplay();
    songindex =parseInt(e.target.id) ;  //targets id given in html
    e.target.classList.remove("fa-circle-play");
    e.target.classList.add("fa-circle-pause");
    audioElement.src=`${songindex}.mp3`;
    audioElement.currentTime=0;  //songchanged
    audioElement.play();
    
    
    gif.style.opacity=1;
    singer.innerText = songs[songindex-1].sing;  //singername
    masterplay.classList.remove("fa-circle-play");
    masterplay.classList.add("fa-circle-pause");
    })
})

//pre 
prev.addEventListener("click",()=>{
    if(songindex < 1)
    {
        songindex= 1;
    }
    else{
       songindex -= 1;
    }
    audioElement.src=`${songindex}.mp3`;
    console.log(songindex);
    audioElement.currentTime=0;  //songchanged
    audioElement.play();
    
    gif.style.opacity=1;
    singer.innerText = songs[songindex-1].sing;  //singername
    masterplay.classList.remove("fa-circle-play");
    masterplay.classList.add("fa-circle-pause");
})

//next
next.addEventListener("click",()=>{
    if(songindex>4)
    {
        songindex=1;
    }
    else{
        songindex +=1;
    }

    audioElement.src= `${songindex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    // SongPlay.forEach((ele)=>{
    //  ele.classList.remove("fa-circle-pause");
    //  ele.classList.add("fa-circle-play");
    // })
    singer.innerText = songs[songindex-1].sing;
    gif.style.opacity=1;
    masterplay.classList.add("fa-circle-pause");
    masterplay.classList.remove("fa-circle-play");
})