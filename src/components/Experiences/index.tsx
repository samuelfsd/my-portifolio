import SectionTitle from '../SectionTitle';
import ExperienceItem from './ExperienceItem';
import { Container } from './styles';

function Experiences() {
  return (
    <Container>
      <SectionTitle
        title="Minha trajetoria"
        description="de estudo e experiência"
      />

      <section>
        <ExperienceItem
          yearOfExperience="2019"
          office="Estudando e me desenvolvendo"
          description="Ano que entrei para a faculdade e pude conhecer algumas linguagens de programação."
        />
        <ExperienceItem
          yearOfExperience="2020"
          office="Estudando e me desenvolvendo"
          description="Ano de pandemia atrasei um pouco meus estudos porém não parei, contrui projetos acadêmicos e artigos nesse ano!"
        />
        <ExperienceItem
          yearOfExperience="2021"
          office="Dev na Knex"
          description="Ano que juntamente com alguns colegas fundou a empresa Jr do curso de ciência da computação na UEPB, e demos inicio a formentação do mercado dentro da faculdade!"
        />
        <ExperienceItem
          yearOfExperience="2022"
          office="Procurando um próximo nível"
          description="Me aprofundando nos conteudos da WEB principalmente em front-end, acredito que estou pronto para o próximo nível e conseguir uma vaga no mercado de trabalho!"
        />
      </section>
    </Container>
  );
}

export default Experiences;
