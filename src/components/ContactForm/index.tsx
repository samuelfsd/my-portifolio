import SectionTitle from '../SectionTitle';
import Form from './Form';
import { Container } from './styles';

function ContactForm() {
  return (
    <Container>
      <SectionTitle
        title="Entre em contato"
        description={
          <>
            Preencha o formulário abaixo que
            <br />
            irei retornar em breve!
          </>
        }
      />

      <Form />
    </Container>
  );
}

export default ContactForm;
