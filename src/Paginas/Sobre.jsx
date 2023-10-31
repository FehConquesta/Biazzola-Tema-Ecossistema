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
           <Titulo>Luiz Felipe Biazzola Cavalcante</Titulo>
           <CenteredDiv><p>31 anos, casado, pai do Dante Delacross.
            Sou um estudante do curso de ADS e venho aqui mostrar meu conhecimento em react + vite
            através deste trabalho, espero que a ideia seja bem vista e aceita.

           </p></CenteredDiv>
        </>
    )
}

//Exportando esse arquivo para ser utilizado no "App.jsx"

export default Sobre