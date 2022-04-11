import BannerProject from '../../../components/BannerProject';
import Header from '../../../components/Header';
import { ProjectContainer } from '../../../styles/ProjectStyle';

export default function Project() {
  return (
    <ProjectContainer>
      <Header />

      <BannerProject
        title="Projeto 01"
        type="WebSite"
        imgUrl="https://images.prismic.io/portfolioaula/be8779ed-c40f-42f2-bd73-e2065676a687_nuprint1.png?auto=compress,format"
      />

      <main>
        <p>description</p>
        <button type="button">
          <a href="#">Ver projeto on-line!</a>
        </button>
      </main>
    </ProjectContainer>
  );
}
