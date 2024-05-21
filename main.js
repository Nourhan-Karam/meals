
var data=[]
getData("pizza")
 
var links=document.querySelectorAll(".nav-link")
    for(var i=0;i<links.length;i++){
        links[i].addEventListener("click" ,function(e){
        var currenMeal  =e.target.innerHTML
        getData(currenMeal)
        })
      
    }
function getData(meal){
    var myHttp = new XMLHttpRequest()
myHttp.open("GET",`https://forkify-api.herokuapp.com/api/search?q=${meal}`)
myHttp.send()
myHttp.addEventListener('readystatechange',function(){
    if(myHttp.readyState == 4){
       data =JSON.parse(myHttp.response).recipes
    }
   // console.log(data)
    dasplayData()
})
}

function dasplayData(){
    cols=""
    for(var i=0;i<data.length;i++){
        cols+=`
        
        <div class="col-md-4 ">
                    <div class="card text-center h-100">
                       <img class="card-img-top "height="200" src="${data[i].image_url}" alt="">
                       <h3>${data[i].title}</h3>
                       <a target="_blank" class="btn btn-warning w-25" href="${data[i].source_url  }">Sourse</a>
                    </div>
                </div>
        `
    }
    document.getElementById('rowBody').innerHTML=cols
}