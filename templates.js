//placeholder
var underConstruction = `<div class="col-xs-12 col-sm-6 col-md-4">
  <h2>Under Construction</h2>
  <img src="#" alt="no image">
  <p>Nothing to see here...<br>This area of the site is currently under construction.</p>
</div>`

var htmlButtons = `
<div class="row">
  <div id="main0nav" class="htmlSubButtons">
    <ul>
      <li class="col-xs-6 col-sm-3"><button class="btn btn-block subNavButton" data-sub-btn="0">Projects</button></li>
      <li class="col-xs-6 col-sm-3"><button class="btn btn-block subNavButton" data-sub-btn="1">Coding Dojo</button></li>
      <li class="col-xs-6 col-sm-3"><button class="btn btn-block subNavButton" data-sub-btn="2">FreeCodeCamp</button></li>
      <li class="col-xs-6 col-sm-3"><button class="btn btn-block subNavButton" data-sub-btn="3">JS Functions</button></li>
    </ul>
  </div>
</div>
<div class="row">
  <div class="col-xs-12 subContent">
  </div>
</div>
`;
var htmlProjects = [
  [[`
    <div class="col-xs-12 col-sm-6 col-md-4">
      <h2>Hangman</h2>
      <img src="img/HTML/Projects/hangman.png" alt="picture of hangman site">
      <p>This is a hangman game built with HTML, CSS, and JavaScript/jQuery. The game selects a random string from an array of words and displays blanks based on the length of the random word or phrase. Each guess is tracked, and if the user wins or loses there is a button that allows the user to start a new game with another random word</p>
    </div>
    `]],
    [[`
      <div class="col-xs-12 col-sm-6 col-md-4">
        <h2>JavaScript Basics</h2>
        <img src="img/HTML/CodingDojo/jsBasics.png" alt="picture of javascript basics">
        <p>This is a static non-functional site built with HTML and CSS. The purpose of this assignment was to recreate a given site using HTML and CSS.</p>
      </div>
      `],
      [`
        <div class="col-xs-12 col-sm-6 col-md-4">
          <h2>Databases</h2>
          <img src="img/HTML/CodingDojo/databases.png" alt="picture of databases page">
          <p>This is a static non-functional site built with HTML and CSS. The purpose of this assignment was to recreate a given site using HTML and CSS.</p>
        </div>
        `],
        [`
          <div class="col-xs-12 col-sm-6 col-md-4">
            <h2>Python</h2>
            <img src="img/HTML/CodingDojo/python.png" alt="picture of python page">
            <p>This is a static non-functional site built with HTML and CSS. The purpose of this assignment was to recreate a given site using HTML and CSS.</p>
          </div>
          `],
            [`
              <div class="col-xs-12 col-sm-6 col-md-4">
                <h2>Contact Card</h2>
                <img src="img/HTML/CodingDojo/contactCards.png" alt="picture of contact cards">
                <p>This is a front end site built with HTML, CSS, and Javascript/jQuery. The purpose of this assignment was to allow users to generate a contact card that would dynamically appear when a form is filled out.</p>
              </div>
              `],
              [`
                <div class="col-xs-12 col-sm-6 col-md-4">
                  <h2>Game of Thrones</h2>
                  <img src="img/HTML/CodingDojo/gameOfThrones.png" alt="picture of game of thrones api site">
                  <p>This is a front end site built with HTML, CSS, Javascript/jQuery, and <a href="https://anapioficeandfire.com/" alt="GoT api">an API of Ice and Fire</a>. This is a dynamic site that uses a Game of Thrones API to display info about the house that is clicked.</p>
                </div>
                `],
                [`
                  <div class="col-xs-12 col-sm-6 col-md-4">
                    <h2>Aykman</h2>
                    <img src="img/HTML/CodingDojo/aykman.png" alt="picture of aykman">
                    <p>This is a front end site built with HTML, CSS, and Javascript/jQuery. This is a work in progress for a pacman style game called "Aykman" where the user plays as Dan Aykroid and must avoid getting abducted by aliens.</p>
                  </div>
                  `]],
    [[`
      <div class="col-xs-12 col-sm-6 col-md-4">
        <h2>Weather App</h2>
        <img src="img/HTML/FreeCodeCamp/weatherApp.png" alt="picture of javascript basics">
        <p>This is a front end site built with HTML, CSS, Javascript/jQuery, and a weather API from <a href="https://openweathermap.org/" alt="open weather api">Open Weather Map</a>. This is a dynamic site that uses a weather API to deliver the temperature at the longitude and latitude of the visitor's PC. There is also a search function to look up weather for another city.</p>
      </div>
      `]],
    [[underConstruction]]
];
var pythonButtons = `<div class="row">
  <div id="main0nav" class="pythonSubButtons">
    <ul>
      <li class="col-xs-6 col-sm-3"><button class="btn btn-block subNavButton" data-sub-btn="0">Projects</button></li>
      <li class="col-xs-6 col-sm-3"><button class="btn btn-block subNavButton" data-sub-btn="1">Coding Dojo</button></li>
      <li class="col-xs-6 col-sm-3"><button class="btn btn-block subNavButton" data-sub-btn="2">FreeCodeCamp</button></li>
      <li class="col-xs-6 col-sm-3"><button class="btn btn-block subNavButton" data-sub-btn="3">Python Functions</button></li>
    </ul>
  </div>
</div>
<div class="row">
  <div class="col-xs-12 subContent">
  </div>
</div>`;

var pythonProjects = [[[underConstruction]],[[underConstruction]],[[underConstruction]],[[underConstruction]]];

var meanButtons = `<div class="row">
  <div id="main0nav" class="meanSubButtons">
    <ul>
      <li class="col-xs-6 col-sm-3"><button class="btn btn-block subNavButton" data-sub-btn="0">Projects</button></li>
      <li class="col-xs-6 col-sm-3"><button class="btn btn-block subNavButton" data-sub-btn="1">Coding Dojo</button></li>
      <li class="col-xs-6 col-sm-3"><button class="btn btn-block subNavButton" data-sub-btn="2">FreeCodeCamp</button></li>
      <li class="col-xs-6 col-sm-3"><button class="btn btn-block subNavButton" data-sub-btn="3">JS Functions</button></li>
    </ul>
  </div>
</div>
<div class="row">
  <div class="col-xs-12 subContent">
  </div>
</div>`;

var meanProjects = [[[underConstruction]],[[underConstruction]],[[underConstruction]],[[underConstruction]]];

var cSharpButtons = `<div class="row">
  <div id="main0nav" class="cSharpSubButtons">
    <ul>
      <li class="col-xs-6 col-sm-3"><button class="btn btn-block subNavButton" data-sub-btn="0">Projects</button></li>
      <li class="col-xs-6 col-sm-3"><button class="btn btn-block subNavButton" data-sub-btn="1">Coding Dojo</button></li>
      <li class="col-xs-6 col-sm-3"><button class="btn btn-block subNavButton" data-sub-btn="2">FreeCodeCamp</button></li>
      <li class="col-xs-6 col-sm-3"><button class="btn btn-block subNavButton" data-sub-btn="3">C# Functions</button></li>
    </ul>
  </div>
</div>
<div class="row">
  <div class="col-xs-12 subContent">
  </div>
</div>`;
var cSharpProjects = [[[underConstruction]],[[underConstruction]],[[underConstruction]],[[underConstruction]]];

var aboutMe = `<div class="col-xs-12 subContent">
  <h2>About Me</h2>
  <p>I am a full stack developer and love learning new technologies and more efficient ways to write code. Since a class I took in 2009, I have been intrigued by programming and being able to build something with nothing but a text editor. After graduating from University of Phoenix in May 2014 I realized that college had taught me a lot of theory but I did not have much actual coding experience. After working in software quality assurance for 2.5 years, I decided it was time to leave my job to pursue programming full time. I researched multiple coding bootcamps and ended up deciding on <a href="http://www.codingdojo.com" alt="Coding Dojo website">Coding Dojo</a>. I hopped on a plane to Seattle and have been learning Python/Django, MEAN, and C#.Net stacks. While I am not working on projects for Coding Dojo, I spend much of my free time researching frameworks that can make my code simpler and faster to write, or researching ways to streamline my workflow (such as creating personal Bash functions to save me 5 seconds here and there for commands I use frequently).</p>
  <p>The majority of the content displayed here has been completed at Coding Dojo, but as time goes on I will continue to update this site with personal side-projects, contract work, and any other code related work I may happen to do in my free time.</p>
  </div>`
