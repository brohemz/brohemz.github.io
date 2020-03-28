function addProjects(){

  var projectList = getProjectJson().projects;

  var addHTML = ""
  for( const proj of projectList ){
    // console.log(proj)
    addHTML += `<div class='proj'>
                   ${proj.name}:
                </div>`
            +  `<div class='proj-link'>
                  <a href='${proj.link}'> View on Github </a>
               </div>`;
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
        'name':'image_search', 
        'link':'https://github.com/brohemz/image_search' },
      { 
        'name':'movies_app', 
        'link':'https://github.com/brohemz/movies-app' 
      },
    ]
  }
}

function addHello(id){
  document.getElementById(id).innerHTML = "HELLO";
  console.log(id)
}

window.onload = () => {
  console.log("wow")
}
