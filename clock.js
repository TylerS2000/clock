let time = ()=>{
    let date =  new Date();
    let hour = date.getHours();
    let ampm= "AM"
    if(hour>=12){ampm="PM"};
    if(hour>12){hour = hour-12;}
    
    let minute = date.getMinutes();
    if(minute<10){minute = `0${minute}`}
    let second = date.getSeconds();
    if(second<10){{second = `0${second}`}}
    
    let div = document.getElementById("clock")
    div.innerHTML = `${hour}:${minute}:${second} ${ampm}`
}
let update = setInterval(time, 100);

