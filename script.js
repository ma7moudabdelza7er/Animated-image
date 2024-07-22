let btns = document.querySelectorAll(".btn");
let photo = document.getElementById("photo")

btns.forEach(function(btn,i){
    // btn.classList.remove("active")
    btn.addEventListener("click",function(){
        animation()
        photo.src = `img/${i}.jpg`;
        btn.classList.add("active")
    })
})

function animation(){
    photo.classList.add("zoom");
    setTimeout(function(){
        photo.classList.remove("zoom")
    },1000)
    for(b of btns){
        b.classList.remove("active")
    }
}
