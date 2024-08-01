
fetch("products.json")
.then(function(response){
	return response.json();
})
.then(function(products){
	let placeholder = document.querySelector("#data-output");
	let out = "";
	for(let product of products){
		out += `
			<section class="product">
			<div>
				<span> <img src='${product.image}'> </span>
				<span>${product.name}</span>
				</div>
				<div>
				<a href="${product.productCode}">EXPLORE</a>
				</div>
			</section>
		`;
	}

	placeholder.innerHTML = out;
});