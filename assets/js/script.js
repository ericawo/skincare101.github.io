let navList = document.getElementsByClassName("nav-item");

function filterImages(button) {

	let buttonName = button.innerHTML;
	let buttonActive = button.classList.contains("active");
	let itemList = document.getElementsByClassName(buttonName);

	if (buttonActive == "false") {

		button.classList.remove("inactive");
		button.classList.add("active");
		
		for (let j = 0; j < itemList.length; j++) {
			itemList[j].style.display = "block";
		}

	} else {

		button.classList.add("inactive");
		button.classList.remove("active");

		for (let j = 0; j < itemList.length; j++) {
			itemList[j].style.display = "none";
		}
	}
}

for (let i = 0; i < navList.length; i++) {
	// assign your function to the onclick event handler
	navList[i].onclick = function() {
		filterImages(navList[i]);
	};
}
