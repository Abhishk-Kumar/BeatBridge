 const song=new Audio('audio/1.mp3');
const play=document.getElementById("play");

const tracks=[
    {
        id:'1',
        songName:`On My Way<br>
        <div class="subtitle">By Alan Walker</div>`,
        poster:"images/1.jpg"
    },
    {
        id:'2',
        songName:`Faded<br>
        <div class="subtitle">By Alan Walker</div>`,
        poster:"images/2.jpg"
    },
    {
        id:'3',
        songName:`Without me<br>
        <div class="subtitle">By Halsey</div>`,
        poster:"images/3.jpg"
    },
    {
        id:'4',
        songName:`Coldplay<br>
        <div class="subtitle">By Chris Martin</div>`,
        poster:"images/4.jpg"
    },
    {
        id:'5',
        songName:`Downers at Dusk<br>
        <div class="subtitle">By Talha Anjum</div>`,
        poster:"images/5.jpg"
    },
    {
        id:'6',
        songName:`Wonder-Boy<br>
        <div class="subtitle">By Bella</div>`,
        poster:"images/6.jpg"
    },
    {
        id:'7',
        songName:`Mockingbird<br>
        <div class="subtitle">By Eminem </div>`,
        poster:"images/7.jpg"
    },
    {
        id:'8',
        songName:`Tokyo-Drift<br>
        <div class="subtitle">By Teriyaki Boyz</div>`,
        poster:"images/8.jpg"
    },
    {
        id:'9',
        songName:`Naina ashq na ho<br>
        <div class="subtitle">By Pritam, Kaushik Dutta</div>`,
        poster:"images/9.jpg"
    },
    {
        id:'10',
        songName:`Pasoori<br>
        <div class="subtitle">By Shae Gill, Ali Sethi</div>`,
        poster:"images/10.jpg"
    },
    {
        id:'11',
        songName:`Dilbar<br>
        <div class="subtitle">By Neha Kakkar</div>`,
        poster:"images/11.jpg"
    },
    {
        id:'12',
        songName:`Lagdi Lahore Di aa<br>
        <div class="subtitle">By Guru Randhawa</div>`,
        poster:"images/12.jpg"
    },
    {
        id:'13',
        songName:`Long Time No See<br>
        <div class="subtitle">By Taimour Baig</div>`,
        poster:"images/13.jpg"
    },
    {
        id:'14',
        songName:`Badnam<br>
        <div class="subtitle">By Mankirt Aulakh</div>`,
        poster:"images/14.jpg"
    },
    {
        id:'15',
        songName:`Khaab<br>
        <div class="subtitle">By Akhil</div>`,
        poster:"images/15.jpg"
    },
    {
        id:'16',
        songName:`Galliyan Returns-Lofi<br>
        <div class="subtitle">By Ankit Tiwari</div>`,
        poster:"images/16.jpg"
    },
    {
        id:'17',
        songName:`Banjaara<br>
        <div class="subtitle">By Mithoon,Mohmmad Irfan</div>`,
        poster:"images/17.jpg"
    },
    {
        id:'18',
        songName:`Teri Kami<br>
        <div class="subtitle">By Akhil</div>`,
        poster:"images/18.jpg"
    },
    {
        id:'19',
        songName:`Hari aur Main<br>
        <div class="subtitle"> By Narci</div>`,
        poster:"images/19.jpg"
    }
];


let results=document.getElementById("results");

// const (id,songName,poster)=tracks[i];
tracks.forEach(element => {
    let cards=document.createElement('a');
    const {id,songName,poster}=element;
cards.classList.add('card');
    cards.innerHTML=`<img src="${poster}"> 
    <h5>${songName}<br> 
     <div class="subtitle"></div></h5> `;
     results.appendChild(cards);

cards.addEventListener("click",()=>{
    song.src=`audio/${id}.mp3`;
    song.play();
    cover.src=`images/${id}.jpg`;
    headline.innerHTML=`${songName}`;
    if(song.play){
        note.style.color="rgb(127 219 127)";
play.style.color="rgb(127 219 127)";

play.classList.remove('bi-play-circle');
play.classList.add('bi-pause-circle');
anime.classList.add('active1');
    }
    else{
        note.style.color="#fff";
        play.style.color="#fff";
                
    }
});



});

let input=document.getElementsByTagName('input')[0];
input.addEventListener("keyup",()=>{
let input_value=input.value.toUpperCase();
let items=results.getElementsByTagName('a');
for (let index = 0; index < items.length; index++) {
    let asap=items[index].querySelector('h5');
    let text_value=asap.textContent || asap.innerHTML;

if(text_value.toUpperCase().indexOf(input_value)> -1){
items[index].style.display="flex";
}
else{
items[index].style.display="none";
}
if(input_value ==0){
    results.style.display="none";    
}
};

});

















function playBack(){
    Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
        e.style.background="rgb(105,105,105,.0)";
    } 
)};

function playImg(){
    Array.from(document.getElementsByClassName('playicon')).forEach((el) =>{
       el.classList.add('bi-play-circle');
        el.classList.remove('bi-pause-circle');

    } 
)};





Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    const img = e.querySelector('img');
    const h5=e.querySelector('h5');
    
    if (tracks[i] && tracks[i].poster && img && tracks[i].songName && h5)  {
      img.src = tracks[i].poster;
      h5.innerHTML=tracks[i].songName;
      
    } else {
      console.error(`Image not found for songItem ${i}`);
      console.error(`Name not found for songItem ${i}`);
    }
  });
  

const anime=document.getElementById("anime");
play.addEventListener("click", ()=>{
    if (song.paused ||song.currentTime<=0) {
        song.play();
        play.classList.remove('bi-play-circle');
        play.classList.add('bi-pause-circle');
anime.classList.add('active1');
note.style.color="rgb(127 219 127)";
play.style.color="rgb(127 219 127)";
    
    } else {
        song.pause();
        play.classList.add('bi-play-circle');
        play.classList.remove('bi-pause-circle');
        anime.classList.remove('active1');
        note.style.color="rgb(11, 81, 83)";
        play.style.color="#fff";

    };
});

 let index = 0;
 let cover=document.getElementById("cover-image")
 const playicon = document.querySelectorAll('.playicon');


const headline=document.getElementById("headline");




let note=document.getElementById("note");

 playicon.forEach((e) => {
     e.addEventListener("click", (elem) => {
        index = elem.currentTarget.dataset.index;  // that will be string
         index = parseInt(index); // Convert the id to a number
        
         song.src=`audio/${index}.mp3`;
         cover.src=`images/${index}.jpg`;    
         song.play();
          play.classList.remove('bi-play-circle');
         play.classList.add('bi-pause-circle');
 anime.classList.add('active1');
headline.innerHTML = tracks[index - 1].songName;
note.style.color="rgb(127 219 127)";
play.style.color="rgb(127 219 127)";

 playBack();
 Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105,105,105,.1";
//  Array.from(document.getElementsByClassName('songItem'))[index-1].style.border="1px solid green";
//  Array.from(document.getElementsByClassName('songItem'))[index-1].style.borderRadius="20px";
playImg();
elem.currentTarget.classList.add('bi-pause-circle');
elem.currentTarget.classList.remove('bi-play-circle');

     });
 });
 
let currentStart=document.getElementById("currentstart");
let currentEnd=document.getElementById("currentend");
let seek=document.getElementById("seek");
let bar1=document.getElementById("bar1");
let dot2=document.getElementById("dot2");
let volDot=document.getElementById("vol-dot");
let vol_icon=document.getElementById("vol-icon");
let vol=document.getElementById("vol");
let volBar=document.getElementById("volbar");
let back=document.getElementById("back");
let next=document.getElementById("next");
// let anchor=document.getElementById("download_music");
song.addEventListener("timeupdate",()=>{
    let song_curr=song.currentTime;
    let song_dur=song.duration;
    // console.log(song_dur);
    let min1=Math.floor(song_dur/60); //calculates minutes
    let sec1=Math.floor(song_dur%60);  //calculates seconds
    if(sec1<10){
        sec1=`0${sec1}`;
    }
    currentEnd.innerText=`${min1}:${sec1}`;

    let min2=Math.floor(song_curr/60);
    let sec2=Math.floor(song_curr%60);
    currentStart.innerText=`${min2}:${sec2}`;

   let progressBar =parseInt((song.currentTime /song.duration)*100);
   seek.value=progressBar;
let seekBar=seek.value;
  bar1.style.width=`${seekBar}%`;
  dot2.style.left=`${seekBar}%`;
});

seek.addEventListener('input',()=>{
    // console.log('Seek input event triggered');
    song.currentTime=seek.value * song.duration /100;
});

vol.addEventListener('input',()=>{
if(vol.value==0){
vol_icon.classList.remove("bi-volume-up-fill");
vol_icon.classList.add("bi-volume-mute-fill");
vol_icon.classList.remove("bi-volume-down-fill");
};
if(vol.value>0){
    vol_icon.classList.remove("bi-volume-up-fill");
    vol_icon.classList.remove("bi-volume-mute-fill");
    vol_icon.classList.add("bi-volume-down-fill");
};
if(vol.value>50){
    vol_icon.classList.add("bi-volume-up-fill");
    vol_icon.classList.remove("bi-volume-mute-fill");
    vol_icon.classList.remove("bi-volume-down-fill");
};
let volume=vol.value;
volBar.style.width=`${volume}%`;
volDot.style.left=`${volume}%`;
song.volume=volume /100;
});

back.addEventListener('click',()=>{
index -= 1;
if(index < 1){
    index=Array.from(document.getElementsByClassName("songItem")).length;
}
song.src=`audio/${index}.mp3`;
         cover.src=`images/${index}.jpg`;    
         song.play();
          play.classList.remove('bi-play-circle');
         play.classList.add('bi-pause-circle');
 anime.classList.add('active1');
headline.innerHTML = tracks[index - 1].songName;
note.style.color="rgb(127 219 127)";
play.style.color="rgb(127 219 127)";

 playBack();
 Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105,105,105,.1";
playImg();

});

next.addEventListener('click',()=>{
index++;
if(index > Array.from(document.getElementsByClassName("songItem")).length){
    index=1;
}

song.src=`audio/${index}.mp3`;
         cover.src=`images/${index}.jpg`;    
         song.play();
          play.classList.remove('bi-play-circle');
         play.classList.add('bi-pause-circle');
 anime.classList.add('active1');
headline.innerHTML = tracks[index - 1].songName;
note.style.color="rgb(127 219 127)";
play.style.color="rgb(127 219 127)";

 playBack();
 Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105,105,105,.1";
playImg();

});


const next_music=()=>{
    index++;
    if(index >Array.from(document.getElementsByClassName("songItem")).length){
        index=1;
    }
            
song.src=`audio/${index}.mp3`;
         cover.src=`images/${index}.jpg`;    
         song.play();
         headline.innerHTML = tracks[index - 1].songName;
};

const repeat_music=()=>{
    index;
    if(index >Array.from(document.getElementsByClassName("songItem")).length){
        index=1;
    }
            
song.src=`audio/${index}.mp3`;
         cover.src=`images/${index}.jpg`;    
         song.play();
         headline.innerHTML = tracks[index - 1].songName;
};
const random_music=()=>{
    index=Math.floor((Math.random()*tracks.length)+1);
    if(index >Array.from(document.getElementsByClassName("songItem")).length){
        index=1;
    }


    if(index >Array.from(document.getElementsByClassName("songItem")).length){
        index=1;
    }
            
song.src=`audio/${index}.mp3`;
         cover.src=`images/${index}.jpg`;    
         song.play();
         headline.innerHTML = tracks[index - 1].songName;
};

note.addEventListener("click",()=>{
    let key=note.innerHTML;

    switch (key) {
        case "next":
            note.classList.add("bi-arrow-repeat");
            note.classList.remove("bi-music-note-beamed");
            note.classList.remove("bi-shuffle");
            note.innerHTML="repeat";
            break;
    
            case "repeat":
                note.classList.remove("bi-arrow-repeat");
                note.classList.remove("bi-music-note-beamed");
                note.classList.add("bi-shuffle");
                note.innerHTML="random";
            
            break;
            case "random":
            note.classList.remove("bi-arrow-repeat");
            note.classList.add("bi-music-note-beamed");
            note.classList.remove("bi-shuffle");
            note.innerHTML="next";
            break;
    };
});

song.addEventListener('ended',()=>{
    let cross=note.innerHTML;
switch (cross) {
    case "next":
        next_music();
        
        break;
        case "repeat":
            repeat_music();
            
        break;
        case "random":
        random_music();
        break;
}
});
















let scroll_left=document.getElementById("scroll-left");
let scroll_right=document.getElementById("scroll-right");
let musics=document.getElementsByClassName('popular-musics')[0];

let left_art=document.getElementById("left-art");
let right_art=document.getElementById("right-art");
let legends=document.getElementById("legends");

scroll_right.addEventListener("click", ()=>{
    musics.scrollLeft +=330;
});
scroll_left.addEventListener("click", ()=>{
    musics.scrollLeft -=330;
});

right_art.addEventListener("click", ()=>{
    legends.scrollLeft +=330;
});
left_art.addEventListener("click", ()=>{
    legends.scrollLeft -=330;
});

