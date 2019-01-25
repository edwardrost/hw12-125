var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	var button = document.createElement("button");
	var buttonName=document.createTextNode("Delete");
	button.appendChild(buttonName);
	li.appendChild(button);
	button.onclick = deleteListItem;
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

var li = document.querySelectorAll("li");
var j=0;
for (j=0; j<li.length; j++) {
	li[j].onclick = classToggle;
};

function classToggle() {
	this.classList.toggle("done");
};

function addButtons() {
	for (j=0; j<li.length; j++) {
		var button = document.createElement("button");
		var buttonName=document.createTextNode("Delete");
		button.appendChild(buttonName);
		var element = document.getElementsByTagName("li")[j];
		element.appendChild(button);
		button.onclick = deleteListItem;
	}
};

function deleteListItem() {
	this.parentNode.remove();
}

addButtons();

