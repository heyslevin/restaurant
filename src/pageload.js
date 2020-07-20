const pageload = () => {

	//Selector
	const content = document.querySelector("#content");
	const tabButton = document.querySelector('[dataset-num="one"]');

	//New objects
	const title = document.createElement("h1");
	const bodytext = document.createElement("p");
	const image = document.createElement("img");

	const tabContainer = document.createElement("tabContainer");
	const tab = document.createElement("tab");
	const tabContent = document.createElement("tabContent");

	//Fill objects 
	image.setAttribute("src","https://vod-hogarmania.atresmedia.com/hogarmania/images/images01/2016/09/08/5c000b235a2c1100017751e0/1239x697.jpg");
	title.textContent = "The best Restaurant";
	bodytext.textContent = "There is tasty food, and all that good stuff here. Don't miss the totopos bro."

	//Append
	content.appendChild(image);
	content.appendChild(title);
	content.appendChild(bodytext);

	tabContainer.appendChild(tab);
	tabContainer.appendChild(tab);
	tabContainer.appendChild(tab);

	content.appendChild(tabContainer);



	//Tab Functions Loaders
	function tab1content() {
		alert("yes");

	}
	

	// //Event
	// tabButton.addEventListener("click",tab1content)


};

export default pageload;

