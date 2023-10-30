//Importando os componentes da pasta "Componentes" que vou utilizar para escrever esse arquivo
import Header from "../Componentes/Header";
import { Container, Imagem, LeftDiv, RightDiv, Titulo } from "../Estilos/Estilos";
import { Foto } from "../Estilos/Estilos";
import { CenteredDiv } from "../Estilos/Estilos";
//Escrevendo o codigo para está pagina 
function Sobre(){
    return(
        <>
            <Header></Header>
            
           <Container><LeftDiv><Imagem/></LeftDiv><CenteredDiv><Foto></Foto></CenteredDiv><RightDiv><Imagem/></RightDiv></Container> 
           <Titulo>O Grande Conquesta</Titulo>
           <p><b>Verdadeiro nome:</b> Luiz Felipe Biazzola Cavalcante</p>
            <p><b>Idade:</b> Desconhecido</p>
            <p><b>Estado Civil:</b> Casado</p>
            <p><b>Filhos:</b> Dante Delacross</p>
            <p><b>Habilidade Especial:</b> Reclamar</p>
            
        </>
    )
}

//Exportando esse arquivo para ser utilizado no "App.jsx"

export default Sobre