//Importando os componentes da pasta "Componentes" que vou utilizar para escrever esse arquivo
import Header from "../Componentes/Header";

import { Container,LeftDiv,RightDiv,Imagem, CenteredDiv, Titulo } from "../Estilos/Estilos";
//Escrevendo o codigo para está pagina 
function Home(){
    return(
        <>
            <Header></Header>
            <Container><LeftDiv><Imagem/></LeftDiv><CenteredDiv>
                
                <p><Titulo>O Grande problema</Titulo>As queimadas estão exercendo um impacto devastador sobre o ecossistema em todo o mundo. 
            Esses incêndios descontrolados, muitas vezes provocados por atividades humanas irresponsáveis,
            resultam na destruição de vastas extensões de florestas, savanas e outros biomas naturais.
            Os efeitos são profundos e abrangem não apenas a perda de biodiversidade,
            mas também a liberação de enormes quantidades de gases de efeito estufa na atmosfera,
            contribuindo para as mudanças climáticas globais. Além disso,
            as queimadas prejudicam a qualidade do ar, ameaçam populações de animais e plantas,
            e comprometem a capacidade dos ecossistemas de fornecer serviços essenciais,
            como a regulação do ciclo da água e a proteção contra a erosão do solo.
            Portanto, é crucial adotar medidas rigorosas para conter as queimadas
            e promover práticas sustentáveis, a fim de preservar a saúde e a estabilidade do nosso planeta.
             </p> </CenteredDiv><RightDiv><Imagem/></RightDiv></Container>
        </>
    )
}

//Exportando esse arquivo para ser utilizado no "App.jsx"
export default Home