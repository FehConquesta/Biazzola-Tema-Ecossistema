//Importando os componentes da pasta "Componentes" que vou utilizar para escrever esse arquivo
import Header from "../Componentes/Header";
import { Container,LeftDiv,RightDiv,Imagem } from "../Estilos/Estilos";

//Escrevendo o codigo para está pagina 
function Home(){
    return(
        <>
            <Header></Header>
            <Container><LeftDiv><Imagem/></LeftDiv><RightDiv><Imagem/></RightDiv></Container> 
        </>
    )
}

//Exportando esse arquivo para ser utilizado no "App.jsx"
export default Home