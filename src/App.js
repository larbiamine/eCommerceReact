import Home from "./pages/Home"
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Success from "./pages/Success";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate
} from "react-router-dom";
import { useSelector } from "react-redux";





// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home/>,
//   },
//   {
//     path: "/Register",
//     element: <Register/>,
//   },
//   {
//     path: "/Login",
//     element: <Login/>,
//   },
//   {
//     path: "/Cart",
//     element: <Cart/>,
//   },
//   {
//     path: "/Product/:id",
//     element:<Product/>,
//   },
//   {
//     path: "/Products/:category",
//     element:<ProductList/>,
//   },
// ]);


const App = () => {
  const user = useSelector(state => state.user.currentUser);
  
  const router = createBrowserRouter(createRoutesFromElements(  
    <>  
      <Route path="/" element={<Home />} />

      <Route path="/Register" element={ user ? <Navigate to="/" /> : <Register />}/>

      <Route path="/Login" element={ user ? <Navigate to="/" /> : <Login />}/>

      <Route path="/cart" element={<Cart />}/>
      
      <Route path="/success" element={<Success />}/>

      <Route path="/Product/:id" element={<Product />}/>

      <Route path="/Products/:category" element={<ProductList />}/>
    </>
    )
  );
  return( 
    <RouterProvider router={router} />   
  )
};

export default App;








// createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Root />}>
//       <Route path="contact" element={<Contact />} />
//       <Route
//         path="dashboard"
//         element={<Dashboard />}
//         loader={({ request }) =>
//           fetch("/api/dashboard.json", {
//             signal: request.signal,
//           })
//         }
//       />
//       <Route element={<AuthLayout />}>
//         <Route
//           path="login"
//           element={<Login />}
//           loader={redirectIfUser}
//         />
//         <Route path="logout" />
//       </Route>
//     </Route>
//   )
// );