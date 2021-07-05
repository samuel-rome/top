$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > $(window).height()){
            $("#menu").css({"background-color":"transparent"});   
        }
        else{
            setTimeout(function() { 
                $("#menu").css({"background-color":"black"});
            }, 200);
        }
    })
});