const getProducts = () => {

	httpGet('http://localhost/test-enext/objects/potions.json', function (response) {

		potions = window.dataLayer.potions;
		for(potion in response.potions){
			potions.push(response.potions[potion]);
		}

		var cards = potions.map(createCard); //Gerando Cards

		const concat = (next, prev) => next + prev; // Funcção de concatenação
		var html = cards.reduce(concat, ''); // Concatenando e gerando html
		//console.log(html);
		document.getElementById('cards').innerHTML = html;

		click('.card', info);		
		
	});

};

const createCard = (potion) => {

	var html = '<div class="card col-md-4 col-sm-4 col-xs-6" data-product="'+ potion.id +'">';
	html += '<img class="photo" src="/test-enext/assets/img/products/'+ potion['image'] +'" alt="'+potion.name	+'">';
	html += '<div class="product">'+ potion.name +' - <span class="price">$'+ potion.price +'</span></div>';
	html += '</div>';

	return html;

}

//Informação da modal de produtos
const info = (element) => {

	const id = element.getAttribute('data-product');

	const filterPotion = potion =>  potion.id == id;
	const product = window.dataLayer.potions.filter(filterPotion);
	console.log(product);

	const  modal = document.querySelector('#modalProductInfo');

	const html = rendererizaInfo(product[0]);

	modal.innerHTML = html;

	modal.classList.remove("--hidden");

	var close = element => modal.classList.add("--hidden");
	click('.close', close);

}

const rendererizaInfo = (product) => {

	var html = '<div class="modal-content container --small">';
	html += '<a class="close"><i class="fa fa-times" aria-hidden="true"></i></a>';
	html += '<div class="image">';
	html += '<img src="/test-enext/assets/img/products/' + product.image +'" alt="">';
	html += '</div>';
	html += '<div class="product">';
	html += '<h3 class="title">'+ product.name +'</h1>';
	html += '<h4 class="subtitle">Use/Effect:</h2>';
	html += '<p class="description">'+ product.effect +'</p>';

	html += '<h4 class="subtitle">Ingredients:</h4>';
	html += '<ul class="description">';

	Array.from(product.ingredients).forEach(function (ingredient) {
		html += '<li>'+ingredient+'</li>';
	});

	html += '</ul>';

	html += '<h4 class="subtitle --not-margin">Price:</h4>';
	html += '<h4 class="price">'+ product.price +'</h4>';
	html += '<button class="button --default">add to cart</button>';
	html += '</div>';
	html += '</div>';

	return html;
}










