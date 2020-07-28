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
    $("#grey").mouseenter(function(){
      $("#black").slideDown(1200);
    }).mouseout(function(){
      $("#black").hide(800);
    });
    $("#ontario").mouseover(function(){
      $("#security").show();
    }).mouseout(function(){
      $("#security").hide();
    });
    $("#yellow").mouseover(function(){
      $("#orange").show();
    }).mouseout(function(){
      $("#orange").hide();
    });
    $("#brave").mouseover(function(){
      $("#movies").show();
    }).mouseout(function(){
      $("#movies").hide();
    });
    $("#gudday").mouseover(function(){
      $("#gday").show();
    }).mouseout(function(){
      $("#gday").hide();
    });
    $("#buttons").mouseover(function(){
      $("#inputs").show();
    }).mouseout(function(){
      $("#inputs").hide();
    });
    $("#burned").mouseover(function(){
      $("#fire").show();
    }).mouseout(function(){
      $("#fire").hide();
    });
    $("#giraffe").hover(function(){
      $("#restaurant").show();
    }).mouseout(function(){
      $("#restaurant").hide();
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
    



















