var img=document.getElementById("image");
var imgs=["jackfruit.jpg","mango.jpg","apple.jpg"];
var counter=0;

setInterval(()=>next(),2000);
function next(){
    if(counter==imgs.length-1){
        counter=0;
    }
    else{
        counter++;
    }
    
    img.src=imgs[counter];
}

function previous(){
    if(counter==0){
        counter=imgs.length;
    }
    counter--;
    img.src=imgs[counter];
}

