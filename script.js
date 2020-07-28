$(document).ready(function(){
    $(".change1").click(function () {
        $(".change1").slideDown("1500").hide(1000);
        $("#hide1").show("1500");
      });
      $("#hide1").click(function () {
        $("#hide1").slideUp("1500").hide(1000);
        $(".change1").slideDown("1500");
      });

      $(".change2").click(function () {
        $(".change2").slideDown("1500").hide(1000);
        $("#hide2").show("1500");
      });
      $("#hide2").click(function () {
        $("#hide2").slideUp("1500").hide(1000);
        $(".change2").slideDown("1500");
      });

      $(".change3").click(function () {
        $(".change3").slideDown("1500").hide(1000);
        $("#hide3").show("1500");
      });
      $("#hide3").click(function () {
        $("#hide3").slideUp("1500").hide(1000);
        $(".change3").slideDown("1500");
      });
});

$(document).ready(function(){
    $("#grey").mouseover(function(){
      $("#black").slideDown(1000).show();
    }).mouseout(function(){
      $("#black").hide(800);
    });
    $("#ontario").mouseover(function(){
      $("#security").slideDown(1000).show();
    }).mouseout(function(){
      $("#security").hide(800);
    });
    $("#yellow").mouseover(function(){
      $("#orange").slideDown(1000).show();
    }).mouseout(function(){
      $("#orange").hide(800);
    });
    $("#brave").mouseover(function(){
      $("#movies").slideDown(1000).show();
    }).mouseout(function(){
      $("#movies").hide(800);
    });
    $("#gudday").mouseover(function(){
      $("#gday").slideDown(1000).show();
    }).mouseout(function(){
      $("#gday").hide(800);
    });
    $("#buttons").mouseover(function(){
      $("#inputs").slideDown(1000).show();
    }).mouseout(function(){
      $("#inputs").hide(800);
    });
    $("#burned").mouseover(function(){
      $("#fire").slideDown(1000).show();
    }).mouseout(function(){
      $("#fire").hide(800);
    });
    $("#giraffe").hover(function(){
      $("#restaurant").slideDown(1000).show();
    }).mouseout(function(){
      $("#restaurant").hide(800);
    });
  });

  $(document).ready(function(){
   $("form.formValidation").submit(function(){
    var name= $("input#name").val();
    var email= $("input#email").val();
    var massage= $("textarea#message").val();
    if (name && email){
      alert("Thank you. Your message has been received");
    }else{
      alert("Please fill the form");
    }
    
   });
  
    });

    $(document).ready(function(){
        $("img#mouseClick").click(function()
       {
         var elmnt = document.getElementById("what-we-do");
         elmnt.scrollIntoView();
       });
      });
    



















