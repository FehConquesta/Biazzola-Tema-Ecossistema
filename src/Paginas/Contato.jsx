//Importando os componentes da pasta "Componentes" que vou utilizar para escrever esse arquivo
import Header from "../Componentes/Header";
import Formulario from "../Componentes/Formulario";
import { Container,LeftDiv,RightDiv,Imagem,Armas } from "../Estilos/Estilos";
//Escrevendo o codigo para está pagina 
function Contato(){
    return(
        <>

          <Header></Header>
          <Container><LeftDiv><Imagem/></LeftDiv><Armas/><RightDiv><Imagem/></RightDiv></Container> 
          <Formulario></Formulario>
        </>
    )
}

//Exportando esse arquivo para ser utilizado no "App.jsx"
export default Contato