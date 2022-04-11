import Header from '../../../components/Header';
import { ProjectContainer } from '../../../styles/ProjectStyle';

export default function Project() {
  return (
    <ProjectContainer>
      <Header />

      <BannerProject />

      <main>
        <p>description</p>
        <button type="button">
          <a href="#">Ver projeto on-line!</a>
        </button>
      </main>
    </ProjectContainer>
  );
}
