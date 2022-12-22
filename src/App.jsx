//Pages
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Tos from "./pages/Tos";
import Success from "./pages/Success";

//React Query
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

//Router
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";

//redux
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />

        <Route
          path="/Register"
          element={user ? <Navigate to="/" /> : <Register />}
        />

        <Route path="/Login" element={user ? <Navigate to="/" /> : <Login />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/Wishlist" element={user ? <Wishlist /> : <Login />} />

        <Route path="/tos" element={<Tos />} />

        <Route path="/success" element={<Success />} />

        <Route path="/Product/:id" element={<Product />} />

        <Route path="/Products/:category" element={<ProductList />} />
      </>
    )
  );
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
