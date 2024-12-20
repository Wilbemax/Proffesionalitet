import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
    return (
        <>
            <Header />
            {/* {children} Здесь будут отображаться все дочерние компоненты */}
            <Outlet />
            <Footer />
        </>
    );
};
