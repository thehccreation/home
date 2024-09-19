
fetch("products.json")
.then(function(response){
	return response.json();
})
.then(function(products){
	let placeholder = document.querySelector("#data-output");
	let out = "";
	for(let product of products){
		out += `
			<section class="product card">
				<a href="${product.productCode}">
					<img src='${product.image}'>
					<h4>${product.name}</h4>
					<p>${product.discription}</p>
					<button>EXPLORE</button>
				</a>
			</section>
		`;
	}

	placeholder.innerHTML = out;
});
