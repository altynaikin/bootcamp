$(document).ready(function(){

    $('.btn').click(function(){
        if($('body').hasClass('colorChange')) {
            $('body').removeClass()
        } else {
            $('body').addClass('colorChange')
        }
    })
})
