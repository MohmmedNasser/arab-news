$(document).ready(function(){

  $('.single-item-rtl').slick({
    rtl: true,
    autoplay: true,
    autoplaySpeed: 4000
  });

  $('.tab-switch li').click(function () {

    // Add Selected Class To Active Link
    $(this).addClass('selected').siblings().removeClass('selected');

    // console.log($(this).data('class'));
    // Hide All Divs
    $(".last-rep .tabs-content > div").hide();
    // Show Div Connected with This Link
    $("." + $(this).data('class')).show();

  });

  $('.video-view').magnificPopup({
    type:'iframe',
  });


  var colorLi = $(".color-section div");
  colorLi.eq(0).css("backgroundColor", "#1bb05d").end()
      .eq(1).css("backgroundColor", "#cf1c13").end()
      .eq(2).css("backgroundColor", "#5a9aef").end()
      .eq(3).css("backgroundColor", "#f14165").end()
      .eq(4).css("backgroundColor", "#8066b8").end()
      .eq(5).css("backgroundColor", "#f59d00");

  colorLi.click(function () {

    $("link[href*='them']").attr("href", $(this).attr('data-value'));

  });

  var typed = new Typed(".news", {
    strings: [

      " ",

      "بان كي مون يؤكد استعداد الأمم المتحدة لإعادة إعمار الرمادي" ,

      "إدارة أوباما تستعد لفرض أول عقوبات ضد إيران منذ الاتفاق النووي" ,

      "حنان عشراوي في الغارديان”الفلسطينيون لن يقبلوا صفقة القرن" ,
    ],
    typeSpeed: 30,
    backSpeed: 30,
    backDelay: 700,
    loop: true,
    startDelay: 30,
  });


  $('.menu-toggle').on("click" ,function() {
    $('ul').slideToggle();
  });

});
