//Importando os componentes da pasta "Componentes" que vou utilizar para escrever esse arquivo

import Header from "../Componentes/Header";
import { Container,LeftDiv,RightDiv,Imagem, CenteredDiv, Titulo } from "../Estilos/Estilos";

//Escrevendo o codigo para está pagina 

function Tema(){
    return(
        <>
            <Header></Header>
            <Container><LeftDiv><Imagem/></LeftDiv><CenteredDiv>
                
                <p><Titulo>KEEPITGREEN</Titulo>A "KEEPITGREEN" é uma ONG dedicada a proteger as florestas em todo o mundo,
                combatendo incêndios florestais e promovendo a conservação ambiental.
                Nossa missão é mobilizar recursos, conscientizar a sociedade e trabalhar 
                em parceria com comunidades locais, órgãos governamentais e outras organizações
                para prevenir e combater as queimadas que ameaçam nossos ecossistemas preciosos.
                Através de programas de educação ambiental, treinamento de voluntários, 
                aquisição de equipamentos de combate a incêndios e pesquisa científica,
                a "KEEPITGREEN" está empenhada em preservar a biodiversidade,
                proteger o clima global e assegurar que as florestas continuem desempenhando
                seu papel fundamental na saúde do nosso planeta. Junte-se a nós na luta
                pela sobrevivência das florestas e no combate às queimadas desastrosas
                que ameaçam nossa terra.
             </p> </CenteredDiv><RightDiv><Imagem/></RightDiv></Container>
            
        </>
    )
}
//Exportando esse arquivo para ser utilizado no "App.jsx"

export default Tema