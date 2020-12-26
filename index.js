const urlBase = "https://api.punkapi.com/v2/beers";


async function getBeers() {
	//fetch 
	const beerPromise = await fetch(urlBase);
	const beer = await beerPromise.json();

	const beersDiv = document.querySelector('.beers');

	let beerHtml = "";

	beers.forEach(beer => {
		 beerHtml += `
		 <h3>${beer.name}</h3>
		`;
	});
	beersDiv.innerHTML = beerHtml;
}

getBeers();
