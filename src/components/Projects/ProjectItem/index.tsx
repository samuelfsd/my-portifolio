import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { Container } from './styles';

interface ProjectItemProps {
  title: string;
  type: string;
  slug: string;
  img: string;
}
function ProjectItem({ title, type, slug, img }: ProjectItemProps) {
  return (
    <Container imgUrl={img}>
      <section>
        <div className="overlay" />
        <div className="text">
          <h1>#{title}</h1>
          <h2>-{type}</h2>
        </div>
      </section>
      <button type="button">
        <Link href={slug}>
          <a>
            Ver mais <AiOutlineRightCircle />
          </a>
        </Link>
      </button>
    </Container>
  );
}

export default ProjectItem;
