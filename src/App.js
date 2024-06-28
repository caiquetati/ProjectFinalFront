import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './Componentes/Inicio';
import Perfil from './Componentes/PerfilAcessos';
import Cadastro from './Componentes/PerfilCadastro';
import React, {useState, useEffect} from 'react';
import axios from 'axios';


function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/PerfilAcessos' element={<Perfil/>}/>
      <Route path='/cadastro-perfil' element={<Cadastro/>}/>
    </Routes>
    </BrowserRouter>
  );

  
}

export default App;
