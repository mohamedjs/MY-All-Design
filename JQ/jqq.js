$(function()
{
    $("button").dblclick(function(){
        $("p").toggle();
    }); 
     $("button").mouseenter(function(){
        $("p").css("color","red");
    }); 
     $("button").mouseleave(function(){
        $("p").hide(4000,function(){$(this).hide();});
    });
      $("button").hover(
        function(){
        $("p").css("color","blue");},
       function(){
          $("p").css("color","red");
      });
        $("button").dblclick(function(){
        $("div").fadeIn(4000);
       });
    $(".click").click(function(){
       $(".open").slideDown(5000,function(){$(".click").hide();});
    });
   var x= $(".kill")
   x.animate(
    {
        width:'500px',
        height:'show',
        opacity:'.4',
        borderRadius:'20px'
    }
        ,
        2000
    )
     .animate(
    {
        width:'800px',
        height:'show',
        opacity:'.9',
        borderRadius:'50px'
    }
        ,
        2000
    );
    $("h1").html($("p").html());
    $("#bet").click(function(){
    $("#errr").val($("#er").val())});
    $("h3").append("hamed");
    $("h3").prepend("ali");
    $("h3").before("hamed");
    $("h3").after("hamed");
    $("p,h1").addClass("de");
    $(".first").load("learn.text");
});