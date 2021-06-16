$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navitems').addClass("sticky");
        }else{
            $('.navitems').removeClass("sticky");
        }
    })
})
$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
    url:"https://script.google.com/macros/s/AKfycbxdqcoLxkFB8nZMUnELHlK62cEEW5rC6ScalDdZC5qBI9ofjQW3khIe4IAZ7DNy-0Z-/exec",
    data:$("#submit-form").serialize(),
    method:"post",
    success:function (response){
        alert("Form submitted successfully")
        window.location.reload()
        //window.location.href="https://google.com"
        },
        error:function (err){
        alert("Something Error")
        }
    })
})