// Function to fetch all products from the API
function fetchProducts() {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(products => {
            const productsContainer = document.getElementById('products-container');
            productsContainer.innerHTML = ''; 

            products.forEach(product => {
                const productElement = document.createElement('div');
                productElement.classList.add('product');
                productElement.innerHTML = `
                    <div class="product-info">
                        <img src="${product.image}" alt="${product.title}" style="height:300px; width:300px">
                        <h3>${product.title}</h3>
                        <p>${product.description}</p>
                    </div>
                    <span class="star">&#9734;</span> <!-- Star icon -->
                `;

                const starIcon = productElement.querySelector('.star');
                starIcon.addEventListener('click', () => toggleStarColor(starIcon));

                productsContainer.appendChild(productElement);
            });
        })
        .catch(error => console.error('Error fetching products:', error));
}

function toggleStarColor(starIcon) {
    starIcon.classList.toggle('red');
    const productName = starIcon.closest('.product').querySelector('h3').innerText;
    const isStarred = starIcon.classList.contains('red');
    const action = isStarred ? 'starred' : 'unstarred';
    alert(`Product "${productName}" is ${action}.`);
}

window.addEventListener('load', fetchProducts);
