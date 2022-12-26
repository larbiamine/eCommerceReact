import axios from "axios";
import { userRequest } from "./requestMethodes";

//firebaseStorage
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

const apiKey = import.meta.env.VITE_FIREBASE_APIKEY;

const BASE_URL = import.meta.env.VITE_BASE_URL;

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

const getImgs = async (data) => {
	var newData = [];
	for (let index = 0; index < data.length; index++) {
		const element = data[index];
		const pImg = element.img;
		if (pImg.length == 10) {
			const pathReference = ref(storage, `images/${pImg}`);
			const newPimg = await getDownloadURL(pathReference);

			const { img, ...others } = element;
			const newProduct = { img: newPimg, ...others };
			newData.push(newProduct);
		} else {
			newData.push(element);
		}
	}
	return newData;
};

export async function getProducts(category) {
	var data = [];
	if (category) {
		const res = await axios.get(BASE_URL + `products?category=${category}`);
		data = res.data;
	} else {
		const res = await axios.get(BASE_URL + "products/");
		data = res.data;
	}

	const newData = await getImgs(data);

	return newData;
}

export async function getUsers(req) {
	const res = await axios.get(BASE_URL + "user/", req);
	return res.data;
}

export async function editProduct(variables) {
	const res = await userRequest.put(
		`products/${variables.item._id}`,
		variables.update
	);
	return res.data;
}

export async function editOrder(variables) {
	const res = await userRequest.put(
		`orders/${variables.item._id}`,
		variables.update
	);
	return res.data;
}

export async function getIncome(req) {
	const res = await userRequest.get("orders/income", req);
	return res.data;
}

export async function getOrders(req) {
	const res = await userRequest.get("orders/", req);
	return res.data;
}

export async function addProduct(variables) {
	const res = await userRequest.post(`products/`, variables.product);
	return res.data;
}

export async function getWishlist(currentUserId) {
	const res = await userRequest.get(`wishlist/find/${currentUserId}`);
	return res.data;
}

export async function checkToken() {
	const res = await userRequest.get(`auth/checktoken`);
	if (res.data === "token expired" || res.data === "token is not valid") {
	}
	return !(res.data === "token expired" || res.data === "token is not valid");
}
