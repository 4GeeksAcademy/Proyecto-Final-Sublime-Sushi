import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { RecoveryPassword } from "./pages/recoveryPassword";
import { ChangePassword } from "./pages/changePassword";
import { Signup } from "./pages/signup"
import { SobreNosotros } from "./pages/sobreNosotros"
import { Menu } from "./pages/menu";
import { Profile } from "./pages/profile";
import { Principal } from "./pages/principal";
import { Card } from "./component/card";
import { Cards } from "./component/cards";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                        <Route element={<RecoveryPassword />} path="/api/recovery" />
                        <Route element={<ChangePassword />} path="/changepassword" />
                        <Route element={<Signup />} path="/api/signup" />
                        <Route element={<SobreNosotros />} path="/sobreNosotros" />
                        <Route element={<Menu />} path="/menu" />
                        <Route element={<Profile />} path="/profile" />
                        <Route element={<Principal />} path="/principal" />

                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
