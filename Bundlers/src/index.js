import axios from 'axios';

const fetchProducts = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) throw new Error('Failed to fetch products');
    const data = await response.json();
    console.log(data);
    // return data;
  } catch (error) {
    console.error(error);
  }
};

// fetchProducts();

const fetchProducts2 = async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  console.log(response.data);
};

// fetchProducts2();

const fetchProducts3 = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    console.log(response.data);
  } catch (error) {
    console.error('error fetching products', error);
  }
};

fetchProducts3();
