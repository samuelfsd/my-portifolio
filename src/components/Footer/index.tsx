import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillLinkedin
} from 'react-icons/ai';

import { Container } from './styles';

function Footer() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }
  return (
    <Container>
      <div className="container">
        <button onClick={handleScrollTop} type="button">
          Voltar ao topo
        </button>

        <section>
          <AiOutlineTwitter
            onClick={() => handleRedirect('https://twitter.com/samuelAlv7')}
          />
          <AiOutlineGithub
            onClick={() => handleRedirect('https://github.com/samuelfsd')}
          />
          <AiFillLinkedin
            onClick={() =>
              handleRedirect(
                'https://www.linkedin.com/in/samuel-alves-medeiros-235461217/'
              )
            }
          />
        </section>
      </div>
    </Container>
  );
}

export default Footer;
