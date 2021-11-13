 const mybutton = document.querySelector(".myBtn");

 window.addEventListener('scroll', () => {
     if(document.body.scrollTop > 30 || document.documentElement.scrollTop > 30){
         
     mybutton.style.display ='block';
     }else{
        mybutton.style.display = "none";
     }
 })

function topfunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}