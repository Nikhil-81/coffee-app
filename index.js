let bag_arr=JSON.parse(localStorage.getItem("coffee")) || []


function bagsec(){
    window.location.href="bucket.html"
}
let url="https://masai-mock-api.herokuapp.com/coffee/menu"

async function products(){
    try{
        let res=await fetch(url)
        let product=await res.json()
        let x=product["menu"]
let data=x["data"]
display(data)
    }
    catch{
        console.log("buy buy")
    }

    
}
let cost
 products()
 let cont=document.querySelector("#menu")
 function display(data){
     data.forEach(function(el){
     // card
     let card=document.createElement("div")
     // creating inside card
     let image=document.createElement("img")
     image.setAttribute("src",el.image)
     let innerpac=document.createElement("div")
     let type=document.createElement("p")
     type.innerText=el.title
     let price=document.createElement("p")
     price.innerText=el.price
     
     let button=document.createElement("button")
     button.innerText="add_to_bucket"
     button.addEventListener("click",function(){
         add_to_bag(el)
     })
     innerpac.append(type,price)
     card.append(image,innerpac,button)
     cont.append(card)
     })
    
 }

 function add_to_bag(el){
    bag_arr.push(el)
    let x=Number(el.price)
    cost+=Number(x)
    console.log(cost)


    localStorage.setItem("coffee",JSON.stringify(bag_arr))
 }