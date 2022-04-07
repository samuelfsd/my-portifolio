import { Container, Input, TextArea } from './styles';

function Form() {
  return (
    <Container>
      <Input placeholder="Nome" required />
      <Input placeholder="Email" type="email" required />
      <TextArea placeholder="Mensagem" required />

      <button type="submit">Enviar</button>
    </Container>
  );
}

export default Form;
