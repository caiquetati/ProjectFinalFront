import React from "react";
import Home from "./Componentes/Perfil/PerfilAcessos"
const AppRoutes = () => {
    return(
        <Router>
            <Route path="/Formulario" element={<Home/>}></Route>
        </Router>
    )
}
export default AppRoutes;
