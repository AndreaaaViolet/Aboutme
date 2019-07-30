alert("Welcome to my javascript page! We're getting interactive in here!!!");

function makeImageBig(x){
x.style.height = "500px"
x.style.width = "500px"
}

function makeImageOriginalSize(x){
x.style.height = "200px"
x.style.width = "200px"
}

function showHideSection(section){
    var showHideSection = document.getElementById(section);
    if(showHideSection.style.display == "none") {
        showHideSection.style.display = "block";
    }else{
        showHideSection.style.display = "none";
    
    }
}
