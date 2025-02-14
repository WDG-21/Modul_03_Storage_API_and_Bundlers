import { renderProducts, setupEventListeners } from './modules/ui.js';
import { fetchProducts } from './utils/fetch.js';

window.addEventListener('load', async () => {
  const products = await fetchProducts();
  renderProducts(products);
  setupEventListeners(products);
});
