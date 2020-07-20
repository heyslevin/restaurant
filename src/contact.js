const contact = (() => {


	//Creators
	let title = document.createElement("h1");
	let body = document.createElement("p");

	//Fillers
	title.textContent = "Call us mothafucker";
	body.textContent = "Our phone is your mommas phone";

	//Selector
	let tab = document.querySelector(".tabcontent");

	//Append
	tab.appendChild(title);
	tab.appendChild(body);


})();

export default contact;