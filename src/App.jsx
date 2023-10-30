// Importando o necessario para fazer as rotas entre as paginas
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Importando as minhas Paginas
import Home from "./Paginas/Home";
import Contato from "./Paginas/Contato";
import Sobre from "./Paginas/Sobre";
import Tema from "./Paginas/Tema" ;
import {theme, Content, PageContainer} from './Estilos/Estilos'
import { ThemeProvider } from 'styled-components';
import React,{useState} from 'react'
import Footer from './Componentes/Footer';

function App(){
  const [currentTheme, setCurrentTheme] = useState('light');
  const toggleTheme = () => {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
  };
  return (
    <>
     <ThemeProvider theme={theme[currentTheme]}>
<PageContainer>

    <Content >

    {/* Criando a minha rota entre as pagdinas */}
       <BrowserRouter>
            <Routes>
            
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/Contato" element={<Contato></Contato>}></Route>
              <Route path="/Sobre" element={<Sobre></Sobre>}></Route>
              <Route path="/Tema" element={<Tema></Tema>}></Route>
            </Routes>
        </BrowserRouter> 
        </Content>
        <Footer toggleTheme={toggleTheme} currentTheme={currentTheme} />
            
        </PageContainer>
        </ThemeProvider>
    </>
  )
}

export default App
