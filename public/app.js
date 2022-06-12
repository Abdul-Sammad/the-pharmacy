// const data = require('./data.json')
//    function btn(){
//     document.getElementById("mybutton").onclick() 
//     location.href = "data.html" 
//    }
   

//    document.getElementById("mybutton").onclick = function () {
//     location.href = "data.html";
// };

// onload();


// function onload(){
//     var container = document.getElementById("container")

//     var subcontainer = document.createElement("div")
   


// }

 function seeMore(data){
    console.log(data)
    location.href = `productDetail.html?id=`  + data.id ;
 }

function load() {
    var container = document.getElementById("container")
    for (var i = 0; i < data.length; i++){
        console.log("data",data[i])
        var subContainer = document.createElement("div")
        subContainer.className = "col-sm-12 col-md-6 col-lg-3 p-1 mt-4"

        var childContianer = document.createElement("div")
        childContianer.className = "card card-item-container"

        var img  = document.createElement("img")
        img.src = data[i].image
        img.alt = "pharmcy"
        img.className = "card-img-top card-item"

        var nestedContainer = document.createElement("div")
        nestedContainer.className = "card-body"

        var text = document.createElement("h5")
        text.innerHTML = data[i].name
        text.className = "card-title"

        var paragraph = document.createElement("p")
        paragraph.className = "card-text"
       
        var cutPrice = document.createElement("s")
        cutPrice.innerHTML ="RS "+ data[i]["cut price"]

        var lineBreak = document.createElement('br')
        cutPrice.append(lineBreak)

        var price = document.createElement("ins")
        price.innerHTML ="RS "+ data[i].price

        paragraph.append(cutPrice)
        paragraph.append(price)

        var btn = document.createElement("a")
        btn.href =  "#"
        btn.className = "btn btn-primary"
        btn.innerHTML = 'See More'
        btn.id = data[i].id
       btn.onclick =   (e) => seeMore(data[e.target.id - 1])
    //    function () {

    //          var uuid = data[i]
    //          console.log(i,"sdasd",data)
    //        //s  location.href = `data.html?id=`  + uuid;
    //     };

        
        nestedContainer.append(text)
        nestedContainer.append(paragraph)
        nestedContainer.append(btn)
        childContianer.append(img);
        childContianer.append(nestedContainer)
        subContainer.append(childContianer)
        container.append(subContainer)

    }
    

}


