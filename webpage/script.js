
let songinput = [];
let personal = document.getElementById("personal");
// if(personal.checked == true){
    songinput = newSongs;
// }else{
    // songinput =  songs;
// }

// for(let i = 0;i<songinput.length;i++){
//     songinput[i] = songinput[i].replaceAll("https://www.youtube.com/watch?v=","https://www.youtube-nocookie.com/embed/");
// }


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
// let player = document.getElementById("player")
let ele = document.getElementById("link")
let refresh = document.getElementById("refresh");
let songnum = getRandomInt(songs.length-1);
let noplayer = document.getElementById("noplayer");


ele.addEventListener('click',()=>{
    if(refresh.checked == true){
        // console.log("yes");
        // ele.href = songinput[songnum];
        // player.src = songinput[songnum];

        noplayer.innerHTML = '<youtube-video id="player" width="640" height="360" src="'+songinput[songnum]+'" autoplay controls/>'

    }else{
        // console.log("no")
        songnum = getRandomInt(songinput.length-1);
        // ele.href = songinput[songnum];
        // player.src = songinput[songnum];
        noplayer.innerHTML = '<youtube-video id="player" width="640" height="360" src="'+songinput[songnum]+'" autoplay controls/>'
    }
})



 
  
  //add a option for saving to localstorage favorite songs

  
