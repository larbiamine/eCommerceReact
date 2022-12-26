import { React, useState, useEffect } from "react";
import styled from "styled-components";
import Product from "./Product";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../utilities";
import LoadingProduct from "./LoadingProduct";
//firebaseStorage
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
const apiKey = import.meta.env.VITE_FIREBASE_APIKEY;
const firebaseConfig = {
	apiKey: apiKey,
	authDomain: "shop-e49b5.firebaseapp.com",
	projectId: "shop-e49b5",
	storageBucket: "shop-e49b5.appspot.com",
	messagingSenderId: "744269514147",
	appId: "1:744269514147:web:61de3edf57ae6737bbc616",
};
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const Container = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const ProductsGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 20px;
	justify-content: space-between;
`;

const Title = styled.h1`
	font-size: 40px;
	color: #222222;
`;

function Products({ category, filters, sort }) {
	const [filteredProducts, setFilteredProducts] = useState([]);
	const { data, status, isLoading } = useQuery(["products"], () =>
		getProducts(category)
	);

	// useEffect(() => {
	//   const getProducts = async () => {
	//     try {
	//       let res = {};
	//       if (category) {
	//         res = await axios.get(
	//           `http://localhost:5000/api/products?category=${category}`
	//         );
	//       } else {
	//         res = await publicRequest.get("products");
	//       }

	//       setProducts(res.data);
	//     } catch (error) {
	//       console.log(error);
	//     }
	//   };
	//   getProducts();
	// }, [category]);

	useEffect(() => {
		if (category && status === "success") {
			setFilteredProducts(
				data.filter((item) =>
					Object.entries(filters).every(([key, value]) =>
						item[key].includes(value)
					)
				)
			);
		}
	}, [category, filters]);

	useEffect(() => {
		if (status === "success") {
			switch (sort) {
				case "newest":
					setFilteredProducts((previous) =>
						[...previous].sort((a, b) => a.createdAt - b.createdAt)
					);
					break;
				case "asc":
					setFilteredProducts((previous) =>
						[...previous].sort((a, b) => a.price - b.price)
					);
					break;
				case "desc":
					setFilteredProducts((previous) =>
						[...previous].sort((a, b) => b.price - a.price)
					);
					break;
				default:
					console.log();
			}
		}
	}, [sort]);

	console.log(data);

	return (
		<Container>
			{!category && <Title>Featured Products</Title>}

			<ProductsGrid>
				{status === "success" ? (
					category ? (
						filteredProducts.map((product) => (
							<Product item={product} key={product._id} />
						))
					) : (
						data
							.slice(0, 8)
							.map((product) => <Product item={product} key={product._id} />)
					)
				) : (
					<LoadingProduct />
				)}
			</ProductsGrid>
		</Container>
	);
}

export default Products;
