function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
let ele = document.getElementById("link")
  let songnum = getRandomInt(songs.length-1);
  ele.href = songs[songnum];
