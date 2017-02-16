// function for open default tab when page first load
function initTab(){
	var tabMenu = document.getElementsByClassName("tab-menu");
	var firstCh, firstId, _id;
	firstCh = tabMenu[0];
	firstId = firstCh.id;
	firstCh.className += " active";
	switch (firstId){
		case ("electronic-tab"):
			_id = "electronic";
			break;
		case ("fashion-tab"):
			_id = "fashion";
			break;
		case ("other-tab"):
			_id = "other";
			break;
		default:
			break;
	}
	document.getElementById(_id).style.display = "flex";
}

// function to open tab when clicked
function openTab(evt, id){
	var i, tabMenu, tabContent, _id;

	tabMenu = document.getElementsByClassName("tab-menu");	//get all the tab-menu class
	for (i = 0; i < tabMenu.length; i++){
		tabMenu[i].className = tabMenu[i].className.replace(" active","");	//remove active class
	}

	tabContent = document.getElementsByClassName("tab-content");	//get all the tab-content class
	for (i = 0; i < tabContent.length; i++){
		tabContent[i].style.display = "none";	//set all the tab-content class' display to none
	}

	evt.currentTarget.className += " active";	//add active class in the current event target element
	switch (id){
		case ("electronic-tab"):
			_id = "electronic";
			break;
		case ("fashion-tab"):
			_id = "fashion";
			break;
		case ("other-tab"):
			_id = "other";
			break;
		default:
			break;
	}
	document.getElementById(_id).style.display = "flex";
}