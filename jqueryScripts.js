$(function(){
    var width = 250;
    var image = $("img");
    var view = $("#punchedView");
    view.css({"width":width,"border-radius":"20px"});
    var punch = $("#punch");
    punch.html("Punch")
    var replace = $("#replace");
    replace.html("Replace")
    punch.click(function(){
        width=width-50;
        view.css({"width":width});
        if(width==0){
            image.attr({"src":"images/broken.jpeg"});
        };
    })
    replace.click(function(){
        width=250;
        view.css({"width":width});
        image.attr({"src":"images/normal.jpeg"});
    })
})