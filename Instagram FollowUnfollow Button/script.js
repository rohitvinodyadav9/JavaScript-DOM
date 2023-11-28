var sts = document.querySelector("h5")
var btn = document.querySelector("#follow")
var check = 0

btn.addEventListener("click", function(){
    if(check == 0){
    sts.innerHTML = "FRIENDS"
    sts.style.color = "green"
    btn.innerHTML = "Unfollow"
    check = 1
    }
    else{
    sts.innerHTML = "STRANGER"
    sts.style.color = "red"
    btn.innerHTML = "Follow"
    check = 0    
    }
})