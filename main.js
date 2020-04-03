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
        'link':'https://github.com/brohemz/carberry-pi'
      },
      { 
        'name':'plagiarism_checker', 
        'link':'https://github.com/brohemz/Program_Plagiarism_Checker'},
      { 
        'name':'movies_app', 
        'link':'https://github.com/brohemz/movies-app',
        'thumbnail': 'https://github.com/brohemz/brohemz.github.io/blob/gh-pages/resources/gif_movies-app.gif?raw=true'
      }, 
      { 
        'name':'image_search', 
        'link':'https://github.com/brohemz/image_search',
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
