mybutton = document.getElementsByClassName("myBtn");
this.window.onscroll = function(){
    scrollFunction()
};
function scrollFunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        mybutton.style.display ="block";
    } else {
        mybutton.style.display = "none";
    }
}
function topfunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}