document.querySelector("#submit").addEventListener("click", submit)
let movies;
function submit(){
   movies=document.querySelector("#search").value
   fetch(`https://api.themoviedb.org/3/search/movie?api_key=4be72ffbc2692ea1542ae06d72bee1ea&language=en-US&page=1&include_adult=false&query=${movies}`)
   .then(response=>response.json())
   .then(data => {
        console.log(data)
        if(data.results.length==0){
          errorbatao()
        }
        else{
          result(data)
         console.log(data)
        }
   })
   .catch((error) => {
console.log(error)    

   
   });
}
function result(dat){
  document.querySelector("#searchresult").innerHTML=null
  let div=document.createElement("div")
  var img=document.createElement("img")
  img.src=`https://image.tmdb.org/t/p/original${dat.results[0].poster_path}`
  let h3=document.createElement("h3")
  h3.innerText=dat.results[0].original_title
  let p=document.createElement("h4")
  p.innerText=`IMDB: ${dat.results[0].vote_average}`
  let p1=document.createElement("h4")
  p1.innerText=dat.results[0].release_date
  let r=document.createElement("h4")
  r.innerText="RECOMMENDED"
  if(dat.results[0].vote_average>8.5){
    div.append(img,h3,p,p1,r)
  }
  else{
    div.append(img,h3,p,p1)
  }
  
  document.querySelector("#searchresult").append(div)
}

function errorbatao(){
  document.querySelector("#searchresult").innerHTML=null
  let image= document.createElement("img")
  image.src="https://kfg6bckb.media.zestyio.com/yalantis-interactive-404.gif"
  document.querySelector("#searchresult").append(image)
}
