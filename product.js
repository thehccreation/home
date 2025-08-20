fetch("products.json")
.then(function(response){
	return response.json();
})
.then(function(products){
	let placeholder = document.querySelector("#data-output");
	let out = "";
	for(let product of products){
		out += `
			<section class="product card" data-status="${product.status}">
				<a href="${product.productCode}">
					<img src='${product.image}'>
					<h4>${product.name}</h4>
					<p>${product.discription}</p>
					<sub>${product.status}</sub>
					<button>EXPLORE</button>
				</a>
			</section>
		`;
	}

	placeholder.innerHTML = out;
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productsCards = document.querySelectorAll('.product.card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            document.querySelector('.filter-btn.active').classList.remove('active');
            button.classList.add('active');
            const filterValue = button.getAttribute('data-filter');

            productsCards.forEach(card => {
                const cardStatus = card.getAttribute('data-status');
                if (filterValue === 'all' || cardStatus === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});
