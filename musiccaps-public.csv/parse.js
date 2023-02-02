const csv = require('csv-parser')
const fs = require('fs')
const results = [];

fs.createReadStream('musiccaps-public.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    let i = 0;
    let links = [];
    results.forEach(res=>{
      console.log(res.ytid);
      links.push("https://youtu.be/"+res.ytid);
    })
    links = JSON.stringify(links)
    fs.writeFileSync('links.json',links);

    // console.log(results);
    // [
    //   { NAME: 'Daffy Duck', AGE: '24' },
    //   { NAME: 'Bugs Bunny', AGE: '22' }
    // ]
  });