$(function () {
    $("nav .mini-btn button").click(function () {
      $(".mini-menu").slideToggle();  
    });
    $(".mini-menu").click(function () {
        $(".mini-menu").slideToggle(100);
    });
var n = -1;
    $("body").ready(function () {
        window.onscroll = function(){scrollFunction()};
function scrollFunction() {
    
    
    if (document.body.scrollTop >= 130 || document.documentElement.scrollTop > 130) {
        $(".line").css({"right":"0%"});
        $(".ltop").fadeIn();
        
    }
    
        
    
    else{
        $(".line").css({"right":"100%"});
        $(".ltop").fadeOut();
    }
    
    
}

var scn = -1;
function slider() {
    
    var sc = ["images/10c37d1ba888511c19b419ca24b00973.jpg","images/DSC_0014-e1598544129191.jpg","images/2022-01-08.jpg"];
    if(scn != 2){
        scn++;
        $(".screen img").attr("src",sc[scn]);
    }
    else{
        scn = 0;
        $(".screen img").attr("src",sc[scn]);
    }
}
setInterval(slider,1500);

function ad() {
    

var gle = ["D","'","S","u","m","m","a ","U","s","h","e","r","i","n","g ","A","g","e","n","c","y","."];
$(".type").fadeToggle();
 
setTimeout(() => {
    if (n <= 20) {
        n++;
        $(".gle").append("<code>"+gle[n]+"</code>");
    }
}, 1000);

    }
    setInterval(ad, 100);
    /*





    */
    $(".cont").click(function () {
        $(".tutorial-drop").fadeIn(); 
     });
     $(".rela #h2").click(function () {
         $(".tutorial-drop").fadeOut();
         $(".itutorial-drop").fadeOut(); 
      });
      $(".more-b").click(function () {
         var more = $(".more");
        $(this).children().slideToggle(); 
        
        
     });
     $(".main").click(function () {
        $(".mini-menu").slideUp(100); 
     });
 
     $(".rela #ih3").click(function () {
        $(".tutorial-drop").fadeIn();
         $(".itutorial-drop").fadeOut(); 
      });
     $("#sub").click(function () {
         
         var price = +$(".price").text();
        var name = $("#name").val(); 
        var type = $("#event-type").val();
        var venue = $("#venue").val();
        var date = $("#date").val();
        var time = $("#time").val();
        var number = $("#number").val();
        var needed = +$("#needed").val();
        if (name == "" /*|| type == "" || venue == "" || date == "" || time =="" || number == "" || needed == ""*/) {
         
         $(".itutorial-drop").hide();
        }
        else{
         $(".itutorial-drop").fadeIn();
         $(".itutorial-drop form").fadeIn();
         $(".tutorial-drop").hide();
         $("#namev").text(name);
        $("#typev").text(type);
        $("#venuev").text(venue);
        $("#datev").text(date);
        $("#timev").text(time);
        $("#numberv").text(number);
        $("#neededv").text(needed);
        $(".booked-usher").text(needed);
        $(".total").text(needed * price);
        }
        
        
 
     });
     $("form").submit(function () {
        return false;
    })
   
    });
    
});