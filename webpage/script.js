function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
let ele = document.getElementById("link")
let refresh = document.getElementById("refresh");
let songnum = getRandomInt(songs.length-1);

ele.addEventListener('click',()=>{
    if(refresh.checked == true){
        // console.log("yes");
        ele.href = songs[songnum];
    }else{
        // console.log("no")
        songnum = getRandomInt(songs.length-1);
        ele.href = songs[songnum];
    }
})



 
  
  //add a option for saving to localstorage favorite songs

  
