$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navitems').addClass("sticky");
        }else{
            $('.navitems').removeClass("sticky");
        }
    })
})