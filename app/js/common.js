$(function(){

  $('.social').on('mouseover', function(e){
    $(e.target).next().addClass('active1');
  });
  $('.social').on('mouseout', function(e){
    $(e.target).next().removeClass('active1');
  });


  $('.loupe').on('click', function(){
    var o = $(this).parent();
    var url = o.find('img').attr('src');
    var html = '<div class="clone"><img src ="'+url+'"></div>';
    var c = $('.content');
    var ovL =  $('.overlay');
    ovL.css({"display":"block"});
    c.append(html);
    c = c.find('.clone img');
    c.animate({
          width:"300%",
          height:"300%"
    },400);
    c.on('click', function(){
      $(this).remove();
      ovL.css({"display":"none"});
    });
    ovL.on('click', function(){
      $(this).css({"display":"none"});
      c.remove();
    });

  });

});
