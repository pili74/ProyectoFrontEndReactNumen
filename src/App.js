import React from "react";
import { Header } from "./componentes/Header";
import { LoginButton } from "./Login";
import { LogoutButton } from "./Logout";
import { Perfil } from "./Perfil";
import { useAuth0 } from "@auth0/auth0-react";
import { ProductosLista } from "./componentes/Productos/index";
import 'boxicons'
import { BrowserRouter } from "react-router-dom";
import { } from "./componentes/Paginas";
import { Paginas } from "./componentes/Paginas";
import { DataProvider } from "./context/Dataprovider";
import { Carrito } from "./componentes/Carrito";
import Footer from "./componentes/Footer/Footer";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <DataProvider>
      <div className="App">
        <BrowserRouter>
        {isAuthenticated ? (
        <>
          <Perfil />
          <LogoutButton />
          </>
          ) : (
          <LoginButton />
          )}
        <Header />
          <Carrito />
          <Paginas />
          <Footer />
        </BrowserRouter>

      </div>
    </DataProvider>
  );
}

export default App;
