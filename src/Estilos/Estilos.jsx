// Importando o Styled-components
import { styled } from "styled-components";

// Criando e exportando uma const para estilizar o meu Header atraves do Styled-components
export const Headercss = styled.header`
   background-color: green;
   width: auto;

`

// Criando e exportando uma const para estilizar o meu menu da nav atraves do Styled-components

export const Navegacao = styled.nav`
       display:flex;
       justify-content: space-around;
`

// Criando e exportando uma const para estilizar o meu Links para o menu atraves do Styled-components

export const Links = styled.li`
     display:inline-flex;

`

export const A = styled.a`
    display:flex;
    flex-direction: row;
    text-decoration: none;
    color: aliceblue;
    font-size: 15px;
    margin: 20px;
    padding: 15px;
`

export const Titulo = styled.h1`
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    display: flex;
    justify-content: center;
    margin-top: 18px;
`

export const BotaoCep = styled.button`
    background-color:#008080;
    border: none;
    color: white;
    padding: 15px 32px;
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 16px;
    margin: 4px 2px;
    border-radius: 50px;

    &:hover{
        background-color: #184950;
    }
`


export const InformacoesCep = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: column;
`

export const SectionCep = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 3px;
`

/*Container para o rodapé */
export const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
`
/*Garante que o contêiner ocupe a altura mínima da tela inteira */
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
`
/* Faz com que o conteúdo ocupe o espaço restante na tela */
export const Content = styled.div`
background-color: ${(props) => props.theme.background};
color: ${(props) => props.theme.text};  
    flex: 1; 
`
export const theme = {
    light: {
      background: '#fff',
      text: '#333',
    },
    dark: {
      background: '#333',
      text: '#fff',
    },
  }
  
  
export const ThemeToggleButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: ${(props) => props.theme.text};
`;




















