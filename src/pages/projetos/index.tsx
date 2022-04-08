import CardProject from '../../components/CardProject';
import Header from '../../components/Header';
import { ProjetosContainer } from '../../styles/ProjetosStyles';

export default function Projetos() {
  return (
    <ProjetosContainer>
      <Header />

      <main className="container">
        <CardProject
          title="Projeto 01"
          type="Web Site"
          slug="teste"
          imgUrl="https://images.prismic.io/portfolioaula/be8779ed-c40f-42f2-bd73-e2065676a687_nuprint1.png?auto=compress,format"
        />
        <CardProject
          title="Projeto 01"
          type="Web Site"
          slug="teste"
          imgUrl="https://images.prismic.io/portfolioaula/be8779ed-c40f-42f2-bd73-e2065676a687_nuprint1.png?auto=compress,format"
        />
        <CardProject
          title="Projeto 01"
          type="Web Site"
          slug="teste"
          imgUrl="https://images.prismic.io/portfolioaula/be8779ed-c40f-42f2-bd73-e2065676a687_nuprint1.png?auto=compress,format"
        />
        <CardProject
          title="Projeto 01"
          type="Web Site"
          slug="teste"
          imgUrl="https://images.prismic.io/portfolioaula/be8779ed-c40f-42f2-bd73-e2065676a687_nuprint1.png?auto=compress,format"
        />
      </main>
    </ProjetosContainer>
  );
}
