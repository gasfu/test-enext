// Função para pegar todos os produtos
const httpGet = (url, cb) => {

	const ajax = new XMLHttpRequest();
	ajax.open('get', url, true);
	ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	ajax.send(null);

	ajax.onreadystatechange = () => {
		if(ajax.readyState == 4) cb(JSON.parse(ajax.responseText));
	};


};


//Para acesso ao menu no mobile
const toogleNav = () => 	{
	const header = document.querySelector('#header-mobile');
	header.classList.toggle("hidden-mobile");

	const nav = document.querySelector('.nav');
	nav.classList.toggle("hidden-mobile");
}


//Função de click
const click = (reference, cb) => {

	const  elements = document.querySelectorAll(reference);
	Array.from(elements).forEach(function (element) {

		element.addEventListener('click', function () {
			cb(element);
		});

	});

};