import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import ProjectItem from './ProjectItem';
import { Container } from './styles';

function Projects() {
  return (
    <Container>
      <SectionTitle title="Últimos Projetos" />

      <section>
        <ProjectItem
          img="https://images.prismic.io/portfolioaula/be8779ed-c40f-42f2-bd73-e2065676a687_nuprint1.png?auto=compress,format"
          title="Projeto 01"
          type="Website"
          slug="teste"
        />
        <ProjectItem
          img="https://images.prismic.io/portfolioaula/be8779ed-c40f-42f2-bd73-e2065676a687_nuprint1.png?auto=compress,format"
          title="Projeto 01"
          type="Website"
          slug="teste"
        />
        <ProjectItem
          img="https://images.prismic.io/portfolioaula/be8779ed-c40f-42f2-bd73-e2065676a687_nuprint1.png?auto=compress,format"
          title="Projeto 01"
          type="Website"
          slug="teste"
        />
      </section>
      <button type="button">
        <Link href="/projetos">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}

export default Projects;
