function showLinks(){
    if(iconType.className == "fa fa-bars"){
        for(let showCounter = 1; showCounter<3;showCounter++){
            linkArray[showCounter].style.display = "block";
        }
        iconType.className = "fa fa-window-close";
    }
    else{
        for(let showCounter = 1; showCounter<3;showCounter++){
            linkArray[showCounter].style.display = "none";
        }
        iconType.className = "fa fa-bars";
    }
    
}
