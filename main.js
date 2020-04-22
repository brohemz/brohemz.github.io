function addProjects(){

  var projectList = getProjectJson().projects;

  var addHTML = ""
  for( const proj of projectList ){
    // console.log(proj)
    addHTML += `<div id='proj-box'>
                  <div class='proj'>
                    ${proj.name}:
                  </div>`
              +  `<div class='proj-link'>
                    <a href='${proj.link}'> View on Github </a>
                  </div>`;
    if(proj.description != null){
      addHTML += `<div class='proj-desc'>
        <b> ${proj.description[0]} </b>
        <ul>
          <li> ${proj.description[1]}
        </ul>
        ${proj.description[2]}
      </div>`
    }
    if(proj.thumbnail != null)
      addHTML += `<div class='proj-img'><img src=${proj.thumbnail} alt='gif - movie-app' /></div>`
    
    addHTML += '</div>'
  }
  document.getElementById("projects").innerHTML = addHTML;
 
}

function getProjectJson(){
  return {
    "projects": [
      { 
        'name':'carberry-pi',
        'link':'https://github.com/brohemz/carberry-pi',
        'thumbnail': 'https://raw.githubusercontent.com/brohemz/carberry-pi/master/documentation/resources/dash.png',
        'description': [
          'Undergraduate Research Project: A touchscreen user interface for the car',
          'Interfaces with the OBDII port to read engine information',
          'Toolkit: Python, PyQt, QML, Javascript, JSON, git, Bash Scripting'
        ]
      },
      { 
        'name':'plagiarism_checker', 
        'link':'https://github.com/brohemz/Program_Plagiarism_Checker',
        'description': [
          'Semester-long group project running with an agile-waterfall blend',
          'Highlights suspected areas on each file and provides a percentage (plagiarized) for reference',
          'Toolkit: C++, Qt'
        ]
      },
      { 
        'name':'movies_app', 
        'link':'https://github.com/brohemz/movies-app',
        'thumbnail': 'https://github.com/brohemz/brohemz.github.io/blob/gh-pages/resources/gif_movies-app.gif?raw=true',
        'description': [
          'Can\'t choose a movie? - Locates a random movie from a database with minimalist filters',
          'Talks with themoviedb REST API to request 100 most popular movies in a category',
          'Toolkit: React.js, Node.js, Sass'
        ]
      }, 
      { 
        'name':'image_search', 
        'link':'https://github.com/brohemz/image_search',
        'description': [
          'Downloads sets of images based on a given tag',
          'Attaches to the Flickr API to request a static image url for download',
          'Toolkit: Python, XML, JSON'
        ]
      },
    ]
  }
}

function addHello(id){
  document.getElementById(id).innerHTML = "HELLO";
  console.log(id)
}

window.onload = () => {
  console.log("Status: Window Loaded")
}
