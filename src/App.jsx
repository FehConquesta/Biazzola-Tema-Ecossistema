import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import React, { useState } from 'react';

import { Container,Button,lightTheme,darkTheme, DivCenter } from './Estilos/Estilo';
import { ThemeProvider } from 'styled-components';
import Cep from './Pages/cep';
import Contato from './pages/contato';

function App() {
  const [theme,setTheme]= useState('light')
  const mudarTheme = () => {
      setTheme(mudar => mudar === 'light'? 'dark' : 'light')
  }
  return (
    <> 
    <ThemeProvider theme={theme ==='light' ? lightTheme : darkTheme}>
     <DivCenter><h1>A floresta em perigo</h1></DivCenter>

    <DivCenter><Button onClick={mudarTheme}>BOTÃO</Button></DivCenter>
    <hr/>
    <Container>
                  <BrowserRouter>
                    <Routes>
                          <Route path='/' element={<Home />} />
                          <Route path='/sobre' element={<Sobre />} />
                          <Route path='/contato' element={<Contato/>} />
                          <Route path='/cep' element={<Cep />} />
                    </Routes>
                  </BrowserRouter>
    </Container>
    </ThemeProvider>
    </>
  );
}

export default App;
