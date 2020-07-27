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