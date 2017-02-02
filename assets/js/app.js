window.onload = () => {
	
	window.dataLayer = []
	window.dataLayer.potions = []
	getProducts();	

	click('.nav-icon', toogleNav);
	click('.close-nav', toogleNav);
}
