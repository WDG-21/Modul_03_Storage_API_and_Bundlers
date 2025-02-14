export function getCartItems() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

export function addToCart(product) {
  // Ruft die aktuellen Artikel aus dem Warenkorb im localStorage ab
  const cart = getCartItems();

  // Fügt das neue Produkt dem Warenkorb Array hinzu
  cart.push(product);

  // Speichert das aktualisierte Warenkorb-Array im localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
}
