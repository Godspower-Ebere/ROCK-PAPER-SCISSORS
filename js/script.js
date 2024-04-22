var head1=document.getElementById("head1");
var head2=document.getElementById("head2");
var head3=document.getElementById("head3");
var head4=document.getElementById("head4");

var hide1=document.getElementById("hide1");
var hide2=document.getElementById("hide2");
var hide3=document.getElementById("hide3");
var hide4=document.getElementById("hide4");

var img1=document.getElementById("img1");
var img2=document.getElementById("img2");
var img3=document.getElementById("img3");
var img4=document.getElementById("img4");

var body=document.getElementById("body");

var cont=document.getElementById("cont");

head1.addEventListener("click",function(){
    if (hide1.style.display==="none"){
        hide1.style.display="block";
        img1.src="images/icon-minus.svg"
    }
    else{
        hide1.style.display="none";
        img1.src="images/icon-plus.svg"
    }
    if (cont.clientHeight>=700){
        body.style.alignItems="start";
        body.style.overflowY="scrool";
    }
    else{
        body.style.alignItems="center";
        body.style.overflowY="hidden";
    }
})

head2.addEventListener("click",function(){
    if (hide2.style.display==="none"){
        hide2.style.display="block";
        img2.src="images/icon-minus.svg"
    }
    else{
        hide2.style.display="none";
        img2.src="images/icon-plus.svg"
    }
    if (cont.clientHeight>=700){
        body.style.alignItems="start";
        body.style.overflowY="scrool";
    }
    else{
        body.style.alignItems="center";
        body.style.overflowY="hidden";
    }
})

head3.addEventListener("click",function(){
    if (hide3.style.display==="none"){
        hide3.style.display="block";
        img3.src="images/icon-minus.svg"
    }
    else{
        hide3.style.display="none";
        img3.src="images/icon-plus.svg"
    }
    if (cont.clientHeight>=700){
        body.style.alignItems="start";
        body.style.overflowY="scrool";
    }
    else{
        body.style.alignItems="center";
        body.style.overflowY="hidden";
    }
})

head4.addEventListener("click",function(){
    if (hide4.style.display==="none"){
        hide4.style.display="block";
        img4.src="images/icon-minus.svg"
    }
    else{
        hide4.style.display="none";
        img4.src="images/icon-plus.svg"
    }
    if (cont.clientHeight>=700){
        body.style.alignItems="start";
        body.style.overflowY="scrool";
    }
    else{
        body.style.alignItems="center";
        body.style.overflowY="hidden";
    }
})
