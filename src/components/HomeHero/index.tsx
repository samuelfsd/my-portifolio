/* eslint-disable react/jsx-no-comment-textnodes */
import { CodeItem, Container, InfosContainer, TextContainer } from './styles';
import picture from '../../assets/samuel.png';

function HomeHero() {
  return (
    <Container>
      <img src={picture} alt="Minha foto" />

      <div>
        <TextContainer>
          <h1>Olá pessoas!</h1>
          <h3>Me chamo Samuel!</h3>
        </TextContainer>
        <InfosContainer>
          <CodeItem>
            <span className="comment">// Minha Apresentação </span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Nome: <span className="blue">Samuel</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Alves Medeiros</span>
            </div>
            <div>
              Idade: <span className="blue">20 anos</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem>
            <span className="purple">Especialidades</span> {'\u007B'}
            <div>
              Funções: <span className="blue"> Dev Web</span>
            </div>
            <div>
              Cursando: <span className="blue">Ciências da Computação</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
