var tabs = document.getElementsByClassName("tab")
    

for(var tab of tabs){
    tab.style.display = "none"
}



function displayTab(id){
   
   for(var tab of tabs){
    tab.style.display = "none"
   }
   
    document.getElementById(id).style.display = "block"
}



var buttons = document.querySelectorAll("button")
for(var button of buttons){
    button.addEventListener("click", function(){
      
        for(var x of buttons){
            x.classList.remove("selected")
        }
       
        this.classList.add("selected")
    })
}



var backgroundColors = ["#4fa3c2", "#fe9557", "#5bd5c8"]
for(var button of buttons){
    button.addEventListener("click", function(){
        var index = this.getAttribute("index")
        document.body.style.background = backgroundColors
        [index]
        console.log(backgroundColors[index])
    })
}