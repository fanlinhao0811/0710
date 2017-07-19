/**
 * Created by lenovo on 2017/7/19.
 */
$(function() {
    $("#inputSearch").on("focus", function () {
        if (this.value == this.defaultValue) {
            this.value = "";
        }
    }).on("blur", function () {
        if (this.value == "") {
            this.value = this.defaultValue;
        }
    });


    $("#nav li").hover(function(){
        $(this).children(".jnNav").show();
        },function(){
        $(this).children(".jnNav").hide();
        });


    $(".promoted").append("<span class='hot'></span>")
    var $imgs = $("#JS_imgWrap img");
    $imgs.each(function(index,elem){
        $(elem).css({
            zIndex:5-index
        });
    });

    var nowIndex=0;
    var $menus=$("#menu a");
    $menus.on("mouseover")



});