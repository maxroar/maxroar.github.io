$(document).ready(function(){
  $('.mainContent').html(aboutMe);

  $('.navButton').on('click', function(){
    var subMenuID = $(this).data('sub-menu');
    var subNav = '';
    var bodyClass = '';
    switch(subMenuID){
      case 0: subNav = htmlButtons;
        subContentList = htmlProjects;
        bodyClass= 'htmlBack';
        break;
      case 1: subNav = pythonButtons;
        subContentList = pythonProjects;
        bodyClass= 'pythonBack';
        break;
      case 2: subNav = meanButtons;
        subContentList = meanProjects;
        bodyClass= 'meanBack';
        break;
      case 3: subNav = cSharpButtons;
        subContentList = cSharpProjects;
        bodyClass= 'cSharpBack';
        break;
      default: break;
    }
    $('.mainContent').html(subNav);
    //clear content class and add selected class
    $('.mainContent').removeClass('htmlBack');
    $('.mainContent').removeClass('pythonBack');
    $('.mainContent').removeClass('meanBack');
    $('.mainContent').removeClass('cSharpBack');
    $('.mainContent').addClass(`${bodyClass}`);
    $(`.subNavButton`).on('click', function(){
      var subButtonData = $(this).data('sub-btn');
      var htmlStr = '';
      for(var i = 0; i < subContentList[subButtonData].length; i++){
        htmlStr += subContentList[subButtonData][i];
      }
      $('.subContent').html(htmlStr);
    });
  });
  $('#aboutMe').on('click', function(){
    $('.mainContent').html(aboutMe);
  });
});
