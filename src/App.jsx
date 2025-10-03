import { BrowserRouter, Route, Routes } from "react-router";

import Counter from "@/pages/Counter";
import ProductsList from "@/pages/ProductsList";
import ProvincesList from "./pages/Address/ProvincesList";
import ProvincesList2 from "./pages/Address/ProvincesList2";
import Assets from "@/pages/Assets";
import Icons from "@/pages/Icons";
import Header from "./components/Header";
import AuthProvider from "./components/AuthProvider";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";

function App() {
    return (
        <BrowserRouter>
            <AuthProvider />
            <Header />

            <Routes>
                <Route path="/address/provinces" element={<ProvincesList />} />
                <Route
                    path="/address/provinces2"
                    element={<ProvincesList2 />}
                />

                <Route path="/assets" element={<Assets />} />
                <Route path="/icons" element={<Icons />} />

                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />

                {/* Private routes */}
                <Route element={<PrivateRoute />}>
                    <Route path="/counter" element={<Counter />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/products" element={<ProductsList />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
