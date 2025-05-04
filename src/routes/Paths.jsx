import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import { useContext } from "react";
import { Context } from "../contexts/AuthContext";

const Paths = () => {
    
    const { logado } = useContext(Context);

    return ( 
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                {
                    logado && (
                        <>
                            <Route path="/home" element={<Home />}></Route>
                        </>
                    )
                }
            </Routes>
        </BrowserRouter>
        </>
     );
}

export default Paths;
