function productLoad() {
    var container = document.getElementById("detail-container")

    var currentURL = window.location.search;
    const params = new URLSearchParams(currentURL);
    const parameter_name = params.get('id')

    for (var i = 0; i < data.length; i++) {
        if (data[i].id === parameter_name.toString()) {
            var subContainerOne = document.createElement("div")
            var subContainerTwo = document.createElement("div")

            subContainerOne.className = "img col-sm-12 col-md-8 col-lg-4 p-1 mt-4"
            subContainerTwo.className = "heading col-sm-12 col-md-16 col-lg-8 p-1 mt-4"

            var img = document.createElement("img")
            img.src = data[i].image;
            img.alt = "pharmcy"
            img.className = "card-img-top card-item img-height"
            subContainerOne.append(img)

            var head = document.createElement("h1")
            head.innerHTML = data[i].name

            var nestedContainerChild = document.createElement("div")
            nestedContainerChild.className = "text"

            var nestedContainerChildernOne = document.createElement("div")
            var nestedContainerChildernTwo = document.createElement("div")

            nestedContainerChildernOne.className = "content"
            nestedContainerChildernTwo.className = "price"

            nestedContainerChildernOne.innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto unde qui hic recusandae porro. Quaerat voluptate blanditiis quis numquam vero! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo blanditiis aliquid nisi esse. Aspernatur distinctio quas impedit ad animi fugit magnam beatae, blanditiis explicabo labore odit! Minima magni rerum ad."


            nestedContainerChild.append(nestedContainerChildernOne)



            var headTwo = document.createElement("h3")
            headTwo.innerHTML = "Price"


            nestedContainerChildernTwo.append(headTwo)


            var cutPrice = document.createElement("s")
            cutPrice.innerHTML = "RS " + data[i]["cut price"]

            var lineBreak = document.createElement('br')
            cutPrice.append(lineBreak)

            var price = document.createElement("ins")
            price.innerHTML = "RS " + data[i].price

            nestedContainerChildernTwo.append(cutPrice)
            nestedContainerChildernTwo.append(price)

            nestedContainerChild.append(nestedContainerChildernTwo)

            subContainerTwo.append(head)
            subContainerTwo.append(nestedContainerChild)


            console.log('parameter_name')
            container.append(subContainerOne)
            container.append(subContainerTwo)
        }

    }
}