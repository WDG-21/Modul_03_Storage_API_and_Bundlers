const fetchProducts = () => {
  fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => console.log(data));
};

export const fetchMewtwo = () => {
  fetch('https://pokeapi.co/api/v2/pokemon/150')
    .then((response) => response.json())
    .then((data) => console.log(data));
};

export default fetchProducts;
