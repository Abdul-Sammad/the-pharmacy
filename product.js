

 function seeMore(data){
    console.log(data)
    location.href = `productDetail.html?id=`  + data.id ;
 }




function load () {
    var product = document.getElementById("product")
    for (var i = 0; i < data.length; i++){
        console.log("data",data[i])
        var calculator = document.createElement("div")
        calculator.className = "col-sm-12 col-md-6 col-lg-3 p-1 mt-4"


        var dell = document.createElement("div")
        dell.className = "card card-item-container"

        var img  = document.createElement("img")
        img.src = data[i].image 
        img.alt = "pharmcy"
        img.className = "card-img-top card-item" 

        var todo = document.createElement("div")
        todo.className = "card-body"



        
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
        price.innerHTML = "RS "+ data[i].price

        paragraph.append(cutPrice)
        paragraph.append(price)

        var btn = document.createElement("a")
        btn.href =  "#"
        btn.className = "btn btn-primary"
        btn.innerHTML = 'See More'
        btn.id = data[i].id
       btn.onclick =   (e) => seeMore(data[e.target.id - 1])



       paragraph.append(text)
    todo.append(paragraph)
        paragraph.append(btn)

       dell.append(img);
        dell.append(todo)
         calculator.append(dell)
        product.append(calculator)
        
    }
}