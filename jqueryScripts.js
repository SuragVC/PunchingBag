$(function(){
    var width = 250;
    var view = $("#punchedView")
    view.css({"width":width})
    var image = $("img");
    $("#punch").click(function(){
        width=width-50;
        view.css({"width":width})
        if(width==0){
            image.attr({"src":"images/broken.jpeg"})
        }
    })
    $("#replace").click(function(){
        width=250;
        view.css({"width":width})
        image.attr({"src":"images/normal.jpeg"})
    })
})