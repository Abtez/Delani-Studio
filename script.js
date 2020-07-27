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
      $("#black").show();
    }).mouseout(function(){
      $("#black").hide();
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
    var nameInput=$("input#name").val();
    document.getElementById("name").innerHTML;
    var emailInput=$("input#email").val();
    document.getElementById("email").innerHTML

    $("#submit").click(function(){
        alert("Thank you " + nameInput + " " + "Your email has been received")
    })

  })



















