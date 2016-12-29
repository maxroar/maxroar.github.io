$(document).ready(function(){
  $('.navButton').on('click', function(){
    var subMenuID = $(this).data('sub-menu');
    var subNav = '';
    switch(subMenuID){
      case 0: subNav = htmlButtons;
        subContentList = htmlProjects;
        break;
      case 1: subNav = pythonButtons;
        subContentList = pythonProjects;
        break;
      case 2: subNav = meanButtons;
        subContentList = meanProjects;
        break;
      case 3: subNav = cSharpButtons;
        subContentList = cSharpProjects;
        break;
      default: break;
    }
    $('.mainContent').html(subNav);
    $(`.subNavButton`).on('click', function(){
      var subButtonData = $(this).data('sub-btn');
      var htmlStr = '';
      for(var i = 0; i < subContentList[subButtonData].length; i++){
        htmlStr += subContentList[subButtonData][i];
      }
      $('.subContent').html(htmlStr);
    });
  });
});
