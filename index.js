fetch('https://dog.ceo/api/breeds/list/all')
.then(function (response){
    return response.json()
})
.then(function (result){
    forSpecies(result.message)
})
fetch('https://api.thecatapi.com/v1/breeds')
.then(function (response){
    return response.json()
})
.then(function (result){
forCatbreeds(result)
})
fetch('https://www.fishwatch.gov/api/species')
.then(function (response){
    console.log(response)
    return response.json()
})
.then(function (res){
    console.log(res)
    forFishList(res)
})
let btnfordog = document.getElementById('btnforbreedsimg')
btnfordog.addEventListener('click',secondFetch)
function forSpecies(obj){
    // debugger
    let selectfordog = document.getElementById('dog') 
    selectfordog.addEventListener('change',function (e){
       changINdoglist()
    })
    for(let key in obj){
        let option = document.createElement('option')
        option.innerText = key
        option.value = key
       selectfordog.append(option)
    }
}
function changINdoglist(){
    // debugger
    let livelist = document.getElementById('dog')
    return livelist.value
}
function secondFetch(name){
    // debugger
    let breed = changINdoglist()
    fetch(`https://dog.ceo/api/breed/${breed}/images`)
    .then(function (response){
        return response.json()
    })
    .then(function(res){
        debugger
     ondogbtnclick(res.message[Math.floor(res.message.length*Math.random())])
    })
}
function ondogbtnclick(src){
    // debugger
    let img
let placeforimg = document.getElementById('fordogimg')
if(placeforimg.children.length===0){
     img = document.createElement('img')
    img.src = src
    placeforimg.append(img)
}
else{
    placeforimg.children[0].src = src
}
}
function forCatbreeds(arr){
    debugger
let selectforcat = document.getElementById('cat')
selectforcat.addEventListener('change',function (){
    changeINcatlist()
})
for(let i = 0;i<arr.length;i++){
    let obj = arr[i]
    for(let key in obj){
        if(key === 'name' ){
        let option = document.createElement('option')
        option.innerText = obj[key]
        if(obj['image']){
        option.value = obj['image'].id
        }
        else{
            option.value=undefined
        }
        selectforcat.append(option)
        }
    }
}
}
function changeINcatlist(){
    let livelistforcat = document.getElementById('cat')
    return livelistforcat.value
}
function secondFetchforcat(){
    debugger
    let id = changeINcatlist()
    if(id !== 'undefined'){
    fetch(`https://api.thecatapi.com/v1/images/${id}`)
    .then(function (response){
        return response.json()
    })
    .then(function (res){
        debugger
        console.log(res)
        oncatbtnclick(res.url)
    })
}
else{
   function ifcathavnOpicture(){
    let placeforimg = document.getElementById('forcatimg')
    let img
    if(placeforimg.children.length===0){
        img = document.createElement('img')
        img.src = "./image/for server.jpg" 
        placeforimg.append(img)
        alert('server do not have img for that cat')
    }
  else{
    placeforimg.children[0].src = "./image/for server.jpg"
    alert('server do not have img for that cat')
  }
   }
   ifcathavnOpicture()
}
}
let btnforcat = document.getElementById('btnforcatbreedsimg')
btnforcat.addEventListener('click',secondFetchforcat)
function  oncatbtnclick(src){
    debugger
    let img
    let placeforimg = document.getElementById('forcatimg')
    if(placeforimg.children.length===0){
         img = document.createElement('img')
         img.src = src
         placeforimg.append(img)
    }
    else{
        placeforimg.children[0].src = src
    }
}
function forFishList(arr){
    let selsectforfish = document.getElementById('fish')
    selsectforfish.addEventListener('change',function(){
        changeINfishlist()
    })
    for(let i = 0;i<arr.length;i++){
        let obj = arr[i]
        for(let key in obj){
            if(key === 'Species Name'){
                let option = document.createElement('option')
                option.innerText = obj[key]
                option.value = obj[key]
                selsectforfish.append(option)
            }
        }
    }
}
let btnforfish = document.getElementById('btnforfish')
btnforfish.addEventListener('click',secondfetchForfish)
function changeINfishlist(){
    let livefishlist = document.getElementById('fish')
    return livefishlist.value
}
function secondfetchForfish(){
    let species = changeINfishlist()
    fetch(`https://www.fishwatch.gov/api/species/${species}`)
    .then(function (response){
        return response.json()
    })
    .then(function (res){
        console.log(res[0])
        onFishbtnclick(res[0])
    })
}
 function onFishbtnclick(obj){
    debugger
    let src;
    for(let key in obj){
        if(key === 'Image Gallery'){
            if(obj[key]!==null){
          src = obj[key][0].src
          break
            }
            else{
                src=obj['Species Illustration Photo'].src
                break
            }
        }
    }
    let img
    let placeforimg = document.getElementById('forfishimg')
    if(placeforimg.children.length===0){
         img = document.createElement('img')
         img.src = src
         placeforimg.append(img)
    }
    else{
        placeforimg.children[0].src = src
    }
}



