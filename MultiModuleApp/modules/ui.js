import { addToCart } from './storage.js';

export function renderProducts(products) {
  const container = document.getElementById('products');
  container.innerHTML = '';

  products.forEach((product) => {
    const productCard = document.createElement('div');
    productCard.classList.add(
      'w-72',
      'bg-white',
      'text-black',
      'rounded-lg',
      'overflow-hidden',
      'shadow-md'
    );

    productCard.innerHTML = `
        <img class="w-64" src="${product.image}" alt="${product.title}" />
        <div class="py-2 px-3">
          <h2 class="font-bold my-2">${product.title}</h2>
          <p>${product.description.substring(0, 100)}...</p>
          <button class="bg-blue-600 text-white py-2 px-4 rounded-lg mt-2 hover:bg-blue-800" data-id="${
            product.id
          }">Add to Cart</button>
        </div>
      `;
    container.appendChild(productCard);
  });
}

export function setupEventListeners(products) {
  // Fügt dem gesamten Dokument einen Klick-EventListener hinzu
  document.addEventListener('click', (event) => {
    // Überprüft, ob das geklickte Element eine Button mit data-id-Attribut ist
    if (event.target.matches('button[data-id]')) {
      // Holt die Produkt-ID aus dem geklickten Button
      const productId = event.target.getAttribute('data-id');

      // Findet das entsprechende Produkt aus dem Array der Produkte
      const product = products.find((p) => p.id == productId);

      // Falls das Produkt gefunden wurde, wird es in den Warenkorb hinzugefügt und eine Alert angezeigt
      if (product) {
        addToCart(product);
        alert(`${product.title} wurde zum Warenkorb hinzugefügt!`);
      }
    }
  });
}
